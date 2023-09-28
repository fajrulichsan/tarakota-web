import React from 'react'

const Banner = () => {
  return (
    <div className='px-38 py-28'>
        <div className='grid grid-cols-12'>
            <div className='col-span-10 col-start-2'>
                <div className='rounded-3xl p-5'
                style={{
                    border: '5px solid #F8F3ED',
                    background: '#E85738',
                    boxShadow: '5px 7px 50px 0px #D4B754'
                }}
                >
                    <p className='text-center text-4xl font-medium text-white'>Mau Jadi Bagian dari Aksi Investasi Tarakota? Yuk, Gampang Banget!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;