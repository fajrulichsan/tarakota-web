import React, {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider-project.css";

const trikList = [
    {
        id : 1,
        title : "Kuasai Produk Arsitektur dengan Brilian",
        body : "Menjadi penguasa dalam memahami produk arsitektur yang kamu tawarkan. Kenali produk hingga ke dalamnya, sehingga kamu bisa menjelaskan manfaatnya dengan gemilang."
    },
    {
        id : 2,
        title : "Kuasai Produk Arsitektur dengan Brilian",
        body : "Menjadi penguasa dalam memahami produk arsitektur yang kamu tawarkan. Kenali produk hingga ke dalamnya, sehingga kamu bisa menjelaskan manfaatnya dengan gemilang."
    },
    {
        id : 3,
        title : "Kuasai Produk Arsitektur dengan Brilian",
        body : "Menjadi penguasa dalam memahami produk arsitektur yang kamu tawarkan. Kenali produk hingga ke dalamnya, sehingga kamu bisa menjelaskan manfaatnya dengan gemilang."
    },
    {
        id : 4,
        title : "Kuasai Produk Arsitektur dengan Brilian",
        body : "Menjadi penguasa dalam memahami produk arsitektur yang kamu tawarkan. Kenali produk hingga ke dalamnya, sehingga kamu bisa menjelaskan manfaatnya dengan gemilang."
    }
]
const TrikAndTips = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 
    const settings = {
      dots: true,
      infinite: true,
      arrow: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      beforeChange: (current, next) => setCurrentSlide(next),
      appendDots: (dots) => (
        <ul style={{ margin: "-20px 0" }}>
          {dots.map((dot, index) => (
            <li
              key={index}
              style={{ display: "inline-block", marginRight: "5px" }}
            >
              {dot}
            </li>
          ))}
        </ul>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "15px",
            height: "15px",
            background: currentSlide === i ? "#D4B754" : "transparent",
            border:
              currentSlide === i ? "2px solid #BABABA" : "2px solid #BABABA",
            borderRadius: "50%",
            marginTop: "-10px",
            transition: "background-color 0.3s ease",
          }}
          className="custom-dot"
        ></div>
      ),
      prevArrow: (
        <div className="slick-arrow custom-prev-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 10 22"
            fill="none"
            stroke="white" // Ganti warna menjadi putih
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l-6-6 6-6" />
          </svg>
        </div>
      ),
      nextArrow: (
        <div className="slick-arrow custom-prev-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 18 22"
            fill="none"
            stroke="white" // Ganti warna menjadi putih
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      ),
      responsive: [
        {
          breakpoint: 680, // Adjust this breakpoint as needed for mobile devices
          settings: {
            slidesToShow: 1, // Number of slides to show on mobile devices
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1023, // Adjust this breakpoint as needed for larger tablets
          settings: {
            slidesToShow: 2, // Number of slides to show on larger tablets
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className='px-5 py-5 md:py-10 md:px-20 lg:px-32'>
        <h1 className='text-lg md:text-2xl lg:text-4xl text-tera text-center font-bold'>Tips Menjadi Representatif BisnisTarakota Sukses</h1>
        <p className='text-sm md:text-lg lg:text-2xl text-center'>Tips Menjadi Representatif BisnisTarakota Sukses</p>
        <div className='px-5'>
        <Slider {...settings} className="">
        {trikList.map((item) => (
          <div className="p-3 h-[13em] md:h-[18em] lg:h-[15em]">
              <div
                  key={item.id}
                  className="flex p-5 lg:p-10 relative border-4 border-white rounded-2xl md:rounded-3xl h-full"
                >
                  <div className="rounded-lg">
                    <h3 className="test-md md:text-xl lg:text-2xl font-semibold mb-2 text-center">
                      {item.title}
                    </h3>
                    <div className="relative text-sm md:text-lg lg:text-xl text-justify">
                      {item.body}
                    </div>
                  </div>
                </div>
          </div>
              
              ))}
      </Slider>
        </div>
        <p className='text-sm md:text-lg lg:text-2xl text-justify md:text-center mt-10'>Dengan mengaplikasikan tips-tips ini, kamu akan berada di jalur cepat menuju kesuksesan sebagai Representatif BisnisTarakota yang berprestasi</p>
        <h1 className='text-lg md:text-2xl lg:text-4xl text-tera font-bold text-center mt-5 md:mt-8 lg:mt-16'>Jadi, sudah siap untuk jadi Representatif BisnisTarakota yang sukses?</h1>
        <div className='grid grid-col-12 py-5 md:py-8 lg:py-10'>
            <div className='col-span-12'>
                <div className='rounded-xl md:rounded-2xl p-5 px-8 md:px-10 md:p-10 lg:px-16 shadow-md shadow-gold'
                >
                    <h1 className='text-sm md:text-lg lg:text-2xl font-bold text-center'>Tips Menjadi Representatif BisnisTarakota Sukses</h1>
                    <div className='text-sm md:text-lg lg:text-2xl mt-3 md:mt-5'>
                        <p>Nih, contoh penghasilan sebagai Representatif BisnisTarakota:</p>
                        <ul className='list-disc px-5 md:px-12 text-justify'>
                            <li>Bayangin, kamu ajak 500 orang buat ikut program BisnisTarakota.</li>
                            <li>Dari 500 orang tersebut, ambil 2% yang tertarik sebagai potential support kamu.</li>
                            <li>Setiap potential support yang kamu ajak bisa bantu kamu dapet proyek senilai minimal 25.000.000 Rupiah per bulan.</li>
                            <li>Kamu bakal dapet bonus 2,5% dari proyek yang mereka dapetin.</li>
                            <li>Jadi, kalau semua temen kamu aktif, kamu bisa dapetin bonus 6.250.000 Rupiah per bulan atau 75.000.000 Rupiah per tahun!</li>
                        </ul>
                        <p>Tentu aja, ini cuma contoh. Kamu bisa dapetin lebih dari ini kalau kamu kerja keras dan ajak lebih banyak orang lagi sebagai tim Representatif BisnisTarakota kamu.</p>
                    </div>  
                </div>
            </div>

        </div>
        <p className='text-sm md:text-lg lg:text-4xl text-tera font-semibold text-justify tracking-wider'>Yuk, ayo segera jadi bagian dari keluarga besar kami! Setelah kamu bergabung, akan banyak orang lain yang akan berada di bawah naunganmu dan menjadi bagian dari tim suksesmu. Jangan tunda lagi, isi formulir di bawah ini dan jangan ragu untuk menghubungi kami sekarang! Sukses menanti, jadi mari kita mulai perjalanan ini bersama!</p>
    </div>
  )
}

export default TrikAndTips;