'use client'

import { setGameNumero, setStats, useCharacters, useGameNumero, useLoading, useStats } from '@/store/actions/game'
import useLocaleClient from '@/hooks/useLocaleClient'
import GameListItem from './GameListItem'
import GameListCharacterItem from './GameListCharacterItem'
import { useEffect } from 'react'
import { getCharacters } from '@/store/actions/game'
import { GAME_ALIGNMENTS } from '@/utils/constans'
import Tooltip from '../../Tooltip'
import GameListMore from './GameListMore'

const GameList = ({ yesterdayPlacement }) => {
    const characters = useCharacters()
    const gamenumero = useGameNumero()
    const loading = useLoading()
    const locale = useLocaleClient()
    const stats = useStats()

    const setStatsHandle = () => {
        if (stats.currentStreak === 0) return
        if (stats.labels.includes(yesterdayPlacement)) return
        if (stats.labels.includes(yesterdayPlacement + 1)) return
        setStats({ ...stats, currentStreak: 0 })
    }

    useEffect(() => {
        setStatsHandle()

        if (gamenumero === yesterdayPlacement + 1) getCharacters()
        else setGameNumero(yesterdayPlacement + 1)
    }, [])

    if (loading || characters.length === 0) return null
    return (
        <div className='w-3/4 mb-8'>
            <div className='flex flex-col justify-center items-center scroller max-[600px]:overflow-x-scroll max-[600px]:w-[125%] max-[600px]:-ml-[12.5%]'>
                <div className='w-[165%] max-[600px]:ml-[65%]'>
                    <div className='flex flex-wrap w-full'>
                        {GAME_ALIGNMENTS.map((alignment, key) => (
                            <Tooltip.Item
                                key={key}
                                text={locale.tooltips[alignment]}
                            >
                                <div className='select-none h-[84px] relative flex justify-center items-center leading-none text-center m-0.5 basis-[calc(14.28%_-_0.25rem)] text-sm font-semibold'>
                                    {locale.game_alignments[alignment]}
                                    <hr className='absolute top-[80%] border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                                </div>
                            </Tooltip.Item>
                        ))}
                    </div>
                </div>
                <ul className='flex flex-col w-[165%] max-[600px]:ml-[65%] gap-2'>
                    {characters.map((character, key) => (
                        <li
                            key={key}
                            className='flex flex-wrap w-full'
                        >
                            <GameListCharacterItem
                                name={character.name}
                                imgName={character.imgName}
                            />
                            <GameListItem
                                texts={[locale.game_alignments[character.gender]]}
                                compare={character?.compare?.[0] || true}
                            />
                            <GameListItem
                                texts={character.race.map((race) => locale.game_alignments[race])}
                                compare={character?.compare?.[1] || true}
                            />
                            <GameListItem
                                texts={[locale.game_alignments[character.alignment]]}
                                compare={character?.compare?.[2] || true}
                            />
                            <GameListItem
                                texts={[character.height.replace('.', "'")]}
                                compare={character?.compare?.[3] || true}
                            />
                            <GameListItem
                                texts={[character.weight]}
                                compare={character?.compare?.[4] || true}
                            />
                            <GameListItem
                                texts={[character.firstAppearance]}
                                compare={character?.compare?.[5] || true}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <GameListMore />
        </div>
    )
}

export default GameList
