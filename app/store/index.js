import { configureStore } from '@reduxjs/toolkit'

import game from './reducers/game'

const store = configureStore({
    reducer: {
        game
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
