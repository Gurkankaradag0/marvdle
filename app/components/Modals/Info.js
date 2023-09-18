'use client'

import { InfoIcon } from 'lucide-react'
import Modal from '../Modal'
import useLocaleClient from '@/app/hooks/useLocaleClient'
import Highlight from '../Highlight'
import Link from 'next/link'

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
            className='underline text-marvel-blue'
        >
            {text}
        </Link>
    )
}

const Info = () => {
    const locale = useLocaleClient()
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
                {locale && (
                    <div className='flex flex-col gap-6 font-medium'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-4xl font-semibold'>{locale.modals.info.about.title}</span>
                            <hr className='w-full my-1' />
                            <p className='text-sm whitespace-break-spaces mt-2'>
                                <Highlight
                                    text={locale.modals.info.about.values.join('\n')}
                                    match={['Wordle', 'LoLdle', 'URL']}
                                    render={(text, i) => (
                                        <LinkMatcher
                                            key={i}
                                            text={text}
                                        />
                                    )}
                                />
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-4xl font-semibold'>{locale.modals.info.feedback.title}</span>
                            <hr className='w-full my-1' />
                        </div>
                    </div>
                )}
            </Modal.Panel>
        </Modal>
    )
}

export default Info
