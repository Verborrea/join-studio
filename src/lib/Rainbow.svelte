<script>
	let { text } = $props()

	let letters = text.split('')
</script>

<strong>
	{#each letters as letter, i}
		<span class={`c${i % 6}`}>{letter}</span>
	{/each}
</strong>

<style>
	span {
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-fill-mode: both;
	}
</style>