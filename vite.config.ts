import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const config: UserConfig = {
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://github.com/sveltejs/svelte-preprocess
			// for more information about preprocessors
			preprocess: vitePreprocess(),
			adapter: adapter()
		})
	]
};

export default config;
