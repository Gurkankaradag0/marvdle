'use client'

import RectangleButton from './components/RectangleButton'
import useLocaleClient from './hooks/useLocaleClient'

const Error = ({ error, reset }) => {
    const locale = useLocaleClient()
    console.log(error)
    return (
        <div className='mt-8'>
            <RectangleButton onClick={reset}>{locale.tryAgain}</RectangleButton>
        </div>
    )
}

export default Error
