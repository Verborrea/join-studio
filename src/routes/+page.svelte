<script>
	import Footer from './Footer.svelte';
	import MyImage from '$lib/images/img.png?enhanced';
	import { onMount } from 'svelte';

	let mouseX = 0;
  let mouseY = 0;
	let isLargeScreen = false;

	const handleMouseMove = (event) => {
		if (isLargeScreen) {
			mouseX = event.clientX;
			mouseY = event.clientY;

			console.log(mouseX, mouseY)
		}
	};

	const handleResize = () => {
		isLargeScreen = window.innerWidth > 700;
	};

	onMount(() => {
		isLargeScreen = window.innerWidth > 700;
  });
</script>

<svelte:window on:mousemove={handleMouseMove} onresize={handleResize} />

<main>
	<article class="p32 fc main">
		<p>
			Bienvenido a <strong>Join
			<span class="c0">S</span><span class="c1">t</span><span class="c2">u</span><span class="c3">d</span><span class="c4">i</span><span class="c5">o</span></strong>,
			una agencia creativa donde
			hacemos contenido de calidad especializado en tí.
		</p>
		<div class="scroll fc" style="transform: {isLargeScreen ? `translate(${mouseX}px, ${mouseY - 64}px)` : 'none'};">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
			Explore más abajo
		</div>
	</article>
	<article class="p32 show">
		<div class="text fcol">
			<h1>Kombucha <span class="c0">G</span><span class="c1">a</span><span class="c2">u</span><span class="c3">d</span><span class="c4">í</span></h1>
			<p>
				Energía que <strong>sorprende</strong>. Naturalmente poderosa.
				Vitalidad en cada sorbo.
			</p>
			<a href="/" class="btn">Descubra más</a>
		</div>
		<enhanced:img src={MyImage} alt="some alt text" width="608" height="1080"/>
	</article>
</main>
<Footer/>

<style>
	main {
		position: relative;
		overflow-x: hidden;
	}
	h1 {
		font-size: 72px;
		line-height: 1;
	}
	article {
		min-height: 100dvh;
	}
	p {
		max-width: 800px;
		line-height: 1.15;
		font-size: 42px;
	}
	span {
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}
	:global(img) {
		border-radius: 32px;
		height: calc(100dvh - 148px);
		width: auto;
	}
	:global(picture), :global(img) {
		align-self: end;
	}
	.show {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	.scroll {
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
		backdrop-filter: blur(4px);
	}
	.text {
		gap: 24px;
		align-items: flex-start;
	}
	@media (max-width: 900px) {
		.show {
			grid-template-columns: 1fr;
		}
		:global(picture) {
			position: absolute;
    	inset: 0;
			z-index: -1;
		}
		:global(img) {
			width: 100%;
			aspect-ratio: unset;
			height: 100dvh;
			border-radius: 0;
		}
	}
	@media (max-width: 700px) {
		p {
			font-size: 36px;
		}
		.scroll {
			top: unset;
			bottom: 24px;
			left: 24px;
			right: 24px;
		}
	}
</style>
