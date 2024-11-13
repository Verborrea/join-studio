<script>
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

<section id="circle" class="rel circle">
	<div class="sticky fcol p32">
		{#each people as person, idx}
		{@const val = (scroll - 4 * winh - idx * 250)/814 }
			<a href="/{person.name}" class:active={Math.abs(val) < 0.15} class="person abs fc g32" style="transform: translate({double * (Math.cos(val) - 1)}px, {-double*Math.sin(val)}px) rotate({-val}rad);">
				<div class="fcol">
					<h1>{person.name}</h1>
					<p>{person.desc}</p>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.circle {
		height: 346svh;
	}
	.sticky {
		height: 100svh;
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
</style>