import React from "react";

const Komisi = () => {
  return (
    <div className="px-5 py-5 md:px-20 lg:px-32">
      <div
        className="rounded-xl md:rounded-3xl p-5 md:p-10 lg:p-16 shadow-md shadow-gold "
      >
        <p className="text-sm md:text-lg lg:text-2xl text-justify">
          Dalam peran sebagai seorang Representatif BisnisTarakota, kamu akan
          mendapatkan komisi yang besar, yang semakin meningkat seiring dengan
          kenaikan tingkat posismu. Dengan posisi yang lebih tinggi, kamu juga
          memiliki kemampuan untuk mendelegrasikan sebagian pekerjaan kepada tim
          lainnya, sehingga kamu bisa mengoptimalkan pendapatanmu sambil
          memberdayakan timmu untuk meraih kesuksesan bersama. Bergabunglah
          dengan kami sekarang dan raih komisi fantastis yang menanti dengan
          contoh dibawah ini:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-4 md:mt-8">
          <div className="col-span-1 md:col-span-6 lg:col-span-4 md:col-start-4 lg:col-start-5">
            <div className="w-full py-2 md:py-3 bg-tera text-white text-center rounded-xl">
              <p className="text-sm md:text-lg lg:text-2xl">Tier 1: Komisi 2,5% total pendapatan</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 lg:col-span-4 md:col-start-1 lg:col-start-3">
            <div className="w-full py-2 md:py-3 bg-tera text-white text-center rounded-xl">
              <p className="text-sm md:text-lg lg:text-2xl">Tier 2: Komisi 1,5% total pendapatan</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <div className="w-full py-2 md:py-3 bg-tera text-white text-center rounded-xl">
              <p className="text-sm md:text-lg lg:text-2xl">Tier 3: Komisi 1,0% total pendapatan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 mt-10 lg:mt-20">
        <div className="col-span-12 md:col-span-8 lg:col-span-6 md:col-start-3 lg:col-start-4">
            <div className="rounded-xl text-white p-5 md:p-10 lg:p-16 shadow-md shadow-gold"
            style={{background: '#404042'}}
            >
                <p className="text-sm md:text-lg lg:text-2xl font-bold">Komisi Super Menggiurkan</p>
                <p className="text-sm md:text-lg lg:text-2xl text-justify">
                Semakin sukses kamu, semakin tinggi komisi yang akan mengalir ke rekeningmu. Ini bukan hanya tentang uang, tapi tentang menggapai level finansial yang lebih tinggi.
                </p>
            </div>
        </div>
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-2xl py-5">
            <p className="text-sm md:text-lg lg:text-2xl text-justify md:text-center">Semua ini adalah hadiah-hadiah yang menunjukkan penghargaan atas dedikasi dan kerja kerasmu. </p>
            <p className="text-sm md:text-lg lg:text-2xl text-justify font-bold md:text-center">Jadilah Representatif BisnisTarakota arsitektur berprestasi dan nikmati manfaat luar biasa ini!</p>
        </div>
      </div>
    </div>
  );
};

export default Komisi;
