import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='flex justify-center items-center py-8'>
            <Link
                href='/'
                className='max-w-[225px] max-[500px]:max-w-[165px]'
            >
                <Image
                    src='/logo.png'
                    width={676}
                    height={227}
                    alt='Marvdle Logo'
                />
            </Link>
        </header>
    )
}

export default Header
