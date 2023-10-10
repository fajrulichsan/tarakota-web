import React from "react";

const Pendapatan = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32 lg:py-10">
      <h1 className="text-lg md:text-2xl lg:text-4xl text-tera text-center font-bold">Pendapatan Fantastis Representatif BisnisTarakota</h1>
      <p className="text-justify text-sm md:text-lg lg:text-2xl mt-3 md:mt-5">
        Banyak yang bertanya tentang gaji Representatif BisnisTarakota, tapi
        sebenarnya kesuksesan sebagai Representatif BisnisTarakota nggak cuma
        soal gaji. Ini soal kemauan kamu untuk mengubah hidup sendiri dan
        membantu orang lain.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 lg:gap-10 mt-3 md:mt-10">
        <div className="col-span-1 md:col-span-12">
          <div
            className="w-full rounded-xl md:rounded-2xl p-5 md:p-7 lg:p-10 shadow-md shadow-gold"
          >
            <p className="text-sm md:text-lg lg:text-2xl text-justify">
              Tapi kami bakal melakukan seleksi buat nentuin apakah kamu cocok
              jadi Representatif BisnisTarakota. Ini beberapa pertanyaan yang
              harus kamu tanyakan ke diri sendiri:
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3">
          <div
            className="w-full rounded-xl md:rounded-2xl p-5 px-8 md:p-10 md:px-16 shadow-md shadow-gold"
          >
            <ul className="list-decimal text-sm md:text-lg lg:text-2xl text-justify">
              <li>
                Apakah saya siap untuk menjalani perjalanan menuju kebebasan
                finansial yang tak terbatas sebagai Representatif BisnisTarakota
                pada bidang arsitektur ini?
              </li>
              <li>
                Apakah saya memiliki keterampilan komunikasi yang kuat untuk
                membangun hubungan dengan calon klien dan menjelaskan manfaat
                produk pada bidang arsitektur ini secara meyakinkan?
              </li>
              <li>
                Apakah saya bisa untuk aktif di media sosial dan bersedia
                menggunakan platform-platform tersebut untuk membangun jaringan
                dan mencari klien potensial?
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 md:col-span-12">
          <div
            className="w-full rounded-xl md:rounded-2xl p-5 md:p-10 shadow-md shadow-gold"
          >
            <p className="text-sm md:text-lg lg:text-2xl text-justify">
              Pertanyaan-pertanyaan ini akan membantu kamu merenungkan apakah
              kamu cocok untuk menjadi seorang Representatif BisnisTarakota pada
              bidang arsitektur ini dengan fokus pada kebebasan finansial,
              pendapatan tak terhingga, kemampuan komunikasi, keaktifan di media
              sosial, dan kesiapan menghadapi penolakan.
            </p>
            <p className="font-bold text-sm md:text-lg lg:text-2xl">
              Gimana, kalau kamu jawab iya lebih dari 70%, berarti kamu mungkin
              cocok jadi Representatif BisnisTarakota!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pendapatan;
