<script>
	let isFullScreenSize = false
	let hoverInterval

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
	<button type="button" class="menu">menú</button>
	<nav class="fc g32">
		<a href="/">Talento</a>
		<a href="/">Trabajo</a>
		<a href="/">Nosotros</a>
	</nav>
	<div class="btns fc g32">
		<button type="button" title="Modo Oscuro" aria-label="Modo Oscuro">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
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
</header>

<style>
	a, .menu {
		font-weight: 500;
		font-size: 18px;
		line-height: 24px;
		color: inherit;
		text-decoration: none;
	}
	nav a:hover, .menu:hover {
		color: gray;
	}
	.title {
		font-weight: 700;
	}
	.title>span {
		display: inline-flex;
	}
	.menu {
		display: none;
	}
	@media (max-width: 800px) {
		.btns, nav {
			display: none;
		}
		.menu {
			display: block;
		}
	}
</style>