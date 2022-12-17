<script lang="ts">
	import type { filterDataProps } from '$lib/types';
	import { dialCode, modal } from '../store/store';

	export let data: filterDataProps;

	const updateCode = () => {
		dialCode.update(() => data.dial_code);
		modal.update(() => false);
	};
</script>

<button
	class="hover:bg-green-100 focus:bg-green-100 outline-none w-full flex gap-2 p-4 border-b-2"
	on:click={updateCode}
>
	<span>{data.dial_code}</span>
	<span class="text-left">{data.name}</span>
	<span class="ml-auto"
		><svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg
		></span
	>
</button>
