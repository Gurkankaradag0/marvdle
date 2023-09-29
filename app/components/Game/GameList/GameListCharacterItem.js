'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

const GameListCharacterItem = ({ name, imgName }) => {
    const divRef = useRef()
    const textRef = useRef()
    const [scale, setScale] = useState(0)
    useEffect(() => {
        const divElem = divRef.current
        const textElem = textRef.current

        const containerWidth = divElem.offsetWidth - 4
        const containerHeight = divElem.offsetHeight - 2
        const textWidth = textElem.offsetWidth
        const textHeight = textElem.offsetHeight

        const scale = Math.min(containerWidth / textWidth, containerHeight / textHeight, 1)
        setScale(scale)
    }, [name])
    return (
        <div className='relative group rounded-md m-0.5 basis-[calc(14.28%_-_4px)] border border-marvel-gray select-none'>
            <Image
                alt={`${name} square image`}
                src={`https://cdn.marvel.com/content/2x/${imgName}`}
                width={64}
                height={64}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
                className='rounded-lg'
                draggable={false}
            />
            <span
                ref={divRef}
                className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4/5 flex flex-col justify-center items-center text-xs group-hover:opacity-100 opacity-0 duration-100 ease-in-out py-0.5 px-1 bg-marvel-red font-semibold'
            >
                <span
                    ref={textRef}
                    style={{
                        transform: `scale(${scale})`
                    }}
                >
                    {name}
                </span>
            </span>
        </div>
    )
}

export default GameListCharacterItem