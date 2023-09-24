import React from 'react';
import {bangunIntroduction} from "../../assets/img/index"

const Introduction = () => {
  return (
    <div className='grid grid-cols-2 px-20 my-24'>
        <div className='col-span-1 flex justify-center items-center'>
            <img className='w-80' src={bangunIntroduction}>
            </img>
        </div>
        <div className='col-span-1 flex items-center justify-start'>
            <p className='text-right text-2xl'>Oh ya, buat teman-teman mediator tanah, kita juga welcome banget buat kenalin pemilik tanah ke Tarakota!</p>
        </div>
    </div>
  )
}

export default Introduction;