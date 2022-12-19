<script lang="ts">
	import { modal, dialCode } from '../store/store';
	import NumberCode from '../components/modal/numberCode.svelte';

	let value = '';
	let errorMessage = '';

	const openModal = () => {
		modal.update(() => true);
	};

	const submit = () => {
		if (value.length === 0) return;

		if ($dialCode.length === 0) {
			errorMessage = 'select country dial code';
			return;
		}

		const url = `https://wa.me/+91${value}`;
		window.open(url, '_blank');
		errorMessage = '';
	};
</script>

<svelte:head>
	<title>Send WhatsApp message without saving number - WhatsNum</title>
</svelte:head>

<main class="flex items-center flex-col gap-4 p-4 mt-20 mb-8">
	<div class="lg:w-[50rem] md:w-5/6 w-full">
		<h1 class="text-3xl font-semibold mb-6 dark:text-white">
			Send message without saving number on WhatsApp
		</h1>
		<p class="mb-6 dark:text-white">
			You may send a message without storing it by simply inputting the number below.
		</p>

		<form on:submit|preventDefault={submit} class="w-full">
			<div class="flex gap-4 items-center">
				<button
					type="button"
					aria-label="dialog dial code list"
					class="bg-green-100 border-none p-4 rounded-lg flex items-center gap-2"
					on:click={openModal}
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
					{$dialCode}
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

{#if $modal}
	<NumberCode />
{/if}
