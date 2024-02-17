<script>
	import '../app.css';

	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import { dialCode } from '../store/store';
	import { onMount } from 'svelte';

	onMount(() => {
		const localDialCode = localStorage.dialcode;

		if (localDialCode) {
			dialCode.update(() => localDialCode);
		}
	});
</script>

<svelte:head>
	<title>Send whatsapp message without saving number - whatsnum</title>
</svelte:head>

<Navbar />
<slot />
<Footer />
