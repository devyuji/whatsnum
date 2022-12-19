import { isDarkMode } from '../store/store';

export function toggleDarkMode() {
	isDarkMode.update(() => true);
	document.documentElement.classList.add('dark');
	const metaTheme = document.querySelector('meta[name="theme-color"]');
	if (metaTheme) {
		metaTheme.setAttribute('content', '#111827');
	}
}

export function toggleLightMode() {
	isDarkMode.update(() => false);
	document.documentElement.classList.remove('dark');
	const metaTheme = document.querySelector('meta[name="theme-color"]');
	if (metaTheme) {
		metaTheme.setAttribute('content', '#f0fdf4');
	}
}
