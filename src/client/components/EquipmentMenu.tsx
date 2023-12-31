import React, { useState } from 'react'
import { RootState } from '../store'
import { IHero } from '../../server/hero/hero.schema'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip } from 'react-tooltip'
import ItemTooltip from './ItemTooltip'
import { IEquipment, IItem } from '../../server/items/items.schema'
import EquipmentMenuItem from './EquipmentMenuItem'
import { unequipItemById } from '../store/reducers/hero.slice'

function EquipmentMenu() {
    const disptach = useDispatch()
    const hero = useSelector<RootState, IHero>(state => state.hero)
    const [hoverItem, setHoverItem] = useState<IItem | undefined>()


    return (
        <>
            <div className='grid grid-cols-3 grid-rows-8 gap-4 min-h-[320px] px-8'>
                <div className=''></div>
                <div className='bg-amarelo-200 items-center bg-opacity-75 p-2 row-span-2 flex justify-center h-[80px]'>
                    <EquipmentMenuItem itemSlot={hero.equipment.helmet} setHover={() => setHoverItem(hero.equipment.helmet)} />
                </div>
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
                <div  className='bg-amarelo-200 items-center  bg-opacity-75 p-2 row-span-4 flex justify-center h-[130px]'>
                    <EquipmentMenuItem itemSlot={hero.equipment.rightHand} setHover={() => setHoverItem(hero.equipment.rightHand)} />
                </div>
                <div  className='bg-amarelo-200 items-center  bg-opacity-75 p-2 row-span-4 flex justify-center h-[130px]'>
                    <EquipmentMenuItem itemSlot={hero.equipment.armor} setHover={() => setHoverItem(hero.equipment.armor)} />

                </div>

                <div className='bg-amarelo-200 items-center  bg-opacity-75 p-2 row-span-4 flex justify-center h-[130px]'>
                    <EquipmentMenuItem itemSlot={hero.equipment.leftHand} setHover={() => setHoverItem(hero.equipment.leftHand)} />
                </div>


                <div className=''></div>
                <div className='bg-amarelo-200 items-center  bg-opacity-75 p-2 row-span-2 flex justify-center h-[80px]'>
                    <EquipmentMenuItem itemSlot={hero.equipment.boots} setHover={() => setHoverItem(hero.equipment.boots)} />
                </div>
                <div className=''></div>
            </div>
            <Tooltip id='equipment_item_tooltip' place='right' className='z-50' clickable  children={<ItemTooltip item={hoverItem} />} />
        </>
    )
}

export default EquipmentMenu