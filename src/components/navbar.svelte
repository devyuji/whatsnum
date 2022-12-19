<script lang="ts">
	import { toggleDarkMode, toggleLightMode } from '$lib/toggleTheme';
	import { onMount } from 'svelte';
	import { isDarkMode } from '../store/store';
	let deferredPrompt: any;
	let showInstallOption = false;

	onMount(() => {
		const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
		if (!isStandalone) {
			showInstallOption = true;
		}
	});

	const share = async () => {
		await (Navigator as any).share({
			title: 'WhatsNum',
			text: 'Send message without saving number on WhatsApp',
			url: 'https://whatsnum.netlify.app'
		});
	};

	const toggleTheme = () => {
		const theme = localStorage.theme;

		if (theme !== 'dark') {
			localStorage.theme = 'dark';
			toggleDarkMode();
		} else {
			localStorage.theme = 'light';
			toggleLightMode();
		}
	};

	const installApp = () => {
		if (deferredPrompt) {
			deferredPrompt.prompt();
		}
	};

	const beforeInstallPrompt = (e: any) => {
		e.preventDefault();

		deferredPrompt = e;
	};
</script>

<svelte:window on:beforeinstallprompt={beforeInstallPrompt} />

<header class="bg-green-50 dark:bg-gray-900 p-4 grid place-items-center">
	<nav class="flex justify-end lg:w-[50rem] md:w-5/6 w-full">
		<ul class="flex items-center gap-4 dark:text-white">
			{#if showInstallOption}
				<li>
					<button
						class="hover:bg-green-100 p-1 rounded-lg dark:hover:text-black text-lg flex gap-2 items-center"
						type="button"
						aria-label="install app"
						on:click={installApp}
					>
						<span>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
									points="7 10 12 15 17 10"
								/><line x1="12" y1="15" x2="12" y2="3" /></svg
							>
						</span>
						<span class="hidden sm:block">Install app</span>
					</button>
				</li>
			{/if}

			<li>
				<a
					class="hover:bg-green-100 p-1 rounded-lg dark:hover:text-black text-lg flex items-center gap-2"
					href="/how-to-use"
				>
					<span>
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
							><circle cx="12" cy="12" r="10" /><path
								d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
							/><line x1="12" y1="17" x2="12.01" y2="17" /></svg
						>
					</span>
					<span class="">how-to-use</span>
				</a>
			</li>

			<li>
				<button
					on:click={share}
					aria-label="share"
					class="hover:bg-green-100 p-1 rounded-lg dark:hover:text-black"
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
						class="css-i6dzq1"
						><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
							cx="18"
							cy="19"
							r="3"
						/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line
							x1="15.41"
							y1="6.51"
							x2="8.59"
							y2="10.49"
						/></svg
					>
				</button>
			</li>
			<li>
				<button
					class="hover:bg-green-100 p-1 rounded-lg dark:hover:text-black"
					type="button"
					aria-label="theme toggle"
					on:click={toggleTheme}
				>
					{#if $isDarkMode}
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
								x1="12"
								y1="21"
								x2="12"
								y2="23"
							/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
								x1="18.36"
								y1="18.36"
								x2="19.78"
								y2="19.78"
							/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
								x1="4.22"
								y1="19.78"
								x2="5.64"
								y2="18.36"
							/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
						>
					{:else}
						<svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
						>
					{/if}
				</button>
			</li>
		</ul>
	</nav>
</header>
