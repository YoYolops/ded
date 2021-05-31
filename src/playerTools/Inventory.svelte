<!-- esse componente exibirá todas as cartas em posse do jogador separadas em seções:
    -> itens
    -> feitiços
-->

<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    import itensList from '../gameData/ItensData';
    import CardSlot from '../generalComponents/CardSlot.svelte';

    let visible: boolean = true; 
</script>

<main>
    <button on:click={() => visible = !visible}>XESQUE</button>
    {#if visible}    
        <div in:fly={{x: -1000, duration: 250}} out:fade={{duration: 100}} class="itens">
            {#each itensList as item}
                <CardSlot cardId={item.id} backColor="beige"/>
            {/each}
        </div>
    {:else}
        <div in:fly={{x: -1000, duration: 500}} out:fade={{duration: 100}} class="feiticos" style={`display: ${!visible ? 'flex' : 'none'}`} >
            
        </div>
    {/if}
</main>

<style>
    div {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>