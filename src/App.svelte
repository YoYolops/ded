<script lang="ts">
	import ItemCard from "./ItemCard.svelte";

	$: counter = 0

	function addCounter() {
		counter += 1
	}
</script>

<ItemCard />

<style>
	* {
		display:flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 55px;
	}
</style>