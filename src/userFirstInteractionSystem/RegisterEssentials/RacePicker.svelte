<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import API from '../../masterFunctions/API';
    import { races } from '../../stores/storedBackendData';

    $: racesArray = null
    $: displayIndex = 0

    export let selectedRace = ''
    export let bonuses;

    function nextRace() {
        if((displayIndex + 1) < racesArray.length) {
            displayIndex += 1
        } else {
            displayIndex = 0
        }
    }

    function previousRace() {
        if((displayIndex - 1) > -1) {
            displayIndex -= 1
        } else {
            displayIndex = racesArray.length - 1
        }
    }

    onMount( () => {   
        /* solicitando dados de raças do backend */
        async function loadRaces() {
            const response = await API.getRaces({})

            if(response.succeeded) {
                races.set(response.races) /* Array com todas as raças */
                races.subscribe(currentValue => {
                    racesArray = currentValue
                })
                selectedRace = racesArray[displayIndex]
            } else {
                alert('Não conseguimos contatar os oráculos...')
            }
        }
        loadRaces()
    })

    onDestroy(() => {
        console.log('destroy')
        /* Garante que a última raça em tela foi selecionada */
        function destroy() {
            selectedRace = racesArray[displayIndex].name
            bonuses = racesArray[displayIndex].bonus
        }
        destroy()
    })
</script>

<main>
    <section class="upperSection">
        {#if !!racesArray} <!-- garante que o html a seguir so vai ser carregado quando os dados vierem do servidor, evitando erros -->
            {#each racesArray as race, index}
                {#if displayIndex === index}
                    <h1>{race.name}</h1>
                    <div class="info" >
                        <div class="bonus">
                            <h2>Bônus:</h2>
                            {#each Object.keys(race.bonus) as bonusName}
                                <p><strong>{`${bonusName}: `}</strong> {` +${race.bonus[bonusName]}`}</p>
                            {/each}
                        </div>
                        <div class="expertise">
                            <h2>Proficiências: </h2>
                            {#each Object.keys(race.expertise) as expertiseType}
                                <p>
                                    <strong>{`${expertiseType}: `}</strong>
                                    {race.expertise[expertiseType].map(expertise => `${expertise} `)}
                                </p>
                            {/each}
                        </div>
                        <div class="description">
                            <h2>Descrição: </h2>
                            <p>
                                <strong>Deslocamento: </strong>
                                {`${race.displacement} metros`}
                            </p>
                            <p>
                                {race.description}
                            </p>
                        </div>
                    </div>
                {/if}
            {/each}
        {/if}
    </section>
    <section class="bubbles">
        <button on:click={previousRace}>{'<<<'}</button>
        {#if !!racesArray}
            {#each racesArray as dot, index}
                {#if displayIndex === index}
                    <div class="activeDot" />
                {:else}
                    <div class="unactiveDot" />
                {/if}
            {/each}
        {/if}
        <button on:click={nextRace}>{'>>>'}</button>
    </section>
</main>

<style>
    main {
        padding: 10px;
        display:flex;
        flex-direction: column;
        height: 100%;
    }


    p{
        color: #aaa;
    }

    h1 {
        color: #aaa;
        font-family: 'Cinzel', serif;
        text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.6);
        -webkit-text-stroke-width: .6px; /* largura da borda */
        -webkit-text-stroke-color: rgb(77, 21, 21); /* cor da borda */
        font-weight: bold;
        font-size: 35px;
    }

    h2 {
        color: #aaa;
        border-bottom: 1px solid #ccc;
        -webkit-text-stroke-width: .6px; /* largura da borda */
        -webkit-text-stroke-color: rgb(77, 21, 21); /* cor da borda */
    }

    .upperSection {
        height: 70vh;
        overflow: auto;
    }

    .bubbles {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 25px;
    }

    .activeDot {
        background-color: #fff;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        border: .5px solid #191919
    }

    .unactiveDot {
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: rgb(68, 68, 68);
        border: .8px solid #191919
    }

    button {
        background-color: inherit;
        height: 25px;
        cursor: pointer;
        color: #fff;
        font-family: 'Cinzel', serif;
        font-size: 15px;
        border: none;
        outline: none;
        align-content: center;
        text-align: center;
        margin: 0px !important;
        padding: 0px !important;
    }

    button:focus {
        outline: none;
        background-color: inherit;
    }

</style>