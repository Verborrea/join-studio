<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	const products = [
		{
			title: 'Kombucha Gaudí',
			slogan: 'Naturalmente poderosa.',
			href: 'https://gaudi.pe',
			src: 'https://i.makeagif.com/media/2-18-2017/QZuhsP.gif'
		},
		{
			title: 'Don Luciano',
			slogan: 'Licores que seducen.',
			href: 'https://gaudi.pe',
			src: 'https://media.tenor.com/V6HSI8BqbEMAAAAM/drink-jack-daniels.gif'
		},
		{
			title: 'Casa Shanti',
			slogan: 'Bienestar y sabores únicos',
			href: 'https://gaudi.pe',
			src: 'https://forums.au.reachout.com/t5/image/serverpage/image-id/6855i130573764081B94B/image-size/large?v=1.0&px=999'
		},
		{
			title: 'Inmobiliria M. Luján',
			slogan: 'El sueño de tu hogar es sencillo',
			href: 'https://gaudi.pe',
			src: 'https://media0.giphy.com/media/aZcwYGaPOGJsLeLFfC/giphy.gif?cid=6c09b952n84t4v66nuz2imp6fear36rkrfsu14xgcalq0bca&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'
		}
	]

	let coords = spring({ x: 300, y: 200 }, {
		stiffness: 0.08,
		damping: 0.3
	});

	let isMobile = $state(false);
	let whiteHeader = $state(false);
	let headerInvisible = $state(false);
	let index = $state(0);
	let preloadedImages = [];

	function preloadImages(urls) {
		urls.forEach((url) => {
			const img = new Image();
			img.src = url;
			preloadedImages.push(img);
		});
	}

	let main;
	let fotos;
	let stickyElement;

	function updateScreenSize() {
		isMobile = window.innerWidth < 1000;
		handleScroll()
	};

	function handleScroll() {
		const { top } = fotos.getBoundingClientRect();

		if (isMobile) {
			whiteHeader = top < 35;
		} else {
			whiteHeader = false
		}

		const { bottom: footer_bottom } = fotos.getBoundingClientRect();
		headerInvisible = footer_bottom < 35;

		// Lógica de desplazamiento para cambiar el índice 'index' según el tamaño de products
		const parentRect = fotos.getBoundingClientRect();

		const distanceScrolled = parentRect.top * -1;
		const totalScrollableDistance = fotos.offsetHeight - stickyElement.offsetHeight;

		// Calcular porcentaje de desplazamiento
		let scrollPercentage = (distanceScrolled / totalScrollableDistance) * 100;
		scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100); // Limitar a un rango de 0-100%

		// Cambia el valor de index según el porcentaje y el tamaño de products
		const sectionSize = 100 / products.length;
		index = Math.min(Math.floor(scrollPercentage / sectionSize), products.length - 1);
	}

	onMount(() => {
		main.addEventListener('scroll', handleScroll);
		updateScreenSize();
		if (isMobile) {
			coords.set({ x: 0, y: 0 });
		}
		preloadImages(products.map(p => p.src));

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window 
	onresize={updateScreenSize}
	onmousemove={(e) => {
		if (!isMobile) {
			coords.set({ x: e.clientX, y: e.clientY });
		}
	}}
/>

<main bind:this={main}>
	<Header {whiteHeader} {headerInvisible}/>
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
	<div id="fotos" class="large" bind:this={fotos}>
		<section class="sticky p32" bind:this={stickyElement}>
			<div class="text fcol">
				<h1>{@html products[index].title}</h1>
				<p>{products[index].slogan}</p>
				<a href={products[index].href} target="_blank" class="btn">Descubra más</a>
			</div>
			<div class="img">
				<img src={products[index].src} alt="wasaa">
			</div>
		</section>
	</div>
	<Footer/>
</main>

<style>
	main {
		height: 100dvh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
	}
	main>* {
		scroll-snap-align: start !important;
	}
	section {
		min-height: 100dvh;
	}
	h1 {
		font-size: 78px;
		line-height: 1;
	}
	img {
		border-radius: 32px;
    width: 100%;
    height: calc(100dvh - 144px);
    aspect-ratio: 9 / 16;
	}
	p {
		font-size: 48px;
	}
	span {
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}
	.large {
		min-height: 400dvh;
	}
	.sticky {
		position: sticky;
		top: 0;

    display: grid;
    grid-template-columns: 1fr auto;
		align-items: center;
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
	.img {
		align-self: flex-end;
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
			z-index: unset;
		}
		.sticky {
			grid-template-columns: 1fr;
		}
	}
</style>