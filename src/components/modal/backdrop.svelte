<script lang="ts">
	import { modal } from '../../store/store';
	import { fade } from 'svelte/transition';

	const closeModal = () => {
		modal.update((v) => false);
	};

	const handleKeyUp = (event: any) => {
		if (event.code === 'Escape') closeModal();
	};
</script>

<svelte:window on:keyup={handleKeyUp} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={closeModal}
	transition:fade
	class="fixed top-0 left-0 bg-black/20 w-full h-full flex items-center justify-center"
>
	<slot />
</div>
