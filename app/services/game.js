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

const getYesterdayCharacter = async () => {
    const response = await fetch(`${process.env.API_ENDPOINT}/yesterdaycharacter`, {
        cache: 'no-store'
    })

    if (response.status === 204) return { placement: 0, character: null }

    return response.json()
}

export { getCharacterNames, getFounded, getYesterdayCharacter }
