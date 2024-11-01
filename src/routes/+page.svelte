<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let coords = spring({ x: 300, y: 200 }, {
		stiffness: 0.08,
		damping: 0.3
	});

	let isDesktop = $state(true);
	let contentText = $state("Explore más abajo");
	let headerVisible = $state(false);
	let main;

	// Detectar si es desktop o mobile
	const updateScreenSize = () => {
		isDesktop = window.innerWidth > 1000; // Puedes ajustar el ancho de pantalla que define "desktop"
	};

	// Detectar si estamos debajo de 100vh
	const checkScrollPosition = () => {
		if (main.scrollY > window.innerHeight) {
			contentText = "Has llegado abajo";
		} else {
			contentText = "Explore más abajo";
		}
	};

	function handleScroll() {
		const target = document.getElementById('fotos');
		if (!target) return;

		const { top, bottom } = target.getBoundingClientRect();

		// Activa la clase solo cuando la parte superior de #fotos esté en la parte superior de la pantalla
		// y se quita cuando la parte inferior del elemento pasa la parte superior de la pantalla
		headerVisible = top <= 0 && bottom > 0;
	}

	// Eventos de montaje
	onMount(() => {
		document.querySelector('main').addEventListener('scroll', handleScroll);
		updateScreenSize();
		if (!isDesktop) {
			coords.set({ x: 0, y: 0 });
		}

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window 
	onresize={updateScreenSize}
	onmousemove={(e) => {
		if (isDesktop) {
			coords.set({ x: e.clientX, y: e.clientY });
		}
	}}
/>

<main bind:this={main}>
	<Header {headerVisible}/>
	<section id="welcome" class="fcol fcc p32">
		<p>
			Bienvenido a <strong>Join
			<span class="c0">S</span><span class="c1">t</span><span class="c2">u</span><span class="c3">d</span><span class="c4">i</span><span class="c5">o</span></strong>,
			una agencia creativa donde hacemos contenido de calidad especializado en tí.
		</p>
		<a href="#fotos" class="scroll" style="transform: translate({$coords.x}px, {$coords.y}px);">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
			Explore más abajo
		</a>
	</section>
	<div id="fotos" class="large">
		<section class="sticky p32">
			<div class="text fcol">
				<h1>Kombucha <span class="c0">G</span><span class="c1">a</span><span class="c2">u</span><span class="c3">d</span><span class="c4">í</span></h1>
				<p>Naturalmente poderosa.</p>
				<a href="https://gaudi.pe" target="_blank" class="btn">Descubra más</a>
			</div>
			<div class="img">
				<img src="https://i.makeagif.com/media/2-18-2017/QZuhsP.gif" alt="wasaa">
			</div>
		</section>
	</div>
	<Footer/>
</main>

<style>
	main {
		height: 100vh; /* Altura completa para hacer el scroll */
		overflow-y: scroll; /* Solo scroll vertical */
		scroll-snap-type: y mandatory; /* Scroll snap activado verticalmente */
		scroll-behavior: smooth;
	}
	main>* {
		scroll-snap-align: start !important;
	}
	section {
		min-height: 100vh;
	}
	h1 {
		font-size: 78px;
		line-height: 1;
	}
	img {
		border-radius: 32px;
    width: 100%;
		max-height: calc(100dvh - 64px);
		aspect-ratio: 9 / 16;
	}
	p {
		font-size: 48px;
	}
	.large {
		min-height: 400dvh;
	}
	.sticky {
		position: sticky;
		top: 0;

		display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
	}
	.text {
		align-items: flex-start;
		gap: 16px;
	}
	#welcome {
		align-items: flex-start;
	}
	#welcome p {
		max-width: max(28ch, 50vw);
	}
	#fotos .btn {
		margin-top: 8px;
	}
	.scroll {
		text-decoration: none;
		color: inherit;
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		gap: 10px;
		border-radius: 2em;
		font-weight: 600;
		word-wrap: break-word;
		line-height: 1;
		display: flex;
		padding: 12px 24px;
		justify-content: center;
		align-items: center;
		border-radius: 32px;
		border: 2px solid var(--text);
		background: var(--klk);
		backdrop-filter: blur(2px);
	}
	@media (max-width: 1000px) {
		h1 {
			font-size: 48px;
		}
		p {
			font-size: 36px;
		}
		img {
			filter: brightness(0.75);
			border-radius: 0;
			max-height: unset;
			height: 100dvh;
		}
		#fotos {
			--bg: #1E1E1E;
			--text: #EFEFEF;
			--text-low: #939393;
			--text-input: #1C1D20;
			--shadow: #3c3c3c;
			--red: #FF6C6C;
			--ora: #FF9D68;
			--yel: #FFD86E;
			--gre: #BCEE70;
			--blu: #70C4EE;
			--vio: #ED99EC;
			--klk: #1E1E1E80;

			color: var(--text);
		}
		#fotos .btn {
			background: #1e1e1e30;
			backdrop-filter: blur(8px);
		}
		#welcome {
			align-items: unset;
			gap: 24px;
		}
		.img {
			position: absolute;
			inset: 0;
			z-index: -1;
		}
		.scroll {
			transform: none !important;
    	position: relative;
		}
	}
</style>