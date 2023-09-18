'use client'

import classNames from 'classnames'
import { useEffect, useState, useRef } from 'react'

const GameListItem = ({ texts, compare }) => {
    const divRef = useRef()
    const textRef = useRef()
    const [scale, setScale] = useState(0)
    useEffect(() => {
        const divElem = divRef.current
        const textElem = textRef.current

        const containerWidth = divElem.offsetWidth - 8
        const containerHeight = divElem.offsetHeight - 4
        const textWidth = textElem.offsetWidth
        const textHeight = textElem.offsetHeight

        const scale = Math.min(containerWidth / textWidth, containerHeight / textHeight, 1)
        setScale(scale)
    }, [texts])
    return (
        <div
            ref={divRef}
            className={classNames(
                'w-16 flex flex-col justify-center items-center select-none rounded-md overflow-hidden border border-marvel-gray relative m-0.5 basis-[calc(14.28%_-_4px)]',
                {
                    'bg-marvel-red': compare === false || compare === 'down' || compare === 'up',
                    'bg-marvel-blue': compare === true,
                    'bg-marvel-yellow': compare === 'partial',
                    'after:inferior-clip after:top-[1px]': compare === 'down',
                    'after:superior-clip after:bottom-[1px]': compare === 'up',
                    "z-0 after:bg-marvel-black after:duration-300 after:ease after:absolute after:left-0 after:w-full after:h-full after:opacity-60 after:hover:opacity-80 after:z-[-1] after:content-['']":
                        compare === 'up' || compare === 'down'
                }
            )}
        >
            <span
                ref={textRef}
                className='flex flex-col justify-center items-center font-medium text-shadow-black-md'
                style={{
                    transform: `scale(${scale})`
                }}
            >
                {texts.map((text, i) => (
                    <span key={i}>{text}</span>
                ))}
            </span>
        </div>
    )
}

export default GameListItem
