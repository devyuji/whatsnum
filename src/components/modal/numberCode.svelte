<script lang="ts">
	import Backdrop from './backdrop.svelte';
	import { scale } from 'svelte/transition';
	import { modal } from '../../store/store';
	import countryCode from '$lib/countryCode.json';
	import NumberList from '../numberList.svelte';
	import type { filterDataProps } from '$lib/types';

	let filterData: filterDataProps[] = [];
	let value = '';

	const closeModal = () => {
		modal.update(() => false);
	};

	const filter = () => {
		filterData = countryCode.filter((v) => v.name.toLowerCase().match(value.toLowerCase()));
	};

	function focus(e: any) {
		e.focus();
	}
</script>

<Backdrop>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		transition:scale
		on:click|stopPropagation
		class="bg-green-50 dark:bg-gray-900 h-5/6 lg:w-96 w-11/12 rounded-lg overflow-y-auto"
	>
		<div class="flex justify-end p-4">
			<button
				type="button"
				aria-label="close"
				on:click={closeModal}
				class="bg-green-100 dark:bg-green-900 p-2 rounded-lg text-green-800 dark:text-green-400 font-bold text-xs"
			>
				ESC
			</button>
		</div>

		<form
			on:submit|preventDefault
			class="flex items-center p-4 gap-4 border-b-2 dark:border-gray-800"
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
				class="text-green-900 dark:text-green-300 w-6 h-6"
				><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
			>
			<input
				type="text"
				bind:value
				on:keyup={filter}
				use:focus
				placeholder="Search by country"
				autocomplete="off"
				class="w-full outline-none bg-transparent placeholder:text-black dark:placeholder:text-white dark:text-white"
			/>
		</form>

		<div>
			{#if filterData.length != 0}
				{#each filterData as data}
					<NumberList {data} />
				{/each}
			{:else}
				{#each countryCode as data}
					<NumberList {data} />
				{/each}
			{/if}
		</div>
	</div>
</Backdrop>
