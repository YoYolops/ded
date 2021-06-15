import type { Character } from '../../types'

class Monk {
    name: string
    forca: number
    destreza: number
    constituicao: number
    inteligencia: number
    sabedoria: number
    carisma: number
    experience: number
    level: number
    itemsIds: Array<number | string>
    spellsIds: Array<number | string>
    gold: number

    constructor(characterJson: Character) {
        this.name = characterJson.characterName
        this.forca = characterJson.characterData.attributes.forca
        this.destreza = characterJson.characterData.attributes.destreza
        this.constituicao = characterJson.characterData.attributes.constituicao
        this.inteligencia = characterJson.characterData.attributes.inteligencia
        this.sabedoria = characterJson.characterData.attributes.sabedoria
        this.carisma = characterJson.characterData.attributes.carisma
        this.experience = characterJson.characterData.experience
        this.level = characterJson.characterData.level
        this.itemsIds = characterJson.possessions.itemIds
        this.spellsIds = characterJson.possessions.spellIds
        this.gold = characterJson.possessions.gold
    }
}

export default Monk