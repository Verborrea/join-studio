<script>
	import { onMount } from "svelte";

	let mode = $state(false)
	let isFullScreenSize = $state(false);
	let { white = false } = $props();

	function toggleTheme() {
		mode = !mode
		document.body.classList.toggle('dark')
	}

	function toggleFullScreen() {
		if (isFullScreenSize) {
			isFullScreenSize = false
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) { // Firefox
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) { // IE/Edge
				document.msExitFullscreen();
			} else {
				isFullScreenSize = true
			}
		} else {
			isFullScreenSize = true
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) { // Firefox
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari y Opera
				document.documentElement.webkitRequestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
				document.documentElement.msRequestFullscreen();
			} else {
				isFullScreenSize = false
			}
		}
	}

	onMount(() => {
		isFullScreenSize = document.fullscreenElement != null;
	})
</script>

<header class="fc between g32 p32" class:white>
	<a href="/" id="title" class="title" title="Inicio" aria-label="Inicio">
		<svg width="80" height="80" viewBox="0 0 480 480" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
	</a>
	<div class="fc g32">
		<button type="button" aria-label="Cambiar tema" title="Cambiar tema" onclick={toggleTheme}>
			{#if mode}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
			{/if}
		</button>
		<button type="button" aria-label="Maximizar" title="Maximizar" onclick={toggleFullScreen}>
			{#if isFullScreenSize}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{/if}
		</button>
		<a href="https://wa.me/51910880595?text=Hola!" target="_blank" class="mo" title="Hablemos" aria-label="Hablemos">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
		</a>
		<a href="https://wa.me/51910880595?text=Hola!" target="_blank" class="btn do">
			Hablemos
		</a>
	</div>
</header>
<style>
	header {
		z-index: 1;
		position: absolute;
		inset: 0 0 auto 0;
	}
	header button, .title {
		color: inherit;
	}
	header.white {
		color: white;
	}
	.title {
		font-weight: 500;
		position: relative;
		z-index: 1;
	}
	@media (max-width: 700px) {
		#title svg {
			width: 56px;
			height: 56px;
		}
	}
</style>