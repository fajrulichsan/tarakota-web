import React from 'react'
import {bangunBanner} from '../../assets/img/index'

const Banner = () => {
  return (
    <div className='py-20 px-20'>
        <div 
            className='rounded-xl grid grid-cols-2 p-16'
            style={{boxShadow: '7px 11px 30px 0px #D4B754'}}
        >
            <div className='col-span-1'>
                <div>
                    <p className='text-4xl font-bold text-tera'>Perhatian,</p>
                    <p className='text-4xl font-bold text-tera'>Para Pemilik Tanah!</p>
                    <p className='text-xl font-extrabold'>Hey, Tarakoters!</p>
                    <div className='mt-5 text-lg'>
                        <p>Nih, ada kabar baik buat kamu yang punya lahan tapi belum tahu gimana memaksimalkannya! </p>
                        <p>
                        <span className='font-extrabold'>Program BangunTarakota</span>, bekerja sama dengan Tarakota, lagi buka kesempatan nih buat bantu kamu wujudin impian punya perumahan atau area komersial keren. Gak perlu khawatirin soal biaya, kita bakal nanganin konsep pengembangan dan studi kelayakan tanpa harus mengeluarkan kocek sepeser pun.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 flex justify-center'>
                <div
                className='bg-cover w-11/12 bg-no-repeat bg-center'
                style={
                    {backgroundImage : `url(${bangunBanner})`}
                }>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;