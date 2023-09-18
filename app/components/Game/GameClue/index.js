'use client'

import { useCharacterNames, usePlacement } from '@/app/store/actions/game'

const GameClue = ({ text, children }) => {
    const placement = usePlacement()
    const characterNames = useCharacterNames()
    return <>{characterNames.length === 0 ? <span className='text-sm text-marvel-gray font-normal'>{text}</span> : children}</>
}

export default GameClue
