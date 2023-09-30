import '@/assets/css/globals.css'
import { defaultLocale } from '~/middleware'
import { Poppins } from 'next/font/google'
import { cookies } from 'next/headers'
import HomeLayoutContainer from './containers/Home/HomeLayoutContainer'
import StoreProvider from './contexts/StoreProvider'
import TooltipProvider from './contexts/TooltipProvider'
import locales from './locales'

const inter = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin', 'latin-ext'] })

export const generateMetadata = async () => {
    const lang = cookies().get('lang')?.value ?? defaultLocale
    return {
        title: 'Marvdle',
        description: locales[lang].description
    }
}

const RootLayout = ({ children }) => {
    const lang = cookies().get('lang')?.value

    return (
        <html lang={lang ?? defaultLocale}>
            <body
                id='body'
                className={inter.className}
            >
                <StoreProvider>
                    <TooltipProvider>
                        <HomeLayoutContainer>{children}</HomeLayoutContainer>
                    </TooltipProvider>
                </StoreProvider>
            </body>
        </html>
    )
}

export default RootLayout
