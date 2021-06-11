<!-- Esse componente cria um novo personagem
    Vale lembrar que o jogo não salva usuários, mas sim personagens
-->

<!-- 
    O cadastro de personagens vai seguir os passos:
        1 - Nome do personagem<TEXT>, senha<TEXT>, raça<SELECT> e classe<SELECT>
        2 - Distribuição de pontos
        3 - Escolha de itens iniciais;
        4 - rolagem de dados para definir gold inicial
 -->

<script lang="ts">
    import RacePicker from './RegisterEssentials/RacePicker.svelte';
    import NickPassPicker from './RegisterEssentials/NickPassPicker.svelte';
    import CharacterSheet from './RegisterEssentials/CharacterSheet.svelte';
    import API from '../masterFunctions/API';

    $: registerStage = 0

    let characterName = ''
    let password = ''
    let characterData = {
        attributes: {
            forca: 0,
            destreza: 0,
            constituicao: 0,
            inteligencia: 0,
            sabedoria: 0,
            carisma: 0
        },
        race: '',
        class: ''
    }
    let possessions = {
        itemIds: [],
        spellIds: [],
        gold: 0
    }

    function changeStage(previousOrNext) {
        if(previousOrNext === 'next') {
            registerStage += 1
        } else if(previousOrNext === 'previous' && (registerStage - 1) > -1) {
            registerStage -= 1
        }
    }

    async function registerCharacter() {
        const sendData = {
            characterName,
            password,
            characterData,
            possessions
        }
        const response = await API.registerCharacter(sendData)

    }
</script>

<main>
    <div class="stageController">
        {#if registerStage === 0}
            <button class="previousStage" on:click={() => {changeStage('previous')}}>
                Anterior
            </button>
            <h2>Escolha um nome e senha para seu personagem</h2>
            <button class="nextStage" on:click={() => {changeStage('next')}}>
                Próximo
            </button>

        {:else if registerStage === 1}

            <button class="previousStage" on:click={() => {changeStage('previous')}}>
                Voltar
            </button>
            <h2>Selecione uma Raça</h2>
            <button class="nextStage" on:click={() => {changeStage('next')}}>
                Selecionar
            </button>

        {:else if registerStage === 2}
            <button class="previousStage" on:click={() => {changeStage('previous')}}>
                Voltar
            </button>
            <h2>Distribua seus pontos</h2>
            <button class="nextStage" on:click={() => {changeStage('next')}}>
                Próximo
            </button>
        {/if}
    </div>
    {#if registerStage === 0}
        <NickPassPicker bind:characterName={characterName} bind:password={password}/>
    {:else if registerStage === 1}
        <RacePicker />
    {:else if registerStage === 2}
        <CharacterSheet />>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        height: inherit;
    }

    .stageController {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        align-items: center;
    }

    h2 {
        width: 80%;
    }

    button {
        cursor: pointer;
        outline: none;
    }

    button:focus {
        outline: none;

    }
</style>