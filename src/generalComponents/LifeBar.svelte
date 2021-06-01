<script lang="ts">
    export let totalLife;
    export let currentLife;

</script>

<main class="lifeBarContainer">
    <div class="lifeBar" style="width: {Math.floor((100/totalLife)*currentLife)}%" />
    <p>{`${currentLife}/${totalLife}`}</p>
</main>

<style>
    p {
        margin-left: 5px;
    }

    .lifeBarContainer {
        width: 100%;
        height: 20px;
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