import '@/app/styles/globals.css'
import { defaultLocale } from '@/middleware'
import { Poppins } from 'next/font/google'
import { cookies } from 'next/headers'
import HomeLayoutContainer from './containers/Home/HomeLayoutContainer'

const inter = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin', 'latin-ext'] })

export const metadata = {
    title: 'Marvdle',
    description: 'Powered by npoq.net'
}

const RootLayout = ({ children }) => {
    const lang = cookies().get('lang').value

    return (
        <html lang={lang ?? defaultLocale}>
            <body className={inter.className}>
                <HomeLayoutContainer>{children}</HomeLayoutContainer>
            </body>
        </html>
    )
}

export default RootLayout
