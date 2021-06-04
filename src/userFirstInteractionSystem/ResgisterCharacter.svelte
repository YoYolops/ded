<!-- Esse componente cria um novo personagem
    Vale lembrar que o jogo não salva usuários, mas sim personagens
-->

<!-- 
    O cadastro de personagens vai seguir os passos:
        1 - Nome do personagem<TEXT>, senha<TEXT>, raça<SELECT> e classe<SELECT>
        2 - Distribuição de pontos
        3 - Escolha de itens iniciais;
        4 - rolagem de dados para definir gold inicial
 -->

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
        raca: string,
        classe: string
    }

    interface Possessions {
        itemIds: Array<number>,
        spellIds: Array<number>,
        gold: number
    }

    let characterName: string = ''
    let password: string = ''
    let characterData: CharacterData
    let possessions: Possessions

    export let registerStage: number = 0
</script>

<main>
    
</main>

<style>

</style>