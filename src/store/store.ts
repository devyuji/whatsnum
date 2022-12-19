import { writable } from 'svelte/store';

export const modal = writable(false);
export const dialCode = writable('');
export const isDarkMode = writable(false);
