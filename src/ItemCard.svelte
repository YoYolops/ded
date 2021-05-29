<script lang="ts">

    export let name: string;
    export let rarity: string;
    export let id: number;
    export let imageUrl: string;
    export let description: string;
    export let atk: number;
    export let def: number;
    export let weight: number;
    export let type: string;

</script>

<main>
    <div class="topInfo">
        <h1>{name}</h1>
        <div class="identificador">
            <p>{`${rarity} - `}</p>
            <p>{id}</p>
        </div>
    </div>
    <div class="imagem" style={`background-image: url(${imageUrl})`} />
    <div class="cardDescription">
        <p>{description}</p>
    </div>
    <div class="bottomInfo">
        <p>Atk: {atk}</p>
        <p>Def: {def}</p>
        <p>Kg: {weight}</p>
        <p>{type}</p>
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap');

    * {
        box-sizing: border-box;
        display: flex;
    }

    main {
        height: 300px;
        width: 200px;
        border: 2px solid black;
        border-radius: 5px;
        display:flex;
        flex-direction: column;
    }

    h1 {
        font-size: 13px;
        font-family: 'Josefin Sans', sans-serif;
    }

    .topInfo {
        flex-direction: row;
        width: 100%;
        height: 12%;
        align-items: center;
        justify-content: space-between;
    }

    .identificador {
        flex-direction: row;
    }

    .identificador p {
        font-weight: bold;
        color: #191919;
    }

    .imagem {
        height: 40%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .cardDescription {
        font-size: 13px;
        height: 35%;
        font-family: 'Josefin Sans', sans-serif;
        overflow-y: auto;
    }

    .bottomInfo {
        height: 13%;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .bottomInfo p {
        font-size: 12px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
    }

</style>