'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpIcon } from 'lucide-react'
import { ChevronDownIcon } from 'lucide-react'
import classNames from 'classnames'

const Select = ({ values, value, onChange }) => {
    const buttonRef = useRef()
    const [optionsPos, setOptionsPos] = useState({})

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height, left, bottom } = entry.target.getBoundingClientRect()
                setOptionsPos({
                    top: bottom,
                    left,
                    width
                })
            }
        })

        if (buttonRef.current) {
            resizeObserver.observe(buttonRef.current)
        }
    }, [])

    return (
        <Listbox
            value={value}
            onChange={onChange}
        >
            <div className='relative'>
                <Listbox.Button
                    ref={buttonRef}
                    className={({ open }) =>
                        classNames('w-full rounded-md bg-marvel-black border-2 border-marvel-red py-2 px-4 flex justify-between items-center', {
                            'border-b-marvel-black rounded-bl-none rounded-br-none': open
                        })
                    }
                >
                    {({ open }) => (
                        <>
                            {value}
                            {open ? (
                                <ChevronUpIcon
                                    size={18}
                                    strokeWidth={3}
                                />
                            ) : (
                                <ChevronDownIcon
                                    size={18}
                                    strokeWidth={3}
                                />
                            )}
                        </>
                    )}
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options
                        className='fixed z-[999] max-h-60 overflow-y-auto rounded-md rounded-tl-none rounded-tr-none bg-marvel-black border-2 border-t-0 border-marvel-red py-1 text-base shadow-lg outline-none'
                        style={optionsPos}
                    >
                        {values.map((value, index) => (
                            <Listbox.Option
                                key={index}
                                value={value}
                                className='py-2 px-4 bg-marvel-black hover:bg-marvel-red select-none cursor-pointer'
                            >
                                {value}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default Select
