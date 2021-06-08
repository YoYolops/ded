<script lang="ts">
    import { onMount } from "svelte";
    import API from '../../masterFunctions/API';
    import type { Race } from '../../types';
    import { races } from '../../stores/races';

    let racesArray: Array<Race>;

    onMount(
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
    )
</script>

<main>

</main>

<style>

</style>