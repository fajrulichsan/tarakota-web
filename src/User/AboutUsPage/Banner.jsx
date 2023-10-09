import React from 'react'
import {bgVisiMisiAboutUs} from "../../assets/img/index"

const Banner = () => {
  return (
    <div className='px-5 pt-24 md:px-20 lg:px-32 md:pt-24 lg:pt-32'>
        <div className='w-full h-[10em] md:h-[15em] relative bg-cover bg-center bg-no-repeat rounded-2xl'
          style={{backgroundImage : `url(${bgVisiMisiAboutUs})`}}
        >
            <div className='rounded-2xl inset-0 absolute'
            style={{
            background: 'linear-gradient(287deg, #E85738 0%, rgba(0, 0, 0, 0.30) 99.55%)'
            }}  
            >
            </div>
        </div>
    </div>
  )
}

export default Banner;