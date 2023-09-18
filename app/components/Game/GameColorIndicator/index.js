'use client'

import { useState, useEffect } from 'react'
import { useCharacters } from '@/app/store/actions/game'
import { XIcon } from 'lucide-react'
import useLocaleClient from '@/app/hooks/useLocaleClient'

const GameColorIndicator = () => {
    const [open, setOpen] = useState(true)
    const characters = useCharacters()
    const locale = useLocaleClient()

    const onClose = () => {
        localStorage.setItem('colorIndicator', JSON.stringify(false))
        setOpen(false)
    }

    useEffect(() => {
        setOpen((localStorage.getItem('colorIndicator') && JSON.parse(localStorage.getItem('colorIndicator'))) ?? true)
    }, [])

    if (characters.length === 0 || !open) return null
    return (
        <div className='mt-2 mb-4 border-2 rounded-md border-marvel-red bg-marvel-black relative p-4 flex flex-col w-3/4'>
            <div className='text-center text-xl font-semibold mb-4'>{locale.game_colorIndicator.title}</div>

            <div className='flex flex-wrap w-full'>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>
                    <div className='block w-10 h-10 rounded-md border border-marvel-gray bg-marvel-blue' />
                </div>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>
                    <div className='block w-10 h-10 rounded-md border border-marvel-gray bg-marvel-yellow' />
                </div>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>
                    <div className='block w-10 h-10 rounded-md border border-marvel-gray bg-marvel-red' />
                </div>
            </div>
            <div className='flex flex-wrap w-full'>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>{locale.game_colorIndicator.good}</div>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>{locale.game_colorIndicator.partial}</div>
                <div className='flex justify-center items-center basis-[calc(33.3%_-_8px)] m-1'>{locale.game_colorIndicator.bad}</div>
            </div>
            <button
                onClick={onClose}
                className='absolute rounded-md border-2 -top-[15px] hover:bg-marvel-gray -right-[15px] border-marvel-red bg-marvel-black p-1 flex justify-center items-center'
            >
                <XIcon size={18} />
            </button>
        </div>
    )
}

export default GameColorIndicator
