import { s } from './state/index.svelte';

export function toggleDarkMode() {
	s.update({ isDarkMode: true });

	document.documentElement.classList.add('dark');
	const metaTheme = document.querySelector('meta[name="theme-color"]');
	if (metaTheme) {
		metaTheme.setAttribute('content', '#111827');
	}
}

export function toggleLightMode() {
	s.update({ isDarkMode: false });
	document.documentElement.classList.remove('dark');
	const metaTheme = document.querySelector('meta[name="theme-color"]');
	if (metaTheme) {
		metaTheme.setAttribute('content', '#f0fdf4');
	}
}
