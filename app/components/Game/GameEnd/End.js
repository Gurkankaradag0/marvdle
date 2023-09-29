'use client'

import { useCharacters, usePlacement } from '@/store/actions/game'
import Timer from '../../Timer'
import useLocaleClient from '@/hooks/useLocaleClient'
import Image from 'next/image'
import Highlight from '../../Highlight'
import { replacePlaceholders } from '@/utils/helpers'

const End = () => {
    const placement = usePlacement()
    const characters = useCharacters()
    const locale = useLocaleClient()
    return (
        <div className='text-xs font-semibold border-solid border-2 rounded-lg relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-marvel-black before:bg-opacity-30 hover:before:bg-opacity-10 before:duration-200 before:transition-all border-marvel-gray bg-gradient-to-b from-marvel-blue to-marvel-black flex flex-col items-center justify-center text-center py-10 px-10'>
            <div className='z-10 flex flex-col justify-center items-center gap-2'>
                <div className={`text-4xl mb-4 w-full max-[500px]:flex max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center`}>
                    {characters.length === 1 && (
                        <>
                            {/* <NextImage
                                alt='First Shot'
                                src={FirstShotPNG}
                                className='scale-x-[-1] w-20 inline align-middle'
                                width={80}
                                loading='lazy'
                            /> */}
                            {locale.game_end.end.oneshot}
                            {/* <NextImage
                                alt='First Shot'
                                src={FirstShotPNG}
                                className='w-20 inline align-middle max-[500px]:hidden'
                                width={80}
                                loading='lazy'
                            /> */}
                        </>
                    )}
                    {characters.length !== 1 && `${locale.game_end.end.endList[Math.floor(Math.random() * locale.game_end.end.endList.length)]}`}
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <Image
                        className='rounded-md border-solid border-marvel-red border-2'
                        width={60}
                        height={60}
                        alt={`${characters[0].name} square image`}
                        src={`https://cdn.marvel.com/content/1x/${characters[0].imgName}`}
                        loading='lazy'
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        draggable={false}
                    />
                    <div className='leading-none'>
                        <span className='whitespace-nowrap'>{locale.game_end.end.youguessed}</span>
                        <div className='font-bold text-xl'>{characters[0].name}</div>
                    </div>
                </div>
                <div className='w-full mt-4'>
                    <Highlight
                        text={replacePlaceholders(locale.game_end.end.find_text, [`${placement}${locale.game_end.end.th}`])}
                        match={[`${placement}${locale.game_end.end.th}`]}
                        render={(val) => (
                            <span
                                key={val}
                                className='text-marvel-red'
                            >
                                {val}
                            </span>
                        )}
                    />
                </div>
                <div className='w-full'>
                    {locale.game_end.end.tries}:{` `}
                    <span className='text-marvel-red'>{characters.length}</span>
                </div>
                <hr className='w-1/2 mx-auto mt-4 border-b-2 border-marvel-red' />
                <Timer />
            </div>
        </div>
    )
}

export default End
