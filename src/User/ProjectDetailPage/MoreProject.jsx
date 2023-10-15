import React from 'react'
import {bgBannerSlider} from '../../assets/img/index'

const MoreProject = () => {
  return (
    <div className='px-5 md:px-20 lg:pb-10 my-10'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-extrabold'>Project Lainnya</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-3 gap-3 p-5 md:p-8 lg:p-10 rounded-xl md:rounded-2xl my-2 md:my-5 shadow-md shadow-gold'>
            
            <div className='col-span-1 h-52 md:h-60 lg:h-80 rounded-2xl bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            
            <div className='col-span-1 h-52 md:h-60 lg:h-80 rounded-2xl bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            <div className='col-span-1 h-52 md:h-60 lg:h-80 rounded-2xl bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            <div className='col-span-1 h-52 md:h-60 lg:h-80 rounded-2xl bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            <div className='flex justify-center items-center col-span-2 md:col-span-4 lg:col-span-1'>
                <button className='w-fit px-12 py-1 md:py-1.5 rounded-full text-white text-sm md:text-md' style={{background: "#E85738"}}>More</button>
            </div>
        </div>
    </div>
  )
}

export default MoreProject;