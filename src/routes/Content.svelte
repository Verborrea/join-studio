<script>
	import { onMount } from 'svelte'

	import salamanto from '$lib/images/salamanto.webp';
	import kombucha from '$lib/images/kombucha.avif';
	import don_luciano from '$lib/images/don_luciano.avif';
	import ema from '$lib/images/ema.avif';
	import lujan from '$lib/images/lujan.avif';
	import shanti from '$lib/images/shanti.avif';

	const products = [
		{
			title: 'Espacio <strong class="c8">Salamanto</strong>',
			slogan: 'Cocina peruana por Paul Perea.',
			href: 'https://www.instagram.com/salamanto.peru/',
			src: '/videos/salamanto.mp4',
			img: salamanto
		},
		{
			title: 'Kombucha <strong class="c1">Gaudí</strong>',
			slogan: 'Naturalmente poderosa.',
			href: 'https://gaudi.pe',
			src: '/videos/gaudi.webm',
			img: kombucha
		},
		{
			title: '<strong class="c5">Don</strong> Luciano',
			slogan: 'Licores que seducen.',
			href: 'https://gaudi.pe',
			src: '/videos/donlu.mp4',
			img: don_luciano
		},
		{
			title: 'Emanuel <strong class="c3">Rivera</strong>',
			slogan: 'Melodias que conectan.',
			href: 'https://gaudi.pe',
			src: '/videos/rivera.mp4',
			img: ema
		},
		{
			title: 'Casa <strong class="c2">Shanti</strong>',
			slogan: 'Bienestar y sabores únicos.',
			href: 'https://gaudi.pe',
			src: '/videos/shanti.mp4',
			img: shanti
		},
		{
			title: 'Siga <span class="c4">bajando</span>',
			slogan: 'Para saber más sobre nosotros.',
			href: 'https://gaudi.pe',
			src: '/videos/lujan.webm',
			img: lujan
		},
	]

	let isMobile = $state(false);
	let index = $state(0);
	let scrollPercentage = $state(0);
	let totalScrollableDistance = $state(0);

	let slider, fotos, stickyElement = $state(), video_container;

	let scrollTimeout;

	const sectionSize = 100 / products.length;

	function updateScreenSize() {
		isMobile = window.innerWidth < 1000
		totalScrollableDistance = fotos.offsetHeight - stickyElement.offsetHeight
		handleScroll()
	};

	function formaPico(x) {
		return Math.pow(Math.sin(Math.PI * (x / 100)), 0.3);
	}

	function slideTo(section) {
		const offset = (section + 0.5) / products.length
		window.scroll({top: fotos.getBoundingClientRect().top + window.scrollY + totalScrollableDistance * offset, behavior: "smooth"})
	}
	function arreglar() {
		slideTo(Math.min(Math.floor(scrollPercentage / sectionSize), products.length - 1))
	}

	function handleScroll() {
		clearTimeout(scrollTimeout);

		const { top, bottom } = fotos.getBoundingClientRect();

		scrollPercentage = (-top / totalScrollableDistance) * 100;
		scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100);

		if (top < 0 && bottom > window.innerHeight) {
			scrollTimeout = setTimeout(arreglar, 800);
		}

		index = Math.min(Math.floor(scrollPercentage / sectionSize), products.length - 1);
		slider.scroll((slider.scrollWidth - window.innerWidth) * scrollPercentage / 100, 0);
	}

	onMount(() => {
		updateScreenSize();
	});
</script>

<svelte:window 
	onresize={updateScreenSize}
	onscroll={handleScroll}
/>

<div id="fotos" class="large" bind:this={fotos}>
	<section id="stickyElement" class="sticky p32" bind:this={stickyElement}>
		<svg class="deco do deco1" width="961" height="738" viewBox="0 0 961 738" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M222 0C222 0 222 66 222 82.5C224.296 133 289.045 130 289.045 130H785.45C987.043 130 996.5 399 785.45 399H653C600.5 399 580.643 424 580.643 480V599C580.643 663 548 718 479 718H0" stroke="var(--deco)" stroke-width="40"/>
		</svg>
		<div class="text fcol" style="
			opacity: {formaPico(scrollPercentage * products.length % 100)};
			scale: {(scrollPercentage * products.length % 100)/200 + 0.75};
		">
			<h1>{@html products[index].title}</h1>
			<p>{products[index].slogan}</p>
		</div>
		<div class="img" bind:this={video_container}>
			{#each products as product, idx}
				<video
					id="video_{idx}"
					class:active={idx === index}
					src={product.src}
					autoplay
					muted
					loop
					playsinline
					playsInline
				>
					Tu navegador no admite el elemento <code>video</code>.
				</video>
			{/each}
		</div>
		<div id="slider" class="slider fc" bind:this={slider}>
			{#each products.map(p => p.img) as img, idx}
				<button
					onclick={() => {
						slideTo(idx)
					}}
					type="button"
					style="transform: translateY(-{idx === index ? 24 * formaPico(scrollPercentage * products.length % 100) : 0}px);">
					<img src={img} alt="Hola">
				</button>
			{/each}
		</div>
	</section>
</div>

<style>
	.deco1 {
		top: 0;
		left: 0;
	}
	section {
		min-height: 100dvh;
	}
	video {
		border-radius: 32px;
		width: 100%;
		height: calc(100dvh - 64px);
		aspect-ratio: 9 / 16;
		position: absolute;
		inset: 0;
	}
	video.active {
		z-index: 10;
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
		height: calc(100dvh - 64px);
    aspect-ratio: 9 / 16;
    position: relative;
	}
	.slider {
		gap: 16px;
		position: absolute;
		width: 100vw;
		padding: 32px;
		bottom: 0;
		white-space: nowrap;
		overflow-x: scroll;
		z-index: 20;
	}
	@media (max-width: 700px) {
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
			--deco: #3e3e3e;
			--deco2: #3e3e3e;
			--highlight: #8862A7;

			color: var(--text);
		}
		.img {
			position: absolute;
			inset: 0;
			z-index: -1;
			aspect-ratio: unset;
			height: 100%;
		}
		.sticky {
			grid-template-columns: 1fr;
		}
		.slider {
			padding: 24px 50%;
		}
	}
</style>