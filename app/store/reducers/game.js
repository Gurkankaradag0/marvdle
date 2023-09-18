import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    characters: [],
    placement: 0
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        _addCharacters: (store, action) => {
            store.characters = [...action.payload, ...store.characters]
        },
        _setPlacement: (store, action) => {
            store.placement = action.payload
        }
    }
})

export const { _addCharacters, _setPlacement } = game.actions
export default game.reducer
