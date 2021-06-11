<script lang="ts">
    import { fade } from 'svelte/transition'
    import Login from './Login.svelte'
    import Register from './ResgisterCharacter.svelte'

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
                    <div class="centralContent" in:fade={{duration: 600}} >
                        <Login />
                    </div>
                {:else}
                    <div class="centralContent" in:fade={{duration: 600}} >
                        <Register />
                    </div>
                {/if}
            <button class="switcher" on:click={switchMode}>
                {mode === 'login' ? 'Ir Para Cadastro' : 'Ir Para Login'}
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
        text-shadow: 7px 7px 3px rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 15vh;
        font-family: 'Cinzel', serif;
        font-weight: bolder;
        background: rgb(77, 21, 21);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 140px;
        border-bottom: 5px solid rgb(44, 12, 12);
        -webkit-text-stroke-width: 1.5px; /* largura da borda */
        -webkit-text-stroke-color: rgb(68, 68, 68); /* cor da borda */
        margin: 0;
    }

    .mainContent {
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        height: 80vh;
        width: 60vw;
        background: rgb(110,18,18);
        background: linear-gradient(130deg, rgba(110,18,18,0.8) 0%, rgba(28,0,0,0.8) 72%);
        z-index: 5;
        border: 2px solid rgb(68, 68, 68);
        box-shadow: 20px 16px 20px rgba(15,15,15,0.7)
/*         background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMjEgNTEyLjAyMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkwLjQyMSwxMzcuNzA3Yy0wLjA4NS0xLjAwMy0wLjE0OS0yLjAwNS0wLjU1NS0yLjk4N2MtMC4xMDctMC4yNTYtMC4zMi0wLjQyNy0wLjQ0OC0wLjY4MyAgICBjLTAuMjc3LTAuNTMzLTAuNTk3LTAuOTgxLTAuOTYtMS40NzJjLTAuNzI1LTEuMDAzLTEuNTM2LTEuODM1LTIuNTE3LTIuNTE3Yy0wLjI1Ni0wLjE3MS0wLjM2My0wLjQ5MS0wLjY0LTAuNjRsLTIyNC0xMjggICAgYy0zLjI4NS0xLjg3Ny03LjI5Ni0xLjg3Ny0xMC41ODEsMGwtMjI0LDEyOGMtMC4yNTYsMC4xNzEtMC4zNjMsMC40NjktMC42MTksMC42NGMtMS4wMjQsMC43MDQtMS44OTksMS41NTctMi42NDUsMi42MjQgICAgYy0wLjI5OSwwLjQyNy0wLjU5NywwLjgxMS0wLjgzMiwxLjI4Yy0wLjE0OSwwLjI3Ny0wLjM4NCwwLjQ2OS0wLjUxMiwwLjc2OGMtMC40NjksMS4xNzMtMC42MTksMi4zODktMC42NjEsMy41ODQgICAgYzAsMC4xMjgtMC4xMDcsMC4yNTYtMC4xMDcsMC4zODR2MC4xNzFjMCwwLjAyMSwwLDAuMDIxLDAsMC4wNDN2MjM0LjMwNGMwLDAuMDIxLDAsMC4wNjQsMCwwLjA4NXYwLjA2NCAgICBjMCwwLjIxMywwLjE0OSwwLjQwNSwwLjE3MSwwLjYxOWMwLjA4NSwxLjQ5MywwLjMyLDIuOTg3LDEuMDQ1LDQuMzUyYzAuMDQzLDAuMDg1LDAuMTI4LDAuMTA3LDAuMTcxLDAuMTkyICAgIGMwLjI3NywwLjQ5MSwwLjc2OCwwLjgxMSwxLjEzMSwxLjI1OWMwLjc4OSwwLjk4MSwxLjU1NywxLjk0MSwyLjYwMywyLjYwM2MwLjEwNywwLjA2NCwwLjE0OSwwLjE5MiwwLjIzNSwwLjIzNWwyMjQsMTI4ICAgIGMxLjY2NCwwLjkzOSwzLjQ3NywxLjQwOCw1LjMxMiwxLjQwOHMzLjY0OC0wLjQ2OSw1LjI5MS0xLjQwOGwyMjQtMTI4YzAuMTA3LTAuMDY0LDAuMTQ5LTAuMTkyLDAuMjU2LTAuMjU2ICAgIGMwLjk4MS0wLjU5NywxLjY2NC0xLjQ5MywyLjQxMS0yLjM4OWMwLjQyNy0wLjUxMiwxLjAwMy0wLjg5NiwxLjMyMy0xLjQ3MmMwLjA0My0wLjA2NCwwLjEwNy0wLjEwNywwLjE0OS0wLjE3MSAgICBjMC41NzYtMS4xMDksMC42ODMtMi4zMjUsMC44NTMtMy41MmMwLjA2NC0wLjQ5MSwwLjM4NC0wLjkzOSwwLjM4NC0xLjQ1MVYxMzguNjg4ICAgIEM0OTAuNjc3LDEzOC4zNDcsNDkwLjQ0MywxMzguMDQ4LDQ5MC40MjEsMTM3LjcwN3ogTTQ1NS41MiwxMzYuOTgxbC03OC4yNTEsMzEuMjk2TDI5MS4yMTEsNDMuMDkzTDQ1NS41MiwxMzYuOTgxeiAgICAgTTI1Ni4wMTEsMjkuNTA0bDk3LjA2NywxNDEuMTg0SDE1OC45NDRMMjU2LjAxMSwyOS41MDR6IE0yMjAuNzQ3LDQzLjExNWwtODYuMDM3LDEyNS4xNjNMNTYuNDgsMTM2Ljk4MUwyMjAuNzQ3LDQzLjExNXogICAgIE00Mi42NzcsMTU0LjQzMmw4MC43NjgsMzIuMzJMNDIuNjc3LDMzMi4xNlYxNTQuNDMyeiBNMTM4LjYzNSwyMDMuMzkybDk4LjMyNSwxNzguNzczTDQ5LjI0OCwzNjQuMjg4TDEzOC42MzUsMjAzLjM5MnogICAgIE0yNDUuMzQ0LDQ4Mi45NjVsLTE2NS4xMi05NC4zMzZsMTY1LjEyLDE1LjU3M1Y0ODIuOTY1eiBNMjU2LjAxMSwzNzIuNTQ0bC05OS4yODUtMTgwLjUyM2gxOTguNTcxTDI1Ni4wMTEsMzcyLjU0NHogICAgIE0yNjYuNjc3LDQ4Mi45NjV2LTc4LjU3MWwxNjUuMDM1LTE1LjcyM0wyNjYuNjc3LDQ4Mi45NjV6IE0yNzQuOTk3LDM4Mi4zNTdsOTguNDExLTE3OC45MDFsODkuMzY1LDE2MC44NTNMMjc0Ljk5NywzODIuMzU3eiAgICAgTTQ2OS4zNDQsMzMyLjIwM2wtODAuODExLTE0NS40NTFsODAuODExLTMyLjMyVjMzMi4yMDN6IiBmaWxsPSIjNGQxNTE1IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center; */
    }

    .centralContent {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex: 1;
        flex-direction: column;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMjEgNTEyLjAyMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkwLjQyMSwxMzcuNzA3Yy0wLjA4NS0xLjAwMy0wLjE0OS0yLjAwNS0wLjU1NS0yLjk4N2MtMC4xMDctMC4yNTYtMC4zMi0wLjQyNy0wLjQ0OC0wLjY4MyAgICBjLTAuMjc3LTAuNTMzLTAuNTk3LTAuOTgxLTAuOTYtMS40NzJjLTAuNzI1LTEuMDAzLTEuNTM2LTEuODM1LTIuNTE3LTIuNTE3Yy0wLjI1Ni0wLjE3MS0wLjM2My0wLjQ5MS0wLjY0LTAuNjRsLTIyNC0xMjggICAgYy0zLjI4NS0xLjg3Ny03LjI5Ni0xLjg3Ny0xMC41ODEsMGwtMjI0LDEyOGMtMC4yNTYsMC4xNzEtMC4zNjMsMC40NjktMC42MTksMC42NGMtMS4wMjQsMC43MDQtMS44OTksMS41NTctMi42NDUsMi42MjQgICAgYy0wLjI5OSwwLjQyNy0wLjU5NywwLjgxMS0wLjgzMiwxLjI4Yy0wLjE0OSwwLjI3Ny0wLjM4NCwwLjQ2OS0wLjUxMiwwLjc2OGMtMC40NjksMS4xNzMtMC42MTksMi4zODktMC42NjEsMy41ODQgICAgYzAsMC4xMjgtMC4xMDcsMC4yNTYtMC4xMDcsMC4zODR2MC4xNzFjMCwwLjAyMSwwLDAuMDIxLDAsMC4wNDN2MjM0LjMwNGMwLDAuMDIxLDAsMC4wNjQsMCwwLjA4NXYwLjA2NCAgICBjMCwwLjIxMywwLjE0OSwwLjQwNSwwLjE3MSwwLjYxOWMwLjA4NSwxLjQ5MywwLjMyLDIuOTg3LDEuMDQ1LDQuMzUyYzAuMDQzLDAuMDg1LDAuMTI4LDAuMTA3LDAuMTcxLDAuMTkyICAgIGMwLjI3NywwLjQ5MSwwLjc2OCwwLjgxMSwxLjEzMSwxLjI1OWMwLjc4OSwwLjk4MSwxLjU1NywxLjk0MSwyLjYwMywyLjYwM2MwLjEwNywwLjA2NCwwLjE0OSwwLjE5MiwwLjIzNSwwLjIzNWwyMjQsMTI4ICAgIGMxLjY2NCwwLjkzOSwzLjQ3NywxLjQwOCw1LjMxMiwxLjQwOHMzLjY0OC0wLjQ2OSw1LjI5MS0xLjQwOGwyMjQtMTI4YzAuMTA3LTAuMDY0LDAuMTQ5LTAuMTkyLDAuMjU2LTAuMjU2ICAgIGMwLjk4MS0wLjU5NywxLjY2NC0xLjQ5MywyLjQxMS0yLjM4OWMwLjQyNy0wLjUxMiwxLjAwMy0wLjg5NiwxLjMyMy0xLjQ3MmMwLjA0My0wLjA2NCwwLjEwNy0wLjEwNywwLjE0OS0wLjE3MSAgICBjMC41NzYtMS4xMDksMC42ODMtMi4zMjUsMC44NTMtMy41MmMwLjA2NC0wLjQ5MSwwLjM4NC0wLjkzOSwwLjM4NC0xLjQ1MVYxMzguNjg4ICAgIEM0OTAuNjc3LDEzOC4zNDcsNDkwLjQ0MywxMzguMDQ4LDQ5MC40MjEsMTM3LjcwN3ogTTQ1NS41MiwxMzYuOTgxbC03OC4yNTEsMzEuMjk2TDI5MS4yMTEsNDMuMDkzTDQ1NS41MiwxMzYuOTgxeiAgICAgTTI1Ni4wMTEsMjkuNTA0bDk3LjA2NywxNDEuMTg0SDE1OC45NDRMMjU2LjAxMSwyOS41MDR6IE0yMjAuNzQ3LDQzLjExNWwtODYuMDM3LDEyNS4xNjNMNTYuNDgsMTM2Ljk4MUwyMjAuNzQ3LDQzLjExNXogICAgIE00Mi42NzcsMTU0LjQzMmw4MC43NjgsMzIuMzJMNDIuNjc3LDMzMi4xNlYxNTQuNDMyeiBNMTM4LjYzNSwyMDMuMzkybDk4LjMyNSwxNzguNzczTDQ5LjI0OCwzNjQuMjg4TDEzOC42MzUsMjAzLjM5MnogICAgIE0yNDUuMzQ0LDQ4Mi45NjVsLTE2NS4xMi05NC4zMzZsMTY1LjEyLDE1LjU3M1Y0ODIuOTY1eiBNMjU2LjAxMSwzNzIuNTQ0bC05OS4yODUtMTgwLjUyM2gxOTguNTcxTDI1Ni4wMTEsMzcyLjU0NHogICAgIE0yNjYuNjc3LDQ4Mi45NjV2LTc4LjU3MWwxNjUuMDM1LTE1LjcyM0wyNjYuNjc3LDQ4Mi45NjV6IE0yNzQuOTk3LDM4Mi4zNTdsOTguNDExLTE3OC45MDFsODkuMzY1LDE2MC44NTNMMjc0Ljk5NywzODIuMzU3eiAgICAgTTQ2OS4zNDQsMzMyLjIwM2wtODAuODExLTE0NS40NTFsODAuODExLTMyLjMyVjMzMi4yMDN6IiBmaWxsPSIjMzQwZTBlIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==);
        /* background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMjEgNTEyLjAyMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDkwLjQyMSwxMzcuNzA3Yy0wLjA4NS0xLjAwMy0wLjE0OS0yLjAwNS0wLjU1NS0yLjk4N2MtMC4xMDctMC4yNTYtMC4zMi0wLjQyNy0wLjQ0OC0wLjY4MyAgICBjLTAuMjc3LTAuNTMzLTAuNTk3LTAuOTgxLTAuOTYtMS40NzJjLTAuNzI1LTEuMDAzLTEuNTM2LTEuODM1LTIuNTE3LTIuNTE3Yy0wLjI1Ni0wLjE3MS0wLjM2My0wLjQ5MS0wLjY0LTAuNjRsLTIyNC0xMjggICAgYy0zLjI4NS0xLjg3Ny03LjI5Ni0xLjg3Ny0xMC41ODEsMGwtMjI0LDEyOGMtMC4yNTYsMC4xNzEtMC4zNjMsMC40NjktMC42MTksMC42NGMtMS4wMjQsMC43MDQtMS44OTksMS41NTctMi42NDUsMi42MjQgICAgYy0wLjI5OSwwLjQyNy0wLjU5NywwLjgxMS0wLjgzMiwxLjI4Yy0wLjE0OSwwLjI3Ny0wLjM4NCwwLjQ2OS0wLjUxMiwwLjc2OGMtMC40NjksMS4xNzMtMC42MTksMi4zODktMC42NjEsMy41ODQgICAgYzAsMC4xMjgtMC4xMDcsMC4yNTYtMC4xMDcsMC4zODR2MC4xNzFjMCwwLjAyMSwwLDAuMDIxLDAsMC4wNDN2MjM0LjMwNGMwLDAuMDIxLDAsMC4wNjQsMCwwLjA4NXYwLjA2NCAgICBjMCwwLjIxMywwLjE0OSwwLjQwNSwwLjE3MSwwLjYxOWMwLjA4NSwxLjQ5MywwLjMyLDIuOTg3LDEuMDQ1LDQuMzUyYzAuMDQzLDAuMDg1LDAuMTI4LDAuMTA3LDAuMTcxLDAuMTkyICAgIGMwLjI3NywwLjQ5MSwwLjc2OCwwLjgxMSwxLjEzMSwxLjI1OWMwLjc4OSwwLjk4MSwxLjU1NywxLjk0MSwyLjYwMywyLjYwM2MwLjEwNywwLjA2NCwwLjE0OSwwLjE5MiwwLjIzNSwwLjIzNWwyMjQsMTI4ICAgIGMxLjY2NCwwLjkzOSwzLjQ3NywxLjQwOCw1LjMxMiwxLjQwOHMzLjY0OC0wLjQ2OSw1LjI5MS0xLjQwOGwyMjQtMTI4YzAuMTA3LTAuMDY0LDAuMTQ5LTAuMTkyLDAuMjU2LTAuMjU2ICAgIGMwLjk4MS0wLjU5NywxLjY2NC0xLjQ5MywyLjQxMS0yLjM4OWMwLjQyNy0wLjUxMiwxLjAwMy0wLjg5NiwxLjMyMy0xLjQ3MmMwLjA0My0wLjA2NCwwLjEwNy0wLjEwNywwLjE0OS0wLjE3MSAgICBjMC41NzYtMS4xMDksMC42ODMtMi4zMjUsMC44NTMtMy41MmMwLjA2NC0wLjQ5MSwwLjM4NC0wLjkzOSwwLjM4NC0xLjQ1MVYxMzguNjg4ICAgIEM0OTAuNjc3LDEzOC4zNDcsNDkwLjQ0MywxMzguMDQ4LDQ5MC40MjEsMTM3LjcwN3ogTTQ1NS41MiwxMzYuOTgxbC03OC4yNTEsMzEuMjk2TDI5MS4yMTEsNDMuMDkzTDQ1NS41MiwxMzYuOTgxeiAgICAgTTI1Ni4wMTEsMjkuNTA0bDk3LjA2NywxNDEuMTg0SDE1OC45NDRMMjU2LjAxMSwyOS41MDR6IE0yMjAuNzQ3LDQzLjExNWwtODYuMDM3LDEyNS4xNjNMNTYuNDgsMTM2Ljk4MUwyMjAuNzQ3LDQzLjExNXogICAgIE00Mi42NzcsMTU0LjQzMmw4MC43NjgsMzIuMzJMNDIuNjc3LDMzMi4xNlYxNTQuNDMyeiBNMTM4LjYzNSwyMDMuMzkybDk4LjMyNSwxNzguNzczTDQ5LjI0OCwzNjQuMjg4TDEzOC42MzUsMjAzLjM5MnogICAgIE0yNDUuMzQ0LDQ4Mi45NjVsLTE2NS4xMi05NC4zMzZsMTY1LjEyLDE1LjU3M1Y0ODIuOTY1eiBNMjU2LjAxMSwzNzIuNTQ0bC05OS4yODUtMTgwLjUyM2gxOTguNTcxTDI1Ni4wMTEsMzcyLjU0NHogICAgIE0yNjYuNjc3LDQ4Mi45NjV2LTc4LjU3MWwxNjUuMDM1LTE1LjcyM0wyNjYuNjc3LDQ4Mi45NjV6IE0yNzQuOTk3LDM4Mi4zNTdsOTguNDExLTE3OC45MDFsODkuMzY1LDE2MC44NTNMMjc0Ljk5NywzODIuMzU3eiAgICAgTTQ2OS4zNDQsMzMyLjIwM2wtODAuODExLTE0NS40NTFsODAuODExLTMyLjMyVjMzMi4yMDN6IiBmaWxsPSIjNGQxNTE1IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==); */
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    .switcher {
        background: transparent;
        font-family: 'Cinzel', serif;
        font-size: 15px;
        -webkit-text-stroke-width: .4px; /* largura da borda */
        -webkit-text-stroke-color: rgb(68, 68, 68); /* cor da borda */
        background: transparent;
        border: 2px solid rgb(68, 68, 68);
        border-radius: 10px;
        color: #aaa;
        cursor: pointer;
        width: 50%;
        align-self: center;
    }

    .switcher:active {
        background: transparent
    }

    .initialButton {
        position: fixed;
        top: 60vh;
        width: 260px;
        height: 70px;
        border-radius: 35px;
        border: 2px solid rgb(77, 21, 21);
        background-color: rgba(77, 21, 21,0);
        color: rgb(77, 21, 21);
        font-family: 'Cinzel', serif;
        font-size: 30px;
        -webkit-text-stroke-width: .3px; /* largura da borda */
        -webkit-text-stroke-color: rgb(68, 68, 68); /* cor da borda */
        cursor: pointer;
        outline: none;
    }

    .initialButton:active {
        background-color: rgba(77, 21, 21,0.3);
        transform: scale(0.9);
    }

    .initialButton:hover {
        background-color: rgba(77, 21, 21,0.3);
        -webkit-text-stroke-width: 1px;
        border: 3px solid rgb(68, 68, 68);
    }
</style>