import React from 'react';


const ProfitInvestasi = () => {
  return (
    <div className='px-5 py-5 md:px-20 lg:px-32 md:py-10'>
        <h1 className='text-xl md:text-3xl w-2/3 md:w-full lg:text-4xl text-tera md:text-center font-bold'>Apa yang bisa kamu dapet dari investasi saham?</h1>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5 lg:gap-10 mt-4 md:mt-10'>
            <div className='col-span-1 md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3 flex space-x-6 items-center'>
                <div className='flex-none text-center items-center text-white w-8 h-8 rounded-full bg-tera'>
                    <p className='mt-1'>1</p>
                </div>
                <div className=' rounded-xl md:rounded-3xl p-5 md:p-10'
                style={{
                    border: '5px solid #FFF',
                    background: '#F9F5EC',
                    boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)'
                }}
                >
                    <p className='text-sm md:text-lg lg:text-2xl text-justify'><span className='font-semibold'>Dividen :</span> Ini kalo perusahaan untung, kamu bisa dapet sebagian dari keuntungan perusahaan itu. Biasanya, dividen kita bagi setiap tiga bulan. Tapi inget, nggak semua perusahaan bakal bagi-bagi dividen, tergantung strategi bisnis mereka.</p>
                </div>
            </div>
            <div className='col-span-1 md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3 flex space-x-6 items-center'>
                <div className='flex-none text-center items-center text-white w-8 h-8 rounded-full bg-tera'>
                    <p className='mt-1'>2</p>
                </div>
                <div className='rounded-xl md:rounded-3xl p-5 md:p-10'
                style={{
                    border: '5px solid #FFF',
                    background: '#F9F5EC',
                    boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)'
                }}
                >
                    <p className='text-sm md:text-lg lg:text-2xl text-justify'><span className='font-semibold'>Keuntungan modal atau capital gain : </span>Kalo bisnisnya lagi bagus, harga sahamnya bisa naik. Ini karena banyak investor yang minat, jadi permintaan sahamnya naik. Jadi, kalo kamu beli saham di harga Rp50.000 per lembar dan setahun kemudian jadi Rp60.000 per lembar, selisih Rp10.000 itu namanya keuntungan modal atau capital gain.</p>
                </div>
            </div>
        </div>
        <p className='text-sm md:text-lg lg:text-2xl font-bold text-justify mt-4 md:mt-10'>Tapi ya, karena investasi saham itu mirip kayak beli bisnis, risiko bisnis pun selalu nemenin. Jadi, kalo lagi susah-susah gara-gara ekonomi lagi lesu misalnya, harga saham bisa turun.</p>
    </div>
  )
}

export default ProfitInvestasi;