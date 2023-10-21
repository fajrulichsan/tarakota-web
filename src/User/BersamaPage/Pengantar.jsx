import React from 'react';
import {pengantarBersama} from '../../assets/img/index'

const Pengantar = () => {
  return (
    <div className='pt-20 md:px-20 px-5 lg:px-32'>
        <div className='grid grid-cols-1 lg:grid-cols-12 lg:h-[10em] rounded-xl md:rounded-2xl shadow-md shadow-gold p-5 md:p-7 lg:p-5' 
        style={{backgroundColor : '#E85738'}}
        >
            <div className='col-span-1 lg:col-span-5 lg:col-start-7 flex flex-col justify-center lg:justify-end'>
            <p className='text-lg md:text-2xl lg:text-4xl font-bold text-white text-center lg:text-justify'>Yuk, Wujudkan Impianmu Punya Experience Center Tarakota Sendiri!</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:h-[18em] lg:-mt-20'>
            <div className='col-span-1 flex justify-center'>
                <img className='h-[18em] md:h-[20em] lg:h-[25em]' src={pengantarBersama} alt="pengantar-bersama" />
            </div>
            <div className='col-span-1 flex flex-col justify-center -mt-8'>
                <p className='text-sm md:text-lg lg:text-2xl text-justify'>“Saatnya kamu menjadi bagian dari dunia arsitektur dan bergabung dengan  salah satu perusahaan arsitektur terkemuka yang memiliki program kemitraan canggih, yaitu <span className='font-bold'>Program Kemitraan BersamaTarakota</span>. Kamu bisa memiliki Tarakota Experience Center secara individu atau bermitra dengan teman-teman lainnya,lho!.”</p>
                <hr className='w-1/2 border-2 border-tera border-opacity-60 mt-3'></hr>
            </div>
        </div>
    </div>
  )
}

export default Pengantar;