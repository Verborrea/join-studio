<script>
	import Intro from './Intro.svelte'
	import Content from './Content.svelte'

	let show = $state(false);
	
	function showPage() {
		setTimeout(() => {
			show = false
		}, 500)
	}
</script>

<svelte:head>
	<title>Join Studio • Agencia Creativa</title>
</svelte:head>

<!-- {#if show}
<Intro on:ready={showPage}/>
{/if} -->
<Content {show}/>