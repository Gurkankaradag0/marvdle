import { cookies } from 'next/headers'
import locales from '@/locales'
import { defaultLocale } from '~/middleware'

const useLocaleServer = () => {
    const lang = cookies().get('lang')?.value ?? defaultLocale
    return locales[lang]
}

export default useLocaleServer
