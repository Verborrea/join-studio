<script>
	let msg = $state('')

	function sendMsg() {
		const encodedMessage = encodeURIComponent(msg);
		const whatsappUrl = `https://wa.me/+51910880595?text=${encodedMessage}`;

		// Abre la URL en una nueva pestaña
		window.open(whatsappUrl, '_blank');
		msg = ''
	}
</script>

<article id="footer" class="fcol between rel">
	<svg class="do deco deco1" width="321" height="166" viewBox="0 0 321 166" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="-174" y="20" width="475" height="126" rx="63" stroke="var(--deco)" stroke-width="40"/>
	</svg>
	<svg class="do deco deco2" width="340" height="571" viewBox="0 0 340 571" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M340 20H91.035C34.2069 20 20 41.6287 20 94.7286L20 287.059C20.0001 312.899 45.6793 334.068 71.8137 334.068H135.767C193.957 334.068 188.444 393.259 188.444 393.259V487.334C188.444 487.334 188.444 551 249.697 551H340" stroke="var(--deco)" stroke-width="40"/>
	</svg>
	<svg class="mo deco deco3" width="226" height="514" viewBox="0 0 226 514" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M226.5 501.5C188 501.5 164 483.5 164 441V170.893C164 122.098 88.329 122 88.329 170.893V331.544C88.329 388.5 12 388.5 12 331.544L12 69.5011C12 11.0011 63 12.0011 63 12.0011H226" stroke="var(--deco)" stroke-width="24"/>
	</svg>
	<svg class="mo deco deco4" width="72" height="128" viewBox="0 0 72 128" fill="var(--deco)" xmlns="http://www.w3.org/2000/svg">
		<circle cx="8" cy="8" r="8"/><circle cx="36" cy="8" r="8"/><circle cx="64" cy="8" r="8"/><circle cx="8" cy="36" r="8"/><circle cx="36" cy="36" r="8"/><circle cx="64" cy="36" r="8"/><circle cx="8" cy="64" r="8"/><circle cx="36" cy="64" r="8"/><circle cx="64" cy="64" r="8"/><circle cx="8" cy="92" r="8"/><circle cx="36" cy="92" r="8"/><circle cx="64" cy="92" r="8"/><circle cx="8" cy="120" r="8"/><circle cx="36" cy="120" r="8"/><circle cx="64" cy="120" r="8"/>
	</svg>
	<header class="p32 between fs">
		<svg width="144" height="144" viewBox="0 0 480 480" fill="var(--text)" xmlns="http://www.w3.org/2000/svg">
			<path d="M396.888 342.22C405.051 333.706 410.828 323.027 413.476 311.515C426.296 323.422 449.078 308.309 440.767 291.628L343.997 54.1518C336.705 33.2468 303.027 46.5456 312.082 66.9884L397.718 277.123C424.049 341.499 329.346 381.349 302.574 317.1L222.019 119.397L252.218 102.336L334.691 304.694C342.4 325.688 375.879 311.545 366.674 292.045L279.039 76.9723C256.8 20.1599 341.583 -20.5374 372.588 34.3451L472.882 279.169C491.765 324.922 438.289 369.816 396.888 342.22Z"/>
			<path d="M249.416 277.729L192.48 141.6C167.243 79.6798 73.5912 109.843 98.4 180L155.21 319.898C182.68 382.09 273.101 335.656 249.416 277.729ZM186.187 304.855L130.213 167.474C123.132 147.37 152.4 134.886 161.874 154.126L218.076 292.059C227.296 312.242 194.039 325.535 186.187 304.855Z"/>
			<path d="M105.511 299.338C105.511 330.792 78.4842 353.606 48.1156 350.658C21.9991 348.121 9.19788 326.181 0 303.604L28.5 288C32.1775 297.014 38.3649 310.587 49 315C63.2687 321.028 74.2341 306.622 69.7865 292.584L21.121 173.139L87.0054 136.042C81.233 149.04 80.0542 163.79 83.3845 177.606L64.3824 188.344C76.878 218.989 89.358 249.645 101.864 280.285C104.224 286.192 105.511 292.61 105.511 299.338Z"/>
			<path d="M215.461 103.278L204.438 76.2725C203.245 73.3392 204.425 69.9887 207.174 68.4413L226.391 57.623C229.663 55.7797 233.82 57.2328 235.242 60.7179L245.527 86.4037"/>
			<path d="M6.73201 456.927L12.7129 448.007C18.5463 452.555 24.6078 456.039 30.924 458.436C37.2268 460.829 43.4759 462.041 49.6581 462.041C57.2885 462.041 63.4837 460.412 68.2312 457.169C72.9917 453.914 75.3652 449.744 75.3652 444.643C75.3652 440.594 73.6624 437.257 70.2426 434.632C64.4496 430.19 56.7996 429.882 49.792 429.505C36.2344 428.552 26.9813 426.949 22.0598 424.702C15.2989 421.427 10.3259 415.44 10.3259 407.68C10.3259 401.035 13.2896 395.556 19.2169 391.252C25.1442 386.945 32.8552 384.807 42.3226 384.807C49.202 384.807 55.9876 385.949 62.6926 388.225C69.3979 390.498 75.7675 393.861 81.8021 398.315L75.8214 406.874C70.7389 402.769 65.3881 399.69 59.7825 397.603C54.1773 395.53 48.4108 394.495 42.4702 394.495C36.2344 394.495 31.1117 395.706 27.0618 398.129C23.0254 400.549 21.0004 403.592 21.0004 407.236C21.0004 410.281 22.6125 412.751 24.9564 414.583C28.3492 417.14 35.6712 418.756 46.9358 419.455C58.0375 420.09 70.1983 420.614 78.8653 428.523C83.7466 432.976 86.1874 438.452 86.1874 444.954C86.1874 452.702 82.8349 459.083 76.1296 464.085C69.4247 469.091 60.641 471.595 49.7786 471.595C41.5582 471.595 33.9144 470.397 26.8607 467.987C19.807 465.594 13.0884 461.907 6.7052 456.954L6.73201 456.927Z"/>
			<path d="M120.37 471.164V394.87H85.6777V385.345H165.455V394.87H130.682V471.164H120.37Z"/>
			<path d="M184.006 385.345V438.978C184.006 455.496 191.877 460.656 207.782 460.656C223.701 460.656 231.491 455.486 231.491 438.978V385.345H241.803V441.763C241.803 463.04 227.389 470.344 207.782 470.344C188.175 470.344 173.76 463.04 173.76 441.763V385.345H184.006Z"/>
			<path d="M295.118 385.345C308.568 385.345 319.404 389.329 327.624 397.293C344.038 413.198 344.454 443.408 327.827 459.35C319.739 467.115 308.837 470.988 295.118 470.988H258.548V385.345H295.118ZM269.142 395.193V461.126C285.552 461.126 307.077 464.864 319.94 452.245C332.412 440.01 332.157 416.465 319.793 404.277C307.133 391.765 285.233 395.193 269.142 395.193Z"/>
			<path d="M355.451 470.923V384.901H365.845V470.923H355.451Z"/>
			<path d="M426.766 471.837C402.308 471.837 384.082 452.722 384.082 428.47C384.082 404.228 402.29 385.022 426.766 385.022C451.229 385.022 469.691 404.156 469.691 428.457C469.691 452.793 451.253 471.824 426.779 471.824L426.766 471.837ZM426.766 462.149C445.593 462.149 458.909 446.831 458.909 428.47C458.909 410.043 445.679 394.71 426.766 394.71C407.923 394.71 394.622 410.111 394.622 428.47C394.622 446.83 407.94 462.149 426.766 462.149Z"/>
		</svg>
	</header>
	<footer>
		<form class="fcol p32 fs" onsubmit={(event) => {event.preventDefault(); sendMsg();}}>
			<div>
				<p>Escribenos</p>
				<p>estamos para tí</p>
			</div>
			<div class="input fc">
				<input type="text" placeholder="Tu mensaje" bind:value={msg}>
				<button type="submit" aria-label="Enviar" title="Enviar">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-input)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-forward"><polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></svg>
				</button>
			</div>
		</form>
		<div class="info p32 between fs">
			<address class="fcol">
				<p>Arequipa</p>
				<a href="tel:51910880595">T. +51 910 880 595</a>
				<a href="https://maps.app.goo.gl/93u99cXdLsiyXadY8" target="_blank">Francisco Bolognesi 108, Cercado</a>
			</address>
			<div class="navs fc">
				<nav class="fcol">
					<a href="https://www.instagram.com/joinstudio.tv/" target="_blank">TikTok</a>
					<a href="https://www.instagram.com/joinstudio.tv/" target="_blank">Facebook</a>
					<a href="https://www.instagram.com/joinstudio.tv/" target="_blank">Instagram</a>
				</nav>
			</div>
		</div>
		<p class="fcc p32">&copy; 2025 Join Studio</p>
	</footer>
