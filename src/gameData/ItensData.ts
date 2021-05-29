interface itens {
    id: number,
    name: string,
    rarity: string,
    imageUrl: string,
    description: string,
    atk: number,
    def: number,
    weight: number,
    type: string
}

const itensList: itens[] = [
    {
        id: 1,
        name: "Catnip Amulet",
        rarity: "A",
        imageUrl: "gameMedia/itens/Catnip Amulet.png",
        description: "This gold and jade amulet seems to draw domestic cats to it. While wearing the necklace, you have advantage on ability checks made to find or call Tiny domestic cats (if there are any) and on Wisdom (Animal Handling) checks you make to interact with them.",
        atk: 12,
        def: 8,
        weight: 0.1,
        type: "wereable"
    }
]

export default itensList;