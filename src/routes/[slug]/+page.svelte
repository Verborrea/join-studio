<script>
	import Header from "$lib/Header.svelte"
	import Footer from "$lib/Footer.svelte"
	import Rainbow from "$lib/Rainbow.svelte"
	import { page } from '$app/stores'
	import { onMount } from "svelte"
	import Hls from 'hls.js'
	import kombucha from '$lib/images/kombucha.avif';

	const videoSrc = '/video_pipeline/video.m3u8';

	let winw = $state();
	let videoElement = $state();
	let play = $state(false);
	let sound = $state(false);
	let ended = $state(false);

	function tooglePlay() {
		play = !play
		if (play) {
			videoElement.play()
		} else {
			videoElement.pause()
		}
	}

	function toggleSound() {
		videoElement.muted = !videoElement.muted;
    sound = videoElement.muted;
	}

	function replayVideo() {
		ended = false
		videoElement.currentTime = 0;
		videoElement.play();
  }

	function showReplay() {
		console.log('show replay')
		ended = true
	}

	onMount(() => {
		if (Hls.isSupported()) {
			// Si el navegador soporta HLS.js
			const hls = new Hls();
			hls.loadSource(videoSrc);
			hls.attachMedia(videoElement);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				// videoElement.play();
			});
		} else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
			// Para navegadores como Safari que soportan HLS de forma nativa
			videoElement.src = videoSrc;
			videoElement.addEventListener('loadedmetadata', function () {
			});
		}
	})
</script>

<svelte:head>
	<title>{$page.params.slug} • Join Studio</title>
</svelte:head>

<svelte:window bind:innerWidth={winw}/>

<Header white={winw <= 700}/>
<div class="topo abs"></div>
<section class="contents rel fc p32 g32">
	<svg class="deco do deco1" width="515" height="166" viewBox="0 0 515 166" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="495" y="146" width="475" height="126" rx="63" transform="rotate(-180 495 146)" stroke="var(--deco)" stroke-width="40"/>
	</svg>
	<section class="image rel">
		<video id="video" playsinline bind:this={videoElement} onended={showReplay} poster={kombucha}>
			<track kind="captions">
		</video>
		<div class="imgd abs fcol p32 g32">
			<div class="btns fcc g32">
				{#if ended}
					<button class="fcc" type="button" title="Replay" aria-label="Replay" onclick={replayVideo}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
					</button>
				{:else}
					<button class="fcc" type="button" title="Play/Pause" aria-label="Play/Pause" onclick={tooglePlay}>
						{#if play}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>
						{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
						{/if}
					</button>
					<button class="fcc" type="button" title="Toogle Mute" aria-label="Toogle Mute" onclick={toggleSound}>
						{#if sound}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293"/><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"/><path d="m2 2 20 20"/><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"/><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"/></svg>
						{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
						{/if}
					</button>
				{/if}
			</div>
			<h1 class="mo">{$page.params.slug}</h1>
			<p class="desc mo">Arquitecto Digital</p>
			<a class="mo" href="#text">ver +</a>
		</div>
	</section>
	<section class="grow rel fc g32">
		<svg class="deco mo deco2" width="72" height="128" viewBox="0 0 72 128" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="8" cy="92" r="8"/><circle cx="36" cy="92" r="8"/><circle cx="64" cy="92" r="8"/><circle cx="8" cy="120" r="8"/><circle cx="36" cy="120" r="8"/><circle cx="64" cy="120" r="8"/>
		</svg>
		<svg class="deco mo deco3" width="195" height="171" viewBox="0 0 195 171" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="12" y="12" width="259" height="147" rx="52" stroke="var(--deco)" stroke-width="24"/>
		</svg>
		<article id="text" class="text grow fcol g32">
			<div class="fcol">
				<h1>{$page.params.slug}</h1>
				<p class="desc">Arquitecto Digital</p>
			</div>
			<p class="content">
				Hey! me encargo de <Rainbow text="diseñar"/> y <strong>desarrollar</strong> soluciones basadas en <em>tecnología</em>
				para su empresa. Web, IA, seguridad, creación de sistemas, todo eso y más...
			</p>
			<a href="/#circle" class="link">Regresar a talentos</a>
		</article>
	</section>
</section>
<Footer/>

<style>
	.deco1 {
		top: 25%;
		right: 12%;
	}
	.deco2 {
		top: 24px;
		left: 24px;
	}
	.deco3 {
		right: 0;
		top: 48px;
	}
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
		overflow-y: hidden;
		justify-content: flex-start;
	}
	.text {
		width: 100%;
		max-width: max(50vw, 800px);
		align-self: flex-end;
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
		line-height: 1.5;
		display: flex;
		font-size: 36px;
		align-self: flex-start;
		will-change: background-position;
		background: linear-gradient(90deg, var(--highlight) 50%, transparent 50%);
		background-size: 200% 100%;
		background-position: 100% 0;
		transition: background-position 0.3s ease-out;
	}
	.link:hover {
		background-position: 0 0;
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
	@media (max-width: 1000px) {
		h1 {
			font-size: 48px;
			word-break: break-word;
		}
		.desc, p, .link {
			font-size: 24px;
		}
	}
	@media (max-width: 700px) {
		.topo {
			height: 150px;
			left: 0;
			right: 0;
			background: linear-gradient(black 30%, transparent);
			z-index: 1;
		}
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
			align-self: center;
			text-align: center;
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
		.contents {
			display: contents;
		}
		.image {
			width: 100%;
			height: 100dvh;
		}
		.content {
			width: 100%;
		}
		.text {
			padding: 24px;
			align-self: center;
		}
	}
</style>