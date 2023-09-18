import React from 'react'

const OurTeam = () => {
  return (
    <div className='my-20'>
        <h1 className='text-center text-3xl font-bold tracking-widest'>Meet Our Team</h1>
        <div className='flex justify-center space-x-16 mt-20'>
            <div className='flex flex-col space-y-3'>
                <div className='w-40 h-40 bg bg-red-400 rounded-full'></div>
                <div className='w-40 flex flex-col justify-center items-center '>
                    <p className='font-semibold text-xl'>Muhammad Rafif Fajri</p>
                    <p className='font-normal'>CTO</p>
                </div>
            </div>
            <div className='flex flex-col space-y-3'>
                <div className='w-40 h-40 bg bg-red-400 rounded-full'></div>
                <div className='w-40 flex flex-col justify-center items-center'>
                    <p className='font-semibold text-xl'>Muhammad Rafif Fajri</p>
                    <p className='font-normal'>CTO</p>
                </div>
            </div>
            <div className='flex flex-col space-y-3'>
                <div className='w-40 h-40 bg bg-red-400 rounded-full'></div>
                <div className='w-40 flex flex-col justify-center items-center'>
                    <p className='font-semibold text-xl'>Muhammad Rafif Fajri</p>
                    <p className='font-normal'>CTO</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default OurTeam;