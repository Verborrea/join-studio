<script>
	import { crearCopiasPath } from '$lib/utils'
	import { onMount } from "svelte";

	let mode = $state(false)
	let isFullScreenSize = $state(false);
	let { white = false } = $props();
	let isClient = $state(false);
  let isIOS = $state(false);

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

	function togglePathClass() {

		const pathElements = document.querySelectorAll('.path');
		const tempElements = document.querySelectorAll('.temp-path');

		pathElements.forEach(element => {
			element.classList.remove('path'); // Quita la clase "path"
			element.classList.add('temp-path'); // Añade una clase temporal
		});
		
		tempElements.forEach(element => {
			element.classList.remove('temp-path'); // Quita la clase temporal
			element.classList.add('path'); // Añade de nuevo la clase "path"
		});
	}

	const colores = ['var(--red)', 'var(--ora)', 'var(--yel)', 'var(--gre)', '#var(--blu)', 'var(--vio)', 'var(--text)'];

	if (typeof navigator !== 'undefined') {
    isClient = true;
    isIOS = /iPhone/i.test(navigator.userAgent);
  }

	onMount(() => {
		isFullScreenSize = document.fullscreenElement != null;

		const lemonde = setInterval(togglePathClass, 3000);

		crearCopiasPath('jo', colores);
		crearCopiasPath('in', colores, 1);

		return (() => clearInterval(lemonde))
	})
</script>

