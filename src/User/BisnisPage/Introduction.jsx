import React from 'react'
import {bgVisiMisiAboutUs} from "../../assets/img/index"

const Introduction = () => {
  return (
    <div className='grid grid-cols-3 px-32 gap-20 my-20'>
        <div className='col-span1'>
            <div className='w-full h-80 rounded-2xl'
                style={{backgroundImage : `url(${bgVisiMisiAboutUs})`}}
            ></div>
        </div>
        <div className='col-span-2 flex flex-col items-center justify-center'>
            <p className='text-2xl'>Kamu pengen banget ngejar pendapatan besar biar semua impianmu bisa tercapai dalam bisnis arsitektur, dan bebas dari masalah ekonomi, bahkan ketika risiko datang dan duit ngk jadi masalah ? </p>
            <p className='text-2xl text-tera'>Nah, saatnya kamu kenalan dengan tips sukses mengikuti <span className='font-bold'>program Representatif BisnisTarakota!</span></p>
       </div>
    </div>
  )
}

export default Introduction;