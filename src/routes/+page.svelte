<script>
	import Intro from './Intro.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	import kombucha from '$lib/images/kombucha.avif';
	import don_luciano from '$lib/images/don_luciano.avif';
	import ema from '$lib/images/ema.avif';
	import lujan from '$lib/images/lujan.avif';
	import shanti from '$lib/images/shanti.avif';

	const products = [
		{
			title: 'Kombucha Gaudí',
			slogan: 'Naturalmente poderosa.',
			href: 'https://gaudi.pe',
			src: '/videos/gaudi.webm'
		},
		{
			title: 'Don Luciano',
			slogan: 'Licores que seducen.',
			href: 'https://gaudi.pe',
			src: '/videos/donlu.webm'
		},
		{
			title: 'Emanuel Rivera',
			slogan: 'Melodias que conectan.',
			href: 'https://gaudi.pe',
			src: '/videos/rivera.webm'
		},
		{
			title: 'Inmobiliria M Lujan',
			slogan: 'La casa de tus sueños.',
			href: 'https://gaudi.pe',
			src: '/videos/lujan.webm'
		},
		{
			title: 'Casa Shanti',
			slogan: 'Bienestar y sabores únicos.',
			href: 'https://gaudi.pe',
			src: '/videos/shanti.webm'
		}
	]

	const preloadedImages = [kombucha, don_luciano, ema, lujan, shanti];

	let coords = spring({ x: 300, y: 200 }, {
		stiffness: 0.08,
		damping: 0.3
	});

	let show = $state(false);
	let isMobile = $state(false);
	let whiteHeader = $state(false);
	let headerInvisible = $state(false);
	let index = $state(0);
	let scrollPercentage = $state(0);
	let text = $state('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg> Explore más abajo');

	let slider, main, fotos, stickyElement, video_container;

	function showPage() {
		show = true

		setTimeout(() => {
			main.addEventListener('scroll', handleScroll);
			updateScreenSize();
			if (isMobile) {
				coords.set({ x: 0, y: 0 });
			}
		}, 1000)
	}

	function updateScreenSize() {
		if (show) {
			isMobile = window.innerWidth < 1000;
			handleScroll()
		}
	};

	function formaPico(x) {
		return 24*Math.sin(Math.PI * x / 100);
	}

	function handleScroll() {
		const { top } = fotos.getBoundingClientRect();

		if (isMobile) {
			whiteHeader = top < 35;
		} else {
			text = top < 35 ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>Ver más' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>Explore más abajo'
			whiteHeader = false
		}

		const { bottom: footer_bottom } = fotos.getBoundingClientRect();
		headerInvisible = footer_bottom < 35;

		// Lógica de desplazamiento para cambiar el índice 'index' según el tamaño de products
		const parentRect = fotos.getBoundingClientRect();

		const distanceScrolled = parentRect.top * -1;
		const totalScrollableDistance = fotos.offsetHeight - stickyElement.offsetHeight;

		// Calcular porcentaje de desplazamiento
		scrollPercentage = (distanceScrolled / totalScrollableDistance) * 100;
		scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100); // Limitar a un rango de 0-100%

		// Cambia el valor de index según el porcentaje y el tamaño de products
		const sectionSize = 100 / products.length;
		index = Math.min(Math.floor(scrollPercentage / sectionSize), products.length - 1);

		slider.scroll(scrollPercentage * window.innerWidth / 100, 0);
	}

	$effect(() => {
		video_container.children[index].currentTime = 0;
	})

	onMount(() => {
		// main.addEventListener('scroll', handleScroll);
		// updateScreenSize();
		// if (isMobile) {
		// 	coords.set({ x: 0, y: 0 });
		// }

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

{#if show}
<main bind:this={main}>
	<Header {whiteHeader} {headerInvisible}/>
	<section id="welcome" class="fcol fcc p32">
		<p>
			Bienvenido a <strong>Join
			<span class="c0">S</span><span class="c1">t</span><span class="c2">u</span><span class="c3">d</span><span class="c4">i</span><span class="c5">o</span></strong>,
			una agencia creativa donde hacemos contenido de calidad especializado en tí.
		</p>
		{#if !headerInvisible}
		<button type="button" class="scroll" onclick={() => {
			main.scrollBy({
				top: window.innerHeight,
				behavior: "smooth"
			});
		}} style="transform: translate({$coords.x}px, {$coords.y}px);">
			{@html text}
		</button>
		{/if}
	</section>
	<div id="fotos" class="large" bind:this={fotos}>
		<section class="sticky p32" bind:this={stickyElement}>
			<div class="text fcol" style="
				opacity: {formaPico(scrollPercentage * 5 % 100) / 24 + 0.2};
				scale: {(scrollPercentage * 5 % 100) / 50}
			">
				<h1>{products[index].title}</h1>
				<p>{products[index].slogan}</p>
				<!-- <a href={products[index].href} target="_blank" class="btn">Descubra más</a> -->
			</div>
			<div class="img" bind:this={video_container}>
				{#each products as product, idx}
					<video class:active={idx === index} src={product.src} autoplay muted loop>
						Tu navegador no admite el elemento <code>video</code>.
					</video>
				{/each}
			</div>
			<div class="slider fc" bind:this={slider}>
				{#each preloadedImages as img, idx}
					<button
						onclick={() => {
							index = idx;
							scrollPercentage = index / products.length * 100 + (50 / products.length);
							slider.scroll({left: scrollPercentage * window.innerWidth / 100, behavior: "smooth"});
						}}
						type="button"
						style="transform: translateY(-{idx === index ? formaPico(scrollPercentage * 5 % 100) : 0}px);">
						<img src={img} alt="Hola">
					</button>
				{/each}
			</div>
		</section>
	</div>
	<Footer/>
</main>
{:else}
<Intro on:ready={showPage}/>
{/if}

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
	p {
		font-size: 48px;
	}
	span {
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}
	video {
		border-radius: 32px;
		width: 100%;
		height: calc(100dvh - 144px);
		aspect-ratio: 9 / 16;
		position: absolute;
		inset: 0;
	}
	video.active {
		z-index: 1;
	}
	.slider img {
		height: 160px;
		width: 90px;
		border-radius: 12px;
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
	.img {
		align-self: flex-end;
		height: calc(100dvh - 144px);
    aspect-ratio: 9 / 16;
    position: relative;
	}
	.slider {
		gap: 16px;
		position: absolute;
		width: 100vw;
		padding: 24px;
		bottom: 0;
		white-space: nowrap;
		overflow-x: scroll;
	}
	#welcome {
		align-items: flex-start;
	}
	#welcome p {
		max-width: max(28ch, 50vw);
	}
	/* #fotos .btn {
		margin-top: 8px;
	} */
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
		.img video {
			filter: brightness(0.6);
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
		/* #fotos .btn {
			background: #1e1e1e30;
			backdrop-filter: blur(8px);
		} */
		#welcome {
			align-items: unset;
			gap: 24px;
		}
		.img {
			position: absolute;
			inset: 0;
			z-index: -1;
			aspect-ratio: unset;
			height: 100%;
		}
		.scroll {
			transform: none !important;
    	position: relative;
			z-index: unset;
		}
		.sticky {
			grid-template-columns: 1fr;
		}
		.slider {
			padding: 24px 50%;
		}
	}
</style>