'use client'

import { SET } from '@/actions/cookies'
import { useRouter } from 'next/navigation'

const OptOut = ({ text }) => {
    const router = useRouter()

    const onClickHandle = async () => {
        await SET('_pubcid_optout', '1')
        router.push('?opt-out=1')
    }

    return (
        <span
            className='text-marvel-blue cursor-pointer'
            onClick={onClickHandle}
        >
            {text}
        </span>
    )
}

export default OptOut
