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
    <section class="wearingContainer">
        <h1>Using</h1>
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
    </section>

    <section class="statistics">
        <div class="inventoryStatistics">
            <p>Cards Discovered: </p>
            <p>Weight: </p>
            <p>Character Capacity:</p>
        </div>
        <div class="characterMainStatistics">
            <p>Força: </p>
            <p>Destreza: </p>
            <p>Constituição: </p>
            <p>Inteligência: </p>
            <p>Sabedoria: </p>
            <p>Carisma: </p>
        </div>
        <div class="characterSecondaryStatistics">
            <div class="enduranceTestsStatistics">
                <h1>Testes de Resistência: </h1>

                <p>Força: </p>
                <p>Destreza: </p>
                <p>Constituição: </p>
                <p>Inteligência: </p>
                <p>Sabedoria: </p>
                <p>Carisma: </p>
            </div>
            <div class="expertiseStatistics">
                <h1>Perícias: </h1>

                <p>Acrobacia: </p>
                <p>Adestrar Animais: </p>
                <p>Arcanismo: </p>
                <p>Atletismo: </p>
                <p>Atuação: </p>
                <p>Enganação: </p>
                <p>Furtividade: </p>
                <p>História: </p>
                <p>Intimidação: </p>
                <p>Intuição: </p>
                <p>Investigação: </p>
                <p>Medicina: </p>
                <p>Natureza: </p>
                <p>Percepção: </p>
                <p>Persuasão: </p>
                <p>Prestidigitação: </p>
                <p>Religião: </p>
                <p>Sobrevivência: </p>
            </div>
        </div>
    </section>
</main>

<style>
    main {
        display:flex;
        flex-direction: column;
        width: 100%;
        height: 99vh;
        overflow: hidden;
    }

    h1 {
        font-size: 15px;
    }

    p {
        margin: 10px
    }

    .wearingContainer {
        display: flex;
        flex-direction: column;
        height: 69vh;
    }

    .suitedUpItemBlock {
        display:flex;
        flex-direction: row;
    }

    .statistics {
        display: flex;
        flex: 1;
        justify-content: space-evenly;
        flex-direction: row;
        height: 30vh;
    }

    .statistics div {
        margin: 5px;
        padding: 5px;
    }

    .characterSecondaryStatistics {
        overflow: auto;
    }

/*     .characterSecondaryStatistics {
        border: 2px solid #c0d4a7;
        border-radius: 5px;
    } */

</style>