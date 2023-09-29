import { useSelector } from 'react-redux'
import store from '../index'
import { _addCharacters, _getCharacters, _setConfetti, _setGameNumero, _setPlacement, _setStats } from '../reducers/game'

export const useCharacters = () => useSelector((state) => state.game.characters)
export const useCharacterNames = () =>
    useSelector((state) => {
        const characters = state.game.characters
        if (characters.length === 0) return characters
        const names = characters.map((character) => character.name)
        return names
    })
export const addCharacters = (characters) => store.dispatch(_addCharacters(characters))

export const usePlacement = () => useSelector((state) => state.game.placement)
export const setPlacement = (placement) => store.dispatch(_setPlacement(placement))

export const useGameNumero = () => useSelector((state) => state.game.gamenumero)
export const setGameNumero = (gamenumero) => store.dispatch(_setGameNumero(gamenumero))

export const useLoading = () => useSelector((state) => state.game.loading)
export const getCharacters = () => store.dispatch(_getCharacters())

export const useConfetti = () => useSelector((state) => state.game.confetti)
export const setConfetti = (status) => store.dispatch(_setConfetti(status))

export const useStats = () => useSelector((state) => state.game.stats)
export const setStats = (stats) => store.dispatch(_setStats(stats))
export const clearStats = () => store.dispatch(_setStats())
