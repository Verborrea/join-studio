<script>
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';

	import First from '$lib/images/img1.png?enhanced';
	import Secon from '$lib/images/img2.png?enhanced';
	import Third from '$lib/images/img3.png?enhanced';
	import Fourt from '$lib/images/img4.png?enhanced';
	import Fifth from '$lib/images/img5.png?enhanced';

	let mouseX = 0;
  let mouseY = 0;
	let isLargeScreen = false;
	let show;

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

	function handleScroll() {
		const seccionTop = show.getBoundingClientRect().bottom - 36;

		if (!isLargeScreen) {
			if (seccionTop <= window.innerHeight) {
				document.getElementById('title').style.color = '#EFEFEF';
				document.getElementById('menu').style.color = '#EFEFEF';
			} else {
				document.getElementById('title').style.color = 'var(--text)'
				document.getElementById('menu').style.color = 'var(--text)';
			}
		} else {
			document.getElementById('title').style.color = 'var(--text)'
			document.getElementById('menu').style.color = 'var(--text)';
		}
	}

	onMount(() => {
		isLargeScreen = window.innerWidth > 700;
  });
</script>

<svelte:window on:mousemove={handleMouseMove} onresize={handleResize} onscroll={handleScroll}/>

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
	<article class="p32 show" bind:this={show}>
		<div class="left fcol">
			<div class="text fcol">
				<h1>Kombucha <span class="c0">G</span><span class="c1">a</span><span class="c2">u</span><span class="c3">d</span><span class="c4">í</span></h1>
				<p>
					Energía que <strong>sorprende</strong>. Naturalmente poderosa.
					Vitalidad en cada sorbo.
				</p>
				<a href="/" class="btn">Descubra más</a>
			</div>
			<div class="slider">
				<div class="slide">
					<enhanced:img src={First} alt="some alt text" width="96" height="160"/>
				</div>
				<div class="slide">
					<enhanced:img src={Secon} alt="some alt text" width="96" height="160"/>
				</div>
				<div class="slide">
					<enhanced:img src={Third} alt="some alt text" width="96" height="160"/>
				</div>
				<div class="slide">
					<enhanced:img src={Fourt} alt="some alt text" width="96" height="160"/>
				</div>
				<div class="slide">
					<enhanced:img src={Fifth} alt="some alt text" width="96" height="160"/>
				</div>
			</div>	
		</div>
		<enhanced:img src={First} alt="some alt text" width="608" height="1080"/>
	</article>
</main>
<Footer/>

<style>
	main {
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
	.show>*>:global(img) {
		border-radius: 32px;
		height: calc(100dvh - 148px);
		width: auto;
	}
	.show>:global(picture), .show>*>:global(img) {
		align-self: end;
	}
	article {
		position: relative;
	}
	.slider {
		display: flex;
		align-items: flex-end;
    gap: 16px;
	}
	.slide {
		border-radius: 16px;
		transition: .2s ease-out;
		flex-shrink: 0;
	}
	.slide>:global(picture), .slide :global(img) {
		border-radius: 16px;
	}
	.slide:hover {
		transform: translateY(-32px);
	}
	.left {
		gap: 64px;
	}
	.show {
		/* position: sticky;
		top: 0; */
		display: grid;
		gap: 32px;
		grid-template-columns: 1fr auto;
		align-items: flex-end;
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
			align-items: center;
			color: var(--text);

			--bg: #1E1E1E;
			--text: #EFEFEF;
			--text-low: #A6A6A6;
			--text-input: #1C1D20;
			--shadow: #3c3c3c;
			--red: #FF6C6C;
			--ora: #FF9D68;
			--yel: #FFD86E;
			--gre: #BCEE70;
			--blu: #70C4EE;
			--vio: #ED99EC;
			--klk: #1E1E1E80;
		}
		.show>:global(picture) {
			position: absolute;
    	inset: 0;
			z-index: -1;
		}
		.show>:global(img) {
			width: 100%;
			aspect-ratio: unset;
			height: 100dvh;
			border-radius: 0;
			filter: brightness(0.75);
		}
		.slider {
			position: absolute;
			left: 0;
			bottom: 24px;
			right: 0;
			overflow-x: scroll;
			width: 100vw;
			padding: 0 24px;
		}
		.slide:hover {
			transform: none;
			margin-bottom: 32px;
		}
		.show .btn {
			background: transparent;
		}
	}
	@media (max-width: 700px) {
		h1 {
			font-size: 56px;
		}
		p {
			font-size: 36px;
		}
		.text p {
			font-size: 24px;
		}
		.scroll {
			top: unset;
			bottom: 24px;
			left: 24px;
			right: 24px;
		}
	}
</style>
