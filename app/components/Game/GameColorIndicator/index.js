'use client'

import { useState, useEffect, useCallback } from 'react'
import { useCharacters } from '@/store/actions/game'
import { XIcon } from 'lucide-react'
import useLocaleClient from '@/hooks/useLocaleClient'
import Tooltip from '@/components/Tooltip'
import { getLocalStorage, setLocalStorage } from '@/actions/localStorage'

const GameColorIndicator = () => {
    const [open, setOpen] = useState(true)
    const characters = useCharacters()
    const locale = useLocaleClient()

    const onClose = useCallback(() => {
        setLocalStorage('colorIndicator', false)
        setOpen(false)
    })

    useEffect(() => {
        setOpen(getLocalStorage('colorIndicator'))
    }, [])

    if (characters.length === 0 || !open) return null
    return (
        <div className='mt-2 mb-4 border-2 rounded-md border-marvel-red bg-marvel-black relative p-4 flex flex-col w-3/4'>
            <div className='text-center text-xl font-semibold mb-4'>{locale.game_colorIndicator.title}</div>

            <div className='flex flex-wrap w-full'>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>
                    <div className='block w-10 h-10 rounded-md border border-marvel-gray bg-marvel-blue' />
                </div>
                <Tooltip.Item
                    alignment='top'
                    text={locale.tooltips.partial}
                >
                    <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>
                        <div className='block w-10 h-10 rounded-md border border-marvel-gray bg-marvel-yellow' />
                    </div>
                </Tooltip.Item>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>
                    <div className='block w-10 h-10 rounded-md border border-marvel-gray bg-marvel-red' />
                </div>
            </div>
            <div className='flex flex-wrap w-full max-[420px]:text-sm'>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>{locale.game_colorIndicator.good}</div>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>{locale.game_colorIndicator.partial}</div>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>{locale.game_colorIndicator.bad}</div>
            </div>
            <button
                onClick={onClose}
                className='absolute rounded-md border-2 -top-[15px] -right-[15px] border-marvel-red bg-marvel-black p-1 flex justify-center items-center'
            >
                <XIcon size={18} />
            </button>
        </div>
    )
}

export default GameColorIndicator
