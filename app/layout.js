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
                <Script
                    id='Add-block-1'
                    async
                    src='https://fundingchoicesmessages.google.com/i/pub-8917872308902699?ers=1'
                    nonce='WCxhoLicszDOyx099MS8fg'
                />
                <Script
                    id='Add-block-2'
                    nonce='WCxhoLicszDOyx099MS8fg'
                >
                    {`(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`}
                </Script>
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
