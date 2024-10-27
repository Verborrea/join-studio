<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	let showContainer1 = true
	let showContainer2 = false

	function stage1(e) {
		if (e.animationName === "bigtime") {
			showContainer1 = false;
			showContainer2 = true;
		}
	}

	function stage2(e) {
		if (e.animationName === "bigtime") {
			showContainer2 = false;
			dispatch('ready')
		}
	}
</script>

{#if showContainer1}
<div class="container1">
	<div class="up">Join</div>
	<div class="down rainbow" onanimationend={(e)=>stage1(e)}>
		<span class="c0">S</span>
		<span class="c1">t</span>
		<span class="c2">u</span>
		<span class="c3">d</span>
		<span class="c4">i</span>
		<span class="c5">o</span>
	</div>
</div>
{/if}
{#if showContainer2}
<div class="container2 fcc">
	<p onanimationend={(e)=>stage2(e)}>Somos una agencia creativa</p>
</div>
{/if}

<style>
	.container1, .container2 {
		overflow: hidden;
		height: 100dvh;
		width: 100vw;
	}
	.container1 {
		display: grid;
		place-items: center;
		grid-template-rows: auto auto;
		
		align-content: center;
		align-items: center;
		justify-content: center;
	}
	p {
		font-size: 52vw;
		white-space: nowrap;
		text-align: center;
		animation: smalltime 1.25s ease-out 0s backwards, bigtime 1.25s ease-in 1.25s forwards;
	}
	.up, .down {
		font-size: 100vw;
		line-height: 1;
		font-weight: 600;
	}
	.up {
    transform-origin: bottom;
		animation: smalltime 1.25s ease-out 0s backwards, bigtime 1.25s ease-in 1.25s forwards;
	}
	.down {
		transform-origin: top;
		animation: smalltime 1.25s ease-out 0.5s backwards, bigtime 1.25s ease-in 1.75s forwards;
	}
</style>