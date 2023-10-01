'use client'

import { useLoading, useStats } from '@/store/actions/game'
import { FlameIcon } from 'lucide-react'
import Tooltip from '@/components/Tooltip'
import useLocaleClient from '@/hooks/useLocaleClient'
import classNames from 'classnames'

const Streak = () => {
    const stats = useStats()
    const locale = useLocaleClient()
    const loading = useLoading()

    return (
        <Tooltip.Item text={locale.tooltips.currentStreak}>
            <div
                className={classNames('relative select-none', {
                    'text-marvel-red': !loading && stats.currentStreak > 0,
                    'text-marvel-gray': loading || stats.currentStreak === 0
                })}
            >
                <FlameIcon
                    strokeWidth={3}
                    size={42}
                />
                <div
                    className={`absolute top-full -translate-y-4 left-1/2 -translate-x-1/2 text-shadow-backdrop text-2xl font-semibold leading-none ${
                        !loading ? (stats.currentStreak > 0 ? 'text-marvel-yellow' : 'text-marvel-gray') : 'text-marvel-gray'
                    }`}
                >
                    {loading ? 0 : stats.currentStreak}
                </div>
            </div>
        </Tooltip.Item>
    )
}

export default Streak
