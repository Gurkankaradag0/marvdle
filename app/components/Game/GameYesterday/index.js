'use client'

import Highlight from '@/components/Highlight'
import useLocaleClient from '@/hooks/useLocaleClient'
import { useLoading } from '@/store/actions/game'
import { replacePlaceholders } from '@/utils/helpers'

const GameYesterday = ({ placement, character }) => {
    const locale = useLocaleClient()
    const loading = useLoading()
    if (loading || !character) return null
    return (
        <div className='text-sm font-semibold'>
            <Highlight
                text={replacePlaceholders(locale.yesterday, [`#${placement}`, character])}
                match={[`#${placement}`, character]}
                render={(part) => <span className={part === `#${placement}` ? 'text-marvel-blue text-sm' : 'text-marvel-red text-xl'}>{part}</span>}
            />
        </div>
    )
}

export default GameYesterday
