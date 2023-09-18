'use client'

import { useCharacters } from '@/app/store/actions/game'
import useLocaleClient from '@/app/hooks/useLocaleClient'
import GameListItem from './GameListItem'
import GameListCharacterItem from './GameListCharacterItem'

const GameList = () => {
    const characters = useCharacters()
    const locale = useLocaleClient()

    if (characters.length === 0) return null
    return (
        <div className='flex flex-col w-[125%] justify-center items-center mb-8'>
            <div className='flex flex-wrap w-full'>
                <span className='select-none relative py-8 text-center m-0.5 basis-[calc(14.28%_-_4px)] text-sm font-semibold'>
                    {locale.game_alignments.character}
                    <hr className='absolute top-3/4 border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                </span>
                <span className='select-none relative py-8 text-center m-0.5 basis-[calc(14.28%_-_4px)] text-sm font-semibold'>
                    {locale.game_alignments.gender}
                    <hr className='absolute top-3/4 border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                </span>
                <span className='select-none relative py-8 text-center m-0.5 basis-[calc(14.28%_-_4px)] text-sm font-semibold'>
                    {locale.game_alignments.race}
                    <hr className='absolute top-3/4 border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                </span>
                <span className='select-none relative py-8 text-center m-0.5 basis-[calc(14.28%_-_4px)] text-sm font-semibold'>
                    {locale.game_alignments.alignment}
                    <hr className='absolute top-3/4 border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                </span>
                <span className='select-none relative py-8 text-center m-0.5 basis-[calc(14.28%_-_4px)] text-sm font-semibold'>
                    {locale.game_alignments.height}
                    <hr className='absolute top-3/4 border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                </span>
                <span className='select-none relative py-8 text-center m-0.5 basis-[calc(14.28%_-_4px)] text-sm font-semibold'>
                    {locale.game_alignments.weight}
                    <hr className='absolute top-3/4 border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                </span>
                <span className='select-none relative py-8 text-center m-0.5 basis-[calc(14.28%_-_4px)] text-sm font-semibold'>
                    {locale.game_alignments.firstAppearance}
                    <hr className='absolute top-3/4 border-t-2 border-marvel-red w-4/5 left-1/2 -translate-x-1/2' />
                </span>
            </div>
            <ul className='flex flex-col w-full gap-2'>
                {characters.map((character, key) => (
                    <li
                        key={key}
                        className='flex flex-wrap w-full'
                    >
                        <GameListCharacterItem
                            name={character.name}
                            imgName={character.imgName}
                        />
                        <GameListItem
                            texts={[locale.game_alignments[character.gender]]}
                            compare={character?.compare?.[0] || true}
                        />
                        <GameListItem
                            texts={character.race.map((race) => locale.game_alignments[race])}
                            compare={character?.compare?.[1] || true}
                        />
                        <GameListItem
                            texts={[locale.game_alignments[character.alignment]]}
                            compare={character?.compare?.[2] || true}
                        />
                        <GameListItem
                            texts={[character.height.replace('.', "'")]}
                            compare={character?.compare?.[3] || true}
                        />
                        <GameListItem
                            texts={[character.weight]}
                            compare={character?.compare?.[4] || true}
                        />
                        <GameListItem
                            texts={[character.firstAppearance]}
                            compare={character?.compare?.[5] || true}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GameList
