<script lang="ts">
    export let totalLife;
    export let currentLife;

</script>

<main>
    <div class="lifeBarContainer">
        <div class="lifeBar" style="width: {Math.floor((100/totalLife)*currentLife)}%" />
    </div>
    <p>{`${currentLife}/${totalLife}`}</p>
</main>

<style>
    main {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    p {
        margin-left: 5px;
    }

    .lifeBarContainer {
        width: 85%;
        height: 1vh;
        background-color: #808080;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .lifeBar {
        height: inherit;
        background-color: #35941e;
    }
</style>