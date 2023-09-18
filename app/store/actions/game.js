import { useSelector } from 'react-redux'
import store from '../index'
import { _addCharacters, _setPlacement } from '../reducers/game'

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
