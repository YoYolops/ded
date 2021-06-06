type AttributesData = {
    forca: number,
    destreza: number,
    constituicao: number,
    inteligencia: number,
    sabedoria: number,
    carisma: number
}

export interface CharacterData {
    characterAttributes: AttributesData,
    raca: string,
    classe: string
}

export interface Possessions {
    itemIds: Array<number>,
    spellIds: Array<number>,
    gold: number
}

export interface SearchTags {
    name?: string,
    level?: string,
    type?: string,
    range?: string,
    challengeRating?: string,
    rarity?: string
}