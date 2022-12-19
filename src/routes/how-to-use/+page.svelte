<script lang="ts">
	import { isDarkMode } from '../../store/store';
</script>

<svelte:head>
	<title>How to send message without saving number on whatsapp - whatsnum</title>
</svelte:head>

<main class="grid place-items-center p-4">
	<div class="lg:w-[50rem] md:w-5/6 w-full">
		<div>
			<a
				href="/"
				class="p-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400 w-fit rounded-lg flex item-center gap-2 font-semibold"
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
					><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
						points="9 22 9 12 15 12 15 22"
					/></svg
				> Home
			</a>
		</div>

		<div class="mt-8 dark:text-white">
			<h1 class="md:text-4xl text-center font-semibold text-3xl">
				How to send message without saving number on whatsapp.
			</h1>

			<ul class="my-6 flex flex-col gap-6 text-lg">
				<li>
					WhatsApp Messenger allows people to send fast messages, videos, pictures, and brief audio
					messages to either one person or within a group conversation. Messages will only be sent
					to other cellphone users who also use WhatsApp. Once you install this app, it uses your
					contacts to see if anyone else you remember is already using WhatsApp and connects you
					automatically.
				</li>

				<li>
					However, there are situations when you need to send a message to someone who is not in
					your contact list. It might be a single message that is sent.
				</li>

				<li class="font-semibold text-lg">Let's get started.</li>

				<li class="font-medium list-disc list-inside">
					Click on the home button at the top of the <span class="font-bold">
						<button type="button">page</button>
					</span>
				</li>

				<li>
					{#if $isDarkMode}
						<img src="/images/indicate-home-dark.jpg" alt="" />
					{:else}
						<img src="/images/indicate-home.jpg" alt="" />
					{/if}
				</li>

				<li class="font-medium list-disc list-inside">
					Simply select the country <span class="font-bold"> dial code</span> and
					<span class="font-bold"> enter number</span>
					and click on
					<span
						class="font-bold relative after:w-full after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-green-500/50"
						>"Send a message"</span
					>
				</li>

				<li>
					{#if $isDarkMode}
						<img src="/images/cover-dark.jpg" alt="" />
					{:else}
						<img src="/images/cover.jpg" alt="" />
					{/if}
				</li>

				<li>
					If you are using this on a mobile phone, it will launch WhatsApp automatically; however,
					if you are using a web browser on a desktop, it will ask you how to open WhatsApp.
				</li>
			</ul>
		</div>
	</div>
</main>
