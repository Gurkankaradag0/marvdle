'use client'

import { useEffect, useMemo } from 'react'
import { clearState, setGameNumero, setStats, useCharacters, useGameNumero, useLoading, useStats, useVersion } from '@/store/actions/game'
import { motion } from 'framer-motion'
import { getCharacters } from '@/store/actions/game'
import { GAME_ALIGNMENTS } from '@/utils/constans'
import { getLocalStorage } from '@/actions/localStorage'
import useLocaleClient from '@/hooks/useLocaleClient'

import GameListItem from './GameListItem'
import GameListCharacterItem from './GameListCharacterItem'
import Tooltip from '../../Tooltip'
import GameListMore from './GameListMore'
import { setIsCompleted, setIsNew, useIsNew } from '@/store/actions/animation'

const GameList = ({ yesterdayPlacement }) => {
    const characters = useCharacters()
    const gamenumero = useGameNumero()
    const loading = useLoading()
    const locale = useLocaleClient()
    const stats = useStats()
    const version = useVersion()
    const isNew = useIsNew()

    const container = useMemo(() => {
        const _container = {
            hidden: { opacity: 1, scale: 0 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    delayChildren: isNew ? 0.5 : 0,
                    staggerChildren: isNew ? 0.5 : 0
                }
            }
        }
        isNew && setIsNew(false)
        return _container
    }, [isNew])

    const item = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    }

    const setStatsHandle = () => {
        if (stats.currentStreak === 0) return
        if (stats.labels.includes(yesterdayPlacement)) return
        if (stats.labels.includes(yesterdayPlacement + 1)) return
        setStats({ ...stats, currentStreak: 0 })
    }

    useEffect(() => {
        setStatsHandle()
        const localVersion = getLocalStorage('version')

        if (!localVersion || localVersion !== version) clearState()

        if (gamenumero === yesterdayPlacement + 1) getCharacters()
        else setGameNumero(yesterdayPlacement + 1)
    }, [])

    if (loading || characters.length === 0) return null
    return (
        <div className='w-3/4 mb-8'>
            <div className='flex flex-col justify-center items-center scroller w-[110%] -ml-[5%] max-[678px]:overflow-x-scroll max-[678px]:w-[125%] max-[678px]:-ml-[12.5%]'>
                <div className='w-[165%] max-[678px]:ml-[65%]'>
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
                <ul className='flex flex-col w-[165%] max-[678px]:ml-[65%] gap-2'>
                    {characters.map((character) => (
                        <motion.li
                            key={character.name}
                            className='flex flex-wrap w-full'
                            variants={container}
                            initial='hidden'
                            animate='visible'
                            onAnimationStart={() => setIsCompleted(false)}
                            onAnimationComplete={() => setIsCompleted(true)}
                        >
                            <GameListCharacterItem
                                name={character.name}
                                imgName={character.imgName}
                            />
                            <GameListItem
                                texts={[locale.game_alignments[character.gender]]}
                                compare={character?.compare?.[0] || true}
                                variants={item}
                            />
                            <GameListItem
                                texts={character.race.map((race) => locale.game_alignments[race])}
                                compare={character?.compare?.[1] || true}
                                variants={item}
                            />
                            <GameListItem
                                texts={[locale.game_alignments[character.alignment]]}
                                compare={character?.compare?.[2] || true}
                                variants={item}
                            />
                            <GameListItem
                                texts={[character.height.replace('.', "'")]}
                                compare={character?.compare?.[3] || true}
                                variants={item}
                            />
                            <GameListItem
                                texts={[character.weight]}
                                compare={character?.compare?.[4] || true}
                                variants={item}
                            />
                            <GameListItem
                                texts={[character.firstAppearance]}
                                compare={character?.compare?.[5] || true}
                                variants={item}
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>
            <GameListMore />
        </div>
    )
}

export default GameList
