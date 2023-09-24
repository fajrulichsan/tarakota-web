import React from 'react'

const Superiority = () => {
  return (
    <div className='px-20'>
        <h1 className='text-3xl text-center text-tera font-bold'>
        Apasih beda Program BangunTarakota dengan yang lain?
        </h1>
        <hr className='border-2 w-60 mx-auto border-tera mt-2'></hr>
        <div className='grid grid-cols-2 gap-10 my-10'>
            <div className='col-span-1 '
            >
                <div className='flex space-x-10 items-center rounded-3xl p-8'
                 style={{
                    border: '5px solid #FFF',
                    background: '#F9F5EC',
                    boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)'}}>
                    <div className='rounded-full w-40 h-40 bg-green-300'>

                    </div>
                    <div className='grow w-80 text-lg'>Program BangunTarakota tuh paham banget sama keinginan teman-teman Pemilik Tanah. Sudah banyak nih yang kita bantu mewujudkan impian mereka punya perumahan atau area komersial.</div>
                </div>
            </div>
            <div className='col-span-1 bg-red-50'>
                <div className='flex space-x-10 items-center rounded-3xl p-8'
                 style={{
                    border: '5px solid #FFF',
                    background: '#F9F5EC',
                    boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)'}}>
                    <div className='rounded-full w-40 h-40 bg-green-300'>

                    </div>
                    <div className='grow w-80 text-lg'>Program BangunTarakota tuh paham banget sama keinginan teman-teman Pemilik Tanah. Sudah banyak nih yang kita bantu mewujudkan impian mereka punya perumahan atau area komersial.</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Superiority;