<!-- esse componente exibirá todas as cartas em posse do jogador separadas em seções:
    -> itens
    -> feitiços
-->

<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    import CardSlot from '../generalComponents/CardSlot.svelte';
    import SuitedUp from '../generalComponents/SuitedUp.svelte';
    import Statistics from '../generalComponents/Statistics.svelte';
    import LifeBar from '../generalComponents/LifeBar.svelte';

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
    <section class="characterManagement">
        <SuitedUp />
        <LifeBar currentLife=8 totalLife=800 />
        <Statistics />
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
        height: 100vh;
    }

    .storagedCards {
        width: 50%;
        overflow: auto;
        height: 100vh;
    }

    .characterManagement {
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