import React from 'react'

const superiorityList = [
    {
        id : 1,
        title : "Program BangunTarakota tuh paham banget sama keinginan teman-teman Pemilik Tanah. Sudah banyak nih yang kita bantu mewujudkan impian mereka punya perumahan atau area komersial."
    },
    {
        id : 2,
        title : "Program BangunTarakota tuh paham banget sama keinginan teman-teman Pemilik Tanah. Sudah banyak nih yang kita bantu mewujudkan impian mereka punya perumahan atau area komersial."
    },
]

const Superiority = () => {
  return (
    <div className='px-5 md:px-20 lg:px-32'>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-center text-tera font-bold'>
        Apasih beda Program BangunTarakota dengan yang lain?
        </h1>
        <hr className='border md:border-2 w-40 md:w-60 mx-auto border-tera mt-2'></hr>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-10 my-6 md:my-10'>
            {superiorityList.map((data) => (
                <div className='col-span-1 '
            >
                <div className='flex space-x-4 md:space-x-5 lg:space-x-10 items-center rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8'
                 style={{
                    border: '5px solid #FFF',
                    background: '#F9F5EC',
                    boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)'}}>
                    <div className='rounded-full w-32 h-20 md:w-32 md:h-24 lg:w-40 lg:h-40 bg-green-300'>

                    </div>
                    <div className='grow w-80 md:w-60 lg:w-80 text-sm md:text-lg lg:text-xl text-justify'>{data.title}</div>
                </div>
            </div>
            ))}
        </div>

    </div>
  )
}

export default Superiority;