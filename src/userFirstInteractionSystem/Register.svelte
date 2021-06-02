<script lang="ts">
    interface AttributesData {
        forca: number,
        destreza: number,
        constituicao: number,
        inteligencia: number,
        sabedoria: number,
        carisma: number
    }

    interface CharacterData {
        characterAttributes: AttributesData,
        characterName: string,
        raca: string,
        classe: string
    }

    interface Possessions {
        itemIds: Array<number>,
        spellIds: Array<number>,
        gold: number
    }

    let userName: string = ''
    let password: string = ''
    let characterData: CharacterData
    let possessions: Possessions

    export let registerStage: number = 0
</script>

<main>
    Register
</main>

<style>

</style>