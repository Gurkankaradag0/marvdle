import { Flame } from 'lucide-react'
import Help from '../../Modals/Help'
import Statistic from '../../Modals/Statistic'

const GameHeader = () => {
    return (
        <div className='flex justify-center items-center gap-2 mb-4'>
            <Statistic />
            <div className='relative select-none'>
                <Flame
                    className='text-marvel-gray' //text-[rgb(229,29,36,.8)]
                    strokeWidth={3}
                    size={42}
                    // fill='#cccccc'
                />
                <span className='absolute top-full -translate-y-4 left-1/2 -translate-x-1/2 text-marvel-gray text-shadow-backdrop text-2xl font-semibold leading-none'>
                    0
                </span>
            </div>
            <Help />
        </div>
    )
}

export default GameHeader
