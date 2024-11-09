<script>
	import { onMount } from "svelte";

	let { whiteHeader, headerInvisible } = $props();

	let active = $state(false)
	let mode = $state(false)
	let isFullScreenSize = $state(false);

	function toggleTheme() {
		mode = !mode
		document.body.classList.toggle('dark')
	}

	function toggleFullScreen() {
		if (isFullScreenSize) {
			isFullScreenSize = false
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) { // Firefox
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) { // IE/Edge
				document.msExitFullscreen();
			} else {
				isFullScreenSize = true
			}
		} else {
			isFullScreenSize = true
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) { // Firefox
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari y Opera
				document.documentElement.webkitRequestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
				document.documentElement.msRequestFullscreen();
			} else {
				isFullScreenSize = false
			}
		}
	}

	onMount(() => {
		isFullScreenSize = document.fullscreenElement != null;
	})
</script>

<header class="fc between g32 p32" class:whiteHeader class:headerInvisible>
	<a href="/" id="title" class="title" class:active>Join Studio</a>
	<nav id="nav" class="do fc g32">
		<a href="/">Inicio</a>
		<a href="/talento">Talento</a>
	</nav>
	<div class="do fc g32">
		<button type="button" aria-label="Cambiar tema" title="Cambiar tema" onclick={toggleTheme}>
			{#if mode}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
			{/if}
		</button>
		<button type="button" aria-label="Maximizar" title="Maximizar" onclick={toggleFullScreen}>
			{#if isFullScreenSize}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{/if}
		</button>
		<a href="https://wa.me/51910880595?text=Hola!" target="_blank" class="btn">Hablemos</a>
	</div>
	<article class="menu mo" class:active>
		<nav class="fcol">
			<a href="/">Inicio</a>
			<a href="/talento">Talento</a>
			<button type="button" class="fc between" onclick={toggleTheme}>
				<span>Tema</span>
				{#if mode}
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
				{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
				{/if}
			</button>
			<button type="button" class="fc between" onclick={toggleFullScreen}>
				<span>Pantalla</span>
				{#if isFullScreenSize}
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
				{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
				{/if}
			</button>
		</nav>
		<a href="https://wa.me/51910880595?text=Hola!" target="_blank" class="btn">Hablemos</a>
	</article>
	<button id="menu" class="menubtn mo" type="button" class:active onclick={() => {
		active = !active
	}}>
		{active ? 'cerrar' : 'menú'}
	</button>
</header>
<style>
	header {
		z-index: 1;
		position: fixed;
		inset: 0 0 auto 0;
		transition: 0.2s ease-in-out;
	}
	.title, nav a, .menubtn {
		color: inherit;
		text-decoration: none;
		font-weight: 500;
	}
	nav a:hover {
		color: var(--text-low);
	}
	.mo {
		display: none;
	}
	.headerInvisible {
		display: none;
	}
	#menu, #title {
		position: relative;
		z-index: 1;
	}
	.whiteHeader #title, .whiteHeader #menu {
		color: #EFEFEF;
	}
	.whiteHeader #title.active, .whiteHeader #menu.active {
		color: var(--text);
	}
	@media (max-width: 1000px) {
		.do {
			display: none;
		}
		.mo {
			display: initial;
		}
		.menu {
			transform: translateY(-100%);
			position: fixed;
			inset: 0;
			background: var(--yel);
			padding: 24px;
			gap: 24px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			transition: .5s ease-in-out;
		}
		.menu.active {
			transform: translateY(0);
		}
		.menu nav {
			gap: 8px;
		}
		.menu nav a:hover {
			color: inherit;
		}
		.menu nav>* {
			color: inherit;
			font-weight: 500;
			font-size: 36px;
			text-align: start;
			transition: none;
		}
		.menu .btn {
			background: transparent;
			box-shadow: 0px 6px 0px -2px #d2a220, 0px 6px 0px 0px var(--text);
		}
		:global(.dark) .menu {
			background: #8f45b3;
		}
		:global(.dark) .menu .btn {
			box-shadow: 0px 6px 0px -2px #682f85, 0px 6px 0px 0px var(--text);
		}
	}
</style>