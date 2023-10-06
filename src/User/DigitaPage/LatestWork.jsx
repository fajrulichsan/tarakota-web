import React from 'react'
import {latestWork} from '../../assets/img/digita/index'

const LatestWork = () => {
  return (
    <div className='px-20 grid grid-cols-2 bg-white'>
        <div className='col-span-1 flex justify-center'>
            <img className='h-[35em] rounded-2xl' src={latestWork}></img>
        </div>
        <div className='col-span-1'>
            <p className='text-6xl w-2/3 font-bold'>Social media management for Kyo Dimsum</p>
            <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies tortor non elit congue.</p>
        </div>
    </div>
  )
}

export default LatestWork;