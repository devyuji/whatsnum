<script lang="ts">
	import { s } from '#lib/state/index.svelte.ts';
	import NumberCode from '#lib/components/modal/numberCode.svelte';

	let value = $state('');
	let errorMessage = $state('');
	let type = $state('personal');

	function openModal() {
		s.update({ modal: true });
	}

	function submit(e: SubmitEvent) {
		e.preventDefault();

		if (value.length === 0) return;

		if (s.values.dialCode.length === 0) {
			errorMessage = 'Select country dial code';
			return;
		}

		const phoneNumber = `${s.values.dialCode}${value}`;

		const businessScheme = `whatsapp-smb://send?phone=${phoneNumber}`;
		const personalScheme = `whatsapp://send?phone=${phoneNumber}`;
		const defaultScheme = `https://wa.me/${phoneNumber}`;

		let url = '';

		switch (type) {
			case 'personal':
				url = personalScheme;
				break;
			case 'business':
				url = businessScheme;
				break;

			default:
				url = defaultScheme;
		}

		const start = Date.now();
		let hasRedirected = false;

		const visibilityHandler = () => {
			if (document.hidden || document.visibilityState === 'hidden') {
				hasRedirected = true;
			}
		};

		document.addEventListener('visibilitychange', visibilityHandler);

		window.location.href = url;

		setTimeout(() => {
			document.removeEventListener('visibilitychange', visibilityHandler);

			// If the user is still actively on the page, the app failed to open
			if (!hasRedirected && Date.now() - start < 3000) {
				// Fallback to the standard web link
				window.location.href = defaultScheme;
			}
		}, 2000);

		errorMessage = '';
	}

	function toggleType(value: string) {
		type = value;
	}
</script>

<svelte:head>
	<title>Send WhatsApp message without saving number - WhatsNum</title>
</svelte:head>

<main class="flex items-center flex-col gap-4 p-4 mt-20 mb-8">
	<div class="lg:w-200 md:w-5/6 w-full">
		<h1 class="text-3xl font-semibold mb-6 dark:text-white">
			Send message without saving number on WhatsApp
		</h1>
		<p class="mb-6 dark:text-white">
			You may send a message without storing it by simply inputting the number below.
		</p>

		<form onsubmit={submit} class="w-full space-y-4">
			<div>
				<button
					type="button"
					onclick={() => toggleType('personal')}
					class="rounded-lg px-4 py-2"
					style={`background-color: ${type === 'personal' ? '#b9f8cf' : 'transparent'}`}
					>Personal</button
				>
				<button
					type="button"
					onclick={() => toggleType('business')}
					class="rounded-lg px-4 py-2 bg-green-200"
					style={`background-color: ${type === 'business' ? '#b9f8cf' : 'transparent'}`}
					>Business</button
				>
			</div>
			<div class="flex gap-4 items-center">
				<button
					type="button"
					aria-label="dialog dial code list"
					class="bg-green-100 border-none p-4 rounded-lg flex items-center gap-2"
					onclick={openModal}
				>
					<svg
						class="h-full w-full"
						viewBox="0 0 24 24"
						width="24"
						height="24"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg
					>
					{s.values.dialCode}
				</button>
				<input
					type="number"
					bind:value
					placeholder="123456789"
					required
					class="bg-green-100 border-none w-full h-full p-4 rounded-lg placeholder:text-gray-600"
				/>
			</div>

			<div class="flex justify-end">
				<p class="text-red-700">{errorMessage}</p>
			</div>

			<div class="flex justify-end w-full">
				<button
					type="submit"
					aria-label="send message"
					class="p-3 mt-4 h-full flex flex-col items-center justify-center bg-green-700 rounded-lg text-green-50"
				>
					<svg
						viewBox="0 0 24 24"
						width="24"
						height="24"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="22" y1="2" x2="11" y2="13" /><polygon
							points="22 2 15 22 11 13 2 9 22 2"
						/></svg
					>
					Send message
				</button>
			</div>
		</form>
	</div>
</main>

{#if s.values.modal}
	<NumberCode />
{/if}
