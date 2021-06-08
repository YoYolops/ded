<!-- cada personagem possui um login próprio -->

<script lang="ts">
    import API from '../masterFunctions/API';
    import type { Login } from '../types';
    import { player } from '../stores/player';

    $: characterName = ''
    $: password = ''
    $: isLogged = false

    async function logUser() {
        const authData: Login = {
            characterName,
            password
        }

        const response = await API.login(authData)
        
        if(response.data.succeeded) {
            isLogged = true
            player.set(response.data.playerData)
        } else {
            alert(response.data.message)
        }
    }

</script>

<main>
    <div class="inputBox">
        <label for="characterName">Personagem: </label>
        <input type="text" required bind:value={characterName} />
        <label for="password" >Senha: </label>
        <input type="password" required bind:value={password} />
    </div>
    <button on:click={logUser}>Entrar</button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:100%;
        height: 100%;
        padding-bottom: 10px;
    }

    .inputBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 100%;
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

    button {
        width: 140px;
        height: 40px;
        border-radius: 20px;
        font-family: 'Cinzel', serif;
        font-size: 15px;
        -webkit-text-stroke-width: .4px; /* largura da borda */
        -webkit-text-stroke-color: rgb(68, 68, 68); /* cor da borda */
        background: transparent;
        border: 2px solid rgb(68, 68, 68);
        color: #aaa;
        cursor: pointer;
    }

    button:active {
        background: transparent;
        transform: scale(0.95);
    }
</style>