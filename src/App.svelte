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
	$: loadingMessage = 'Consultando os Oráculos';

	async function loadGameEssentials() {
		spellsData = await API.getSpells({})
		itemsData = await API.getItems({})
/* 		loading = false */
	}

	onMount(loadGameEssentials)

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
	{#if loading}
		<Loading loadingDescription={loadingMessage} />
	{:else}
		<UserInteractionManager />
	{/if}
</main>

<style>
	main {
		overflow-y: hidden;
	}
</style>