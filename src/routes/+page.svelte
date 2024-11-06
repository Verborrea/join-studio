<script>
	import Intro from './Intro.svelte'
	import Content from './Content.svelte'

	let show = $state(true);
	
	function showPage() {
		setTimeout(() => {
			show = false
		}, 500)
	}
</script>



{#if show}
<Intro on:ready={showPage}/>
{/if}
<Content {show}/>