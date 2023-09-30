'use client'

import { InfoIcon } from 'lucide-react'
import Modal from '../Modal'
import useLocaleClient from '@/hooks/useLocaleClient'
import Highlight from '../Highlight'
import Link from 'next/link'
import { replacePlaceholders } from '@/utils/helpers'
import { BUYMECOFFEE, MAIL } from '@/utils/constans'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useVersion } from '@/store/actions/game'

const LinkMatcher = ({ text }) => {
    let url = '#'
    switch (text) {
        case 'Wordle':
            url = 'https://www.nytimes.com/games/wordle/index.html'
            break
        case 'LoLdle':
            url = 'https://loldle.net'
            break
        case 'URL':
            url = 'https://www.wallpaperflare.com/marvel-comics-avengers-age-of-ultron-4k-wallpaper-yjqhi'
            break
        default:
            break
    }
    return (
        <Link
            href={url}
            target={url !== '#' ? '_blank' : '_parent'}
            className='text-marvel-blue'
        >
            {text}
        </Link>
    )
}

const Info = () => {
    const version = useVersion()
    const locale = useLocaleClient()
    const [copied, setCopied] = useState(false)

    const onCopy = () => {
        setCopied(true)
        const timeout = setTimeout(() => {
            setCopied(false)
            clearTimeout(timeout)
        }, 5e3)
    }

    return (
        <Modal>
            <Modal.Button className='flex justify-center items-center'>
                <InfoIcon
                    className='text-marvel-gray hover:text-white'
                    strokeWidth={2.5}
                    size={64}
                />
            </Modal.Button>
            <Modal.Panel>
                <div className='flex flex-col gap-6 font-medium'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.info.about.title}</span>
                        <hr className='w-full my-1' />
                        <p className='text-sm whitespace-break-spaces mt-2'>
                            <Highlight
                                text={locale.modals.info.about.values.join('\n')}
                                match={['Wordle', 'LoLdle', 'URL', locale.modals.info.about.privacyPolicy]}
                                render={(text) =>
                                    text !== locale.modals.info.about.privacyPolicy ? (
                                        <LinkMatcher text={text} />
                                    ) : (
                                        <Link
                                            href={'/privacy-policy'}
                                            className='text-marvel-blue'
                                        >
                                            {text}
                                        </Link>
                                    )
                                }
                            />
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.info.feedback.title}</span>
                        <hr className='w-full my-1' />
                        <div className='text-sm whitespace-break-spaces mt-2'>
                            <Highlight
                                text={replacePlaceholders(locale.modals.info.feedback.values.join('\n'), [MAIL, locale.copied])}
                                match={[MAIL, locale.copied, locale.modals.info.feedback.buyMeCoffee]}
                                render={(text) => {
                                    if (text === locale.modals.info.feedback.buyMeCoffee) {
                                        return (
                                            <Link
                                                href={BUYMECOFFEE}
                                                target='_blank'
                                                className=' text-marvel-blue'
                                            >
                                                {text}
                                            </Link>
                                        )
                                    }

                                    if (text === locale.copied) {
                                        return (
                                            <span
                                                className={`text-xs font-medium text-marvel-gray ${copied ? 'opacity-100' : 'opacity-0 select-none'}`}
                                            >
                                                {text}
                                            </span>
                                        )
                                    }

                                    if (text === MAIL) {
                                        return (
                                            <CopyToClipboard
                                                text={MAIL}
                                                onCopy={onCopy}
                                            >
                                                <span className='text-marvel-blue cursor-pointer'>{MAIL}</span>
                                            </CopyToClipboard>
                                        )
                                    }

                                    return text
                                }}
                            />
                        </div>
                    </div>
                    <br />
                    <h3 className='text-xl font-semibold'>npoq.net</h3>
                    <h5 className='text-xs font-semibold text-marvel-gray'>{version}</h5>
                </div>
            </Modal.Panel>
        </Modal>
    )
}

export default Info
