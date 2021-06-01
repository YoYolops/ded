<script lang="ts">
    import CardSlot from './CardSlot.svelte';

    const wearingItems: Array<Object | null> = [null, null, null, null, null, null] //cabeça, peitoral, grevas/botas, capa,mão1, mão2
    const icosPath: Array<string> = [
        "gameMedia/icos/helmet.svg",
        "gameMedia/icos/armor.svg",
        "gameMedia/icos/greaves.svg",
        "gameMedia/icos/cloak.svg",
        "gameMedia/icos/sword.svg",
        "gameMedia/icos/sword.svg"
    ]

</script>

<main>
    <div>
        {#each wearingItems as wearingItem, index}
            <div class="suitedUpItemBlock">
                <CardSlot width="56px" height="80px" backColor="#adadad" svgUrl={icosPath[index]} />
                <p class="itemEffects">
                    efeito nenhum
                </p>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        display:flex;
        flex-direction: column;
        width: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        height: 69vh;
    }

    p {
        margin: 10px
    }

    .suitedUpItemBlock {
        display:flex;
        flex-direction: row;
    }


/*     .characterSecondaryStatistics {
        border: 2px solid #c0d4a7;
        border-radius: 5px;
    } */

</style>