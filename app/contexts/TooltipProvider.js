'use client'

import classNames from 'classnames'
import Tooltip from '../components/Tooltip'

const TooltipProvider = ({ children }) => {
    return (
        <Tooltip>
            {children}
            <Tooltip.Panel
                className='p-2 bg-marvel-black text-white border-2 border-marvel-red rounded text-xs text-center whitespace-break-spaces min-w-[80px] max-w-[110px]'
                arrowClassName={({ alignment }) => {
                    return classNames('w-3 h-3 bg-marvel-black border-marvel-red', {
                        'border-b-2 border-r-2': alignment === 'top',
                        'border-l-2 border-t-2': alignment === 'bottom',
                        'border-t-2 border-r-2': alignment === 'left',
                        'border-l-2 border-b-2': alignment === 'right'
                    })
                }}
            />
        </Tooltip>
    )
}

export default TooltipProvider
