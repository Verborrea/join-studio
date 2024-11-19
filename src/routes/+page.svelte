<script>
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import Rainbow from '$lib/Rainbow.svelte'
	import Intro from './Intro.svelte'
	import Content from './Content.svelte'
	import Circle from './Circle.svelte'

	import talentos from '$lib/images/talentos.avif'

	let show = $state(false);

	function showPage() {
		setTimeout(() => {
			show = true
		}, 500)
	}
</script>

<svelte:head>
	<title>Join Studio • Agencia Creativa</title>
</svelte:head>

{#if !show}
<Intro on:ready={showPage}/>
{:else}
<Header/>
<main>
	<section class="hero fcol fcc p32 g32 center">
		<svg class="deco do deco1" width="241" height="687" viewBox="0 0 241 687" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 20.4995L25.9999 20.4998C51.9999 20.4998 68.9999 36.7637 68.9999 70.2846L69.0001 389.236C69.0001 389.236 71.6321 432.772 108.481 434.986C145.329 437.2 145.329 389.236 145.329 389.236V204.021C145.329 204.021 143.355 160.484 182.178 160.484C221 160.484 221 204.021 221 204.021V687" stroke="var(--deco)" stroke-width="40"/>
		</svg>
		<svg class="deco do deco2" width="290" height="166" viewBox="0 0 290 166" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="20" y="20" width="475" height="126" rx="63" stroke="var(--deco)" stroke-width="40"/>
		</svg>
		<svg class="deco do deco3" width="515" height="166" viewBox="0 0 515 166" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="20" y="20" width="475" height="126" rx="63" stroke="var(--deco)" stroke-width="40"/>
		</svg>
		<svg class="deco deco4" width="128" height="72" viewBox="0 0 128 72" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="92" cy="8" r="8"/><circle cx="120" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="92" cy="36" r="8"/><circle cx="120" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="92" cy="64" r="8"/><circle cx="120" cy="64" r="8"/>
		</svg>
		<svg class="deco do deco5" width="72" height="128" viewBox="0 0 72 128" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="8" cy="92" r="8"/><circle cx="36" cy="92" r="8"/><circle cx="64" cy="92" r="8"/><circle cx="8" cy="120" r="8"/><circle cx="36" cy="120" r="8"/><circle cx="64" cy="120" r="8"/>
		</svg>

		<svg class="deco mo deco6" width="174" height="98" viewBox="0 0 174 98" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="12" y="12" width="221" height="74" rx="37" stroke="var(--deco)" stroke-width="24"/>
		</svg>
		<svg class="deco mo deco7" width="98" height="163" viewBox="0 0 98 163" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="12" y="-85" width="74" height="236" rx="37" stroke="var(--deco)" stroke-width="24"/>
		</svg>

		<h1>Hola!</h1>
		<p>Somos <mark><strong>Join Studio</strong></mark> una agencia <Rainbow text="creativa"/> dedicada a contar historias que impactan.</p>
		<a href="#proyectos" class="btn">Explore más abajo</a>
	</section>
	<section id="proyectos" class="proyectos fcc p32">
		<svg class="deco mo deco1" width="185" height="95" viewBox="0 0 185 95" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="-98" y="12" width="271" height="71" rx="35.5" stroke="var(--deco)" stroke-width="24"/>
		</svg>
		<svg class="deco deco2" width="72" height="128" viewBox="0 0 72 128" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="8" cy="92" r="8"/><circle cx="36" cy="92" r="8"/><circle cx="64" cy="92" r="8"/><circle cx="8" cy="120" r="8"/><circle cx="36" cy="120" r="8"/><circle cx="64" cy="120" r="8"/>
		</svg>
		<svg class="deco mo deco3" width="332" height="267" viewBox="0 0 332 267" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 267L12 198.403C12.0001 148.696 69.6488 148.696 69.6488 148.696H195.695C222.5 148.696 242.595 131 242.595 101.5V52.5C242.595 31.2914 255.5 12 279.5 12C279.5 12 311.807 12 332 12" stroke="var(--deco)" stroke-width="24"/>
		</svg>
		<svg class="deco do deco4" width="280" height="674" viewBox="0 0 280 674" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M280 20H91.035C34.2069 20 20 45.8241 20 109.224L20 338.861C20.0001 369.714 45.6793 394.989 71.8137 394.989H135.767C193.957 394.989 188.444 465.662 188.444 465.662V577.985C188.444 577.985 188.444 654 249.697 654H280" stroke="var(--deco)" stroke-width="40"/>
		</svg>
		<svg class="deco do deco5" width="268" height="72" viewBox="0 0 268 72" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="92" cy="8" r="8"/><circle cx="120" cy="8" r="8"/><circle cx="148" cy="8" r="8"/><circle cx="176" cy="8" r="8"/><circle cx="204" cy="8" r="8"/><circle cx="232" cy="8" r="8"/><circle cx="260" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="92" cy="36" r="8"/><circle cx="120" cy="36" r="8"/><circle cx="148" cy="36" r="8"/><circle cx="176" cy="36" r="8"/><circle cx="204" cy="36" r="8"/><circle cx="232" cy="36" r="8"/><circle cx="260" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="92" cy="64" r="8"/><circle cx="120" cy="64" r="8"/><circle cx="148" cy="64" r="8"/><circle cx="176" cy="64" r="8"/><circle cx="204" cy="64" r="8"/><circle cx="232" cy="64" r="8"/><circle cx="260" cy="64" r="8" fill="var(--deco)"/>
		</svg>
		<div class="deco do deco6"></div>
		<h1 class="center">Nuestros<br/><s>clientes</s><br/><mark>amigos</mark></h1>
	</section>
	<Content/>
	<section class="talentos fc p32 g32">
		<svg class="deco do deco1" width="280" height="674" viewBox="0 0 280 674" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M280 654H91.035C34.2069 654 20 628.176 20 564.776L20 335.139C20.0001 304.286 45.6793 279.011 71.8137 279.011H135.767C193.957 279.011 188.444 208.338 188.444 208.338V96.0153C188.444 96.0153 188.444 20.0001 249.697 20H280" stroke="var(--deco)" stroke-width="40"/>
		</svg>
		<svg class="deco do deco2" width="268" height="72" viewBox="0 0 268 72" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="92" cy="8" r="8"/><circle cx="120" cy="8" r="8"/><circle cx="148" cy="8" r="8"/><circle cx="176" cy="8" r="8"/><circle cx="204" cy="8" r="8"/><circle cx="232" cy="8" r="8"/><circle cx="260" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="92" cy="36" r="8"/><circle cx="120" cy="36" r="8"/><circle cx="148" cy="36" r="8"/><circle cx="176" cy="36" r="8"/><circle cx="204" cy="36" r="8"/><circle cx="232" cy="36" r="8"/><circle cx="260" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="92" cy="64" r="8"/><circle cx="120" cy="64" r="8"/><circle cx="148" cy="64" r="8"/><circle cx="176" cy="64" r="8"/><circle cx="204" cy="64" r="8"/><circle cx="232" cy="64" r="8"/><circle cx="260" cy="64" r="8" fill="var(--deco)"/>
		</svg>
		<svg class="deco mo deco3" width="72" height="128" viewBox="0 0 72 128" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="8" cy="92" r="8"/><circle cx="36" cy="92" r="8"/><circle cx="64" cy="92" r="8"/><circle cx="8" cy="120" r="8"/><circle cx="36" cy="120" r="8"/><circle cx="64" cy="120" r="8"/>
		</svg>
		<img src={talentos} alt="Gente caminando por la calle"/>
		<div class="text grow fcol g32">
			<h1>Talentos</h1>
			<p>Somos una <em><strong>familia</strong></em> de gente <Rainbow text="creativa"/> con la misión de convertir tus ideas en realidad.</p>
			<a href="#circle" class="fc">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
				Conoce a todos
			</a>
		</div>
	</section>
	<Circle/>
</main>
<Footer/>
{/if}

<style>
	main {
		display: contents;
	}
	section {
		position: relative;
		min-height: 100vh;
	}


	.hero mark {
		will-change: background-position;
		background: linear-gradient(90deg, var(--highlight) 50%, transparent 50%);
		background-size: 200% 100%;
		background-position: 0 0;
		animation: markit 1s both ease-out;
	}
	.hero p, .talentos p {
		max-width: 40ch;
	}
	.hero .deco1 {
		left: 0;
		bottom: 0;
	}
	.hero .deco2 {
		right: 0;
	}
	.hero .deco3 {
		left: 50%;
		bottom: 0;
		transform: translate(-25%, 50%);
	}
	.hero .deco4 {
		top: 20%;
		left: 20%;
	}
	.hero .deco5 {
		bottom: 15%;
		right: 20%;
	}
	.hero .deco6 {
		bottom: 10%;
		right: 0;
	}
	.hero .deco7 {
		top: 0;
		right: 24px;
	}


	.proyectos h1{
		font-weight: 600;
		font-size: 9vw;
	}
	.proyectos .deco1 {
		left: 0;
		top: 20%;
	}
	.proyectos .deco2 {
		left: 32px;
		bottom: 64px;
	}
	.proyectos .deco3 {
		right: 0;
		bottom: 0;
	}
	.proyectos .deco4 {
		right: 0;
		bottom: 0;
		transform: translateY(15%);
	}
	.proyectos .deco5 {
		right: 160px;
		bottom: 32px;
	}
	.proyectos .deco6 {
		left: 201px;
		top: 0;
		bottom: 0;
		width: 40px;
		background-color: var(--deco);
	}

	.talentos {
		height: 100svh;
	}
	.talentos a {
		gap: 16px;
		font-size: 36px;
	}
	.talentos img {
		height: 100%;
		aspect-ratio: 9 / 16;
		object-fit: cover;
		border-radius: 32px;
	}
	.talentos .text, .talentos .deco1 {
		z-index: 1;
	}
	.talentos .deco1 {
		right: 0;
		bottom: 0;
		transform: translateY(20%);
	}
	.talentos .deco2 {
		top: 64px;
		right: 64px;
	}
	.talentos .deco3 {
		right: 24px;
		bottom: 15%;
	}

	@media (max-width: 1000px) {
		.talentos a {
			font-size: 27px;
		}
		.talentos a svg {
			width: 32px;
			height: 32px;
		}
	}
	@media (max-width: 900px) {
		.talentos {
			flex-direction: column;
		}
		.talentos img {
			aspect-ratio: unset;
			width: 100%;
			height: 100px;
			flex: 1;
		}
		.talentos a {
			font-size: 24px;
			gap: 12px;
		}
		.talentos a svg {
			width: 24px;
			height: 24px;
		}
		.talentos .text {
			flex: unset;
			width: 100%;
		}
	}
	@media (max-width: 700px) {
		.hero .deco4 {
			top: 17%;
			left: 24px;
		}
		.proyectos h1{
			font-size: 12vw;
		}
		.proyectos .deco2 {
			inset: 24px 24px auto auto;
		}
	}
</style>