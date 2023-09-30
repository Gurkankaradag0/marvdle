import Link from 'next/link'
import useLocaleServer from './hooks/useLocaleServer'

const notFound = () => {
    const locale = useLocaleServer()
    return (
        <div className='mt-8 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-[250px] font-extrabold text-shadow-404 leading-none select-none'>404</h1>
            <span className='text-marvel-gray text-lg font-semibold'>{locale.page404desc}</span>
            <Link
                href='/'
                className='mt-8 w-40 h-12 rounded-lg flex justify-evenly items-center border-2 border-solid border-marvel-red bg-marvel-black duration-300 ease hover:scale-105'
            >
                {locale.homePage}
            </Link>
        </div>
    )
}

export default notFound
