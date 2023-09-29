'use client'

import { useLoading } from '@/store/actions/game'
import GameClue from './GameClue'
import ClueItem from './GameClue/ClueItem'
import useLocaleClient from '@/hooks/useLocaleClient'

const Game = () => {
    const locale = useLocaleClient()
    const loading = useLoading()
    if (loading) return null
    return (
        <div className='flex flex-col justify-center items-center font-semibold text-lg text-center gap-2 bg-marvel-black border-2 border-marvel-red w-3/4 rounded-lg p-4'>
            <span>{locale.game_header_title}</span>
            <GameClue text={locale.game_header_subtitle}>
                <ClueItem
                    tooltipText={locale.tooltips.imageClue}
                    clueText={locale.game_clue_title}
                    clueTextDisabled={locale.game_clue_title_disabled}
                    clueCount={6}
                />
            </GameClue>
        </div>
    )
}

export default Game
