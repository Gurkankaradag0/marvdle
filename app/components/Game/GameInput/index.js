'use client'

import { useMemo } from 'react'
import { getCharacterDetail } from '@/actions/game'
import AutoComplete from '@/components/AutoComplete'
import { addCharacters, setPlacement, useCharacterNames, useLoading, usePlacement } from '@/store/actions/game'
import { setIsNew, useIsCompleted } from '@/store/actions/animation'

const GameInput = ({ names, images, placeholder }) => {
    const placement = usePlacement()
    const characterNames = useCharacterNames()
    const loading = useLoading()
    const isCompleted = useIsCompleted()

    const send = async (character) => {
        if (!character) return false
        const response = await getCharacterDetail(character)
        setIsNew(true)
        if (response.founded) {
            addCharacters([response.character])
            setPlacement(parseInt(response.founded))
            return true
        }
        addCharacters([response])
    }

    const [_names, _images] = useMemo(() => {
        const zip = names.map((name, i) => [name, images[i]])
        const filteredZip = zip.filter((name) => !characterNames.includes(name[0]))
        return [filteredZip.map((name) => name[0]), filteredZip.map((name) => name[1])]
    }, [characterNames])

    if (loading || (placement !== 0 && isCompleted)) return null

    return (
        <div className='w-3/4'>
            <AutoComplete
                disabled={!isCompleted}
                values={_names}
                images={_images}
                focused={false}
                onSubmit={send}
                placeholder={placeholder}
                classNameInput={({ isOpen }) =>
                    `bg-marvel-black text-white placeholder:text-marvel-gray border-2 ${isOpen && 'border-b-0'} border-marvel-red py-4`
                }
                classNamePanel={'!bg-marvel-black text-white border-2 border-t-0 border-marvel-red mb-px'}
                classNamePanelItem={'hover:!bg-marvel-red'}
            />
        </div>
    )
}

export default GameInput
