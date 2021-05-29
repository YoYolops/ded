<script lang="ts">
	import ItemCard from "./ItemCard.svelte";
	import ItensList from "./gameData/ItensData"

</script>


<div class="teste" ></div>

{#each ItensList as item}
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
{/each}

<style>
	.teste {
		background-image: url("/Catnip Amulet.png");
	}
</style>