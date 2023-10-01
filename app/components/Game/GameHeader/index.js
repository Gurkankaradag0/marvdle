'use client'

import { useLoading } from '@/store/actions/game'
import Help from '@/components/Modals/Help'
import Statistics from '@/components/Modals/Statistics'
import Streak from './Streak'

const GameHeader = () => {
    const loading = useLoading()

    if (loading) return null

    return (
        <div className='flex justify-center items-center gap-2 mb-4'>
            <Statistics />
            <Streak />
            <Help />
        </div>
    )
}

export default GameHeader
