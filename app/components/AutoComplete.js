'use client'

import Image from 'next/image'
import { createContext, createElement, useContext, useState, useEffect, useRef, useMemo } from 'react'

const AutoCompleteContext = createContext()

const AutoComplete = ({
    disabled = false,
    children = undefined,
    values = [],
    images = [],
    placeholder = 'Search...',
    notFound = 'Not Found',
    focused = false,
    extraFunc = undefined,
    onSubmit,
    classNameInput,
    classNamePanel,
    classNamePanelItem,
    ...props
}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const inputRef = useRef()

    if (children && typeof children?.find === 'undefined') throw 'unexpected children'

    const input = children?.find((c) => c.type === AutoComplete.Input)
    const panel = children?.find((c) => c.type === AutoComplete.Panel)

    if ((input && !panel) || (!input && panel)) throw 'saaa'

    const autocomplete = (val) => {
        if (val.toLowerCase().includes(value.toLowerCase())) return true
        return false
    }

    const onClick = (val) => {
        onSubmit && onSubmit(val)
        value && setValue('')
    }

    const completedValues = useMemo(() => {
        if (!value) return focused ? values : []
        if (extraFunc) return values.filter(extraFunc).filter(autocomplete)
        return values.filter(autocomplete)
    }, [value, values, images])

    const context = {
        isOpen: open,
        open: () => setOpen(true),
        close: () => setOpen(false),
        values,
        value,
        setValue,
        completedValues,
        focused,
        onClick,
        inputRef,
        notFound,
        images,
        classNameInput,
        classNamePanel,
        classNamePanelItem
    }

    return createElement(
        'div',
        {
            className: 'relative flex flex-col',
            ...props
        },
        <AutoCompleteContext.Provider value={context}>
            {input && panel ? (
                <>
                    {input}
                    {open && panel}
                </>
            ) : (
                <>
                    <Input
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                    {open && <Panel />}
                </>
            )}
        </AutoCompleteContext.Provider>
    )
}

const Input = ({ placeholder = '', className = '', disabled = false, ...props }) => {
    const { value, setValue, focused, inputRef, open, isOpen, classNameInput, close, onClick, completedValues } = useContext(AutoCompleteContext)

    const [focus, setFocus] = useState(false)

    const onFocus = () => {
        setFocus(true)
        if (value) !isOpen && open()
        else focused && !isOpen && open()
    }

    const onKeyDown = (e) => {
        if (e.key !== 'Enter') return false
        if (!value) return false
        onClick(completedValues[0])
        close()
    }

    const onChange = (e) => {
        setValue(e.target.value)
        if (e.target.value) {
            !isOpen && open()
        }
    }

    return createElement(
        'input',
        {
            ref: inputRef,
            value,
            onChange,
            className:
                typeof className === 'function'
                    ? classNameInput({ isOpen }) || className({ isFocus: focus })
                    : `text-black py-2 px-4 outline-none ${!isOpen ? 'rounded-md' : 'rounded-ss-md rounded-se-md'} ${className} ${
                          typeof classNameInput === 'function' ? classNameInput({ isOpen }) : classNameInput
                      }`,
            placeholder,
            onFocus,
            onBlur: () => setFocus(false),
            onKeyDown,
            disabled,
            ...props
        },
        null
    )
}

const Panel = ({ as = 'ul', completedValues = [], notFound = '', className = '', ...props }) => {
    const {
        completedValues: compValues,
        values: allValues,
        value,
        focused,
        setValue,
        onClick,
        inputRef,
        close,
        isOpen,
        notFound: ntFnd,
        images,
        classNamePanel,
        classNamePanelItem
    } = useContext(AutoCompleteContext)

    const panelRef = useRef()
    const notFoundText = notFound ? notFound : ntFnd

    const values = useMemo(() => {
        if (completedValues && completedValues?.length > 0) return completedValues
        else return compValues
    }, [completedValues, compValues])

    const onSubmit = (value) => {
        onClick(value)
        close()
    }

    const onClose = (e) => {
        if (!e.composedPath().includes(panelRef.current) && !e.composedPath().includes(inputRef.current)) {
            isOpen && close()
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClose)
        return () => {
            document.removeEventListener('click', onClose)
        }
    }, [])

    useEffect(() => {
        !focused && !value && close()
    }, [value])

    if (!isOpen) return null

    return createElement(
        'div',
        {
            className:
                typeof className === 'function'
                    ? classNamePanel({}) || className({})
                    : `z-10 flex flex-col py-2 bg-white absolute top-full left-0 w-full rounded-es-md rounded-ee-md max-h-52 overflow-y-auto overflow-x-hidden text-black scroller ${
                          classNamePanel || className
                      }`,
            ...props
        },
        <>
            {values.length > 0 ? (
                <>
                    {values.map((value, key) => (
                        <div
                            key={key}
                            className={`py-2 px-4 hover:bg-fg-secondary cursor-pointer select-none overflow-x-clip overflow-ellipsis whitespace-nowrap text-left relative ${classNamePanelItem}`}
                            onClick={() => onSubmit(value)}
                        >
                            {images.length > 0 ? (
                                <div className='flex justify-start items-center gap-2'>
                                    <Image
                                        src={`https://cdn.marvel.com/content/1x/${images[allValues.findIndex((element) => element === value)]}`}
                                        alt={`${value} square image`}
                                        width={40}
                                        height={40}
                                        className='w-10 h-10'
                                    />
                                    {value}
                                </div>
                            ) : (
                                value
                            )}
                        </div>
                    ))}
                </>
            ) : (
                <div className='py-2 px-4 flex justify-center items-center cursor-default select-none text-center'>{notFoundText}</div>
            )}
        </>
    )
}

AutoComplete.Input = Input
AutoComplete.Panel = Panel

export default AutoComplete
