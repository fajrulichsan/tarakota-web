import React from 'react'
import {bangunIntroduction} from '../../assets/img/index'

const ProgramBanner = () => {
  return (
    <div className='px-5 md:px-20 lg:px-32'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-1'>
            <div className='col-span-1 flex justify-center'>
            <div className='w-32 h-40 md:w-56 md:h-64 lg:w-72 lg:h-80 bg-cover bg-center bg-no-repeat' 
                style={{backgroundImage : `url(${bangunIntroduction})`}}
                >
                </div>
            </div>
            <div className='col-span-1 md:col-span-2 flex items-center'>
                <p className='text-md md:text-3xl lg:text-5xl text-right font-bold text-tera'>Rahasianya Karir dan Komisi di Program BisnisTarakota, Hitung-Hitungan yang Bikin Senyum</p>
            </div>
        </div>
        <p className='text-sm md:text-lg lg:text-2xl mt-2 md:mt-5 lg:mt-10 text-justify'>Ketika kamu jadi Representatif BisnisTarakota, kamu bisa memilih beberapa program dari program Representatif BisnisTarakota berikut ini:</p>
    </div>
  )
}

export default ProgramBanner;