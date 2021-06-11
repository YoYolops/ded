export type AttributesData = {
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

export interface Item {
    id: number,
    name: string,
    rarity: string,
    imageUrl: string,
    description: string,
    atk: string,
    def: string,
    wight: string,
    type: string,
}

export interface Spell {
    id: number,
    name: string,
    level: string,
    type: string,
    conjurationTime: string,
    range: string,
    duration: string,
    description: string
}

export interface Character {
    characterName: String,
    password: String,
    characterData: {
        attributes: {
            forca: Number,
            destreza: Number,
            constituicao: Number,
            inteligencia: Number,
            sabedoria: Number,
            carisma: Number
        },
        race: String, /* Raça */
        class: String,
    },
    possessions: {
        itemIds: Array<number | string>,
        spellIds: Array<number | string>,
        gold: Number
    }
}

export interface Login {
    characterName: string,
    password: string
}

export interface BackendResponse {
    succeeded: boolean,
    message?: string,
    error?: any,
    characterName?: string,
    characterData?: CharacterData,
    possessions?: Possessions
}

export interface Race {
    name: string,
    bonus: {
        constituicao?: number,
        sabedoria?: number,
        forca?: number,
        destreza?: number,
        inteligencia?: number,
        carisma?: string
    },
    expertise: {
        weapons?: Array<string>,
        armor?: Array<string>
    },
    displacement: number,
    description: string
}
