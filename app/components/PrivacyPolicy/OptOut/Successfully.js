'use client'

import useLocaleClient from '@/hooks/useLocaleClient'
import { useEffect, useState } from 'react'

const Successfully = ({ searchParams }) => {
    const locale = useLocaleClient()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (searchParams?.['opt-out'] === '1') {
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 5e3)
        }
    }, [searchParams])

    if (!open) return null

    return (
        <span className='text-marvel-gray text-sm font-medium'>
            {` `}
            {locale.privacyPolicy.commonid.success}
        </span>
    )
}

export default Successfully
