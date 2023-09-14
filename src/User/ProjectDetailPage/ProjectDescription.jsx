import React from "react";

const ProjectDescription = () => {
  return (
    <div className="flex space-x-10 px-20 items-center my-20">
      <div className="w-1/2 p-10">
        <p className="text-xl text-justify">
          Lorem ipsum dolor sit amet. Rem error earum est dolorem provident et
          quae officia cum quis mollitia. Aut quidem fugit 33 natus magni et
          omnis assumenda ut voluptatem enim in ipsa animi sit quasi cupiditate
          id autem nobis. Et doloremque labore qui adipisci molestiae in
          excepturi aliquid ea natus cupiditate ut veritatis pariatur vel
          mollitia quia et placeat beatae.
        </p>
      </div>
      <div className="w-1/2 space-y-7">
        <div
          className="rounded-xl text-white p-6"
          style={{
            borderRadius: "21px",
            background: "#E85738",
            boxShadow: "4px 9px 31px 0px #D4B754",
          }}
        >
          <table class="border-collapse text-lg">
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
        <div className="flex space-x-10 justify-center">
          <button className="py-2 w-auto px-10 bg-gray-800 text-white rounded-full" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
            Pesan Sekarang
          </button>
          <button className="py-2 w-auto px-10 bg-white border-2 border-gray-800 text-black rounded-full" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
