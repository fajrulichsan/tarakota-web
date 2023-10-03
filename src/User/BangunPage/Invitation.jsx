import React from 'react'
import {profileTestimoni} from '../../assets/img/index'
const Invitation = () => {
  return (
    <div className=' px-5 py-10 md:py-12 lg:py-20 md:px-20 lg:px-32'>
        <div 
        className='grid grid-cols-3 gap-4 md:gap-6 lg:gap-10 items-center p-5 md:p-12 lg:p-24 rounded-2xl'
        style={{boxShadow: '7px 11px 30px 0px #D4B754'}}
        >
            <div className='col-span-1'>
                <img src={profileTestimoni}></img>
            </div>
            <div className='col-span-2'>
                <p className='text-right text-md md:text-xl lg:text-3xl'>Jadi, kalo kamu mau dapat studi kelayakan buat tanahmu atau punya teman yang perlu bantuan ini, langsung isi data di bawah ini ya!</p>
            </div>
        </div>
    </div>
  )
}

export default Invitation;