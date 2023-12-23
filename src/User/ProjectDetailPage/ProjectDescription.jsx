import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/Index";

const ProjectDescription = () => {
  const {id} = useParams();
  const projectContent = projects.find((item) => item.id == parseInt(id)) 
  return (
    <div className="px-5 grid grid-cols-1 md:grid-cols-2 md:px-20 items-center md:items-start gap-5 my-5 md:my-20">
      <div className="col-span-1 lg:px-10 ">
        <p className="text-sm md:text-lg lg:text-2xl text-justify">
          {projectContent.description}
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
                <td class="px-2 py-1">{projectContent.name}</td>
              </tr>
              <tr>
                <td class="px-2 py-1">Tahun</td>
                <td class="px-2 py-1">:</td>
                <td class="px-2 py-1">{projectContent.year}</td>
              </tr>
              <tr>
                <td class="px-2 py-1">Lokasi</td>
                <td class="px-2 py-1">:</td>
                <td class="px-2 py-1">{projectContent.location}</td>
              </tr>
              <tr>
                <td class="px-2 py-1">Kategori</td>
                <td class="px-2 py-1">:</td>
                <td class="px-2 py-1">{projectContent.category}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <button
         
          onClick={() => window.open('https://api.whatsapp.com/send?phone=6285280061520', '_blank')} 
          className="py-2 w-auto bg-gray-800 text-white rounded-full text-sm md:text-md lg:text-lg drop-shadow-md" >
            Pesan Sekarang
          </button>
          <button 
          onClick={() => window.location.href='/estimasi'}
          className="py-2 w-auto bg-white border-2 border-gray-800 text-black rounded-full text-sm md:text-md lg:text-lg drop-shadow-md">
            Hitung Perkiraan Biaya
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
