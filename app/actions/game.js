'use server'

const getCharacterDetail = async (character) => {
    const response = await fetch(`${process.env.API_ENDPOINT}/dailycharacter`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ character }),
        cache: 'no-store'
    })

    return response.json()
}

const getClue = async () => {
    const response = await fetch(`${process.env.API_ENDPOINT}/dailycharacter/clue`, {
        cache: 'no-store'
    })

    return response.json()
}

export { getCharacterDetail, getClue }
