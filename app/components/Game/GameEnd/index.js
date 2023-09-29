'use client'

import { useEffect } from 'react'
import { setConfetti, setStats, useCharacters, useConfetti, useLoading, usePlacement, useStats } from '@/store/actions/game'

import { scroller } from 'react-scroll'
import { useReward } from 'react-rewards'

import End from './End'
import Share from './Share'
import { useWindowSize } from 'react-use'

const GameEnd = ({ yesterdayPlacement }) => {
    const placement = usePlacement()
    const characters = useCharacters()
    const loading = useLoading()
    const stats = useStats()
    const confetti = useConfetti()
    const { width } = useWindowSize()

    const scrollToEnd = () => {
        scroller.scrollTo('game_end', {
            duration: 750,
            smooth: true,
            containerId: 'body',
            offset: -20
        })
        confetti && setConfetti(false)
    }

    const getRewardConfigs = (width) => {
        if (width >= 1200) return { startVelocity: 25, decay: 0.96, elementSize: 70 }
        else if (width >= 960 && width < 1200) return { startVelocity: 24, decay: 0.96, elementSize: 65 }
        else if (width >= 768 && width < 960) return { startVelocity: 23, decay: 0.95, elementSize: 60 }
        else if (width >= 600 && width < 768) return { startVelocity: 22, decay: 0.95, elementSize: 55 }
        else return { startVelocity: 18, decay: 0.95, elementSize: 50 }
    }

    const { reward } = useReward('game_end_confetti', 'emoji', {
        ...getRewardConfigs(width),
        spread: 90,
        lifetime: 100,
        emoji: ['🥇', '🏆'],
        elementCount: 50,
        zIndex: 9999,
        position: 'absolute',
        onAnimationComplete: scrollToEnd
    })

    const setStatsHandle = () => {
        if (stats.labels.includes(yesterdayPlacement + 1)) return

        const _stats = structuredClone(stats)
        _stats.gamesWon += 1
        characters.length === 1 && (_stats.oneShots += 1)
        _stats.oneShotPercent = Math.floor((_stats.oneShots / _stats.gamesWon) * 100)
        _stats.currentStreak += 1
        _stats.currentStreak > _stats.maxStreak && (_stats.maxStreak = _stats.currentStreak)
        _stats.labels.push(yesterdayPlacement + 1)
        _stats.data.push(characters.length)
        const data = _stats.data.reduce((partialSum, a) => partialSum + a, 0)
        const ave = data / _stats.data.length
        _stats.averageGuesses = ave.toString().length > 1 ? ave.toFixed(1) : ave
        setStats(_stats)
    }

    useEffect(() => {
        if (!loading && placement !== 0) {
            setStatsHandle()
            confetti ? reward() : scrollToEnd()
        }
    }, [loading, placement])

    if (loading || placement === 0) return null

    return (
        <div
            id='game_end'
            className='flex flex-col gap-6 mb-6 w-full max-[500px]:w-[90%]'
        >
            <End />
            <Share yesterdayPlacement={yesterdayPlacement} />
            <div
                id='game_end_confetti'
                className='fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'
            />
        </div>
    )
}

export default GameEnd
