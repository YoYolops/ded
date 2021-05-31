<script lang="ts">
    export let name: string;
    export let level: string;
    export let imageUrl: string;
    export let description: string;
</script>

<main>
    <div class="topInfo">
        <h1>{name}</h1>
        <div class="identificador">
            <p>{`lv ${level}`}</p>
        </div>
    </div>
    <div class="imagem">
        <img src={imageUrl} alt="" />
    </div>
    <div class="cardDescription">
        {@html description}
    </div>
    <div class="bottomInfo">
        <p></p>
    </div>
</main>

<style>
    * {
        box-sizing: border-box;
        display: flex;
    }

    p {
        display: block;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        align-self: right;
    }

    main {
        height: 400px;
        width: 280px;
        border: 2px solid black;
        border-radius: 5px;
        display:flex;
        flex-direction: column;
    }

    h1 {
        font-size: 13px;
        font-family: 'Tangerine', cursive;
        font-size: 20px;
        font-weight: bold;
    }

    .topInfo {
        flex-direction: row;
        width: 100%;
        height: 12%;
        align-items: center;
        justify-content: space-between;
        padding: 0px 5px;
    }

    .identificador {
        flex-direction: row;
    }

    .identificador p {
        font-family: 'Cairo';
        font-weight: bolder;
        color: #191919;
    }

    .imagem {
        height: 40%;
        overflow: hidden;
    }

    .cardDescription {
        font-size: 15px;
        height: 35%;
        overflow-y: auto;
        font-family: 'Josefin Sans', sans-serif;
        padding: 2px;
        flex-direction: column;
    }

    .bottomInfo {
        height: 13%;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .bottomInfo p {
        font-size: 14px;
        font-weight: bolder;
        font-family: 'Josefin Sans', sans-serif;
    }
</style>