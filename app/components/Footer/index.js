import Link from 'next/link'
import Languages from './Languages'

const Footer = () => {
    return (
        <footer className='flex justify-center items-center gap-2 py-4 text-sm font-semibold'>
            <Languages />
            <span>@2023 {` `}</span>
            <Link
                href='http://www.npoq.net'
                className='text-marvel-blue text-base leading-none -mt-1'
            >
                npoq.net
            </Link>
        </footer>
    )
}

export default Footer
