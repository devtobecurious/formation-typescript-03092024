type CharacterType = {
    name: string
}

async function getAllItems<T extends CharacterType>(url: string): Promise<T[]> {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer 0D1Zk9mpkbWRdRsveGtk")

    const response = await fetch(url, { headers: myHeaders })
    const items = await response.json() as T[]

    return items
}

async function getAllCharacters(): Promise<CharacterType[]> {
    const items = await getAllItems<CharacterType>('https://the-one-api.dev/v2/character')
    return items
}

async function display(getItems: () => Promise<CharacterType[]>) {
    const items = await getItems()

    items.forEach(char => {
            /// génération
    })
}
display(getAllCharacters)