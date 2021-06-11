<script lang="ts">
import { fix_and_destroy_block } from "svelte/internal";



    $: availablePoints = 72;

    $: skills = [
        { name: 'Força', value: 0 },
        { name: 'Destreza', value: 0 },
        { name: 'Constituição', value: 0 },
        { name: 'Inteligência', value: 0 },
        { name: 'Sabedoria', value: 0 },
        { name: 'Carisma', value: 0 }
    ]

    $: expertises = [
        { name: 'Acrobacia(Des)', relative: 'Destreza' },
        { name: 'Adestrar Animais(Sab)', relative: 'Sabedoria' },
        { name: 'Arcanismo(Int)', relative: 'Inteligência' },
        { name: 'Atletismo(For)', relative: 'Força' },
        { name: 'Atuação(Car)', relative: 'Carisma' },
        { name: 'Enganação(Car)', relative: 'Carisma' },
        { name: 'Furtividade(Des)', relative: 'Destreza' },
        { name: 'História(Int)', relative: 'Inteligência' },
        { name: 'Intimidação(Car)', relative: 'Carisma' },
        { name: 'Intuição(Sab)', relative: 'Sabedoria' },
        { name: 'Investigação(Int)', relative: 'Inteligência' },
        { name: 'Medicina(sab)', relative: 'Sabedoria' },
        { name: 'Natureza(Int)', relative: 'Inteligência' },
        { name: 'Percepção(Sab)', relative: 'Sabedoria' },
        { name: 'Persuasão(Sab)', relative: 'Sabedoria' },
        { name: 'Prestidigitação(Des)', relative: 'Destreza' },
        { name: 'Religião(Int)', relative: 'Inteligência' },
        { name: 'Sobrevivência(Sab)', relative: 'Sabedoria' }
    ]

    function changeAbility(abilityIndex: number, operation: string) {
        if(operation === 'plus' && (skills[abilityIndex].value + 1) < 21 && availablePoints > 0) {
            availablePoints -= 1
            skills[abilityIndex].value += 1
        } else if(operation === 'minus' && (skills[abilityIndex].value - 1) > -1 && availablePoints > 0) {
            availablePoints += 1
            skills[abilityIndex].value -= 1
        }
    }

    function modifierCalculator(baseAttribute: number) {
        return Math.floor(baseAttribute / 2) - 5
    }
</script>

<main>
    <p class="pointsLeft">{`Pontos Restantes: ${availablePoints}`}</p>
    <div class="statPointsContainer">
        {#each skills as skill, skillIndex} 
            <div class="attributeSquare">
                <h3>{skill.name}</h3>
                <div class="controlButtons">
                    <button on:click={() => {changeAbility(skillIndex, 'minus')}}>-</button>
                    <p>{skill.value}</p>
                    <button on:click={() => {changeAbility(skillIndex, 'plus')}}>+</button>
                </div>
            </div>
        {/each}
    </div>
    <div class="expertiseContainer">
        {#each expertises as expertise}
            <p class="expertise">{`${expertise.name}: ${modifierCalculator(skills.find(skill => skill.name === expertise.relative).value)}`}</p>        
        {/each}
    </div>
</main>

<style>
    main {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        justify-content: center;
        align-items: center;
    }

    .statPointsContainer {
        display:flex;
        flex-direction: row;
        width: 100%;
        overflow: auto;
        height: 50%;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .attributeSquare {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 170px;
        height: 120px;
        border: 2px solid #aaa;
        border-radius: 5px;
        margin: 3px;
        padding: 3px;
    }

    h3 {
        color: #aaa;
        font-family: 'Josefin', serif;
        font-size: 20px;
        text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.6);
    }

    .pointsLeft {
        font-size: 36px;
    }

    p {
        font-size: 50px;
        margin: 0;
        font-family: 'Cormorant Garamond', serif;
        margin-bottom: 5px;
        color: #aaa;
        text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.9);
    }

    .expertiseContainer {
        display: flex;
        flex-direction: row;
        flex: 1;
        width: 100%;
        height: 20%;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        overflow-x: hidden;
    }

    .expertise {
        font-size: 18px;
        margin: 3px;
        font-weight: bold;
    }

    .controlButtons {
        display: flex;
        flex-direction: row;
        flex: 1;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        font-family: 'Cormorant Garamond', serif;
        font-size: 35px;
        font-weight: bolder;
    }

    button {
        outline: none;
        background-color: inherit;
        width: 30px;
        height: 30px;
        margin: 0px;
        padding: 0px;
        border: none;
        color: #aaa;
        cursor: pointer;
    }

    button:focus {
        outline: none;
        background-color: inherit;
    }
</style>