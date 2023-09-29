const getCharacterNames = async () => {
    const response = await fetch(`${process.env.API_ENDPOINT}/character_names`, {
        next: { revalidate: 600 }
    })

    return response.json()
}

const getFounded = async () => {
    const response = await fetch(`${process.env.API_ENDPOINT}/dailycharacter/founded`, {
        cache: 'no-store'
    })

    return response.json()
}

const getClue = async () => {
    const response = await fetch(`${process.env.API_ENDPOINT}/dailycharacter/clue`, {
        next: { revalidate: 600 }
    })

    return response.json()
}

const getYesterdayCharacter = async () => {
    const response = await fetch(`${process.env.API_ENDPOINT}/yesterdaycharacter`, {
        cache: 'no-store'
    })

    return response.json()
}

const getCharacterDetails = async (characters) => {
    const response = await fetch(`${process.env.API_ENDPOINT}/dailycharacter`, {
        method: 'POST',
        body: JSON.stringify({ character: characters }),
        cache: 'no-store'
    })

    return response.json()
}

export { getCharacterNames, getFounded, getCharacterDetails, getYesterdayCharacter, getClue }
