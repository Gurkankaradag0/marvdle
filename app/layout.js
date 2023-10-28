import '@/assets/css/globals.css'
import { defaultLocale } from '~/middleware'
import { Poppins } from 'next/font/google'
import { cookies } from 'next/headers'
import HomeLayoutContainer from './containers/Home/HomeLayoutContainer'
import StoreProvider from './contexts/StoreProvider'
import TooltipProvider from './contexts/TooltipProvider'
import locales from './locales'

import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

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
                <Script
                    id='Adsense-id'
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8917872308902699'
                    crossOrigin='anonymous'
                    strategy='afterInteractive'
                />
                <StoreProvider>
                    <TooltipProvider>
                        <HomeLayoutContainer>{children}</HomeLayoutContainer>
                    </TooltipProvider>
                </StoreProvider>
                <Analytics />
            </body>
        </html>
    )
}

export default RootLayout
