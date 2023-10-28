import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap",
    name: "namaLengkap",
    placeholder: "Nama Lengkap",
    tipe: "text",
  },
  {
    id: 2,
    title: "No Hp",
    name: "nohp",
    placeholder: "No Hp",
    tipe: "number",
  },
  {
    id: 3,
    title: "Alamat Email",
    name: "alamatEmail",
    placeholder: "Alamat Email",
    tipe: "email",
  },
  {
    id: 4,
    title: "Alamat Proyek",
    name: "alamatProyek",
    placeholder: "Alamat Proyek",
    tipe: "text",
  },
];

const typeProject = [
  {
    id: 1,
    title: "Interior",
    htmlFor: "interior",
  },
  {
    id: 2,
    title: "Lanskap",
    htmlFor: "lanskap",
  },
  {
    id: 3,
    title: "Arsitektur",
    htmlFor: "arsitektur",
  },
  {
    id: 4,
    title: "Supervisor",
    htmlFor: "supervisor",
  },
  {
    id: 5,
    title: "Furnitur",
    htmlFor: "furnitur",
  },
];

const FormEstimasi = () => {
  // State untuk data Provinsi, Kota/Kabupaten, dan Kecamatan
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWardName, setSelectedWardName] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  // State untuk melacak form-input yang ditambahkan
  const [projectForms, setProjectForms] = useState([{ id: 1 }]);

  const [projectFormsCountArea, setProjectFormsCountArea] = useState([
    {
      id: 1,
      length: 0,
      width: 0,
    },
  ]);

  const [projectData, setProjectData] = useState([
    {
      jenisKebutuhan: [], // Store selected types of projects
      ruanganKebutuhan: "",
      panjang: 0,
      lebar: 0,
    },
    {
      jenisKebutuhan: [], // Store selected types of projects
      ruanganKebutuhan: "",
      panjang: 0,
      lebar: 0,
    },
  ]);

  const handleTypeProjectChange = (e, projectIndex, typeId) => {
    const checked = e.target.checked;
    setProjectData((prevData) => {
      const newData = [...prevData];
      const project = newData[projectIndex];
      if (checked) {
        console.log(project);
        project.jenisKebutuhan.push(typeId);
      } else {
        const index = project.jenisKebutuhan.indexOf(typeId);
        if (index !== -1) {
          project.jenisKebutuhan.splice(index, 1);
        }
      }
      return newData;
    });
  };

  const handleRuanganKebutuhanChange = (e, projectIndex) => {
    const value = e.target.value;
    console.log(value);
    setProjectData((prevData) => {
      const newData = [...prevData];
      newData[projectIndex].ruanganKebutuhan = value;
      return newData;
    });
  };
  
  const handlePanjangLebarChange = (e, projectIndex, fieldName) => {
    const value = e.target.value;
    setProjectData((prevData) => {
      const newData = [...prevData];
      newData[projectIndex][fieldName] = parseFloat(value);
      return newData;
    });
  };

  // const calculateArea = (form) => {
  //   const { length, width } = form;
  //   if (length && width) {
  //     return (length * width).toFixed(2) + " meter persegi";
  //   } else {
  //     return "Masukkan panjang dan lebar";
  //   }
  // };

  const handleLengthChange = (e, formIndex) => {
    const newLength = e.target.value;
    const updatedForms = projectFormsCountArea.map((form, index) => {
      if (index === formIndex) {
        // Update the length of the form at the specified index
        return { ...form, length: newLength };
      }
      return form; // Return other forms unchanged
    });

    setProjectFormsCountArea(updatedForms);
  };

  const handleWidthChange = (e, formIndex) => {
    const newWidth = e.target.value;
    console.log(formIndex);
    const updatedForms = projectFormsCountArea.map((form, index) => {
      if (index === formIndex) {
        // Update the length of the form at the specified index
        return { ...form, width: newWidth };
      }
      return form; // Return other forms unchanged
    });

    setProjectFormsCountArea(updatedForms);
  };

  // Fungsi untuk mengambil data Provinsi dari API
  const fetchProvinces = async () => {
    try {
      const response = await fetch(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  // Fungsi untuk mengambil data Kota/Kabupaten berdasarkan Provinsi yang dipilih
  const fetchCities = async (selectedProvince) => {
    try {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // Fungsi untuk mengambil data Kecamatan berdasarkan Kota/Kabupaten yang dipilih
  const fetchDistricts = async (selectedCity) => {
    try {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedCity}.json`
      );
      const data = await response.json();
      setDistricts(data);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const fetchWards = async (selectedDistrict) => {
    try {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrict}.json`
      );
      const data = await response.json();
      setWards(data);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

  // Mengambil data Provinsi saat komponen dimuat
  useEffect(() => {
    fetchProvinces();
  }, []);

  const handleProvinceChange = (e) => {
    const selectedProvinceId = e.target.value;
    const selectedProvinceName =
      e.target.options[e.target.selectedIndex].getAttribute("data-nama");

    if (selectedProvinceName) {
      setSelectedProvinceName(selectedProvinceName);
    } else {
      setSelectedProvinceName(""); // Reset the name if the selection is invalid
    }

    setSelectedProvince(selectedProvinceId);
    fetchCities(selectedProvinceId);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    const selectedCityName =
      e.target.options[e.target.selectedIndex].getAttribute("data-nama");

    if (selectedCityName) {
      setSelectedCityName(selectedCityName);
    } else {
      setSelectedCityName(""); // Reset the name if the selection is invalid
    }

    setSelectedCity(selectedCity);
    fetchDistricts(selectedCity);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    const selectedDistrictName =
      e.target.options[e.target.selectedIndex].getAttribute("data-nama");

    if (selectedDistrictName) {
      setSelectedDistrictName(selectedDistrictName);
    } else {
      setSelectedDistrictName(""); // Reset the name if the selection is invalid
    }

    setSelectedDistrict(selectedDistrict);
    fetchWards(selectedDistrict);
  };

  const handleWardChange = (e) => {
    const selectedWard = e.target.value;
    const selectedWardName =
      e.target.options[e.target.selectedIndex].getAttribute("data-nama");

    if (selectedWardName) {
      setSelectedWardName(selectedWardName);
    } else {
      setSelectedWardName(""); // Reset the name if the selection is invalid
    }

    setSelectedWard(selectedWard);
  };

  // Event handler untuk menambahkan form-input baru
  const handleAddProjectForm = () => {
    const newId = projectForms.length + 1;
    setProjectForms([...projectForms, { id: newId }]);
    setProjectFormsCountArea([
      ...projectFormsCountArea,
      {
        id: newId,
        length: 0,
        width: 0,
      },
    ]);
  };

  const handleRemoveProjectForm = (formIndex) => {
    const updatedForms = [...projectForms];
    const updatedFormsCountArea = [...projectFormsCountArea];

    // Hapus formulir proyek dan data yang sesuai dari projectForms dan projectFormsCountArea
    updatedForms.splice(formIndex, 1);
    updatedFormsCountArea.splice(formIndex, 1);

    setProjectForms(updatedForms);
    setProjectFormsCountArea(updatedFormsCountArea);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.get("provinsiName"));
    // console.log(formData.get("cityName"));
    // console.log(formData.get("districtName"));
    // console.log(formData.get("wardName"));
    // console.log(formData.get("kebutuhan"));
    // for (let i = 1; i <= 2; i++) {
    //   for (let j = 1; j <= 4; j++) {
    //     console.log(formData.get("type-" + i + "-" + j));
        
    //   }      
    // }
   console.log(projectData);

    // emailjs.sendForm("service_emizq9q", "template_s5dehgg", e.target, "RHjp-oAmRy8VkGhmc").then(
    //   (result) => {
    //     console.log("Email sent successfully", result);

    //     // You can display a success message to the user or perform other actions here.
    //   },
    //   (error) => {
    //     console.error("Email sending failed", error);

    //     // You can display an error message to the user or handle the error in another way.
    //   }
    // );
  };

  return (
    <Fade bottom>
      
    <div className="h-auto -mt-2 px-5 md:px-20 my-8 md:my-10 lg:my-20">
      <div
        className=" p-3 md:p-6 my-5 md:my-10 rounded-md md:rounded-2xl lg:rounded-3xl drop-shadow-lg"
        style={{
          background: "#F9F5EC",
        }}
      >
        <p className="text-md md:text-3xl lg:text-4xl font-bold text-center tracking-wider">
          Yuk, hitung estimasi biaya mu, sekarang!
        </p>
      </div>
      <div
        className="rounded-lg md:rounded-2xl p-6 md:p-12 lg:p-20 shadow-lg shadow-gold"
        style={{
          background: "#F9F5EC",
        }}
      >
        <div
          className="text-sm md:text-lg lg:text-xl border-l-4 px-4 rounded-r-full"
          style={{
            background: "rgba(212, 183, 84, 0.40)",
            borderLeft: "10px solid #D4B754",
          }}
        >
          <p className="text-sm md:text-lg lg:text-xl">*Catatan</p>
          <p className="text-sm md:text-lg lg:text-xl">
            Kolom dengan tanda <span className="text-red-600">*</span>
            <span className="text-red-600">wajib diisi</span>
          </p>
        </div>
        <div className="space-y-3 md:space-y-5 py-4 md:py-5 lg:py-10">
          <form onSubmit={sendEmail}>
            {formInput.map((data) => (
              <div key={data.id}>
                <p className="text-sm md:text-lg lg:text-xl">
                  {data.title} <span className="text-red-600">*</span>
                </p>
                <input
                  name={data.name}
                  className="w-full text-sm md:text-lg lg:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
                  placeholder={data.placeholder}
                  // required
                ></input>
              </div>
            ))}

            {/* dropdown alamat */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 md:gap-x-10 md:gap-y-5">
              <div className="col-span-1">
                <p className="text-sm md:text-lg lg:text-xl">
                  Provinsi <span className="text-red-600">*</span>
                </p>
                <select
                  className="w-full text-xs md:text-xl rounded-full h-8 md:h-10 border-2 px-2 md:px-5 border-gray-600 bg-transparent"
                  name="provinsi"
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                  // required
                >
                  <option value="" disabled>
                    Pilih Provinsi
                  </option>
                  {provinces.map((province) => (
                    <option
                      key={province.id}
                      value={province.id}
                      data-nama={province.name}
                    >
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <p className="text-sm md:text-lg lg:text-xl">
                  Kota/Kabupaten <span className="text-red-600">*</span>
                </p>
                <select
                  className="w-full text-xs md:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-2 md:px-5 bg-transparent"
                  name="kota"
                  value={selectedCity}
                  onChange={handleCityChange}
                  // required
                >
                  <option value="" disabled>
                    Pilih Kota/Kabupaten
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id} data-nama={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <p className="text-sm md:text-lg lg:text-xl">
                  Kecamatan <span className="text-red-600">*</span>
                </p>
                <select
                  className="w-full text-xs md:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-2 md:px-5 bg-transparent"
                  name="kecamatan"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  // required
                >
                  <option value="" disabled>
                    Pilih Kecamatan
                  </option>
                  {districts.map((district) => (
                    <option
                      key={district.id}
                      value={district.id}
                      data-nama={district.name}
                    >
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <p className="text-sm md:text-lg lg:text-xl">
                  Kelurahan <span className="text-red-600">*</span>
                </p>
                <select
                  className="w-full text-xs md:text-xl rounded-full h-8 md:h-10 border-2 px-2 md:px-5 border-gray-600 bg-transparent"
                  name="kelurahan"
                  value={selectedWard}
                  onChange={(e) => handleWardChange(e)}
                  // required
                >
                  <option value="" disabled>
                    Pilih Kelurahan
                  </option>
                  {wards.map((ward) => (
                    <option key={ward.id} value={ward.id} data-nama={ward.name}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <p className="text-sm md:text-lg lg:text-xl mt-10">List Proyek</p>
              {projectForms.map((form, index) => (
                <div
                  key={form.id}
                  className="form-input relative rounded-lg md:rounded-2xl p-2 md:p-5 space-y-3 drop-shadow-lg my-2 md:my-5"
                  style={{
                    background: "#F9F5EC",
                  }}
                >
                  <button
                    className="text-tera absolute top-0 md:top-3 right-3 md:right-5 text-4xl md:text-5xl hover:text-red-700"
                    onClick={() => handleRemoveProjectForm(index)}
                  >
                    &times;
                  </button>
                  <div className="form-input rounded-2xl p-4 space-y-2 md:space-y-3">
                    <p className="text-sm md:text-lg lg:text-xl">
                      {index + 1}. Jenis Kebutuhan{" "}
                      <span className="text-red-600">*</span>
                    </p>
                    <div className="grid grid-cols-3">
                      <div className="col-span-3 md:col-span-3 lg:col-span-2 grid grid-cols-3 md:grid-cols-5">
                        {typeProject.map((data) => (
                          <div
                            key={data.id}
                            className="col-span-1 flex items-center hover:cursor-pointer gap-1 md:gap-3"
                          >
                            <input 
                            id={data.htmlFor} 
                            type="checkbox" 
                            // value={data.title}
                             onChange={(e) => handleTypeProjectChange(e, index, data.title)}
                             ></input>
                            <label
                              className="hover:cursor-pointer text-sm md:text-lg lg:text-xl"
                              htmlFor={data.htmlFor}
                            >
                              {data.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm md:text-lg lg:text-xl">
                      Ruangan Kebutuhan <span className="text-red-600">*</span>
                    </p>
                    <input
                      className="w-full text-sm md:text-lg lg:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-2 md:px-5 bg-transparent"
                      placeholder="Contoh : Ruang Tamu"
                      onChange={(e) =>  handleRuanganKebutuhanChange(e, index)}
                    ></input>
                    <p className="text-sm md:text-lg lg:text-xl">
                      Ukuran Proyek <span className="text-red-600">*</span>
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
                      <div className="col-span-1 mx-auto">
                        <p className="text-sm md:text-lg lg:text-xl mb-1">
                          Panjang <span className="text-red-600">*</span>
                        </p>
                        <input
                          type="number"
                          className="w-28 md:w-32 text-sm md:text-lg rounded-full h-8 border-2 border-gray-600 px-2 md:px-5 bg-transparent"
                          placeholder="Contoh : 4"
                          value={form.length}
                          onChange={(e) => handleLengthChange(e, index)}
                        ></input>
                      </div>
                      <div className="col-span-1 mx-auto">
                        <p className="text-sm md:text-lg lg:text-xl mb-1">
                          Lebar <span className="text-red-600">*</span>
                        </p>
                        <input
                          type="number"
                          className="w-28 md:w-32 text-sm md:text-lg rounded-full h-8 border-2 border-gray-600 px-2 md:px-5 bg-transparent"
                          placeholder="Contoh : 4"
                          value={form.width}
                          onChange={(e) => handleWidthChange(e, index)}
                        ></input>
                      </div>
                      <div className="col-span-2 md:col-span-1 mx-auto">
                        <p className="text-sm md:text-lg lg:text-xl">
                          Luas <span className="text-red-600">*</span>
                        </p>
                        <div className="w-32 md:w-40 text-sm md:text-lg text-white bg-tera rounded-full py-1 text-center">
                          {projectFormsCountArea[index].length *
                            projectFormsCountArea[index].width}{" "}
                          meter persegi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* add new project  */}
              <div className="flex flex-col">
                <div className="flex justify-end">
                  <div
                    onClick={handleAddProjectForm}
                    className="hover:cursor-pointer text-center text-sm md:text-lg bg-tera py-1 px-5 rounded-full text-white mt-5 md:mt-6 lg:mt-10"
                  >
                    Tambahkan Proyek
                  </div>
                </div>

                <div>
                  <p className="text-sm md:text-lg lg:text-xl">Info Tambahan</p>
                  <input
                    className="w-full text-sm md:text-lg lg:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
                    placeholder="Alamat Proyek"
                  ></input>
                </div>
                <input
                  name="provinsiName"
                  value={selectedProvinceName}
                  hidden
                ></input>
                <input name="cityName" value={selectedCityName} hidden></input>
                <input
                  name="districtName"
                  value={selectedDistrictName}
                  hidden
                ></input>
                <input name="wardName" value={selectedWardName} hidden></input>
                <div className="flex justify-end mt-5">
                  <button
                    className="w-40 md:w-52 text-sm md:text-lg py-1.5 right-0 place-items-end text-white rounded-full"
                    style={{ background: "#E85738" }}
                  >
                    Kirimkan Hitung Perkiraan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default FormEstimasi;
