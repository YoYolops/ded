<script lang="ts">
    export let seal: any = null;
    export let backColor: string;
    export let display: boolean  = true
    export let height: string = "400px"
    export let width: string = "280px"
    export let svgUrl: string = null
</script>

<main style={`background-color: ${backColor}; display: ${display ? 'flex' : 'none'}; height: ${height}; width: ${width};`}>
    <div>
        {#if !!seal}
            {seal}
        {:else}
            <img src={svgUrl} alt="" width="60%" height="60%"/>
        {/if}
    </div>
</main>

<style>
    main {
        height: 400px;
        width: 280px;
        border: 1px solid black;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        margin: 5px;
        box-shadow: 5px 4px 7px 2px #191919;
        flex-shrink: 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
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