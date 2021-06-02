<script lang="ts">
    import Login from './Login.svelte'
    import Register from './Register.svelte'

    $: mode = 'login'

    function switchMode() {
        if (mode === 'login') mode = 'register'
        else mode = 'login'
    }
</script>

<main>
    <div class="presentation">
        <h1>Bem vindo ao Dungyô</h1>
    </div>
    <section class="interactionModeRenderer">
        {#if mode === 'login'}
            <Login />
        {:else}
            <Register />
        {/if}
    </section>
    <button on:click={switchMode}>
        {mode === 'login' ? 'Cadastro' : 'Login'}
    </button>

</main>

<style>

</style>