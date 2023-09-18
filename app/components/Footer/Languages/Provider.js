'use client'

import { SET } from '@/app/actions/cookies'
import Popover from '../../Popover'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'
import langs from '@/app/locales/langs'

const Provider = ({ children }) => {
    const onClickHandle = async (key, value, close) => {
        if (value !== children) {
            close()
            await SET('lang', key)
        } else {
            close()
        }
    }

    return (
        <Popover
            as='div'
            className='relative'
        >
            <Popover.Button
                as='span'
                className='flex justify-center items-center gap-1 cursor-pointer select-none'
            >
                {({ open }) => (
                    <>
                        {children}
                        {open ? <ChevronUp strokeWidth={3} /> : <ChevronDown strokeWidth={3} />}
                    </>
                )}
            </Popover.Button>
            <Popover.Panel
                as='ul'
                className='absolute flex flex-col bottom-full -translate-y-2 left-1/2 -translate-x-1/2 z-50 min-w-full rounded-md bg-marvel-black border-2 border-solid border-marvel-red max-h-52 overflow-y-auto py-1 text-black'
            >
                {({ close }) => (
                    <>
                        {Object.entries(langs).map(([key, value], index) => (
                            <li
                                key={index}
                                className={`py-1 px-2 ${
                                    children === value ? 'bg-marvel-red' : 'hover:bg-marvel-red'
                                } text-white cursor-pointer select-none`}
                                onClick={() => onClickHandle(key, value, close)}
                            >
                                {value}
                            </li>
                        ))}
                    </>
                )}
            </Popover.Panel>
        </Popover>
    )
}

export default Provider
