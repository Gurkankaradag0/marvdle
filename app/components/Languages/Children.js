import locales from '@/app/locales'
import { cookies } from 'next/headers'

const Children = () => {
    const lang = cookies().get('lang').value
    return (
        <>
            {Object.keys(locales).map((locale) => (
                <span
                    key={locale}
                    id={`lang_${locale}`}
                    className={`px-2 cursor-pointer ${lang === locale && 'text-red-400'}`}
                >
                    {locales[lang].languages[locale]}
                </span>
            ))}
        </>
    )
}

export default Children
