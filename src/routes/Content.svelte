<script>
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

	let { show } = $props();
	let isMobile = $state(false);
	let whiteHeader = $state(false);
	let headerInvisible = $state(false);
	let index = $state(0);
	let scrollPercentage = $state(0);
	let text = $state('Explore más abajo');

	let slider, main, fotos, stickyElement, video_container;

	const sectionSize = 100 / products.length;

	function updateScreenSize() {
		isMobile = window.innerWidth < 1000;
		handleScroll()
	};

	function formaPico(x) {
		return Math.pow(Math.sin(Math.PI * (x / 100)), 0.3);
	}

	function handleScroll() {
		const { top } = fotos.getBoundingClientRect();

		if (isMobile) {
			whiteHeader = top < 35;
		} else {
			text = top < 35 ? 'Ver más' : 'Explore más abajo'
			whiteHeader = false
		}

		const { bottom: footer_bottom } = fotos.getBoundingClientRect();
		headerInvisible = footer_bottom < 35;

		const parentRect = fotos.getBoundingClientRect();

		const distanceScrolled = parentRect.top * -1;
		const totalScrollableDistance = fotos.offsetHeight - stickyElement.offsetHeight;

		scrollPercentage = (distanceScrolled / totalScrollableDistance) * 100;
		scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100);

		// TODO: simular snapping

		index = Math.min(Math.floor(scrollPercentage / sectionSize), products.length - 1);

		slider.scroll((slider.scrollWidth - window.innerWidth) * scrollPercentage / 100, 0);
	}

	$effect(() => {
		video_container.children[index].currentTime = 0;
	})

	onMount(() => {
		main.addEventListener('scroll', handleScroll);
		updateScreenSize();
		if (isMobile) {
			coords.set({ x: 0, y: 0 });
		}

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

<main class:active={!show} bind:this={main}>
	<svg class="abs deco1" width="100" height="260" viewBox="0 0 100 260" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="12" y="12" width="76" height="236" rx="38" stroke="#DADADA" stroke-width="24"/>
	</svg>
	<svg class="abs deco2"width="123" height="98" viewBox="0 0 123 98" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="-110" y="12" width="221" height="74" rx="37" stroke="#DADADA" stroke-width="24"/>
	</svg>
	<svg class="abs deco3" width="90" height="50" viewBox="0 0 90 50" fill="#DADADA" xmlns="http://www.w3.org/2000/svg">
		<circle cx="5" cy="45" r="5" transform="rotate(-90 5 45)"/>
		<circle cx="5" cy="25" r="5" transform="rotate(-90 5 25)"/>
		<circle cx="5" cy="5" r="5" transform="rotate(-90 5 5)"/>
		<circle cx="25" cy="45" r="5" transform="rotate(-90 25 45)"/>
		<circle cx="25" cy="25" r="5" transform="rotate(-90 25 25)"/>
		<circle cx="25" cy="5" r="5" transform="rotate(-90 25 5)"/>
		<circle cx="45" cy="45" r="5" transform="rotate(-90 45 45)"/>
		<circle cx="45" cy="25" r="5" transform="rotate(-90 45 25)"/>
		<circle cx="45" cy="5" r="5" transform="rotate(-90 45 5)"/>
		<circle cx="65" cy="45" r="5" transform="rotate(-90 65 45)"/>
		<circle cx="65" cy="25" r="5" transform="rotate(-90 65 25)"/>
		<circle cx="65" cy="5" r="5" transform="rotate(-90 65 5)"/>
		<circle cx="85" cy="45" r="5" transform="rotate(-90 85 45)"/>
		<circle cx="85" cy="25" r="5" transform="rotate(-90 85 25)"/>
		<circle cx="85" cy="5" r="5" transform="rotate(-90 85 5)"/>
	</svg>
	<Header {whiteHeader} {headerInvisible}/>
	<section id="welcome" class="fcol fcc p32">
		<p>
			Hola! somos una agencia <strong><span class="c0">c</span><span class="c1">r</span><span class="c2">e</span><span class="c3">a</span><span class="c4">t</span><span class="c5">i</span><span class="c0">v</span><span class="c1">a</span></strong>
			donde hacemos contenido de calidad para tí.
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
				opacity: {formaPico(scrollPercentage * 5 % 100)};
				scale: {(scrollPercentage * 5 % 100)/200 + 0.75};
			">
				<h1>{products[index].title}</h1>
				<p>{products[index].slogan}</p>
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
							scrollPercentage = sectionSize + (50 / products.length);
							slider.scroll({left: scrollPercentage * window.innerWidth / 100, behavior: "smooth"});
						}}
						type="button"
						style="transform: translateY(-{idx === index ? 24 * formaPico(scrollPercentage * 5 % 100) : 0}px);">
						<img src={img} alt="Hola">
					</button>
				{/each}
			</div>
		</section>
	</div>
	<Footer/>
</main>

<style>
	svg.abs {
		z-index: -1;
	}
	.deco1 {
		right: 24px;
		top: -90px;
	}
	.deco2 {
		left: 0;
		top: 67%;
	}
	.deco3 {
		top: 18%;
    left: 24px;
	}
	main {
		opacity: 0;
		overflow-y: hidden;

		height: 100dvh;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
	}
	main.active {
		animation: help 1.2s;
		opacity: 1;
		overflow-y: scroll;
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
		min-height: 500dvh;
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
		position: relative;
		align-items: flex-start;
	}
	#welcome p {
		max-width: max(28ch, 50vw);
	}
	.scroll {
		align-self: center;
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
		border: 4px solid var(--text);
		background: var(--klk);
		backdrop-filter: blur(2px);
	}
	@media (max-width: 1000px) {
		h1 {
			font-size: 48px;
		}
		p {
			font-size: 6.6vw;
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
			--text-input: #DADADA;
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
			top: unset;
			bottom: 48px;
			left: 24px;
			right: 24px;
			width: fit-content;
			position: absolute;
			margin: auto;
		}
		.sticky {
			grid-template-columns: 1fr;
		}
		.slider {
			padding: 24px 50%;
		}
	}
</style>