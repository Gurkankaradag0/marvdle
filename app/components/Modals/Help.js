'use client'

import { HelpCircle } from 'lucide-react'
import useLocaleClient from '@/hooks/useLocaleClient'
import Modal from '../Modal'
import Highlight from '../Highlight'
import classNames from 'classnames'
import Timer from '../Timer'
import GameListItem from '../Game/GameList/GameListItem'
import GameListCharacterItem from '../Game/GameList/GameListCharacterItem'
import Tooltip from '../Tooltip'
import GameListSoloItem from '../Game/GameList/GameListSoloItem'

const Help = ({ children }) => {
    const locale = useLocaleClient()
    return (
        <Modal>
            <Modal.Button className='flex justify-center items-center'>
                <Tooltip.Item text={locale.tooltips.how2play}>
                    <HelpCircle
                        className='text-marvel-gray hover:text-white'
                        strokeWidth={3}
                        size={42}
                    />
                </Tooltip.Item>
            </Modal.Button>
            <Modal.Panel>
                <div className='flex flex-col gap-6 font-medium'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.help.title}</span>
                        <hr className='w-full' />
                        <p className='text-sm whitespace-break-spaces mt-2'>{locale.modals.help.desc}</p>
                        <Timer />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <hr className='w-full' />
                        <p className='text-sm whitespace-break-spaces mt-2'>
                            <Highlight
                                text={locale.modals.help.how2play.join('\n')}
                                match={Object.values(locale.colors)}
                                render={(txt) => (
                                    <span
                                        className={classNames({
                                            'text-marvel-blue': txt === locale.colors.blue,
                                            'text-marvel-red': txt === locale.colors.red,
                                            'text-marvel-yellow': txt === locale.colors.yellow
                                        })}
                                    >
                                        {txt}
                                    </span>
                                )}
                            />
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.help.properties_title}</span>
                        <hr className='w-full' />
                        <div className='flex flex-col gap-1 text-sm mt-2'>
                            {locale.modals.help.properties.map((property, i) => (
                                <div
                                    key={i}
                                    className='flex flex-col gap-1'
                                >
                                    <div className='flex gap-0.5 items-center'>
                                        <span className='text-marvel-blue text-lg'>{property.title}</span>:
                                    </div>
                                    <span>{property.desc}</span>
                                    <div>
                                        <span className='text-marvel-yellow'>{locale.modals.help.possible_values}</span>: {property.possible_values}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.help.clues.title}</span>
                        <hr className='w-full' />
                        <p className='text-sm whitespace-break-spaces mt-2'>
                            <Highlight
                                text={locale.modals.help.clues.values.join('\n')}
                                match={Object.values(locale.clues)}
                                render={(txt) => <span className='text-marvel-blue text-lg'>{txt}</span>}
                            />
                        </p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-semibold'>{locale.modals.help.example.title}</span>
                        <hr className='w-full' />
                        <div className='flex flex-col gap-1 text-sm mt-2'>
                            <span>
                                <Highlight
                                    text={locale.modals.help.example.desc_1}
                                    match={'Wolverine'}
                                    render={(text) => <span className='text-marvel-blue'>{text}</span>}
                                />
                            </span>
                            <span>
                                <Highlight
                                    text={locale.modals.help.example.desc_2}
                                    match={'Spiderman'}
                                    render={(text) => <span className='text-marvel-blue'>{text}</span>}
                                />
                            </span>
                            <div className='my-2 mb-4'>
                                <GameListSoloItem
                                    character='Spiderman'
                                    imgName='spidey02_ons_crd_01.jpg'
                                    texts={[
                                        [locale.game_alignments.male],
                                        ['human'].map((race) => locale.game_alignments[race]),
                                        [locale.game_alignments.good],
                                        ["5'1"],
                                        [167],
                                        [1962]
                                    ]}
                                    compares={[true, 'partial', true, 'up', 'up', 'up']}
                                />
                            </div>
                            {locale.modals.help.example.values.map((value, i) => (
                                <div
                                    key={i}
                                    className='flex flex-col gap-1'
                                >
                                    <span>
                                        <Highlight
                                            text={value.title}
                                            match={Object.values(locale.colors)}
                                            render={(text) => (
                                                <span
                                                    className={
                                                        text === locale.colors.blue
                                                            ? 'text-marvel-blue'
                                                            : text === locale.colors.yellow
                                                            ? 'text-marvel-yellow'
                                                            : 'text-marvel-red'
                                                    }
                                                >
                                                    {text}
                                                </span>
                                            )}
                                        />
                                    </span>
                                    <span className='text-base font-normal mb-2'>{value.desc}</span>
                                </div>
                            ))}
                            <span>
                                <Highlight
                                    text={locale.modals.help.example.desc_3}
                                    match={'Wolverine'}
                                    render={(text) => <span className='text-marvel-blue'>{text}</span>}
                                />
                            </span>
                            <div className='my-2'>
                                <GameListSoloItem
                                    character='Wolverine'
                                    imgName='034wlv_com_crd_01.jpg'
                                    texts={[
                                        [locale.game_alignments.male],
                                        ['human', 'mutant'].map((race) => locale.game_alignments[race]),
                                        [locale.game_alignments.good],
                                        ["5'3"],
                                        [300],
                                        [1974]
                                    ]}
                                    compares={[true, true, true, true, true, true]}
                                />
                            </div>
                        </div>
                    </div>

                    <span className='text-2xl mt-4 font-semibold'>{locale.modals.help.glhf}</span>
                </div>
            </Modal.Panel>
        </Modal>
    )
}

export default Help
