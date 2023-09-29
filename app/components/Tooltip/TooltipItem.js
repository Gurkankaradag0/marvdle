'use client'

import { cloneElement, useContext } from 'react'
import { TooltipContext } from '.'

const TooltipItem = ({ text, alignment = 'bottom', children }) => {
    const { setClientRect, setText, setAlignment } = useContext(TooltipContext)

    const onMouseEnter = (e) => {
        const clientRect = e.currentTarget.getBoundingClientRect()
        if (!clientRect) return
        setText(text)
        setAlignment(alignment)
        setClientRect(clientRect)
    }

    const onMouseLeave = (e) => {
        setClientRect(null)
        setText('')
    }

    return cloneElement(children, {
        onMouseEnter,
        onMouseLeave
    })
}

export default TooltipItem
