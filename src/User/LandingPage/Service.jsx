import React from 'react';
import {bgBannerSlider} from '../../assets/img/index';

const serviseList = [
    {
        id: 1,
        title : "INTERIOR"
    },
    {
        id: 2,
        title : "ARSITEKTUR"
    },
    {
        id: 3,
        title : "LANSEKAP"
    }
]

const Service = () => {
  return (
    <div className='px-20 py-10'>
        <h1 className='text-3xl font-bold text-center'>Layanan Kami</h1>
        <hr className='w-24 mx-auto border-2 border-tera mt-2'></hr>
        <div className='grid grid-cols-3 gap-10 px-20 mt-16'>
            {serviseList.map((data) => (
                <div className='col-span-1'>
                <div className='h-[30em] w-full bg-center bg-cover relative' 
                style={{backgroundImage : `url(${bgBannerSlider})`}}
                >
                    <div className='inset-0 absolute flex justify-center items-center'
                    style={{background: 'linear-gradient(0deg, #E85738 -22.21%, rgba(0, 0, 0, 0.00) 100%)'}}
                    >
                        <p className='text-4xl text-white font-bold tracking-widest'>{data.title}</p>
                    </div>
                </div>
            </div>
            ))}
            <div className='col-span-3 flex justify-center'>
                <button className='w-fit px-12 py-1 rounded-full bg-tera text-white text-xl' >More</button>
            </div>
        </div>
    </div>
  )
}

export default Service;