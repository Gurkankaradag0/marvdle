'use client'
import { useState, useEffect, Fragment } from 'react'
import { useTimer } from 'react-timer-hook'
import classNames from 'classnames'
import useLocaleClient from '../hooks/useLocaleClient'

const Timer = () => {
    const [hour, setHour] = useState([0, 0])
    const [minute, setMinute] = useState([0, 0])
    const [second, setSecond] = useState([0, 0])

    const locale = useLocaleClient()

    let date = new Date()
    date.setDate(date.getDate() + 1)
    let day = date.getDate().toString(),
        month = date.toDateString().split(' ')[1],
        year = date.getFullYear().toString()

    const { seconds, minutes, hours } = useTimer({
        expiryTimestamp: new Date(`${month} ${day}, ${year} 00:00:00 GMT+3`),
        autoStart: true,
        onExpire: () => document.location.reload()
    })

    useEffect(() => {
        setHour([
            hours.toString().length === 1 ? 0 : parseInt(hours.toString()[0]),
            hours.toString().length === 2 ? parseInt(hours.toString()[1]) : parseInt(hours.toString()[0])
        ])

        setMinute([
            minutes.toString().length === 1 ? 0 : parseInt(minutes.toString()[0]),
            minutes.toString().length === 2 ? parseInt(minutes.toString()[1]) : parseInt(minutes.toString()[0])
        ])
        setSecond([
            seconds.toString().length === 1 ? 0 : parseInt(seconds.toString()[0]),
            seconds.toString().length === 2 ? parseInt(seconds.toString()[1]) : parseInt(seconds.toString()[0])
        ])
    }, [seconds])

    return (
        <div className='my-4 text-center'>
            <div className='my-0 mx-auto mb-2'>{locale.timer.title}</div>
            <div className='text-4xl font-extrabold flex flex-row justify-center'>
                {new Array(3).fill(0).map((_, i) => {
                    const array = i === 0 ? hour : i === 1 ? minute : second
                    return (
                        <Fragment key={i}>
                            <div className='flex flex-row justify-center'>
                                {array.map((val, i) => (
                                    <div
                                        className='inline-flex relative overflow-hidden h-[40px] select-none'
                                        key={i}
                                    >
                                        <ul
                                            className={classNames({
                                                'duration-500 ease relative inline-flex flex-col m-0 leading-12': true,
                                                'top-[0%]': val === 0,
                                                'top-[-100%]': val === 1,
                                                'top-[-200%]': val === 2,
                                                'top-[-300%]': val === 3,
                                                'top-[-400%]': val === 4,
                                                'top-[-500%]': val === 5,
                                                'top-[-600%]': val === 6,
                                                'top-[-700%]': val === 7,
                                                'top-[-800%]': val === 8,
                                                'top-[-900%]': val === 9
                                            })}
                                        >
                                            {new Array(10).fill(0).map((v, i) => (
                                                <li
                                                    key={i}
                                                    className={val === i ? 'select-none' : ''}
                                                >
                                                    {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            {i < 2 && <span>:</span>}
                        </Fragment>
                    )
                })}
            </div>
            <div className='text-marvel-gray italic text-xs mt-2 leading-4'>
                <span className='whitespace-break-spaces'>{locale.timer.timezone}</span>
            </div>
        </div>
    )
}

export default Timer
