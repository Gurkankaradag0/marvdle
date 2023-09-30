'use client'

import useLocaleClient from './hooks/useLocaleClient'

const Error = ({ error, reset }) => {
    const locale = useLocaleClient()
    console.log(error)
    return (
        <div className='mt-8 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-[250px] font-extrabold text-shadow-404 leading-none select-none'>500</h1>
            <span className='text-marvel-gray text-lg font-semibold'>{locale.page500desc}</span>
            <button
                className='w-40 h-12 rounded-lg flex justify-evenly items-center border-2 border-solid border-marvel-red bg-marvel-black duration-300 ease hover:scale-105'
                onClick={reset}
            >
                {locale.tryAgain}
            </button>
        </div>
    )
}

export default Error
