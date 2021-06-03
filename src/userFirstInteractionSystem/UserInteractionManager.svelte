<script lang="ts">
    import { fly, fade } from 'svelte/transition'
    import Login from './Login.svelte'
    import Register from './Register.svelte'

    $: mode = 'login'
    $: firstClick = false

    function switchMode() {
        if (mode === 'login') mode = 'register'
        else mode = 'login'
    }
</script>

<main>
    <h1>Dungyô</h1>
    {#if firstClick}    
        <div in:fade={{duration: 500}} class="mainContent">
                {#if mode === 'login'}
                    <div class="centralContent" in:fly={{x: -10, duration: 600}} out:fade={{duration: 300}}>
                        <Login />
                    </div>
                {:else}
                    <div class="centralContent" in:fly={{x: -10, duration: 600}} out:fade={{duration: 300}}>
                        <Register />
                    </div>
                {/if}
            <button on:click={switchMode}>
                {mode === 'login' ? 'Cadastro' : 'Login'}
            </button>
        </div>
    {:else}
        <button on:click={() => firstClick = true} class="initialButton">Começar</button>
    {/if}
</main>

<style>
    main {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
        background-image: url('https://images5.alphacoders.com/110/thumb-1920-1107324.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    h1 {
        text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0px;
        font-family: 'Cinzel', serif;
        font-weight: bolder;
        color: rgb(0, 247, 255);
        background: -webkit-linear-gradient(#eee, rgb(27, 27, 27));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 140px;
        border-bottom: 5px solid rgb(58, 58, 58);
        -webkit-text-stroke-width: 1px; /* largura da borda */
        -webkit-text-stroke-color: rgb(77, 21, 21); /* cor da borda */
    }

    .mainContent {
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        height: 40vh;
        width: 30vw;
        background: rgb(212,246,255);
        background: linear-gradient(173deg, rgba(212,246,255,0.75) 18%, rgba(35,142,172,0.75) 57%, rgba(157,87,44,0.75) 100%);
    }

    .initialButton {
        font-family: 'Josefin', serif;
        font-size: 25px; 
        font-weight: bolder;
        color: white;
        width: 200px;
        height: 60px;
        border-radius: 30px;
        cursor: pointer;
        background: rgb(170,237,255);
        background: linear-gradient(156deg, rgba(170,237,255,1) 0%, rgba(40,206,252,1) 49%, rgba(33,175,214,1) 100%);
    }
</style>