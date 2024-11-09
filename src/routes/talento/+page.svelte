<script>
	import Header from "../Header.svelte"
	import Footer from "../Footer.svelte"
	import Rainbow from "./Rainbow.svelte"
	import talentos from "$lib/images/talentos.avif"

	let scroll = $state(0)
	let winw = $state(0)
	let winh = $state(0)
	let double = $derived(winw / 2)

	const people = [
		{ name: 'Erick Porroa', desc: 'Productor' },
		{ name: 'Carlos Solis', desc: 'Productor' },
		{ name: 'César Soplin', desc: 'Creador Digital' },
		{ name: 'Alan Monroy', desc: 'Desarrollador Web' },
		{ name: 'Adriana Velazco', desc: 'Diseñadora Gráfica' },
		{ name: 'Juan Carlos Llanos', desc: 'Experto en reputación' },
		{ name: 'Gustavo Inojoque', desc: 'Filmmaker' },
		{ name: 'Marko Manrique', desc: 'Genio Creativo' }
	]
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={winh} bind:innerWidth={winw}/>

<Header/>
<section class="circle">
	<div class="fcc p32">
		<div class="abs ball"></div>
		{#each people as person, idx}
		{@const val = (idx * 275 - 2.36 * winh + scroll)/814 }
			<div class:active={Math.abs(val) < 0.17} class="abs person fcol" style="transform: translate({double*Math.cos(val)}px, {double*Math.sin(-val)}px) rotate({-val}rad);">
				<h1>{person.name}</h1>
				<p>{person.desc}</p>
			</div>
		{/each}
	</div>
</section>
<section class="second fc g32 p32">
	<div class="text grow fcol g32">
		<h1>Talentos</h1>
		<p>Somos una familia de gente <Rainbow text="creativa"/> con la misión de convertir tus ideas en realidad.</p>
	</div>
	<img src={talentos} alt="some alt text" />
</section>
<Footer></Footer>

<style>
	.ball {
		border-radius: 50%;
    background: var(--red);
		width: 4vw;
		height: 4vw;
		left: calc(43vw + 32px);
	}
	.fcc {
		justify-content: flex-start;
		position: sticky;
		top: 0;
		transform: translateX(-43vw);
	}
	section.second, .fcc {
		height: 100svh;
	}
	section.circle {
		height: 300svh;
	}
	.person {
    transform-origin: left;
    will-change: transform;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
	}
	.person h1 {
		font-size: 7vw;
		color: #bdbdbd;
	}
	.person p {
		font-size: 4vw;
		color: #bdbdbd;
	}
	.person.active h1 {
		color: var(--text);
	}
	.person.active p {
		color: var(--text-low);
	}
	h1 {
		line-height: 1;
		font-weight: 500;
		font-size: 112px;
	}
	p {
		font-size: 32px;
		width: min(720px, 100%);
	}
	img {
		height: 100%;
		aspect-ratio: 9 / 16;
		object-fit: cover;
		border-radius: 32px;
	}
	@media (max-width: 1000px) {
		.ball {
			left: calc(43vw + 24px);
		}
		h1 {
			font-size: 48px;
		}
		p {
			font-size: 32px;
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