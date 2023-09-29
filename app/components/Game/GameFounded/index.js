'use client'

import Highlight from '@/components/Highlight'
import useLocaleClient from '@/hooks/useLocaleClient'
import { useLoading } from '@/store/actions/game'
import { replacePlaceholders } from '@/utils/helpers'

const GameFounded = ({ founded }) => {
    const locale = useLocaleClient()
    const loading = useLoading()
    if (loading) return null
    return (
        <div className='text-xs font-semibold mt-1'>
            <Highlight
                text={replacePlaceholders(locale.founded, [founded])}
                match={[founded]}
                render={(part) => <span className={part === founded ? 'text-marvel-yellow' : ''}>{part}</span>}
            />
        </div>
    )
}

export default GameFounded
