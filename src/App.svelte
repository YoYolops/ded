<script lang="ts">
	import ItemCard from "./cards/ItemCard.svelte";
	import ItensList from "./gameData/ItensData";
	import Inventory from "./playerTools/Inventory.svelte";

</script>

<!-- {#each ItensList as item}
	<ItemCard 
		id={item.id}
		name={item.name}
		rarity={item.rarity}
		imageUrl={item.imageUrl}
		description={item.description}
		atk={item.atk}
		def={item.def}
		weight={item.weight}
		type={item.type}
	/>
{/each} -->

<Inventory />

<style>

</style>