import { useSelector } from 'react-redux'
import store from '../index'
import { _setIsCompleted, _setIsNew } from '../reducers/animation'

export const useIsNew = () => useSelector((state) => state.animation.isNew)
export const useIsCompleted = () => useSelector((state) => state.animation.isCompleted)

export const setIsNew = (status) => store.dispatch(_setIsNew(status))
export const setIsCompleted = (status) => store.dispatch(_setIsCompleted(status))
