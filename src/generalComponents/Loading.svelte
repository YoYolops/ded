<script lang="ts">
    import { Chasing } from 'svelte-loading-spinners';
    import { fly, fade } from 'svelte/transition';

    export let loadingDescription: string = '';
    export let loadingWidth: number = 20
</script>

<main in:fly={{y: -1000, duration: 600}} out:fly={{y: -1000 ,duration: 900}}>
    <h1>Dungyô</h1>
    <Chasing />
    <div class="barContainer">
        <div class="barFill" style="width: {loadingWidth}%;" />
    </div>
    <p>{loadingDescription}</p>
</main>

<style>
    h1 {
        position: fixed;
        top: 30px;
        text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.6);
        font-family: 'Cinzel', serif;
        font-weight: bolder;
        background: rgba(77, 21, 21, 0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 120px;
        -webkit-text-stroke-width: 1.5px; /* largura da borda */
        -webkit-text-stroke-color: rgb(68, 68, 68); /* cor da borda */
        margin: 0;
    }

    main {
        background: rgb(83,31,31);
        background: linear-gradient(166deg, rgba(83,31,31,1) 0%, rgba(28,0,0,1) 72%);
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        flex-direction: column;
    }

    p {
        font-size: 20px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 900;
    }

    .barContainer {
        width: 40%;
        min-width: 200px;
        display: flex;
        align-items: center;
        justify-content: left;
        height: 5px;
        border-radius: 2.5px;
        border-left: 2px solid rgb(68, 68, 68);
        border-right: 2px solid rgb(68, 68, 68);
        border-top: .5px solid rgb(68, 68, 68);
        margin-top: 60px;
    }

    .barFill {
        background-color: #FF3E00;
        height: inherit;
    }
</style>