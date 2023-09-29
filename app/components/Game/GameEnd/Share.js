'use client'

import { useState, useMemo } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import RectangleButton from '../../RectangleButton'
import { TwitterIcon, ClipboardCopyIcon } from 'lucide-react'
import useLocaleClient from '@/hooks/useLocaleClient'
import { useCharacters } from '@/store/actions/game'
import { replacePlaceholders, replaceToEmoji, twitterShare } from '@/utils/helpers'
import { URI } from '@/utils/constans'

const Share = ({ yesterdayPlacement }) => {
    const [copied, setCopied] = useState(false)
    const locale = useLocaleClient()
    const characters = useCharacters()

    const sentence = useMemo(() => {
        let e = replacePlaceholders(locale.game_end.share.text, [
            yesterdayPlacement + 1,
            characters.length === 1 ? locale.game_end.share.one : characters.length,
            characters.length !== 1 ? locale.game_end.share.s : '',
            characters.length < 6 ? `(${locale.game_end.share.easy}) ` : '',
            characters.length === 1 ? '🥇' : ''
        ])

        characters.forEach((character, i) => {
            if (i === 5) return
            e += '\r\n'
            if (character?.compare) {
                character.compare.forEach((val) => {
                    switch (val) {
                        case true:
                            e += '🟩'
                            break
                        case false:
                            e += '🟥'
                            break
                        case 'up':
                            e += '⬆️'
                            break
                        case 'down':
                            e += '⬇️'
                            break
                        default:
                            e += '🟧'
                            break
                    }
                })
            } else {
                e += '🟩🟩🟩🟩🟩🟩'
            }
        })

        if (characters.length > 5) {
            e += `\r\n➕${replaceToEmoji((characters.length - 5).toString())} ${locale.game_end.share.more}`
        }

        return e
    }, [locale])

    const onCopy = () => {
        setCopied(true)
        let timer = setTimeout(() => {
            setCopied(false)
            clearTimeout(timer)
        }, 5e3)
    }

    return (
        <div className='text-xl font-semibold border-solid border-2 rounded-lg relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-marvel-black before:bg-opacity-30 hover:before:bg-opacity-10 before:duration-200 before:transition-all border-marvel-gray bg-gradient-to-b from-marvel-yellow to-marvel-black flex flex-col items-center justify-center text-center py-10 px-10'>
            <div className='z-10 flex flex-col justify-center items-center gap-5'>
                <div className='whitespace-pre-line'>
                    {sentence} <br /> <br /> {URI}
                </div>
                <div className='flex max-[500px]:flex-col justify-center items-center gap-x-4 max-[500px]:gap-y-4'>
                    <CopyToClipboard
                        text={`${sentence}\r\n\r\n${URI}`}
                        onCopy={onCopy}
                    >
                        <RectangleButton
                            title='Panoya kopyalamak için tıklayın'
                            icon={<ClipboardCopyIcon size={32} />}
                            className='uppercase'
                        >
                            {locale.game_end.share.copy}
                        </RectangleButton>
                    </CopyToClipboard>
                    <RectangleButton
                        title="Twitter'da paylaşmak için tıklayın"
                        icon={<TwitterIcon size={32} />}
                        onClick={() => twitterShare(sentence)}
                        className='uppercase'
                    >
                        {locale.game_end.share.share}
                    </RectangleButton>
                </div>
                {copied && (
                    <div className='text-sm duration-100 ease m-4 items-center text-center justify-center text-marvel-black'>
                        {locale.game_end.share.copied_text}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Share
