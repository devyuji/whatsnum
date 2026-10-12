<script>
	import '../app.css';

	import Navbar from '#lib/components/navbar.svelte';
	import Footer from '#lib/components/footer.svelte';
	import { s } from '#lib/state/index.svelte.ts';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const localDialCode = localStorage.dialcode;

		if (localDialCode) {
			s.update({ dialCode: localDialCode });
		}
	});
</script>

<svelte:head>
	<title>Send whatsapp message without saving number - whatsnum</title>
</svelte:head>

<Navbar />
{@render children()}
<Footer />
