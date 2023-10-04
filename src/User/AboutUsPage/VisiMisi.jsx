import React from "react";
import { bgVisiMisiAboutUs } from "../../assets/img/index";

const VisiMisi = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wider text-center py-7 md:py-10 lg:py-20">
        Lebih dekat dengan "Tarakota"
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-x-10">
        <div className="col-span-1 md:col-span-5 col-start-1 ">
          <div
            className="w-full h-[15em] md:h-[17em] lg:h-[20em] bg-cover rounded-xl md:rounded-2xl relative"
            style={{ backgroundImage: `url(${bgVisiMisiAboutUs})` }}
          >
            <div
              className="absolute inset-0 rounded-xl md:rounded-2xl"
              style={{
                background:
                  "linear-gradient(0deg, #D4B754 -22.21%, rgba(0, 0, 0, 0.00) 100%)",
              }}
            ></div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-7 flex justify-center items-center">
          <p className="text-sm md:text-lg lg:text-2xl text-justify">
            Tarakota merupakan perusahaan konsultan arsitektur yang handal dan
            berpengalaman dalam menyediakan layanan konsultasi dan pengawasan
            dalam berbagai proyek arsitektur. Tim kami terdiri dari arsitek yang
            kompeten dan berpengalaman serta spesialis dalam desain arsitektur,
            interior, furnitur dan lansekap.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-2 p-5 md:p-8 text-white rounded-xl  md:rounded-2xl lg:rounded-3xl mt-10 md:mt-12 lg:mt-20"
        style={{
          background: "#E85738",
          boxShadow: "7px 11px 30px 0px rgba(212, 183, 84, 0.50)",
        }}
      >
        <div className="col-span-1 md:col-span-4 flex justify-center items-center">
          <p className="text-xl font-bold md:text-4xl lg:text-6xl">"Visi Misi"</p>
        </div>
        <div className="col-span-1 md:col-span-8 lg:col-span-6 lg:col-start-6 flex justify-center items-center">
          <p className="text-sm md:text-lg lg:text-2xl text-justify">
            Lorem ipsum dolor sit amet. Rem error earum est dolorem provident et
            quae officia cum quis mollitia. Aut quidem fugit 33 natus magni et
            omnis assumenda ut voluptatem enim in ipsa animi sit quasi
            cupiditate id autem nobis. Et doloremque labore qui adipisci
            molestiae in excepturi aliquid ea natus cupiditate ut veritatis
            pariatur vel mollitia quia et placeat beatae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
