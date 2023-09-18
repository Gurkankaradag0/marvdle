'use client'

import { createElement, createContext, useContext, useState, useEffect, useRef, Fragment } from 'react'

export const PopoverContext = createContext()

const Popover = ({ as = Fragment, children, ...props }) => {
    const [open, setOpen] = useState(false)
    const buttonRef = useRef()

    const button = children.find((c) => c.type === Popover.Button)
    const panel = children.find((c) => c.type === Popover.Panel)

    const context = {
        open,
        close: () => setOpen(false),
        toggle: () => setOpen(!open),
        buttonRef
    }

    return createElement(
        as,
        props,
        <PopoverContext.Provider value={context}>
            {button}
            {open && panel}
        </PopoverContext.Provider>
    )
}

const Button = ({ as = 'button', className = '', children, ...props }) => {
    const { buttonRef, open, toggle } = useContext(PopoverContext)

    return createElement(
        as,
        {
            ref: buttonRef,
            onClick: () => toggle(),
            className: typeof className === 'function' ? className({ open }) : className,
            ...props
        },
        typeof children === 'function' ? children({ open }) : children
    )
}

const Panel = ({ as = 'div', className = '', children, ...props }) => {
    const { buttonRef, close } = useContext(PopoverContext)
    const panelRef = useRef()

    const onClose = (e) => {
        if (!e.composedPath().includes(panelRef.current) && !e.composedPath().includes(buttonRef.current)) {
            close()
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClose)
        return () => {
            document.removeEventListener('click', onClose)
        }
    }, [])

    return createElement(
        as,
        {
            ref: panelRef,
            className: typeof className === 'function' ? className({ open }) : className,
            ...props
        },
        typeof children === 'function' ? children({ close }) : children
    )
}

Popover.Button = Button
Popover.Panel = Panel

export default Popover
