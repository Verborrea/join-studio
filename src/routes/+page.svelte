<script>
	import { onMount } from "svelte";

	function rotateColorPattern() {
		const elements = document.querySelectorAll("path[class^='c']")
		
		elements.forEach((el) => {
			const currentClass = el.className.baseVal.match(/c(\d)/)
			const currentIndex = parseInt(currentClass[1]);
			const newIndex = (currentIndex - 1 + 6) % 6
			el.className.baseVal = `c${newIndex}`
		});
	}

	onMount(() => {
		const interval = setInterval(rotateColorPattern, 100);

		return () => clearInterval(interval);
	});
</script>

<main class="fcc">
	<article class="fcc fcol p32">
		<svg width="72" height="73" viewBox="0 0 72 73" fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
			<path class="c0" d="M6 30.5V39.5" stroke="currentColor"/>
			<path class="c1" d="M18 18.5V51.5" stroke="currentColor"/>
			<path class="c2" d="M30 9.5V63.5" stroke="currentColor"/>
			<path class="c3" d="M42 24.5V45.5" stroke="currentColor"/>
			<path class="c4" d="M54 15.5V54.5" stroke="currentColor"/>
			<path class="c5" d="M66 30.5V39.5" stroke="currentColor"/>
		</svg>
		<p>
			Bienvenido a <strong>Join Studio</strong>, una experiencia audiovisual interactiva.
			Encienda sus <strong>parlantes</strong> o conecte sus <strong>audífonos</strong>.
		</p>
		<button type="button" class="btn">
			Estoy listo
		</button>
	</article>
</main>

<style>
	main {
		min-height: calc(100dvh - 110px);
	}
	article {
		gap: 64px;
	}
	p {
		font-size: 24px;
		line-height: 1.3;
		color: var(--text-low);
		max-width: 34ch;
		text-align: center;
	}
	@media (max-width: 700px) {
		p {
			font-size: 20px;
		}
	}
</style>
