'use client'

import { useState, useEffect, useRef } from 'react'
import { getClue } from '@/app/actions/game'
import { useCharacters } from '@/app/store/actions/game'
import { ImageIcon } from 'lucide-react'

const ClueItem = ({ clueTextDisabled, clueText, clueCount }) => {
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState('')
    const canvasRef = useRef(null)
    const characters = useCharacters()

    const getClueHandle = async () => {
        const { clue } = await getClue()
        setImage(clue)
    }

    useEffect(() => {
        getClueHandle()
    }, [])

    const getBlur = (count) => {
        switch (count) {
            case 0:
            case 1:
                return 15
            case 2:
                return 12
            case 3:
                return 9
            case 4:
                return 6
            case 5:
                return 3
            default:
                return 0
        }
        // switch (count) {
        //     case 0:
        //     case 1:
        //     case 2:
        //     case 3:
        //     case 4:
        //     case 5:
        //     case 6:
        //         return 15
        //     case 7:
        //         return 12
        //     case 8:
        //         return 9
        //     case 9:
        //         return 6
        //     case 10:
        //         return 3
        //     default:
        //         return 0
        // }
    }

    const setBlur = (imageData, blur) => {
        const width = imageData.width
        const height = imageData.height
        const data = imageData.data

        const radius = blur * 2 + 1
        const radiusSquared = radius * radius

        const tempData = new Uint8ClampedArray(data.length)

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let aux_r = 0,
                    aux_g = 0,
                    aux_b = 0

                for (let ky = -blur; ky <= blur; ky++) {
                    for (let kx = -blur; kx <= blur; kx++) {
                        const kky = Math.min(Math.max(y + ky, 0), height - 1)
                        const kkx = Math.min(Math.max(x + kx, 0), width - 1)
                        const offset = (kky * width + kkx) * 4

                        aux_r += data[offset]
                        aux_g += data[offset + 1]
                        aux_b += data[offset + 2]
                    }
                }

                const offset = (y * width + x) * 4
                tempData[offset] = Math.floor(aux_r / radiusSquared)
                tempData[offset + 1] = Math.floor(aux_g / radiusSquared)
                tempData[offset + 2] = Math.floor(aux_b / radiusSquared)
                tempData[offset + 3] = data[offset + 3]
            }
        }

        return new ImageData(tempData, width, height)
    }

    useEffect(() => {
        if (image && open) {
            let abilityCanvasDOM = document.querySelector('#clue-img')
            let abilityCanvasContext = abilityCanvasDOM.getContext('2d')
            let img = new Image()
            img.onload = () => {
                abilityCanvasContext.drawImage(img, 0, 0, abilityCanvasContext.canvas.width, abilityCanvasContext.canvas.height)
                let imageData = abilityCanvasContext.getImageData(0, 0, abilityCanvasContext.canvas.width, abilityCanvasContext.canvas.height)
                abilityCanvasContext.putImageData(setBlur(imageData, getBlur(characters.length)), 0, 0)
            }
            img.src = image
        }
    }, [image, open, characters])

    return (
        <>
            <button
                className='flex flex-col justify-center items-center mt-2 gap-2 w-fit mx-auto group'
                onClick={() => setOpen(!open)}
                disabled={characters.length < clueCount}
            >
                <div
                    className={`flex flex-col justify-center items-center bg-marvel-black rounded-full ease-in duration-100 border-2 border-marvel-red p-4 group-hover:scale-105 group-disabled:scale-100 group-disabled:border-marvel-gray group-disabled:text-marvel-gray`}
                >
                    <ImageIcon
                        size={32}
                        strokeWidth={1.5}
                    />
                </div>
                {characters.length < clueCount ? (
                    <div className='flex flex-col select-none'>
                        <span className='text-sm text-marvel-gray'>{clueText}</span>
                        <span className='text-xs text-marvel-gray'>{clueTextDisabled.replace('{{}}', clueCount - characters.length)}</span>
                    </div>
                ) : (
                    <span className='select-none'>{clueText}</span>
                )}
            </button>
            {open && (
                <canvas
                    id='clue-img'
                    ref={canvasRef}
                    width='480px'
                    height='270px'
                    className='w-[90%] my-0 mx-auto rounded-md border-solid border-2 border-marvel-red'
                    style={{
                        imageRendering: 'pixelated'
                    }}
                />
            )}
        </>
    )
}

export default ClueItem
