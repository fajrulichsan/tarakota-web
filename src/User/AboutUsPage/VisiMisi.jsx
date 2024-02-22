import React, {useState, useEffect} from "react";
import { aboutDesc, bottomArrow, topArrow } from "../../assets/img/index";
import {Fade} from "react-reveal"

const VisiMisi = () => {
  const [showVisi, setShowVisi] = useState(false)
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsIpad(window.innerWidth <= 1024)
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-5 md:px-20 lg:px-32">
      <Fade bottom cascade>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wider text-center py-7 md:py-10 lg:py-20">
      “Solving Construction Industry Problems One Project at a Time”
      </h1>
      </Fade>

      <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-x-10">
        <div className="col-span-1 md:col-span-5 col-start-1 ">
          <div
            className="w-full h-[15em] md:h-[17em] lg:h-[25em] bg-cover rounded-xl md:rounded-2xl relative"
            style={{ backgroundImage: `url(${aboutDesc})` }}
          >
          </div>
        </div>
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center items-center  space-y-4">
          <p className="text-sm md:text-lg lg:text-2xl text-justify">
          Tarakota adalah perusahaan arsitektur teknologi yang berspesialisasi dalam desain arsitektur klasik modren. Misi Kami adalah menyediakan solusi satu atap dalam layanan arsitektur, sekaligus memecahkan masalah dalam ekosistem kontruksi dengan menghubungkan UKM dalam industri kontruksi dan mengedukasi masyarakat tentang cara kerja kontruksi.
          </p>
          {showVisi & !isIpad == true ? <>
           <p className="text-sm md:text-lg lg:text-2xl text-justify">Tarakota `didirikan oleh sekelompok arsitek dan insinyur yang melihat perlunya sebuah perusahaan modren dan berteknologi dapat mengikuti perkembangan industri desain dan pengembangan yang bergerak cepat. Kami bangga memiliki pengalaman lebih dari 5 tahun dalam pengembangan bisnis, dan kami terus berupaya mencapai keunggulan dalam segala hal yang kami lakukan.</p>
           <p className="text-sm md:text-lg lg:text-2xl text-justify">
           Di Tarakota, kami bangga menjadi penyedia layanan terpadu untuk semua kebutuhan arsitektur Anda. Kami menawarkan berbagai layanan, termasuk desain arsitektur, perencanaan dan penjadwalan, konsultasi, dan manajemen proyek. Tim arsitek dan insinyur kami yang berpengalaman bekerja tanpa kenal lelah untuk memastikan bahwa setiap proyek yang kami lakukan dilaksanakan dengan sangat presisi dan perhatian terhadap detail.
           </p>
           </> : <></>
          }
          
          { !isIpad &&(<div className="flex space-x-3 w-full justify-end"
          onClick={() => setShowVisi(!showVisi)}>
            {showVisi == true ? <>
              <img className="w-5 hover:cursor-pointer" src={topArrow}></img>
            </> : <><button className="text-gray-500 text-sm  md:text-lg">read more </button><img className="w-5 hover:cursor-pointer" src={bottomArrow} alt="" /></>}
            
          </div>) }
          
        </div>
        {isIpad ? <> <div className="col-span-2 md:col-span-12 flex flex-col justify-center items-center  space-y-4">
            {showVisi == true ? <>
           <p className="text-sm md:text-lg lg:text-2xl text-justify">Tarakota `didirikan oleh sekelompok arsitek dan insinyur yang melihat perlunya sebuah perusahaan modren dan berteknologi dapat mengikuti perkembangan industri desain dan pengembangan yang bergerak cepat. Kami bangga memiliki pengalaman lebih dari 5 tahun dalam pengembangan bisnis, dan kami terus berupaya mencapai keunggulan dalam segala hal yang kami lakukan.</p>
           <p className="text-sm md:text-lg lg:text-2xl text-justify">
           Di Tarakota, kami bangga menjadi penyedia layanan terpadu untuk semua kebutuhan arsitektur Anda. Kami menawarkan berbagai layanan, termasuk desain arsitektur, perencanaan dan penjadwalan, konsultasi, dan manajemen proyek. Tim arsitek dan insinyur kami yang berpengalaman bekerja tanpa kenal lelah untuk memastikan bahwa setiap proyek yang kami lakukan dilaksanakan dengan sangat presisi dan perhatian terhadap detail.
           </p>
           </> : <></>
          }
          
          <div className="flex space-x-3 w-full justify-end"
          onClick={() => setShowVisi(!showVisi)}>
            {showVisi == true ? <>
              <img className="w-5 hover:cursor-pointer" src={topArrow}></img>
            </> : <><button className="text-gray-500 text-sm  md:text-lg">read more </button><img className="w-5 hover:cursor-pointer" src={bottomArrow} alt="" /></>}
            
          </div>
        </div>
        </> : <></>}
      </div>

      <div
        className="grid grid-cols-1 shadow-md shadow-gold md:grid-cols-12 gap-2 p-5 md:p-8 text-white rounded-xl  md:rounded-2xl lg:rounded-3xl mt-10 md:mt-12 lg:mt-20"
        style={{
          background: "#E85738",
        }}
      >
        <Fade bottom>
        <div className="col-span-1 md:col-span-4 flex justify-center items-center">
          

          <p className="text-xl font-bold md:text-4xl lg:text-6xl">"Misi Kami"</p>
        </div>
        <div className="col-span-1 md:col-span-8 lg:col-span-6 lg:col-start-6 flex justify-center items-center">
          <p className="text-sm md:text-lg lg:text-2xl text-justify">
          Menyediakan solusi satu atap dalam layanan arsitektur, sekaligus memecahkan masalah dalam ekosistem kontruksi dengan menghubungkan UKM dalam industri kontruksi dan mengedukasi masyarakat tentang cara kerja kontruksi.
          </p>
        </div>
        </Fade>
        
      </div>
      
    </div>
  );
};

export default VisiMisi;
