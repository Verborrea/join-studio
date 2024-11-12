<script>
	import Header from "$lib/Header.svelte"
	import Footer from "$lib/Footer.svelte"
	import Rainbow from "$lib/Rainbow.svelte"
	import { page } from '$app/stores'

	import talentos from "$lib/images/talentos.avif"

	let winw;
</script>

<svelte:head>
	<title>{$page.params.slug} • Join Studio</title>
</svelte:head>

<svelte:window bind:innerWidth={winw}/>

<Header white={winw <= 1000}/>
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
	<svg class="abs deco3" width="1440" height="890" viewBox="0 0 1440 890" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1440 870H700.05C624.5 870 620 754.875 700.287 754.875L944.617 755.378C1022 755.378 1022 639.252 944.856 639.252H478.996C478.996 639.252 332.495 651.217 332.495 491.162V138.541C332.495 57.5131 285.499 20 215.495 20L0.000488281 20" stroke="#E4E4E4" stroke-width="40"/>
	</svg>
	<section class="image">
		<img src={talentos} alt="some alt text" />
		<div class="imgd abs fcol mo p32 g32">
			<h1>{$page.params.slug}</h1>
			<p class="desc">Arquitecto Digital</p>
			<a href="#text">ver +</a>
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
		</article>
	</section>
</section>
<section class="fcc p32">
	<a href="/talentos" class="link"><h1>Ver más talentos</h1></a>
</section>
<Footer/>

<style>
	.rel {
		overflow-x: hidden;
	}
	section {
		scroll-snap-align: center;
		height: 100dvh;
		justify-content: center;
	}
	img {
		height: calc(100% - 110px);
		aspect-ratio: 9 / 16;
		object-fit: cover;
		border-radius: 32px;
	}
	.contents {
		flex-direction: row-reverse;
	}
	.contents > section {
		height: 100dvh;
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
	.desc{
		font-size: 48px;
		color: var(--text-low);
	}
	.link {
		font-size: 8vw;
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
	}
	.imgd {
		display: flex;
		inset: auto 0 0 0;
		text-align: center;
		padding-block: 48px;
	}
	.imgd > * {
		color: white;
	}
	.mo {
		display: none;
	}
	@media (max-width: 1000px) {
		.imgd {
			display: flex;
		}
		p {
			font-size: 24px;
		}
		article .fcol {
			gap: 8px;
		}
		img {
			height: 100%;
			aspect-ratio: unset;
			width: 100%;
			border-radius: 0;
			filter: brightness(0.5);
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
			font-size: 28px;
		}
		.content {
			width: 100%;
		}
		.text {
			padding: 24px;
		}
		.deco3 path {
			stroke-width: 24
		}
	}
</style>