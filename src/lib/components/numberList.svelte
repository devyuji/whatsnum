<script lang="ts">
	import type { filterDataProps } from '#lib/types.js';
	import { s } from '#lib/state/index.svelte.ts';

	interface Props {
		data: filterDataProps;
	}

	let { data }: Props = $props();

	const updateCode = () => {
		s.update({ dialCode: data.dial_code });

		localStorage.dialcode = data.dial_code;

		s.update({ modal: false });
	};
</script>

<button
	class="hover:bg-green-100 dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 focus:bg-green-100 dark:border-gray-800 outline-none w-full flex gap-2 p-4 border-b-2"
	onclick={updateCode}
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
