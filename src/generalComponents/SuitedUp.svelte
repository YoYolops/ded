<script lang="ts">
    import CardSlot from './CardSlot.svelte';

    const wearingItems: Array<Object | null> = [null, null, null, null, null, null] //cabeça, peitoral, grevas/botas, capa,mão1, mão2
    const icosPath: Array<string> = [
        "gameMedia/icos/helmet.svg",
        "gameMedia/icos/armor.svg",
        "gameMedia/icos/greaves.svg",
        "gameMedia/icos/cloak.svg",
        "gameMedia/icos/sword.svg",
        "gameMedia/icos/sword.svg",
        "gameMedia/icos/ring.svg"
    ]
    const acessories: Array<object | null> = [null, null, null, null, null, null]

</script>

<main>
    <div class="mainWearableItems">
        {#each wearingItems as wearingItem, index}
            <div class="suitedUpItemBlock">
                <CardSlot width="56px" height="80px" backColor="#adadad" svgUrl={icosPath[index]} />
                <p class="itemEffects">
                    efeito nenhum
                </p>
            </div>
        {/each}
    </div>
    <div class="otherWearableItems">
        {#each acessories as acessorie}
            <div class="suitedUpItemBlock">
                <CardSlot width="56px" height="80px" backColor="#adadad" svgUrl={icosPath[icosPath.length - 1]} />
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
        flex-direction: row;
        width: 100%;
        overflow: auto;
        height: 69vh;
        justify-content: space-between;
    }

    p {
        margin: 10px
    }

    .suitedUpItemBlock {
        display:flex;
        flex-direction: row;
    }

    .mainWearableItems {
        width: 50%;
    }

    .otherWearableItems {
        display: flex;
        flex-direction: column;
        width: 50%;
    }


/*     .characterSecondaryStatistics {
        border: 2px solid #c0d4a7;
        border-radius: 5px;
    } */

</style>