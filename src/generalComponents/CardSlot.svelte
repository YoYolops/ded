<script lang="ts">
    export let cardId: number;
    export let backColor: string;
</script>

<main style={`background-color: ${backColor};`}>
    <p>
        {cardId}
    </p>
</main>

<style>
    main {
        height: 400px;
        width: 280px;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        box-shadow: 5px 4px 7px 2px #191919;
        flex-shrink: 0;
    }

    p {
        color: rgb(204, 204, 204);
        height: 80px;
        width: 80px;
        font-size: 40px;
        font-family: 'Cairo';
        border-radius: 40px;
        text-align: center;
        border: 3px solid rgb(204, 204, 204);
    }
</style>