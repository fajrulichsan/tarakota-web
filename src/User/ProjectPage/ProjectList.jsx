import React, { useState ,} from "react";
import {
  nextButton,
  previousButton,
} from "../../assets/img/index";

import { Link, useNavigate } from "react-router-dom";
import { projects } from "../../data";
import "./css/projectList.css";

const ruanganList = [
  "Kamar Tidur",
  "Dapur",
  "Fasade",
  "Ruang Keluarga",
  "Ruang Makan",
  "Taman",
  "Kantor",
];


const categoryList = ["Residensial", "Komersial"];

const ProjectList = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [availableRooms, setAvailableRooms] = useState([]);

  // Function to set the selected category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedRoom(""); // Clear the selected room when changing the category.

     // Update available rooms based on the selected category
     if (category === "Residensial") {
      setAvailableRooms(["Ruang Makan", "Ruang Keluarga", "Kamar Tidur", "Dapur"]);
    } else if (category === "Komersial") {
      setAvailableRooms(["Taman", "Fasade" ,"Kantor"]);
    } else {
      // Reset to default list if no category is selected
      setAvailableRooms(ruanganList);
    }
  };

  // Function to set the selected room
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  // Number of projects to display per page
  const itemsPerPage = 6;

  // Filter projects based on selected category and room
  const filteredProjects = selectedCategory
    ? projects.filter(
        (project) =>
          project.category === selectedCategory &&
          (selectedRoom === "" || project.room === selectedRoom)
      )
    : projects;

  // Calculate total number of pages based on filtered projects
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to update the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the starting and ending indices for the projects to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the projects to display on the current page
  const visibleProjects = filteredProjects.slice(startIndex, endIndex);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="py-20 px-5 md:px-10 md:gap-10 grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1">
        <div className="my-6 hidden md:block">
        <p className="text-2xl font-bold text-center tracking-widest">Portofolio Kami</p>
        <hr className="border-2 w-28 border-tera mx-auto"></hr>
        </div>
        <div className="p-8 shadow-md rounded-xl shadow-gold">
          <div className="flex space-x-2 items-center">
            <div className="h-4 w-4 rounded-full bg-tera"></div>
            <span className="text-xl font-medium">Filter</span>
          </div>
          <h2 className="text-xl font-semibold my-2">Kategori</h2>
          <ul className="space-y-2">
            {categoryList.map((data, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  selectedCategory === `${data}`
                    ? "text-white bg-tera rounded-full flex-1 w-40 text-center"
                    : "text-gray-600 border-2 border-gray-600 bg-transparent rounded-full w-40 text-center"
                }`}
                onClick={() => {
                  handleCategorySelect(`${data}`);
                  setCurrentPage(1);
                }}
              >
                {data}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold my-3 mt-10">Ruangan</h2>
          <ul className="flex flex-wrap gap-1 gap-y-2 mt-2">
            {availableRooms.map((data, index) => (
              <li
                key={index}
                className={`cursor-pointer w-fit px-3 flex items-center justify-center ${
                  selectedRoom === `${data}`
                    ? "text-white bg-tera rounded-full w-40 text-center"
                    : "text-gray-600 border-2 border-gray-600 bg-transparent rounded-full w-40 text-center"
                }`}
                onClick={() => {
                  handleRoomSelect(`${data}`);
                  setCurrentPage(1);
                }}
              >
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 hidden md:flex md:flex-col rounded-xl space-y-5 shadow-md shadow-gold mt-10">
            <p className="text-xl font-bold text-center">Lihat Layanan Kami</p>
            <button 
             onClick={() => navigate("/service")}
            className="bg-tera text-white px-8 py-1.5 rounded-full font-bold tracking-wider">
                Disini
            </button>
        </div>
      </div>

      {/* List of projects to display */}
      <div className="col-span-3">
      <div className="p-7 rounded-xl shadow-md shadow-gold">
        <div className="flex space-x-2 items-center">
          <div className="h-3 w-3 rounded-full bg-tera"></div>
          <span className="text-lg font-medium">Filter</span>
        </div>
        <div className="flex space-x-3">
          {selectedCategory && (
            <div className="text-white bg-tera rounded-full w-fit px-5 text-center">
              {selectedCategory}
              <button
                className="ml-2 text-white"
                onClick={() => {
                  handleCategorySelect(""); // Clear the selected category
                }}
              >
                &times;
              </button>
            </div>
          )}
          {selectedRoom && (
            <div className="text-white bg-tera rounded-full w-fit px-5 text-center">
              {selectedRoom}
              <button
                className="ml-2 text-white"
                onClick={() => {
                  handleRoomSelect(""); // Clear the selected room
                }}
              >
                &times;
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {visibleProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="relative rounded-2xl"
              >
                <div
                  className="w-full rounded-xl h-[12em] md:h-[22em] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${project.image[0]})` }}
                ></div>
              </Link>
            ))}
        </div>
        {totalPages > 0 && (
          <div className="mt-4 flex items-center justify-end">
            <button
              className={`border previous ${
                currentPage === 1 ? "cursor-not-allowed" : " text-white"
              }`}
              style={{ backgroundImage: `url(${previousButton})` }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            ></button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`px-2 py-1 mx-1 border page ${
                  currentPage === index + 1
                    ? "text-white active-page"
                    : " page text-gray-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`border next ${
                currentPage === totalPages ? "cursor-not-allowed" : "text-white"
              }`}
              style={{ backgroundImage: `url(${nextButton})` }}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            ></button>
          </div>
        )}
      </div>
      <div className="md:hidden p-8 rounded-xl space-y-5 flex flex-col shadow-md shadow-gold mt-10">
            <p className="text-xl font-medium text-center">Lihat Layanan Kami</p>
            <button 
            onClick={() => navigate("/service")}
            className="bg-tera text-white px-4 py-1.5 rounded-full font-bold tracking-wider">
                Disini
            </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectList;
