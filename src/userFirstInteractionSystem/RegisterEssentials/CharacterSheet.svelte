<script lang="ts">

    $: availablePoints = 72;

    $: skills = [
        {name: 'Força', value: 0},
        {name: 'Destreza', value: 0},
        {name: 'Constituição', value: 0},
        {name: 'Inteligência', value: 0},
        {name: 'Sabedoria', value: 0},
        {name: 'Carisma', value: 0}
    ]

    function changeAbility(abilityIndex: number, operation: string) {
        if(operation === 'plus') {
            availablePoints -= 1
            skills[abilityIndex].value += 1
        } else {
            availablePoints += 1
            skills[abilityIndex].value -= 1
        }
    }

    function modifierCalculator(baseAttribute: number) {
        return Math.floor(baseAttribute / 2) - 5
    }
</script>

<main>
    <div class="statPointsDistribution">
        {#each skills as skill, skillIndex} 
            <div>
                <h2>{skill.name}</h2>
                <p>{skill.value}</p>
                <div class="constrolButtons">
                    <button on:click={() => {changeAbility(skillIndex, 'minus')}}>-</button>
                    <button on:click={() => {changeAbility(skillIndex, 'plus')}}>+</button>
                </div>
            </div>
        {/each}
    </div>
    <div>
        
    </div>
</main>

<style>
    .statPointsDistribution {
        display:flex;
        flex-direction: column;
    }
</style>