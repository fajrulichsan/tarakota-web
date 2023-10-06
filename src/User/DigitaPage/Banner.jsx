import React from 'react';
import {banner} from '../../assets/img/digita/index'

const Banner = () => {
  return (
    <div className='px-20 bg-cover bg-center bg-no-repeat grid grid-cols-10 py-40' 
    style={{
        backgroundImage : `url(${banner})`
    }}
    >
        <div className='col-span-6 space-y-20 text-white'>
            <div>
            <h1 className='text-7xl font-bold'
            >Provide digital marketing solutions for your business</h1>
            <p className='text-2xl'>Scale up your business with a great digital marketing strategy. </p>
            </div>
            <div className='w-40 text-center text-blue-600 bg-white rounded-full py-2 px-6 ' >
                Explore more
            </div>
        </div>
        
    </div>
  )
}

export default Banner;