'use client'

import { useMemo } from 'react'
import GameListCharacterItem from './GameListCharacterItem'
import GameListItem from './GameListItem'
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useWindowSize } from 'react-use'
import useLocaleClient from '@/hooks/useLocaleClient'
import { isMobile } from 'react-device-detect'

const GameListSoloItem = ({ character, imgName, compares, texts }) => {
    const { width } = useWindowSize()
    const locale = useLocaleClient()

    const items = useMemo(() => {
        return texts.map((text, i) => {
            return [text, compares[i]]
        })
    }, [compares, texts])

    return (
        <div className='flex flex-col justify-center items-center gap-2 w-full'>
            <div className='w-full overflow-x-scroll scroller'>
                <div className='flex flex-wrap w-[553.34px]'>
                    <GameListCharacterItem
                        name={character}
                        imgName={imgName}
                    />
                    {items.map(([text, compare], i) => (
                        <GameListItem
                            key={i}
                            texts={text}
                            compare={compare}
                        />
                    ))}
                </div>
            </div>
            {isMobile && (
                <div className='min-[600px]:hidden flex justify-center select-none cursor-default items-center gap-1 max-[460px]:text-xs text-marvel-gray'>
                    <MoveLeftIcon
                        size={width < 420 ? 14 : 18}
                        strokeWidth={2}
                    />
                    {locale.more_scroll}
                    <MoveRightIcon
                        size={width < 420 ? 14 : 18}
                        strokeWidth={2}
                    />
                </div>
            )}
        </div>
    )
}

export default GameListSoloItem
