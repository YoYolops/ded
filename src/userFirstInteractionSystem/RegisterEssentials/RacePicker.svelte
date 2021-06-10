<script lang="ts">
    import { onMount } from "svelte";
    import API from '../../masterFunctions/API';
    import type { Race } from '../../types';
    import { races } from '../../stores/races';

    $: racesArray = null
    $: displayIndex = 0

    function changeDisplayedRaceCard() {
        if((displayIndex + 1) < racesArray.length) {
            displayIndex += 1
        } else {
            displayIndex = 0
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
            } else {
                alert('Não conseguimos contatar os oráculos...')
            }
        }
        loadRaces()
    })
</script>

<main>
    {#if !!racesArray}
        {#each racesArray as race, index}
            {#if displayIndex === index}
                <h1>{race.name}</h1>
                <div class="info">
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
                                {race.expertise[expertiseType].map(expertise => `${expertise}; `)}
                            </p>
                        {/each}
                    </div>
                    <div class="description">
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
    <button on:click={changeDisplayedRaceCard}>next race</button>
</main>

<style>

</style>