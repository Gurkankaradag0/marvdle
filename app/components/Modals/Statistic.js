'use client'

import { BarChart2 } from 'lucide-react'
import Modal from '../Modal'

const Statistic = () => {
    return (
        <Modal>
            <Modal.Button className='flex justify-center items-center'>
                <BarChart2
                    className='text-marvel-gray hover:text-white'
                    strokeWidth={4}
                    size={42}
                />
            </Modal.Button>
            <Modal.Panel>a</Modal.Panel>
        </Modal>
    )
}

export default Statistic
