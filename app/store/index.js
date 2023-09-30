import { configureStore } from '@reduxjs/toolkit'

import game from './reducers/game'
import animation from './reducers/animation'

const store = configureStore({
    reducer: {
        game,
        animation
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
