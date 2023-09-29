'use client'

import { createElement, createContext, useContext, useState, useEffect, useRef, Fragment } from 'react'

const ModalContext = createContext()

const Modal = ({ children }) => {
    const [open, setOpen] = useState(false)

    const button = children.find((c) => c.type === Modal.Button)
    const panel = children.find((c) => c.type === Modal.Panel)

    const context = {
        isOpen: open,
        open: () => setOpen(true),
        close: () => setOpen(false)
    }

    return createElement(
        Fragment,
        {},
        <ModalContext.Provider value={context}>
            {button}
            {open && panel}
        </ModalContext.Provider>
    )
}

const Button = ({ as = 'button', className = '', children, ...props }) => {
    const { isOpen, open } = useContext(ModalContext)

    return createElement(
        as,
        {
            onClick: () => open(),
            className: typeof className === 'function' ? className({ isOpen }) : className,
            ...props
        },
        typeof children === 'function' ? children({ isOpen }) : children
    )
}

const Panel = ({ children }) => {
    const { close } = useContext(ModalContext)
    const panelRef = useRef()

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    return createElement(
        'div',
        {
            className:
                'fixed overflow-y-auto w-full left-0 top-0 h-full z-[999999] py-20 max-[960px]:py-16 max-[720px]:py-12 max-[520px]:py-8 max-[420px]:py-4 scroller'
        },
        <>
            <div
                className='fixed left-0 top-0 w-full h-full opacity-80 bg-black'
                onClick={close}
            />
            <div
                ref={panelRef}
                className='relative overflow-hidden rounded shadow-[20px_20px_60px_20px_rgb(122,105,166/40%)] bg-marvel-black border-2 border-marvel-red text-left max-[750px]:w-[86%] max-[750px]:left-[7%] w-3/5 left-[20%] p-8 max-[960px]:p-7 max-[720px]:p-6 max-[520px]:p-5 max-[420px]:p-4 my-20 max-[960px]:my-16 max-[720px]:my-12 max-[520px]:my-8 max-[420px]:my-4'
            >
                {typeof children === 'function' ? children({ close }) : children}
            </div>
        </>
    )
}

Modal.Button = Button
Modal.Panel = Panel

export default Modal
