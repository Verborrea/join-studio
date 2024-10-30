<script>
	import { onMount } from "svelte";

	let mode = $state(false)

	function toggleTheme() {
		mode = !mode
		document.body.classList.toggle('dark')
	}

	
</script>

<header class="fc between g32 p32">
	<a href="/" id="title" class="title">Join Studio</a>
	<nav id="nav" class="do fc g32">
		<a href="/">Talento</a>
		<a href="/">Trabajo</a>
		<a href="/">Nosotros</a>
	</nav>
	<div class="do fc g32">
		<button type="button" aria-label="Cambiar tema" title="Cambiar tema" onclick={toggleTheme}>
			{#if mode}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
			{/if}
		</button>
		<button type="button" aria-label="Maximizar" title="Maximizar">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
		</button>
		<a href="https://wa.me/51940185837?text=Holis" target="_blank" class="btn">Hablemos</a>
	</div>
	<div class="mo">
		<button class="menubtn" type="button">menú</button>
	</div>
</header>
<style>
	header {
		z-index: 1;
		position: fixed;
		inset: 0 0 auto 0;
		transition: 0.2s ease-in-out;
	}
	.title, nav a, .menubtn {
		font-weight: 400;
		color: inherit;
		text-decoration: none;
		line-height: calc(7 / 6);
	}
	nav a:hover {
		color: var(--text-low);
	}
	.mo {
		display: none;
	}
	@media (max-width: 700px) {
		.do {
			display: none;
		}
		.mo {
			display: initial;
		}
	}
</style>