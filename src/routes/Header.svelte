<script>
	let isFullScreenSize = false
	let hoverInterval
	let active = false
	let text = 'menú'
	let darkTheme = false

	function toggleMode() {
		darkTheme = !darkTheme
		document.body.classList.toggle('dark')
	}

	function toggleClick() {
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

	function startHoverEffect() {
		if (!hoverInterval) {
				hoverInterval = setInterval(rotateColorPattern, 80)
		}
	}

	function stopHoverEffect() {
		clearInterval(hoverInterval)
		hoverInterval = null
	}

	function rotateColorPattern() {
		const elements = document.querySelectorAll(".title span[class^='c']")
		
		elements.forEach((el, _) => {
			const currentIndex = parseInt(el.className.replace('c', ''), 10)
			el.className = `c${(currentIndex - 1 + 6 ) % 6}`
		})
	}

	function toggleMenu() {
		active = !active
		text = active ? 'close' : 'menú'
	}
</script>

<header class="fc p32 between">
	<a class="title" href="/" onmouseenter={startHoverEffect} onmouseleave={stopHoverEffect}>
		Join
		<span class="rainbow">
			<span class="c0">S</span>
			<span class="c1">t</span>
			<span class="c2">u</span>
			<span class="c3">d</span>
			<span class="c4">i</span>
			<span class="c5">o</span>
		</span>
	</a>
	<nav class="fc g32">
		<a href="/">Talento</a>
		<a href="/">Trabajo</a>
		<a href="/">Nosotros</a>
	</nav>
	<div class="btns fc g32">
		<button type="button" title="Modo Oscuro" aria-label="Cambiar Modo" onclick={toggleMode}>
			{#if darkTheme}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
			{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
			{/if}
		</button>
		<button type="button" title="Maximizar" aria-label="Maximizar" onclick={toggleClick}>
			{#if isFullScreenSize}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minimize-2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{/if}
		</button>
		<button type="button" class="btn">Hablemos</button>
	</div>

	<div class="menu fcol g32 between" class:active>
		<nav class="fcol">
			<a href="/">Inicio</a>
			<a href="/">Talento</a>
			<a href="/">Trabajo</a>
			<a href="/">Nosotros</a>
		</nav>
		<button type="button" class="btn">Hablemos</button>
	</div>

	<button type="button" class="bbtn" onclick={toggleMenu}>{text}</button>
</header>

<style>
	header {
		animation: help	1.5s;
	}
	a, .bbtn {
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		color: inherit;
		text-decoration: none;
	}
	nav a:hover {
		color: gray;
	}
	.title {
		font-weight: 700;
	}
	.title>span {
		display: inline-flex;
	}
	.bbtn {
		display: none;
		z-index: 42;
	}

	.menu {
		position: absolute;
    inset: 0;
    width: 100%;
    height: 100dvh;
    background: var(--red);
		padding: 5em 24px;

		opacity: 0;
		transform: translateX(-100%);
		transition: .5s ease-in-out;
	}
	.menu.active {
		opacity: 1;
		transform: translateX(0);
	}
	.menu a {
		font-size: 54px;
		line-height: normal;
	}
	.menu a:hover {
		color: inherit;
	}

	@keyframes help {
		from {
			scale: 1.25;
			transform: translateX(-25%);
			opacity: 0;
		} to {
			scale: 1;
			transform: translateX(0);
			opacity: 1;
		}
	}

	@media (max-width: 800px) {
		header > .btns, header > nav {
			display: none;
		}
		.bbtn {
			display: block;
		}
	}
</style>