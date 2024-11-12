<script>
	import Header from "$lib/Header.svelte"
	import Footer from "$lib/Footer.svelte"
	import Rainbow from "$lib/Rainbow.svelte"
	import talentos from "$lib/images/talentos.avif"
	import { onMount } from "svelte";

	let scroll = $state(0)
	let winw = $state(0)
	let winh = $state(0)
	let double = $derived(winw / 2)

	const people = [
		{ name: 'Marko Manrique', desc: 'Genio Creativo' },
		{ name: 'Gustavo Inojoque', desc: 'Filmmaker' },
		{ name: 'Javier Villanueva', desc: 'Productor' },
		{ name: 'Adriana Velazco', desc: 'Diseñadora Gráfica' },
		{ name: 'Alan Monroy', desc: 'Desarrollador Web' },
		{ name: 'Juan Carlos Llanos', desc: 'Experto en reputación' },
		{ name: 'Carlos Solis', desc: 'Productor' },
		{ name: 'César Soplin', desc: 'Creador Digital' },
		{ name: 'Erick Porroa', desc: 'Productor' },
	]

	onMount(() => {
		winh = window.innerHeight
	})
</script>

<svelte:head>
	<title>Talentos • Join Studio</title>
</svelte:head>
<svelte:window bind:scrollY={scroll} bind:innerWidth={winw}/>

<Header/>
<section class="rel circle">
	<svg class="abs deco2" width="1440" height="890" viewBox="0 0 1440 890" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.000976562 870H739.951C815.501 870 820.001 754.875 739.714 754.875L495.384 755.378C418.001 755.378 418.001 639.252 495.145 639.252H961.005C961.005 639.252 1107.51 651.217 1107.51 491.162V138.541C1107.51 57.5131 1154.5 20 1224.51 20L1440 20" stroke="var(--deco)" stroke-width="40"/>
	</svg>
	<svg class="abs deco3 do" width="349" height="166" viewBox="0 0 349 166" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="20" y="20" width="475" height="126" rx="63" stroke="#E4E4E4" stroke-width="40"/>
	</svg>
	<div class="sticky fcol p32">
		{#each people as person, idx}
		{@const val = (scroll - idx * 250)/814 }
			<a href="talentos/{person.name}" class:active={Math.abs(val) < 0.15} class="person abs fc g32" style="transform: translate({double * (Math.cos(val) - 1)}px, {-double*Math.sin(val)}px) rotate({-val}rad);">
				<div class="fcol">
					<h1>{person.name}</h1>
					<p>{person.desc}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
<section class="second rel fc g32 p32">
	<div class="text grow fcol g32">
		<svg class="abs deco1" width="75" height="134" viewBox="0 0 75 134" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="8" cy="92" r="8"/><circle cx="36" cy="92" r="8"/><circle cx="64" cy="92" r="8"/><circle cx="8" cy="120" r="8"/><circle cx="36" cy="120" r="8"/><circle cx="64" cy="120" r="8"/>
		</svg>
		<h1>Talentos</h1>
		<p>Somos una familia de gente <Rainbow text="creativa"/> con la misión de convertir tus ideas en realidad.</p>
	</div>
	<img src={talentos} alt="some alt text" />
</section>
<Footer/>

<style>
	.deco1, .deco2, .deco3 {
		z-index: -1;
	}
	.deco1 {
		top: 65%;
    right: 59vh;
	}
	.deco2 {
		bottom: -5%;
	}
	.deco3 {
		top: 8%;
		right: 0;
	}
	img {
		height: 100%;
		aspect-ratio: 9 / 16;
		object-fit: cover;
		border-radius: 32px;
	}
	section {
		scroll-snap-align: center;
	}
	section.second, .sticky {
		height: 100svh;
	}
	section.circle {
		height: 350svh;
	}
	.sticky {
		justify-content: center;
		position: sticky;
		top: 0;
		overflow: hidden;
	}
	.person {
		transform-origin: left;
    will-change: transform;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
		text-decoration: none;

		&::before {
			content: '';
			flex-shrink: 0;
			border-radius: 50%;
			background: var(--red);
			width: 3.5vw;
			height: 3.5vw;
			opacity: 0;
			scale: 0;
			transition: 0.3s ease-in-out;
		}
		h1, p {
			color: var(--deco2);
		}
		h1 {
			font-size: 7vw;	
		}
		p {
			font-size: 5.5vw;
			width: 100%;
		}
	}

	.person.active {
		h1 {
			color: var(--text);
		}
		p {
			color: var(--text-low);
		}
		&::before {
			opacity: 1;
			scale: 1;
		}
	}
	@media (max-width: 1000px) {
		.deco2 path, .deco3 rect {
			stroke-width: 24
		}
		.deco2 {
			right: 0;
			bottom: -3%;
		}
		h1 {
			font-size: 40px;
		}
		p {
			font-size: 28px;
		}
		img {
			border-radius: 24px;
		}
	}
	@media (max-width: 800px) {
		section.second {
			gap: 36px;
			flex-direction: column-reverse;
		}
		img {
			aspect-ratio: unset;
			width: 100%;
			flex-grow: 1;
			object-fit: cover;
			height: 200px;
		}
		.text {
			flex: unset;
		}
	}
</style>