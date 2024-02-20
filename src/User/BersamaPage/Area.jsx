import React from 'react'
import { Fade } from 'react-reveal'
import {bgVisiMisiAboutUs, img11, img21, img31, img41, img51, img61} from '../../assets/img'

const areaList = [
    {
        id : 1,
        area : "Jakarta",
        image : img11
    },
    {
        id : 2,
        area : "Bandung",
        image : img21
    },
    {
        id : 3,
        area : "Surabaya",
        image : img31
    },
    {
        id : 4,
        area : "Medan",
        image : img61
    },
    {
        id : 5,
        area : "Makasar",
        image : img51
    }
]

const Area = () => {
  return (
    <div className='py-3 md:py-20'>
        <Fade bottom>

        <h1 className='px-5 text-lg md:text-2xl lg:text-4xl text-tera text-center font-bold'>Area Utama untuk Pengembangan Bisnis Experience Center Tarakota</h1>
        </Fade>
        <div className='grid grid-cols-5 mt-5 md:mt-8 lg:mt-10'>
            <Fade bottom >

            {areaList.map((data) =>(
                <div key={data.id} className='col-span-1'>
                <div
                className='h-40 md:h-60 lg:h-80 bg-cover bg-center relative'
                style={{backgroundImage : `url(${data.image})`}}
                >
                    <div className='absolute inset-0 flex justify-center items-center'
                    style={{background: 'linear-gradient(0deg, #E85738 -22.21%, rgba(0, 0, 0, 0.79) 100%)'}}
                    >
                        <p className='text-md md:text-xl lg:text-3xl text-white'>{data.area}</p>
                    </div>

                </div>
            </div>
            ))}
            </Fade>
        </div>
    </div>
  )
}

export default Area;