import GameLoader from '@/components/Game/GameLoader'
import GameHeader from '@/components/Game/GameHeader'
import Game from '@/components/Game'
import GameInput from '@/components/Game/GameInput'
import GameFounded from '@/components/Game/GameFounded'
import GameList from '@/components/Game/GameList'
import GameColorIndicator from '@/components/Game/GameColorIndicator'
import GameEnd from '@/components/Game/GameEnd'
import GameYesterday from '@/components/Game/GameYesterday'
import GameFooter from '@/components/Game/GameFooter'

import useLocaleServer from '@/hooks/useLocaleServer'
import { getCharacterNames, getFounded, getYesterdayCharacter } from '@/services/game'

const HomeContainer = async () => {
    const [{ names, images }, { founded }, { placement, character }] = await Promise.all([getCharacterNames(), getFounded(), getYesterdayCharacter()])
    const locale = useLocaleServer()

    return (
        <div className='flex-1 flex flex-col items-center gap-2 w-full max-w-[450px]'>
            <GameLoader />

            <GameHeader />

            <Game />

            <GameInput
                names={names}
                images={images}
                placeholder={locale.game_input_placeholder}
            />

            <GameFounded founded={founded} />

            <GameList yesterdayPlacement={placement} />

            <GameColorIndicator />

            <GameEnd yesterdayPlacement={placement} />

            <GameYesterday
                character={character}
                placement={placement}
            />

            <GameFooter />
        </div>
    )
}

export default HomeContainer
