'use client'

import { BarChart2 } from 'lucide-react'
import Modal from '../Modal'
import { useEffect, useRef, useState } from 'react'
import { clearStats, useStats } from '@/store/actions/game'
import { CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Title, Tooltip as ChartJSTooltip } from 'chart.js'
import useLocaleClient from '@/hooks/useLocaleClient'
import { Line } from 'react-chartjs-2'
import { ClipboardCopyIcon } from 'lucide-react'
import { TwitterIcon } from 'lucide-react'
import CopyToClipboard from 'react-copy-to-clipboard'
import RectangleButton from '../RectangleButton'
import { replacePlaceholders, twitterShare } from '@/utils/helpers'
import { URI } from '@/utils/constans'
import Tooltip from '../Tooltip'

const Statistics = () => {
    const stats = useStats()
    const locale = useLocaleClient()
    const [copied, setCopied] = useState(false)
    const [clearDataClick, setClearDataClick] = useState(0)
    const [sentence, setSentence] = useState('')
    const chartRef = useRef()

    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ChartJSTooltip, Legend)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: locale.modals.statistics.chart,
                color: 'white',
                font: {
                    style: 'italic',
                    size: 16
                },
                padding: { bottom: 24 }
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#c6a972'
                },
                ticks: {
                    color: 'white'
                }
            },
            y: {
                beginAtZero: true,

                grid: {
                    color: '#c6a972'
                },
                ticks: {
                    color: 'white'
                }
            }
        },
        maintainAspectRatio: false
    }

    const data = {
        labels: stats.labels.map((label) => `#${label}`),
        datasets: [
            {
                label: locale.modals.statistics.chart,
                data: stats.data,
                borderColor: '#e62429',
                backgroundColor: 'white',
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4
            }
        ]
    }

    const copyData = () => {
        setCopied(true)
        let timer = setTimeout(() => {
            setCopied(false)
            clearInterval(timer)
        }, 5e3)
    }

    const clearData = (e) => {
        if (clearDataClick === 0) {
            e.target.innerHTML = locale.modals.statistics.clearStats.second
            setClearDataClick(clearDataClick + 1)
        } else {
            clearStats()
            e.target.innerHTML = locale.modals.statistics.clearStats.first
            setClearDataClick(0)
        }
    }

    const getSentence = () => {
        let e = `${replacePlaceholders(locale.modals.statistics.mystats, ['#Marvdle'])}:`
        e += `\r\n⚔️ ${locale.modals.statistics.gamesWon}: ${stats.gamesWon}`
        e += `\r\n🤓 ${locale.modals.statistics.averageGuesses}: ${stats.averageGuesses}`
        e += `\r\n🥇 ${locale.modals.statistics.oneShots}: ${stats.oneShots}`
        e += `\r\n🔥 ${locale.modals.statistics.currentStreak}: ${stats.currentStreak}`
        e += `\r\n🚀 ${locale.modals.statistics.maxStreak}: ${stats.maxStreak}`

        return e
    }

    useEffect(() => {
        setSentence(getSentence())
    }, [locale])

    return (
        <Modal>
            <Modal.Button className='flex justify-center items-center'>
                <Tooltip.Item text={locale.tooltips.statistics}>
                    <BarChart2
                        className='text-marvel-gray hover:text-white transition-colors'
                        strokeWidth={4}
                        size={42}
                    />
                </Tooltip.Item>
            </Modal.Button>
            <Modal.Panel>
                <div className='flex flex-col gap-6 font-medium'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.statistics.title}</span>
                        <hr className='w-full my-1' />
                        <div className='font-light text-base mb-4 pb-4'>
                            <div className='flex max-[750px]:flex-col justify-around items-start max-[750px]:items-center text-center gap-x-6 max-[750px]:gap-y-4 uppercase'>
                                <div className='flex flex-col justify-center items-center text-center gap-y-1'>
                                    <div className='text-sm'>{locale.modals.statistics.gamesWon}</div>
                                    <div className='text-4xl font-semibold'>{stats.gamesWon}</div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center gap-y-1'>
                                    <div className='text-sm'>{locale.modals.statistics.averageGuesses}</div>
                                    <div className='text-4xl font-semibold'>{stats.averageGuesses}</div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center gap-y-1'>
                                    <div className='text-sm'>{locale.modals.statistics.oneShots}</div>
                                    <div className='text-4xl font-semibold'>{stats.oneShots}</div>
                                    <div className='text-sm text-marvel-gray font-medium'>{stats.oneShotPercent}%</div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center gap-y-1'>
                                    <div className='text-sm'>{locale.modals.statistics.currentStreak}</div>
                                    <div className='text-4xl font-semibold'>{stats.currentStreak}</div>
                                </div>
                                <div className='flex flex-col justify-center items-center text-center gap-y-1'>
                                    <div className='text-sm'>{locale.modals.statistics.maxStreak}</div>
                                    <div className='text-4xl font-semibold'>{stats.maxStreak}</div>
                                </div>
                            </div>

                            <div className='bg-marvel-gray p-4 rounded-lg mt-8 text-center flex flex-col'>
                                <span className='text-info italic font-semibold text-lg mb-4'>{locale.modals.statistics.chart}</span>
                                <div className='h-100'>
                                    <Line
                                        data={data}
                                        options={options}
                                        ref={chartRef}
                                    />
                                </div>
                            </div>

                            <div className='mt-8 flex max-[500px]:flex-col justify-center items-center gap-x-4 max-[500px]:gap-y-4'>
                                <CopyToClipboard
                                    text={`${sentence}\r\n\r\n${URI}`}
                                    onCopy={copyData}
                                >
                                    <RectangleButton
                                        title='Panoya kopyalamak için tıklayın'
                                        icon={<ClipboardCopyIcon size={32} />}
                                        className='uppercase'
                                    >
                                        {locale.game_end.share.copy}
                                    </RectangleButton>
                                </CopyToClipboard>
                                <RectangleButton
                                    title="Twitter'da paylaşmak için tıklayın"
                                    icon={<TwitterIcon size={32} />}
                                    onClick={() => twitterShare(sentence)}
                                    className='uppercase'
                                >
                                    {locale.game_end.share.share}
                                </RectangleButton>
                            </div>

                            {copied && (
                                <div className='text-sm duration-100 ease m-4 items-center text-center justify-center text-info'>{locale.copied}</div>
                            )}
                            <div className='text-marvel-gray mt-8 flex justify-center items-center'>
                                <span
                                    className='cursor-pointer hover:scale-105 ease duration-100 text-center select-none uppercase'
                                    onClick={clearData}
                                >
                                    {locale.modals.statistics.clearStats.first}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Panel>
        </Modal>
    )
}

export default Statistics
