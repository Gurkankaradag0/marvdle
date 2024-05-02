import Link from 'next/link'
import Languages from './Languages'
import useLocaleServer from '@/hooks/useLocaleServer'

const Footer = () => {
    const locale = useLocaleServer()
    return (
        <footer className='flex flex-col justify-center items-center py-4 text-sm font-semibold'>
            <div className='flex justify-center items-center gap-2'>
                <Languages />
                <span>@2024 {` `}</span>
                <Link
                    href='http://www.npoq.net'
                    className='text-marvel-blue text-base leading-none -mt-1'
                >
                    npoq.net
                </Link>
            </div>
            <Link
                href='/privacy-policy'
                className='text-xs text-marvel-gray hover:underline'
            >
                {locale.privacyPolicy.privacyPolicy}
            </Link>
        </footer>
    )
}

export default Footer
