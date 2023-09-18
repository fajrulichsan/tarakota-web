import React from 'react'
import {bgVisiMisiAboutUs} from '../../assets/img/index'

const VisiMisi = () => {
  return (
    <div className='px-20'>
        <h1 className='text-4xl font-bold tracking-wider text-center py-20'>Lebih dekat dengan "Tarakota"</h1>
        <div className='flex justify-evenly items-center w-full'>
            <div 
              className='w-[30em] h-[20em] bg-cover rounded-2xl relative'
              style={{backgroundImage : `url(${bgVisiMisiAboutUs})`}}
            >
              <div 
              className='absolute inset-0 rounded-2xl'
              style={{background: "linear-gradient(0deg, #D4B754 -22.21%, rgba(0, 0, 0, 0.00) 100%)"
              }}>
              </div>
            </div>
            <div className='w-1/2'>
              <p className='text-2xl text-justify'>Tarakota merupakan perusahaan konsultan arsitektur yang handal dan berpengalaman dalam  menyediakan layanan konsultasi dan pengawasan dalam berbagai proyek arsitektur. Tim kami terdiri dari arsitek yang kompeten dan berpengalaman serta spesialis dalam desain arsitektur, interior, furnitur dan lansekap.</p>
            </div>
        </div>

        <div
        className=' mx-14 rounded-3xl flex text-white items-center px-20 py-8 mt-20'
          style={{
            background: '#E85738',
            boxShadow: '7px 11px 30px 0px rgba(212, 183, 84, 0.50)'}}
        >
          <p className='w-[20em] text-6xl'>
            "Visi Misi"
          </p>
          <p className='grow text-lg'>
          Lorem ipsum dolor sit amet. Rem error earum est dolorem provident et quae officia cum quis mollitia. Aut quidem fugit 33 natus magni et omnis assumenda ut voluptatem enim in ipsa animi sit quasi cupiditate id autem nobis. Et doloremque labore qui adipisci molestiae in excepturi aliquid ea natus cupiditate ut veritatis pariatur vel mollitia quia et placeat beatae.
          </p>

        </div>
    </div>
  )
}

export default VisiMisi;