import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isNew: false,
    isCompleted: true
}

const animation = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        _setIsCompleted: (state, action) => {
            state.isCompleted = action.payload
        },
        _setIsNew: (state, action) => {
            state.isNew = action.payload
        }
    }
})

export const { _setIsCompleted, _setIsNew } = animation.actions
export default animation.reducer
