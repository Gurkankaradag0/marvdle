import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin', 'latin-ext'] })

export const metadata = {
    title: 'Marvdle',
    description: 'Powered by npoq.net'
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
