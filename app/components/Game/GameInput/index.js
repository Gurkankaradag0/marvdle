'use client'

import { useMemo } from 'react'
import { getCharacterDetail } from '@/app/actions/game'
import AutoComplete from '@/app/components/AutoComplete'
import { addCharacters, setPlacement, useCharacterNames, usePlacement } from '@/app/store/actions/game'

const GameInput = ({ names, images, placeholder }) => {
    const placement = usePlacement()
    const characterNames = useCharacterNames()

    const send = async (character) => {
        if (!character) return false
        const response = await getCharacterDetail(character)
        if (response.founded) {
            addCharacters([response.character])
            setPlacement(response.founded)
            return true
        }
        addCharacters([response])
    }

    const [_names, _images] = useMemo(() => {
        const zip = names.map((name, i) => [name, images[i]])
        const filteredZip = zip.filter((name) => !characterNames.includes(name[0]))
        return [filteredZip.map((name) => name[0]), filteredZip.map((name) => name[1])]
    }, [characterNames])

    if (placement !== 0) return null

    return (
        <div className='w-3/4 '>
            <AutoComplete
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
