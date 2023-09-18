'use client'
import { useState, useEffect } from 'react'
import locales from '@/app/locales'

const useLocaleClient = () => {
    const [lang, setLang] = useState('')
    useEffect(() => {
        setLang(document.documentElement.getAttribute('lang'))
        const observer = new MutationObserver((mutationsList, observer) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                    if (mutation.attributeName === 'lang') {
                        setLang(mutation.target.getAttribute(mutation.attributeName))
                    }
                }
            })
        })

        observer.observe(document.documentElement, { attributes: true })

        return () => {
            observer.disconnect()
        }
    }, [])

    return locales[lang]
}

export default useLocaleClient
