import '@/assets/css/globals.css'
import { defaultLocale } from '~/middleware'
import { Poppins } from 'next/font/google'
import { cookies } from 'next/headers'
import HomeLayoutContainer from './containers/Home/HomeLayoutContainer'
import StoreProvider from './contexts/StoreProvider'
import TooltipProvider from './contexts/TooltipProvider'

const inter = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin', 'latin-ext'] })

export const metadata = {
    title: 'Marvdle',
    description:
        'Guess the Marvel character in this Marvel wordle game. A new character for you to guess awaits every day.\rBu Marvel kelime oyununda Marvel karakterini tahmin et. Her gün tahmin edebileceğiniz yeni bir karakter sizi bekliyor olacak.'
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
