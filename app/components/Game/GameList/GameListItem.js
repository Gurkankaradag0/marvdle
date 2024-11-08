'use client'

import classNames from 'classnames'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const GameListItem = ({ texts, compare, variants }) => {
    const divRef = useRef()
    const textRef = useRef()
    const [scale, setScale] = useState(0)

    useEffect(() => {
        const divElem = divRef.current
        const textElem = textRef.current

        const containerWidth = divElem.offsetWidth - 12
        const containerHeight = divElem.offsetHeight - 6
        const textWidth = textElem.offsetWidth
        const textHeight = textElem.offsetHeight

        const scale = Math.min(containerWidth / textWidth, containerHeight / textHeight, 1)
        setScale(scale)
    }, [texts])

    return (
        <motion.div
            variants={variants}
            className={classNames(
                'flex justify-center items-center relative select-none rounded overflow-hidden border border-marvel-gray m-0.5 basis-[calc(14.28%_-_4px)] before:block before:w-full before:h-full before:bg-marvel-black before:bg-opacity-40 hover:before:bg-opacity-0 before:transition-all before:duration-300',
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
            <div
                ref={divRef}
                className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center font-medium text-shadow-black-md'
            >
                {texts.map((text, i) => (
                    <span
                        ref={textRef}
                        key={i}
                        className='text-center whitespace-nowrap'
                        style={{
                            transform: `scale(${scale})`
                        }}
                    >
                        {text}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}

export default GameListItem
