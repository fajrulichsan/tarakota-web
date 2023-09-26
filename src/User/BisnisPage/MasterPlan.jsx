import React from 'react'
import {bangunIntroduction} from "../../assets/img/index"

const MasterPlan = () => {
  return (
    <div className='px-32 mb-20'>
        <h1 className='text-4xl text-tera text-center font-bold my-16'>Masterplan Keberhasilan Program BisnisTarakota</h1>
        <div className='grid grid-cols-3 gap-10'>
            <div className='col-span-1'>
                <p className='text-2xl text-justify'>“Oke, kita akan bahas rahasia kesuksesan kita sebagai Representatif BisnisTarakota. <span className='font-bold'>Syarat utamanya, kamu harus join program BisnisTarakota lewat website withu.tarakota.com”</span></p>
            </div>
            <div className='col-span-1 flex justify-center'>
                <div className='w-72 h-80 bg-cover bg-center bg-no-repeat' 
                style={{backgroundImage : `url(${bangunIntroduction})`}}
                >
                </div>
            </div>
            <div className='col-span-1 flex flex-col justify-end'>
                <p className='text-2xl text-justify'>Nah, kita punya <span className='font-bold'>rahasia sukses</span> lengkap sebagai <span className='font-bold'>Representatif BisnisTarakota.</span> Kita punya bimbingan offline dan online yang super canggih, kayak kamu yang lagi nemuin website ini sekarang</p>
            </div>
        </div>
    </div>
  )
}

export default MasterPlan;