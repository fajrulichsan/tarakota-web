import React from 'react'

const Lokasi = () => {
  return (
    <div className='w-full flex justify-center space-x-20 items-center py-20'>
        <div className='w-[20em]'>
            <h1 className='text-4xl text-center font-bold'>Lokasi</h1>
            <p className='text-center text-lg mt-4'>
            Eightyeight @Kasablanka Office Tower A Lantai 26 Unit F
Jl. Casablanca Raya Kav. 88, Kel. Menteng Dalam, Kec. Tebet
Kota Jakarta Selatan 12870
            </p>
        </div>
        <div className='rounded-2xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3055066291313!2d106.89594507374402!3d-6.223388093764668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b46b3e81dd%3A0x9d8b0130018bda4f!2sApartemen%20Casablanca%20East%20Residences%20Tower%20CASSA%20(%20D))!5e0!3m2!1sid!2sid!4v1694981047049!5m2!1sid!2sid" width="550" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Lokasi;