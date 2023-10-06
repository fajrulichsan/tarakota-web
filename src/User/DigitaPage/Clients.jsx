import React from 'react'
import {client} from '../../assets/img/digita/index'

const Clients = () => {
  return (
    <div className='px-20 grid grid-cols-12 bg-white py-20'>
        <div className='col-span-7'>
            <p className='text-2xl'>clients</p>
            <p className='text-6xl'>20+ satisfied clients with hundred of projects</p>
            <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies tortor non elit congue.</p>
        </div>
        <div className='col-span-5'>
            <img src={client} alt="" />
        </div>
    </div>
  )
}

export default Clients;