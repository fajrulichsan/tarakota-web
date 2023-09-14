import React from 'react'
import {bgBannerSlider} from '../../assets/img/index'

const MoreProject = () => {
  return (
    <div className='px-20 pb-20'>
        <h1 className='text-3xl font-extrabold'>Project Lainnya</h1>
        <div className='grid grid-cols-5 gap-24 p-10 rounded-3xl my-5' style={{boxShadow: "7px 11px 30px 0px #D4B754"}}>
            <div className='w-60 h-60 rounded-2xl bg-cover' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            <div className='w-60 h-60 rounded-2xl bg-cover' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            <div className='w-60 h-60 rounded-2xl bg-cover' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            <div className='w-60 h-60 rounded-2xl bg-cover' style={{backgroundImage: `url(${bgBannerSlider})`}}></div>
            <div className='flex justify-center items-center'>
                <button className='w-36 py-1.5 rounded-full text-white' style={{background: "#E85738"}}>More</button>
            </div>
        </div>
    </div>
  )
}

export default MoreProject;