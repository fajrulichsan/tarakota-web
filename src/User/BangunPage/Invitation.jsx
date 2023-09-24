import React from 'react'
import {profileTestimoni} from '../../assets/img/index'
const Invitation = () => {
  return (
    <div className='py-20 px-20'>
        <div 
        className='grid grid-cols-3 gap-10 items-center p-20 rounded-2xl'
        style={{boxShadow: '7px 11px 30px 0px #D4B754'}}
        >
            <div className='col-span-1'>
                <img src={profileTestimoni}></img>
            </div>
            <div className='col-span-2'>
                <p className='text-right text-2xl'>Jadi, kalo kamu mau dapat studi kelayakan buat tanahmu atau punya teman yang perlu bantuan ini, langsung isi data di bawah ini ya!</p>
            </div>
        </div>
    </div>
  )
}

export default Invitation;