<header class="fc between g32 p32" class:white>
	<a href="/" id="title" class="title" title="Inicio" aria-label="Inicio">
		<svg width="80" height="80" viewBox="0 0 485 480" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="letras">
				<path d="M11.732 456.927L17.7129 448.007C23.5463 452.555 29.6078 456.039 35.924 458.436C42.2268 460.829 48.4759 462.041 54.6581 462.041C62.2885 462.041 68.4837 460.411 73.2312 457.169C77.9917 453.913 80.3652 449.744 80.3652 444.643C80.3652 440.594 78.6624 437.257 75.2426 434.632C69.4496 430.19 61.7996 429.882 54.792 429.505C41.2344 428.552 31.9813 426.949 27.0598 424.702C20.2989 421.427 15.3259 415.439 15.3259 407.68C15.3259 401.035 18.2896 395.556 24.2169 391.252C30.1442 386.945 37.8552 384.807 47.3226 384.807C54.202 384.807 60.9876 385.949 67.6926 388.225C74.3979 390.498 80.7675 393.861 86.8021 398.315L80.8214 406.873C75.7389 402.769 70.3881 399.69 64.7825 397.603C59.1773 395.53 53.4108 394.495 47.4702 394.495C41.2344 394.495 36.1117 395.706 32.0618 398.129C28.0254 400.549 26.0004 403.592 26.0004 407.236C26.0004 410.281 27.6125 412.751 29.9564 414.583C33.3492 417.14 40.6712 418.756 51.9358 419.455C63.0375 420.09 75.1983 420.614 83.8653 428.522C88.7466 432.976 91.1874 438.452 91.1874 444.953C91.1874 452.702 87.8349 459.082 81.1296 464.085C74.4247 469.091 65.641 471.595 54.7786 471.595C46.5582 471.595 38.9144 470.397 31.8607 467.987C24.807 465.593 18.0884 461.907 11.7052 456.953L11.732 456.927Z" fill="var(--text)"/>
				<path d="M125.37 471.164V394.87H90.6777V385.345H170.455V394.87H135.682V471.164H125.37Z" fill="var(--text)"/>
				<path d="M189.006 385.345V438.978C189.006 455.496 196.877 460.656 212.782 460.656C228.701 460.656 236.491 455.486 236.491 438.978V385.345H246.803V441.763C246.803 463.04 232.389 470.345 212.782 470.345C193.175 470.345 178.76 463.04 178.76 441.763V385.345H189.006Z" fill="var(--text)"/>
				<path d="M300.118 385.345C313.568 385.345 324.404 389.329 332.624 397.293C349.038 413.198 349.454 443.408 332.827 459.35C324.739 467.115 313.837 470.988 300.118 470.988H263.548V385.345H300.118ZM274.142 395.193V461.127C290.552 461.127 312.077 464.864 324.94 452.245C337.412 440.01 337.157 416.465 324.793 404.278C312.133 391.765 290.233 395.193 274.142 395.193Z" fill="var(--text)"/>
				<path d="M360.451 470.922V384.901H370.845V470.922H360.451Z" fill="var(--text)"/>
				<path d="M431.766 471.837C407.308 471.837 389.082 452.722 389.082 428.47C389.082 404.228 407.29 385.022 431.766 385.022C456.229 385.022 474.691 404.156 474.691 428.457C474.691 452.793 456.253 471.824 431.779 471.824L431.766 471.837ZM431.766 462.149C450.593 462.149 463.909 446.831 463.909 428.47C463.909 410.044 450.679 394.71 431.766 394.71C412.923 394.71 399.622 410.111 399.622 428.47C399.622 446.83 412.94 462.149 431.766 462.149Z" fill="var(--text)"/>
			</g>
			<path d="M216.59 97.255L205.567 70.2499C204.374 67.3167 205.554 63.9662 208.303 62.4187L227.52 51.6004C230.792 49.7572 234.949 51.2102 236.371 54.6953L246.656 80.3812" fill="var(--bg)"/>
			<path id="jo" d="M16.5643 286.197L24.6876 306.302C31.5207 323.215 50.6122 331.572 67.6732 325.118V325.118C85.282 318.458 93.9668 298.617 86.9143 281.161L43.9526 174.827L130.45 124.2C149.403 113.106 173.787 121.421 182.014 141.783L236.114 275.687C243.562 294.121 234.424 315.197 215.989 322.645V322.645C197.555 330.093 176.341 321.28 168.893 302.846L114.693 168.696C107.442 150.748 115.682 130.279 133.345 122.36L134.401 121.887" stroke="var(--text)" stroke-width="34"/>
			<path d="M125.919 99.5592L128.542 106.052C101.487 116.698 87.8964 148.266 98.7911 175.232L91.3737 178.229C79.1565 147.99 93.9312 112.483 125.919 99.5592Z" fill="var(--bg)"/>
			<path id="in" d="M216.295 49.1128L319.592 304.783C326.486 321.847 345.855 330.154 362.97 323.387V323.387C380.266 316.549 388.681 296.929 381.714 279.684L296.304 68.2872C289.114 50.4928 297.711 30.2394 315.506 23.05V23.05C333.3 15.8606 353.553 24.4576 360.743 42.252L456.455 279.148C463.644 296.942 455.047 317.195 437.253 324.385V324.385C419.458 331.574 399.205 322.977 392.016 305.183L374.69 262.3" stroke="var(--text)" stroke-width="34"/>
			<path d="M371.272 347.268C401.485 335.061 416.081 300.674 403.875 270.462L396.457 273.459C407.008 299.574 394.391 329.299 368.276 339.85L371.272 347.268Z" fill="var(--bg)"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M181.942 49.5103L241.282 25.5355L262.741 78.6479L203.401 102.623L181.942 49.5103ZM208.877 52.1096C204.781 53.7647 202.802 58.4273 204.457 62.5239L213.447 84.7763L243.117 72.7889L234.127 50.5365C232.471 46.4399 227.809 44.4608 223.712 46.1159L208.877 52.1096Z" fill="var(--bg)"/>
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
		{#if isClient && !isIOS}
		<button type="button" aria-label="Maximizar" title="Maximizar" onclick={toggleFullScreen}>
			{#if isFullScreenSize}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
			{/if}
		</button>
		{/if}
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
		z-index: 2;
		position: absolute;
		inset: 0 0 auto 0;
	}
	header button, .title, .title path {
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
	.white .title {
		--bg: black;
    --text: #EFEFEF;
    --red: #FF6C6C;
    --ora: #FF9D68;
    --yel: #FFD86E;
    --gre: #BCEE70;
    --blu: #70C4EE;
    --vio: #ED99EC;
	}
	@media (max-width: 700px) {
		#title svg {
			width: 56px;
			height: 56px;
		}
	}
</style>