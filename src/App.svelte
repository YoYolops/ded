<script lang="ts">
	import { onMount } from "svelte";
	import ItemCard from "./cards/ItemCard.svelte";
	import Inventory from "./playerTools/Inventory.svelte";
	import UserInteractionManager from "./userFirstInteractionSystem/UserInteractionManager.svelte"
	import API from './masterFunctions/API';
	import type { Spell, Item } from './types';
	import Loading from './generalComponents/Loading.svelte';

	let spellsData: Spell;
	let itemsData: Item;

	let loading: boolean = true
	$: loadingMessage = 'Consultando os Oráculos...';
	$: loadingWidth = 0

	async function loadGameEssentials() {
		loadingWidth += 30
		spellsData = await API.getSpells({})

		loadingWidth += 30
		loadingMessage = "Organizando Grimórios..."
		itemsData = await API.getItems({})
		loadingWidth = 100

		loading = false
	}

	onMount(() => loadGameEssentials)

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
<main>
	<UserInteractionManager />
</main>

<style>
	main {
		overflow-y: hidden;
	}
</style>