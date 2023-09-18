import GameClue from '@/app/components/Game/GameClue'
import ClueItem from '@/app/components/Game/GameClue/ClueItem'
import GameColorIndicator from '@/app/components/Game/GameColorIndicator'
import GameFooter from '@/app/components/Game/GameFooter'
import GameHeader from '@/app/components/Game/GameHeader'
import GameInput from '@/app/components/Game/GameInput'
import GameList from '@/app/components/Game/GameList'
import Highlight from '@/app/components/Highlight'
import useLocaleServer from '@/app/hooks/useLocaleServer'
import { replacePlaceholders } from '@/app/libs/helper'
import { getCharacterNames, getFounded, getYesterdayCharacter } from '@/app/services/game'

const HomeContainer = async () => {
    const [{ names, images }, { founded }, { placement, character }] = await Promise.all([getCharacterNames(), getFounded(), getYesterdayCharacter()])
    const locale = useLocaleServer()

    return (
        <div className='flex-1 flex flex-col items-center gap-2 w-full max-w-[450px]'>
            <GameHeader />

            <div className='flex flex-col font-semibold text-lg text-center gap-2 bg-marvel-black border-2 border-marvel-red w-3/4 rounded-lg p-4'>
                <span>{locale.game_header_title}</span>
                <GameClue text={locale.game_header_subtitle}>
                    <ClueItem
                        clueText={locale.game_clue_title}
                        clueTextDisabled={locale.game_clue_title_disabled}
                        clueCount={2}
                    />
                </GameClue>
            </div>

            <GameInput
                names={names}
                images={images}
                placeholder={locale.game_input_placeholder}
            />

            <span className='text-xs font-semibold mt-1'>
                <Highlight
                    text={replacePlaceholders(locale.founded, [founded])}
                    match={[founded]}
                    render={(part) => <span className={part === founded ? 'text-marvel-yellow' : ''}>{part}</span>}
                />
            </span>

            <GameList />

            <GameColorIndicator />

            <span className='text-sm font-semibold'>
                <Highlight
                    text={replacePlaceholders(locale.yesterday, [`#${placement}`, character])}
                    match={[`#${placement}`, character]}
                    render={(part) => (
                        <span className={part === `#${placement}` ? 'text-marvel-blue text-sm' : 'text-marvel-red text-xl'}>{part}</span>
                    )}
                />
            </span>

            <GameFooter />
        </div>
    )
}

export default HomeContainer
