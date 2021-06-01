<!-- esse componente exibirá todas as cartas em posse do jogador separadas em seções:
    -> itens
    -> feitiços
-->

<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    import itensList from '../gameData/ItensData';
    import spellsData from '../gameData/spells.json';
    import CardSlot from '../generalComponents/CardSlot.svelte';
    import SuitedUp from '../generalComponents/SuitedUp.svelte';

    let visible: boolean = true;
    let showEmptySlots = true;

    function switchOnScreenCards() {
        visible = !visible
    }

    function changeShowEmptySlots() {
        showEmptySlots = !showEmptySlots
    }

</script>

<main>
    
    <section class="usingCards">
        <SuitedUp />
    </section>

    <section class="storagedCards" >
        <div class="filters">
            <button on:click={changeShowEmptySlots}>{`${showEmptySlots ? 'Hide' : 'Show'} Empty Slots`}</button>
            <button on:click={switchOnScreenCards} >{`Show ${visible ? 'Spells' : 'Items'}`}</button>
        </div>
        {#if visible}    
            <div in:fly={{x: 800, duration: 500}} out:fade={{duration: 100}} class="itens">
                {#each itensList as item}
                    <CardSlot seal={item.id} backColor="beige" display={showEmptySlots} />
                {/each}
            </div>
        {:else}
            <div in:fly={{x: 800, duration: 500}} out:fade={{duration: 100}} class="feiticos" style={`display: ${!visible ? 'flex' : 'none'}`} >
                {#each spellsData.spellsData as spell}
                    <CardSlot seal={spell.id} backColor="#93b8bf" display={showEmptySlots} />
                {/each}
            </div>
        {/if}
    </section>
</main>

<style>
    main {
        display:flex;
        flex-direction: row;
        width: 100%;
    }

    .storagedCards {
        width: 50%;
        overflow: auto;
        height: 99vh;
    }

    .usingCards {
        width: 50%;
        position: relative;
        top: 0;
        left: 0;
    }
    
    div {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>