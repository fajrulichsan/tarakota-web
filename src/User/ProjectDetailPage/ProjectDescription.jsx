import React from "react";

const ProjectDescription = () => {
  return (
    <div className="px-5 grid grid-cols-1 md:grid-cols-2 md:px-20 items-center gap-5 my-5 md:my-20">
      <div className="col-span-1 lg:p-10 ">
        <p className="text-sm md:text-lg lg:text-2xl text-justify">
          Lorem ipsum dolor sit amet. Rem error earum est dolorem provident et
          quae officia cum quis mollitia. Aut quidem fugit 33 natus magni et
          omnis assumenda ut voluptatem enim in ipsa animi sit quasi cupiditate
          id autem nobis. Et doloremque labore qui adipisci molestiae in
          excepturi aliquid ea natus cupiditate ut veritatis pariatur vel
          mollitia quia et placeat beatae.
        </p>
      </div>
      <div className="col-span-1 space-y-7">
        <div
          className="rounded-lg md:rounded-xl text-white p-4 md:p-6"
          style={{
            background: "#E85738",
          }}
        >
          <table class="border-collapse text-sm md:text-lg lg:text-2xl">
            <tbody>
              <tr>
                <td class="px-2 py-1">Nama</td>
                <td class="px-2 py-1">:</td>
                <td class="px-2 py-1">PT tarakota</td>
              </tr>
              <tr>
                <td class="px-2 py-1">Tahun</td>
                <td class="px-2 py-1">:</td>
                <td class="px-2 py-1">2008</td>
              </tr>
              <tr>
                <td class="px-2 py-1">Lokasi</td>
                <td class="px-2 py-1">:</td>
                <td class="px-2 py-1">JL. Sudirman no 18</td>
              </tr>
              <tr>
                <td class="px-2 py-1">Kategori</td>
                <td class="px-2 py-1">:</td>
                <td class="px-2 py-1">Arsitektur Komersial</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <button className="py-2 w-auto bg-gray-800 text-white rounded-full text-sm md:text-md lg:text-lg drop-shadow-md" >
            Pesan Sekarang
          </button>
          <button className="py-2 w-auto bg-white border-2 border-gray-800 text-black rounded-full text-sm md:text-md lg:text-lg drop-shadow-md">
            Hitung Perkiraan Biaya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
