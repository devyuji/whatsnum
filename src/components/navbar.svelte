<script lang="ts">
	function toggleTheme() {
		const theme = localStorage.theme;

		if (theme !== 'dark') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<header class="bg-green-50 dark:bg-black p-4 grid place-items-center">
	<nav class="flex justify-end lg:w-[40rem] md:w-5/6 w-full">
		<ul class="flex gap-4 dark:text-white">
			<li>
				<button type="button">Install app</button>
			</li>
			<li>
				<a href="/how-to-use">how-to-use</a>
			</li>
			<li>
				<button type="button" aria-label="theme toggle" on:click={toggleTheme}>theme</button>
			</li>
		</ul>
	</nav>
</header>
