<script lang="ts">
	import ItemCard from "./ItemCard.svelte";

	$: counter = 0

	function addCounter() {
		counter += 1
	}
</script>

<ItemCard />

<style>

</style>