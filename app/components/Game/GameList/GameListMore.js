'use client'
import useLocaleClient from '@/hooks/useLocaleClient'
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useWindowSize } from 'react-use'
import { isMobile } from 'react-device-detect'

const GameListMore = () => {
    const { width } = useWindowSize()
    const locale = useLocaleClient()

    if (!isMobile) return null

    return (
        <div className='min-[678px]:hidden w-[125%] -ml-[12.5%] flex justify-center select-none cursor-default items-center gap-2 max-[460px]:text-sm max-[360px]:text-xs font-semibold text-marvel-gray mt-4'>
            <MoveLeftIcon
                size={width < 420 ? (width < 360 ? 14 : 16) : 18}
                strokeWidth={3}
            />
            {locale.more_scroll}
            <MoveRightIcon
                size={width < 420 ? (width < 360 ? 14 : 16) : 18}
                strokeWidth={3}
            />
        </div>
    )
}

export default GameListMore
