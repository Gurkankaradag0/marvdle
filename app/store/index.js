import { configureStore } from '@reduxjs/toolkit'

import game from './reducers/game'
import animation from './reducers/animation'
import settings from './reducers/settings'

const store = configureStore({
    reducer: {
        game,
        animation,
        settings
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store
