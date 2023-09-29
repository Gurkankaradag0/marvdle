'use client'

import { createElement, useContext, useEffect, useRef, useState } from 'react'
import { TooltipContext } from '.'

const TooltipPanel = ({ arrow = true, arrowClassName, className }) => {
    const { clientRect, text, alignment, setAlignment } = useContext(TooltipContext)

    const ref = useRef()
    const arrowRef = useRef()
    const [pos, setPos] = useState({ visibility: 'hidden', top: 0, left: 0 })
    const [arrowPos, setArrowPos] = useState({})

    useEffect(() => {
        if (!ref.current || !clientRect) return setPos({ visibility: 'hidden', left: 0, top: 0 })

        const wh = window.innerHeight,
            ww = window.innerWidth

        const { height: ph, width: pw } = ref.current.getBoundingClientRect()
        const { height: ah, width: aw } = arrow ? arrowRef.current.getBoundingClientRect() : { height: 0, width: 0 }
        const { top: it, bottom: ib, left: il, right: ir, height: ih, width: iw } = clientRect

        const botTopLeft = () => {
            const centerPos = il + iw / 2 - pw / 2
            if (centerPos < 0) return '2px'
            else if (centerPos + pw >= ww - 2) return ww - 2 - pw - Math.abs(ww - ir) + 'px'
            else return centerPos
        }

        const botTopArrowLeft = () => {
            const centerPos = il + iw / 2 - pw / 2
            const arrowCenterPos = pw / 2 - aw / 2

            if (centerPos < 0) {
                const diff = arrowCenterPos - Math.abs(2 - centerPos)
                return (diff < aw / 2 ? aw / 2 : diff) + 'px'
            } else if (centerPos + pw >= ww - 2) {
                const diff = arrowCenterPos + Math.abs(ww - 2 - pw - centerPos)
                return (diff + aw / 2 >= pw - aw / 2 ? pw - aw / 2 - aw : diff) + 'px'
            } else return arrowCenterPos
        }

        const top = () => {
            setPos({
                bottom: wh - it + aw / 2 + (arrow ? 8 : 6) + 'px',
                left: botTopLeft()
            })
            setArrowPos({
                top: ph - ah / 2 + 'px',
                left: botTopArrowLeft()
            })
        }
        const bottom = () => {
            setPos({
                top: ib + aw / 2 + (arrow ? 8 : 6) + 'px',
                left: botTopLeft()
            })
            setArrowPos({
                top: -ah / 2 + 'px',
                left: botTopArrowLeft()
            })
        }

        const left = () => {
            setPos({
                top: ph / 2 < it ? it + ih / 2 - ph / 2 + 'px' : '2px',
                left: il - pw - aw / 2 - (arrow ? 8 : 6) + 'px'
            })
            setArrowPos({
                top: ph - ih / 2 - ah / 2 + 'px',
                left: `${pw - aw / 2}px`
            })
        }

        const right = () => {
            setPos({
                top: ph / 2 < it ? it + ih / 2 - ph / 2 + 'px' : '2px',
                left: ir + aw / 2 + (arrow ? 8 : 6) + 'px'
            })
            setArrowPos({
                top: ph - ih / 2 - ah / 2 + 'px',
                left: `-${aw / 2}px`
            })
        }

        switch (alignment) {
            case 'top':
                if (it > ph + ah / 2 + (arrow ? 8 : 6)) return top()
                else {
                    setAlignment('bottom')
                    return bottom()
                }
            case 'bottom':
                if (ib + ph + ah / 2 + (arrow ? 8 : 6) < wh) return bottom()
                else {
                    setAlignment('top')
                    return top()
                }
            case 'left':
                if (pw + aw / 2 + (arrow ? 8 : 6) < il) return left()
                else {
                    setAlignment('right')
                    return right()
                }
            case 'right':
                if (pw + aw / 2 + (arrow ? 8 : 6) < ir) return right()
                else {
                    setAlignment('left')
                    return left()
                }
            default:
                return setAlignment('bottom')
        }
    }, [clientRect, text, alignment])

    return createElement(
        'div',
        {
            ref,
            style: {
                position: 'fixed',
                zIndex: 9999,
                ...pos
            }
        },
        <>
            {arrow && (
                <div
                    ref={arrowRef}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        ...arrowPos
                    }}
                >
                    <div
                        className={
                            typeof arrowClassName === 'function'
                                ? arrowClassName({ isOpen: pos.visibility === undefined, alignment })
                                : arrowClassName
                        }
                        style={{ display: 'block', rotate: '45deg' }}
                    />
                </div>
            )}
            <div className={typeof className === 'function' ? className({ isOpen: pos.visibility === undefined }) : className}>{text}</div>
        </>
    )
}

export default TooltipPanel
