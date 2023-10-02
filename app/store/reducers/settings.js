import { setLocalStorage } from '@/actions/localStorage'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    unitOfHeight: "ft'in",
    unitOfWeight: 'lbs'
}

const settings = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        _setUnitOfHeight: (state, action) => {
            state.unitOfHeight = action.payload
            setLocalStorage('settings', state)
        },
        _setUnitOfWeight: (state, action) => {
            state.unitOfWeight = action.payload
            setLocalStorage('settings', state)
        }
    }
})

export const { _setUnitOfHeight, _setUnitOfWeight } = settings.actions
export default settings.reducer
