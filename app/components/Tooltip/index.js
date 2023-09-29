'use client'

import { createElement, createContext, Fragment, useState } from 'react'
import TooltipItem from './TooltipItem'
import TooltipPanel from './TooltipPanel'

export const TooltipContext = createContext()

const Tooltip = ({ children }) => {
    const panel = children.find((c) => c.type === TooltipPanel)
    if (!panel) throw 'Tooltip.Panel is required'

    const [clientRect, setClientRect] = useState(null)
    const [text, setText] = useState('')
    const [alignment, setAlignment] = useState('')

    const value = {
        clientRect,
        setClientRect,
        text,
        setText,
        alignment,
        setAlignment
    }

    return createElement(Fragment, null, <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>)
}

Tooltip.Panel = TooltipPanel
Tooltip.Item = TooltipItem

export default Tooltip
