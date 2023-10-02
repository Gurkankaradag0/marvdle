'use client'

import { SettingsIcon } from 'lucide-react'
import useLocaleClient from '@/hooks/useLocaleClient'
import { setUnitOfHeight, setUnitOfWeight, useUnitOfHeight, useUnitOfWeight } from '@/store/actions/settings'
import { UNIT_OF_HEIGHTS, UNIT_OF_WEIGHTS } from '@/utils/constans'

import Modal from '../Modal'
import Tooltip from '../Tooltip'
import Select from '../Select'

const Settings = () => {
    const locale = useLocaleClient()
    const unitOfHeight = useUnitOfHeight()
    const unitOfWeight = useUnitOfWeight()

    return (
        <Modal>
            <Modal.Button className='flex justify-center items-center'>
                <Tooltip.Item text={locale.tooltips.settings}>
                    <SettingsIcon
                        className='text-marvel-gray hover:text-white transition-all hover:rotate-45'
                        strokeWidth={2.5}
                        size={42}
                    />
                </Tooltip.Item>
            </Modal.Button>
            <Modal.Panel>
                <div className='flex flex-col gap-6 font-medium'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.settings.title}</span>
                        <hr className='w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <span className='flex-1'>{locale.modals.settings.unitOfHeight}:</span>
                            <div className='flex-1'>
                                <Select
                                    values={UNIT_OF_HEIGHTS}
                                    value={unitOfHeight}
                                    onChange={setUnitOfHeight}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='flex-1'>{locale.modals.settings.unitOfWeight}:</span>
                            <div className='flex-1'>
                                <Select
                                    values={UNIT_OF_WEIGHTS}
                                    value={unitOfWeight}
                                    onChange={setUnitOfWeight}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Panel>
        </Modal>
    )
}

export default Settings
