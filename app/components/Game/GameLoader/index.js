'use client'

import Loader from '@/components/Loader'
import { useLoading } from '@/store/actions/game'

const GameLoader = () => {
    const loading = useLoading()
    if (!loading) return null
    return (
        <div className='mb-16'>
            <Loader />
        </div>
    )
}

export default GameLoader
