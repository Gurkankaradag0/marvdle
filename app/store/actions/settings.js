import { useSelector } from 'react-redux'
import store from '../index'
import { _setUnitOfHeight, _setUnitOfWeight } from '../reducers/settings'

export const useUnitOfHeight = () => useSelector((state) => state.settings.unitOfHeight)
export const useUnitOfWeight = () => useSelector((state) => state.settings.unitOfWeight)

export const setUnitOfHeight = (unit) => store.dispatch(_setUnitOfHeight(unit))
export const setUnitOfWeight = (unit) => store.dispatch(_setUnitOfWeight(unit))
