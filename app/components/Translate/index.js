import { cookies } from 'next/headers'
import locales from '@/app/locales'
import { defaultLocale } from '@/middleware'

const Translate = ({ children }) => {
    const lang = cookies().get('lang')?.value ?? defaultLocale
    return locales[lang][children]
}

export default Translate
