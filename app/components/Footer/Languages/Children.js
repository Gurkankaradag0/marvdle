import langs from '@/locales/langs'
import { defaultLocale } from '~/middleware'
import { cookies } from 'next/headers'

const Children = () => {
    const lang = cookies().get('lang')?.value || defaultLocale
    return <>{langs[lang]}</>
}

export default Children
