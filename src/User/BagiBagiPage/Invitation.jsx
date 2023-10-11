import React from 'react'

const Invitation = () => {
  return (
    <div className='px-5 md:px-20 lg:px-32'>
        <div className='rounded-xl md:rounded-2xl p-5 md:p-10 lg:p-16 shadow-md shadow-gold'
        // style={{boxShadow: '7px 11px 30px 0px #D4B754'}}
        >
            <p className='text-sm md:text-lg lg:text-2xl text-justify'>Jadi, gak perlu tunggu sampe kaya duluan buat mulai investasi. Melalui <span className='font-bold'>Program BagiBagiTarakota</span>, kamu bisa mulai investasi dengan jumlah sesuai kemampuan dan tujuan keuangan kamu!</p>
        </div>
        <p className='mt-5 md:mt-8 lg:mt-16 text-sm md:text-xl lg:text-4xl text-tera font-semibold text-justify tracking-wider'>Supaya kamu semakin jago dalam mengelola keuangan kamu sendiri, yuk ikutan Program BagibagiTarakota! tinggal isi data kamu di bawah ini, nanti tim Tarakota bakal langsung kontak kamu buat ngobrolin langkah selanjutnya.</p>
    </div>
  )
}

export default Invitation;