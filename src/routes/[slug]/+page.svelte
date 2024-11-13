<script>
	import Header from "$lib/Header.svelte"
	import Footer from "$lib/Footer.svelte"
	import Rainbow from "$lib/Rainbow.svelte"
	import { page } from '$app/stores'

	let winw = $state();
	let videoElement = $state();
	let play = $state(true);
	let sound = $state(false);

	function tooglePlay() {
		play = !play
		if (play) {
			videoElement.play()
		} else {
			videoElement.pause()
		}
	}

	function toggleSound() {
		sound = !sound
	}
</script>

<svelte:head>
	<title>{$page.params.slug} • Join Studio</title>
</svelte:head>

<svelte:window bind:innerWidth={winw}/>

<Header white={winw <= 1000}/>
<svg class="abs deco3" width="1440" height="890" viewBox="0 0 1440 890" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1440 870H700.05C624.5 870 620 754.875 700.287 754.875L944.617 755.378C1022 755.378 1022 639.252 944.856 639.252H478.996C478.996 639.252 332.495 651.217 332.495 491.162V138.541C332.495 57.5131 285.499 20 215.495 20L0.000488281 20" stroke="#E4E4E4" stroke-width="40"/>
</svg>
<section class="contents rel fc p32 g32">
	<svg class="abs deco2 mo" width="72" height="128" viewBox="0 0 72 128" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
		<circle cx="8" cy="8" r="8"/>
		<circle cx="36" cy="8" r="8"/>
		<circle cx="64" cy="8" r="8"/>
		<circle cx="8" cy="36" r="8"/>
		<circle cx="36" cy="36" r="8"/>
		<circle cx="64" cy="36" r="8"/>
		<circle cx="8" cy="64" r="8"/>
		<circle cx="36" cy="64" r="8"/>
		<circle cx="64" cy="64" r="8"/>
		<circle cx="8" cy="92" r="8"/>
		<circle cx="36" cy="92" r="8"/>
		<circle cx="64" cy="92" r="8"/>
		<circle cx="8" cy="120" r="8"/>
		<circle cx="36" cy="120" r="8"/>
		<circle cx="64" cy="120" r="8"/>
	</svg>
	<svg class="abs deco1 mo" width="195" height="171" viewBox="0 0 195 171" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="12" y="12" width="259" height="147" rx="52" stroke="#E4E4E4" stroke-width="24"/>
	</svg>
	<section class="image rel">
		<video src="/videos/gaudi.webm" bind:this={videoElement} autoplay muted loop>
			Tu navegador no admite el elemento <code>video</code>.
		</video>
		<div class="imgd abs fcol p32 g32">
			<div class="btns fcc g32">
				<button class="fcc" type="button" title="Play/Pause" aria-label="Play/Pause" onclick={tooglePlay}>
					{#if play}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>
					{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
					{/if}
				</button>
				<button  class="fcc" type="button" title="Toogle Mute" aria-label="Toogle Mute" onclick={toggleSound}>
					{#if sound}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293"/><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"/><path d="m2 2 20 20"/><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"/><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"/></svg>
					{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
					{/if}
				</button>
			</div>
			<h1 class="mo">{$page.params.slug}</h1>
			<p class="desc mo">Arquitecto Digital</p>
			<a class="mo" href="#text">ver +</a>
		</div>
	</section>
	<section class="grow fc g32">
		<article id="text" class="text grow fcol g32">
			<div class="fcol">
				<h1>{$page.params.slug}</h1>
				<p class="desc">Arquitecto Digital</p>
			</div>
			<p class="content">
				Hey! me encargo de <Rainbow text="diseñar"/> y <strong>desarrollar</strong> soluciones basadas en <em>tecnología</em>
				para su empresa. Web, IA, seguridad, creación de sistemas, todo eso y más...
			</p>
			<a href="/#circle" class="link">Ver + talentos</a>
		</article>
	</section>
</section>
<Footer/>

<style>
	.rel {
		overflow-x: hidden;
	}
	section {
		/* scroll-snap-align: center; */
		height: 100dvh;
		justify-content: center;
	}
	video {
		height: calc(100% - 110px);
		aspect-ratio: 9 / 16;
		object-fit: cover;
		border-radius: 32px;
	}
	.contents {
		flex-direction: row-reverse;
	}
	.contents > section {
		height: 100%;
	}
	.grow {
		justify-content: flex-start;
	}
	.text {
		width: 100%;
		max-width: max(50vw, 800px);
	}
	.image {
		height: 100%;
		display: flex;
    align-items: flex-end;
	}
	.desc {
		font-size: 48px;
		color: var(--text-low);
	}
	.link {
		display: block;
		padding: 0.5em 0.75em;
		transition: 0.2s ease-in-out;
		border-radius: 0.5em;
		text-align: center;
	}
	.link:hover {
		background: var(--yel);
	}
	.deco1, .deco2, .deco3 {
		z-index: -1;
	}
	.deco2 {
		left: 24px;
		top: calc(100% + 24px);
	}
	.deco1 {
		top: 108%;
		right: 0;
	}
	.deco3 {
		top: 60%;
		left: 0;
		right: 0;
		width: 100%;
		height: unset;
	}
	.imgd {
		display: flex;
		inset: auto 0 0 0;
		text-align: center;
		padding-block: 48px;
	}
	.imgd * {
		color: white;
	}
	.mo {
		display: none;
	}
	.btns button {
		width: 48px;
		height: 48px;
		background: white;
		border-radius: 50%;
	}
	@media (max-width: 600px) {
		.mo {
			display: block;
		}
		.imgd {
			display: flex;
		}
		.desc {
			font-size: 24px;
		}
		.link {
			font-size: 24px;
		}
		article .fcol {
			gap: 8px;
		}
		video {
			height: 100%;
			aspect-ratio: unset;
			width: 100%;
			border-radius: 0;
			filter: brightness(0.75);
		}
		.contents > section {
			height: 100dvh;
		}
		.deco3 {
			top: 179%;
		}
		.contents {
			display: contents;
		}
		.image {
			width: 100%;
			height: 100dvh;
		}
		.desc {
			/* font-size: 28px; */
		}
		.content {
			width: 100%;
		}
		.text {
			padding: 24px;
		}
	}
</style>