</article>

<style>
	.deco1, .deco4 {
    top: 27%;
	}
	.deco2, .deco3 {
		top: 0;
		right: 0;
	}
	.deco4 {
		left: 24px;
	}
	a {
		font-weight: 400;
	}
	a:hover {
		color: var(--text-low);
	}
	address {
		font-style: normal;
	}
	article {
		overflow-x: hidden;
		/* scroll-snap-align: center; */
		min-height: 100svh;
	}
	form {
		gap: 16px !important;
	}
	input {
		padding: 0;
		background: transparent;
		border: none;
		width: 100%;
	}
	input:focus {
		outline: none;
	}
	.fcol {
		gap: 4px;
	}
	.input {
		gap: 10px;
		border-radius: 2em;
		font-weight: inherit;
		word-wrap: break-word;
		line-height: 1;
		display: flex;
		padding: 12px 24px;
		align-items: center;
		border-radius: 32px;
		border: 2px solid var(--text-input);
		background: white !important;
		backdrop-filter: blur(4px);
	}
	.info nav {
		padding-right: 144px;
	}
	.info .fcol {
		align-items: flex-start;
	}
	@media (max-width: 700px) {
		.deco1 rect, .deco2 path {
			stroke-width: 24
		}
		.info {
			flex-direction: column;
			gap: 24px;
		}
		.navs {
			width: 100%;
			justify-content: space-between;
		}
		.navs>.fcol {
			flex: 1;
		}
		.info {
			padding: 0 24px;
		}
		.info nav {
			padding-right: 0;
		}
		.input {
			width: 100%;
		}
		header svg {
			width: 96px;
			height: auto;
			flex-shrink: 0;
		}
	}
	@media (max-width: 360px) {
		.deco3 {
			right: -100px;
		}
	}
</style>