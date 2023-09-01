'use client'

import { useEffect, useRef } from 'react'
import { SET } from '@/app/actions/cookies'

const Provider = ({ children }) => {
    const ref = useRef()

    const setLangHandler = async (e) => {
        const lang = document.getElementsByTagName('html')[0].lang
        const locale = e.target.id.replace('lang_', '')
        lang !== locale && (await SET('lang', locale))
    }

    useEffect(() => {
        Object.values(ref.current.children).forEach((child) => {
            child.addEventListener('click', setLangHandler)
        })
        return () => {
            Object.values(ref.current.children).forEach((child) => {
                child.removeEventListener('click', setLangHandler)
            })
        }
    }, [])

    return <div ref={ref}>{children}</div>
}

export default Provider
