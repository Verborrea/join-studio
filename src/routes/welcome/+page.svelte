<main class="fcc">
	<article class="advise fcc fcol p32">
		<svg width="72" height="73" viewBox="0 0 72 73" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
			<path d="M6 30.5V39.5"/>
			<path d="M18 18.5V51.5"/>
			<path d="M30 9.5V63.5"/>
			<path d="M42 24.5V45.5"/>
			<path d="M54 15.5V54.5"/>
			<path d="M66 30.5V39.5"/>
		</svg>
		<p>
			Bienvenido a <strong>Join <span class="c0">S</span><span class="c1">t</span><span class="c2">u</span><span class="c3">d</span><span class="c4">i</span><span class="c5">o</span></strong>, una experiencia audiovisual interactiva.
			Encienda sus <strong>parlantes</strong> o conecte sus <strong>audífonos</strong>.
		</p>
		<a href="/" class="btn">
			Estoy listo
		</a>
	</article>
</main>

<style>
	main {
		min-height: 100dvh;
	}
	article {
		gap: 64px;
	}
	p {
		font-size: 24px;
		line-height: 1.3;
		max-width: 34ch;
		text-align: center;
	}
	@media (max-width: 700px) {
	 	p {
			font-size: 20px;
		}
	}

	svg {
		transform-origin: center;
		animation: breath 2s ease-in-out infinite reverse;
	}
	@keyframes breath {
		0%, 100% { transform: scaleY(0.95) }
		50% { transform: scaleY(1.05) }
	}
	span, path {
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}

	path:nth-child(1) { animation-name: breathing_1 }
	path:nth-child(2) { animation-name: breathing_2 }
	path:nth-child(3) { animation-name: breathing_3 }
	path:nth-child(4) { animation-name: breathing_4 }
	path:nth-child(5) { animation-name: breathing_5 }
	path:nth-child(6) { animation-name: breathing_6 }
</style>
