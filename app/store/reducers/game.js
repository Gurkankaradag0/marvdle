import { getCharacterDetail } from '@/actions/game'
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/actions/localStorage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const _getCharacters = createAsyncThunk('game/getCharacters', async () => {
    const characters = getLocalStorage('characters') || []
    if (characters.length === 0) return false
    const response = await getCharacterDetail(characters)
    return response
})

const initialStats = {
    gamesWon: 0,
    averageGuesses: 0,
    oneShots: 0,
    oneShotPercent: 0,
    currentStreak: 0,
    maxStreak: 0,
    labels: [],
    data: []
}

const initialState = {
    version: 'v0.0.1',
    characters: [],
    loading: true,
    gamenumero: getLocalStorage('gamenumero') || 0,
    placement: getLocalStorage('placement') || 0,
    stats: getLocalStorage('stats') || initialStats,
    confetti: getLocalStorage('confetti') ?? true
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        _setGameNumero: (state, action) => {
            state.gamenumero = action.payload
            state.characters = []
            state.placement = 0
            state.loading = false
            state.confetti = true
            setLocalStorage('characters', state.characters)
            setLocalStorage('confetti', state.confetti)
            setLocalStorage('placement', state.placement)
            setLocalStorage('gamenumero', state.gamenumero)
        },
        _addCharacters: (state, action) => {
            state.characters = [...action.payload, ...state.characters]
            setLocalStorage(
                'characters',
                state.characters.map((character) => character.name)
            )
        },
        _setPlacement: (state, action) => {
            state.placement = action.payload
            setLocalStorage('placement', state.placement)
        },
        _setConfetti: (state, action) => {
            state.confetti = action.payload
            setLocalStorage('confetti', state.confetti)
        },
        _setStats: (state, action) => {
            state.stats = action.payload || initialStats
            setLocalStorage('stats', state.stats)
        },
        _clearState: (state) => {
            state.characters = []
            state.confetti = true
            state.stats = initialStats
            state.placement = 0
            setLocalStorage('characters', state.characters)
            setLocalStorage('confetti', state.confetti)
            setLocalStorage('placement', state.placement)
            setLocalStorage('stats', state.stats)
            setLocalStorage('version', state.version)
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(_getCharacters.fulfilled, (state, action) => {
            action.payload && (state.characters = action.payload.reverse())
            state.loading = false
        })
    }
})

export const { _setGameNumero, _addCharacters, _setPlacement, _setConfetti, _setStats, _clearState } = game.actions
export default game.reducer
