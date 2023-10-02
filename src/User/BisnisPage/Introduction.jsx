import React from 'react'
import {bgVisiMisiAboutUs} from "../../assets/img/index"

const Introduction = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-5 gap-5 my-7 md:px-20 md:gap-10 lg:px-32 lg:gap-20 lg:my-20'>
        <div className='col-span-1 md:col-span-1 lg:col-span1'>
            <div className='w-full h-60 lg:h-80 rounded-2xl bg-cover bg-center bg-no-repeat'
                style={{backgroundImage : `url(${bgVisiMisiAboutUs})`}}
            ></div>
        </div>
        <div className='col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center justify-center'>
            <p className='text-sm md:text-lg lg:text-2xl text-justify'>Kamu pengen banget ngejar pendapatan besar biar semua impianmu bisa tercapai dalam bisnis arsitektur, dan bebas dari masalah ekonomi, bahkan ketika risiko datang dan duit ngk jadi masalah ? </p>
            <p className='text-sm md:text-lg lg:text-2xl text-tera text-justify'>Nah, saatnya kamu kenalan dengan tips sukses mengikuti <span className='font-bold'>program Representatif BisnisTarakota!</span></p>
       </div>
    </div>
  )
}

export default Introduction;