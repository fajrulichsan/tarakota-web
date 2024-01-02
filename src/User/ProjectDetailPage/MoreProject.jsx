import React from "react";
import { useParams } from "react-router-dom";
import { bgBannerSlider } from "../../assets/img/index";
import { projects } from "../../data/Index";

const MoreProject = () => {
  const { id } = useParams();
  const currentProjectId = parseInt(id);

  // Menentukan kriteria berdasarkan id proyek
  const getOtherProjects = (currentId) => {
    const maxProjects = projects.length;
    let startIndex = currentId === maxProjects ? 0 : currentId; // Jika id sama dengan max projects, ambil dari awal lagi
    let endIndex = startIndex + 4; // Ambil 4 proyek setelahnya

    // Handle kasus ketika endIndex melebihi maxProjects
    if (endIndex > maxProjects) {
      endIndex = maxProjects;
      startIndex = Math.max(endIndex - 4, 0); // Ambil 4 proyek sebelum endIndex jika kurang dari 4
    }

    return projects.slice(startIndex, endIndex);
  };

  const otherProjects = getOtherProjects(currentProjectId);

  return (
    <div className="px-5 md:px-20 lg:pb-10 my-10">
      <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold">
        Project Lainnya
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-3 gap-3 p-5 md:p-8 lg:p-10 rounded-xl md:rounded-2xl my-2 md:my-5 shadow-md shadow-gold">
        {otherProjects.map((project) => (
          <a
            key={project.id}
            href={`/project/${project.id}`}
            className="col-span-1 h-52 md:h-60 lg:h-80 rounded-2xl bg-cover bg-center bg-no-repeat hover:cursor-pointer"
            style={{
              backgroundImage: `url(${project.image[0] || bgBannerSlider})`,
            }}
          ></a>
        ))}
        <div className="flex justify-center items-center col-span-2 md:col-span-4 lg:col-span-1">
          <a
            href="/project"
            className="w-fit px-12 py-1 md:py-1.5 rounded-full text-white text-sm md:text-md"
            style={{ background: "#E85738" }}
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreProject;

