<script>
	import Intro from "./Intro.svelte";
	import Header from "./Header.svelte";
	import { onMount } from "svelte";

	let show = false

	function rotateColorPattern() {
		const elements = document.querySelectorAll("p span[class^='c']")
		
		elements.forEach((el, _) => {
			const currentIndex = parseInt(el.className.replace('c', ''), 10)
			el.className = `c${(currentIndex - 1 + 6 ) % 6}`
		})
	}

	function showPage() {
		show = true
	}

	onMount(()=> {
		setInterval(rotateColorPattern, 200);
	})
</script>

{#if show}
<Header/>
<main class="fc">
	<p class="p32">
		Bienvenido a
		<strong>
			Join
			<span class="rainbow">
				<span class="c0">S</span>
				<span class="c1">t</span>
				<span class="c2">u</span>
				<span class="c3">d</span>
				<span class="c4">i</span>
				<span class="c5">o</span>
			</span>
		</strong>, una agencia creativa donde hacemos contenido de calidad especializado en tí.
	</p>
</main>
{:else}
<Intro on:ready={showPage}/>
{/if}

<style>
	main {
		height: calc(100dvh - 110px);
	}
	p {
		animation: help	1.5s;
		line-height: 1;
		font-size: 42px;
		max-width: 30ch;
	}

	@media (max-width: 1000px) {
		main {
			height: calc(100dvh - 94px);
		}
		p {
			font-size: 36px;
		}
	}
	@media (max-width: 800px) {
		main {
			height: calc(100dvh - 72px);
		}
		p {
			font-size: 24px;
		}
	}
</style>