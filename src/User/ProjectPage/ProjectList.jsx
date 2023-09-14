import React, { useState } from "react";

const ProjectList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project 1",
      description: "Deskripsi Project 1",
      category: "Category1",
      image: "https://picsum.photos/200/150?random=1", // Gambar dari Lorem Picsum
    },
    {
      id: 2,
      name: "Project 2",
      description: "Deskripsi Project 2",
      category: "Category2",
      image: "https://picsum.photos/200/150?random=2", // Gambar dari Lorem Picsum
    },
    {
      id: 3,
      name: "Project 3",
      description: "Deskripsi Project 1",
      category: "Category1",
      image: "https://picsum.photos/200/150?random=1", // Gambar dari Lorem Picsum
    },
    {
      id: 4,
      name: "Project 4",
      description: "Deskripsi Project 2",
      category: "Category2",
      image: "https://picsum.photos/200/150?random=2", // Gambar dari Lorem Picsum
    },
    {
      id: 5,
      name: "Project 5",
      description: "Deskripsi Project 1",
      category: "Category1",
      image: "https://picsum.photos/200/150?random=1", // Gambar dari Lorem Picsum
    },
    {
      id: 6,
      name: "Project 6",
      description: "Deskripsi Project 2",
      category: "Category2",
      image: "https://picsum.photos/200/150?random=2", // Gambar dari Lorem Picsum
    },
    // Tambahkan proyek lain sesuai kebutuhan
  ]);

  // Fungsi untuk mengatur kategori yang dipilih
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Hitung jumlah proyek per halaman
  const itemsPerPage = 2;

  // Mengambil proyek yang sesuai dengan kategori yang dipilih
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  // Hitung total halaman berdasarkan jumlah proyek yang sesuai dengan kategori
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // State untuk mengatur halaman saat ini
  const [currentPage, setCurrentPage] = useState(1);

  // Fungsi untuk mengatur halaman saat ini
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Menghitung indeks awal dan akhir proyek yang harus ditampilkan
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Menampilkan proyek sesuai dengan indeks yang dihitung
  const visibleProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <div className="flex py-20">
      {/* Sidebar untuk memilih kategori */}
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-semibold">Pilih Kategori</h2>
        {/* Tambahkan daftar kategori yang bisa dipilih */}
        <ul>
          <li
            className={`cursor-pointer ${
              selectedCategory === "Category1" ? "text-blue-500" : ""
            }`}
            onClick={() => handleCategorySelect("Category1")}
          >
            Category 1
          </li>
          <li
            className={`cursor-pointer ${
              selectedCategory === "Category2" ? "text-blue-500" : ""
            }`}
            onClick={() => handleCategorySelect("Category2")}
          >
            Category 2
          </li>
          {/* Tambahkan kategori lain sesuai kebutuhan */}
        </ul>
      </div>

      {/* Daftar proyek yang ditampilkan */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-semibold">Hasil Pencarian</h2>
        <div className="grid grid-cols-2 gap-4">
          {visibleProjects.map((project) => (
            <div key={project.id}>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto"
              />
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
        {/* Tampilkan paginasi jika jumlah proyek lebih dari 6 */}
        {totalPages > 1 && (
          //   <div className="mt-4">
          //     {Array.from({ length: totalPages }).map((_, index) => (
          //       <button
          //         key={index}
          //         className={`px-2 py-1 mx-1 border ${
          //           currentPage === index + 1
          //             ? 'bg-blue-500 text-white'
          //             : 'bg-gray-200 text-gray-700'
          //         }`}
          //         onClick={() => handlePageChange(index + 1)}
          //       >
          //         {index + 1}
          //       </button>
          //     ))}
          //   </div>
          <div className="mt-4 flex items-center">
            <button
              className={`px-2 py-1 mx-1 border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1} // Menonaktifkan tombol jika berada di halaman pertama
            >
              previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`px-2 py-1 mx-1 border ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`px-2 py-1 mx-1 border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages} // Menonaktifkan tombol jika berada di halaman terakhir
            >
              next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
