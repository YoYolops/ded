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
    import type { CharacterData, Possessions } from '../types';

    /* variaveis construidas via função: */
    let characterData: CharacterData
    let possessions: Possessions

    /* Variáveis criadas em tempo real */
    $: characterName = ''
    $: password = ''
    $: race = ''

    export let registerStage: number = 0
</script>

<main>
    <div class="registerStage" id="firstStage">
        <p>Ok, primeiro nos diga quem é você e escolha uma senha</p>
        <div class="inputContainer">
            <label for="characterName">Nome do Personagem: </label>
            <input type="text" required bind:value={characterName} />
            <label for="password" >Senha: </label>
            <input type="password" required bind:value={password} />
            <div class="selectContainer">
                <div>
                    <label for=""></label>
                    <select name="races" >
                        <option>Anão da Colina</option>
                        <option>Anão da Montanha</option>
                        <option>Alto Elfo</option>
                        <option>Elfo da Floresta</option>
                        <option>Elfo Negro</option>
                        <option>Meio Elfo</option>
                        <option>Halfling Pés Leves</option>
                        <option>Halfling Robusto</option>
                        <option>Humano</option>
                        <option>Draconato</option>
                        <option>Gnomo da Floresta</option>
                        <option>Gnomo das Rochas</option>
                        <option>Meio-Orc</option>
                        <option>Tiefling Infernal</option>
                        <option>Tiefling Abissal</option>
                        <option></option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</main>

<style>

</style>