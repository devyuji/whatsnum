<script lang="ts">
	import { s } from '#lib/state/index.svelte.ts';
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	$effect(() => {
		document.body.style.overflow = 'hidden';

		return () => (document.body.style.overflow = 'auto');
	});

	const closeModal = () => {
		s.update({ modal: false });
	};

	const handleKeyUp = (event: any) => {
		if (event.code === 'Escape') closeModal();
	};
</script>

<svelte:window on:keyup={handleKeyUp} />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onclick={closeModal}
	transition:fade
	class="fixed top-0 left-0 bg-black/50 w-full h-full flex items-center justify-center"
>
	{@render children()}
</div>
