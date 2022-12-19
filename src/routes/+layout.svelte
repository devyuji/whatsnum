<script>
	import '../app.css';

	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import { browser } from '$app/environment';
	import { dialCode, isDarkMode } from '../store/store';
	import { toggleDarkMode } from '$lib/toggleTheme';

	let loading = true;

	if (browser) {
		if (localStorage.theme === 'dark') {
			toggleDarkMode();
		}

		const localDialCode = localStorage.dialcode;

		if (localDialCode) {
			dialCode.update(() => localDialCode);
		}

		loading = false;
	}
</script>

<svelte:head>
	<title>Send whatsapp message without saving number - whatsnum</title>
</svelte:head>

{#if !loading}
	<Navbar />
	<slot />
	<Footer />
{/if}
