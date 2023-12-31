import React, { useEffect, useState } from 'react'
import Textfield from './Textfield'
import StatusMenu from './StatusMenu'
import EquipmentMenu from './EquipmentMenu'
import knight from '/images/heroes/knight.png'
import { useDispatch } from 'react-redux'
import { createHero, getBasicHeroStatus } from '../store/reducers/hero.slice'
import { CreateHeroForm } from '../../types'

type CreateHeroPreviewContainerType = {
    formValue: CreateHeroForm
    setForm: (obj: CreateHeroForm) => void
}

function CreateHeroPreviewContainer({ formValue, setForm }: CreateHeroPreviewContainerType) {
    const dispatch = useDispatch()
    const texts = {
        heroTitle: 'Classe selecionada',
        createHero: 'Criar heroi',
        selectAClass: 'Selecione uma classe',
    };

    const createHeroFunction = () => {
        dispatch(createHero(formValue))
    }


    return (
        <div className='bg-black h-full md:w-3/4 min-w-[300px] rounded-lg bg-opacity-75 justify-center flex flex-wrap py-6'>
            <h3 className='font-gotika text-2xl text-amarelo-200 mt-4 mb-6 text-center self-start w-full'>
                {texts.heroTitle}
            </h3>
            {
                formValue.class &&
                <>
                    <div className='w-4/5 mx-auto'>
                        <Textfield funcaoOnChange={(value) => setForm({ ...formValue, name: value })} value={formValue.name} type='text' id='heroName' placeholder='Nome do heroi' />
                    </div>
                    <div className='w-5/6 h-auto lg:h-[calc(100%-180px)] py-3 mx-auto flex flex-wrap items-start content-start text-amarelo-200'>
                        <div className='flex overflow-x-auto overflow-y-auto'>
                            <div className='w-1/3 min-w-[350px] pr-8'>
                                <StatusMenu />
                            </div>
                            <div className='w-1/3 min-w-[350px]'>
                                <h4 className='text-center text-xl mb-4 font-bold'>Equipamentos</h4>
                                <EquipmentMenu />
                            </div>
                            <div className='w-1/3 min-w-[350px] max-h-[475px] rounded-2xl flex justify-center'>
                                <div className='h-full max-h-[450px] relative'>
                                    <div className='h-full w-full bg-gradient-radial from-transparent to-black absolute top-0 left-0 z-10'>
                                    </div>

                                    <img src={`images/avatars/${formValue.class}-avatar.png`} alt='' className='h-full max-h-[450px] z-0' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex'>
                        <button
                            className='text-amarelo-200 bg-verde-600 rounded-md hover:bg-verde-300 py-4 font-bold w-4/5 mx-auto grow-0 self-end text-xl'
                            onClick={createHeroFunction}
                        >{texts.createHero}</button>

                    </div>
                </>
            }

            {
                !formValue.class &&
                <>
                    <h3 className='font-gotika text-4xl text-amarelo-200 mt-4 mb-6 text-center self-start w-full'>
                        {texts.selectAClass}
                    </h3>
                </>
            }
        </div>
    )
}

export default CreateHeroPreviewContainer