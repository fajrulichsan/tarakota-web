import React from 'react'
import {bangunIntroduction} from '../../assets/img/index'

const ProgramBanner = () => {
  return (
    <div className='px-32'>
        <div className='grid grid-cols-3'>
            <div className='col-span-1 flex justify-center'>
            <div className='w-72 h-80 bg-cover bg-center bg-no-repeat' 
                style={{backgroundImage : `url(${bangunIntroduction})`}}
                >
                </div>
            </div>
            <div className='col-span-2 flex items-center'>
                <p className='text-5xl text-right font-bold text-tera'>Rahasianya Karir dan Komisi di Program BisnisTarakota, Hitung-Hitungan yang Bikin Senyum</p>
            </div>
        </div>
        <p className='text-2xl mt-10'>Ketika kamu jadi Representatif BisnisTarakota, kamu bisa memilih beberapa program dari program Representatif BisnisTarakota berikut ini:</p>
    </div>
  )
}

export default ProgramBanner;