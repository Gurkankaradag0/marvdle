import { LOADER_CHARACTERS } from '@/utils/constans'
import classNames from 'classnames'
import Icons from './Icons'

const Loader = () => {
    return (
        <div className='w-[120px] h-[120px] flex justify-center relative items-center overflow-hidden rounded-full'>
            <div className='flex flex-wrap w-[240px] h-[240px] absolute left-[0%] top-[0%] bg-[#c7e7fb] animate-loader'>
                {LOADER_CHARACTERS.map((character, index) => (
                    <div
                        key={index}
                        className='basis-[50%] grow-0 shrink-0'
                    >
                        <div className='w-[120px] h-[120px] flex justify-center items-center rounded-full'>
                            <div
                                className={classNames('flex justify-center items-center', {
                                    'w-[75px] h-[75px]': character === 'captain' || character === 'wolverine',
                                    'w-[50px] h-[50px]': character === 'spiderman' || character === 'ironman'
                                })}
                            >
                                <Icons name={character} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Loader
