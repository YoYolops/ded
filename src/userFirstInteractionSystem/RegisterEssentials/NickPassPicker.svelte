<script lang="ts">
    export let characterName: string = ''
    export let password: string = ''
</script>

<main>
    <label for="characterName">Nome do Personagem:</label>
    <input type="text" required bind:value={characterName} />
    <label for="password">Senha: </label>
    <input type="password" required bind:value={password} />
</main>

<style>
    main {
        display: flex;
        width: 100%;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    label {
        margin-bottom: 5px;
        color: #aaa;
        font-family: 'Cinzel', serif;
        font-size: 20px;
        -webkit-text-stroke-width: .6px; /* largura da borda */
        -webkit-text-stroke-color: rgb(68, 68, 68); /* cor da borda */
    }

    input {
        background: transparent;
        border: 3px solid rgb(68, 68, 68);
        padding: 4px;
        margin-bottom: 10px;
        border-radius: 5px;
        width: 75%;
        color: #aaa
    }

</style>