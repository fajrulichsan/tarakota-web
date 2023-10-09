import React, { useState, useEffect } from "react";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap",
    name: "namaLengkap",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "No Hp",
    name: "nohp",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Alamat Email",
    name: "alamatEmail",
    placeholder: "Alamat Email",
  },
  {
    id: 4,
    title: "Alamat Proyek",
    name: "alamatProyek",
    placeholder: "Alamat Proyek",
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
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
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

  const calculateArea = (form) => {
    const { length, width } = form;
    if (length && width) {
      return (length * width).toFixed(2) + " meter persegi";
    } else {
      return "Masukkan panjang dan lebar";
    }
  };

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

  // const fetchWard = async (selectedWard) => {
  //   try {
  //     const response = await fetch(
  //       `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedWard}.json`
  //     );
  //     const data = await response.json();
  //     setWard(data);
  //   } catch (error) {
  //     console.error("Error fetching districts:", error);
  //   }
  // };

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

  // Event handler untuk saat Provinsi dipilih
  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    // Mengambil data Kota/Kabupaten berdasarkan Provinsi yang dipilih
    fetchCities(selectedProvince);
  };

  // Event handler untuk saat Kota/Kabupaten dipilih
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
    // Mengambil data Kecamatan berdasarkan Kota/Kabupaten yang dipilih
    fetchDistricts(selectedCity);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);
    // Mengambil data Kelurahan berdasarkan Kecamatan yang dipilih
    fetchWards(selectedDistrict);
  };

  // const handleDistrictChange = (e) => {
  //   const selectedDistrict = e.target.value;
  //   setSelectedDistrict(selectedDistrict);
  //   // Mengambil data Kecamatan berdasarkan Kota/Kabupaten yang dipilih
  //   fetchWard(selectedDistrict);
  // };

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

  return (
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
          {formInput.map((data) => (
            <div key={data.id}>
              <p className="text-sm md:text-lg lg:text-xl">
                {data.title} <span className="text-red-600">*</span>
              </p>
              <input
                name={data.name}
                className="w-full text-sm md:text-lg lg:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
                placeholder={data.placeholder}
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
                value={selectedProvince}
                onChange={handleProvinceChange}
              >
                <option value="" disabled>
                  Pilih Provinsi
                </option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
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
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="" disabled>
                  Pilih Kota/Kabupaten
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
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
                value={selectedDistrict}
                // onChange={(e) => setSelectedDistrict(e.target.value)}
                onChange={handleDistrictChange}
              >
                <option value="" disabled>
                  Pilih Kecamatan
                </option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
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
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
              >
                <option value="" disabled>
                  Pilih Kelurahan
                </option>
                {wards.map((ward) => (
                  <option key={ward.id} value={ward.id}>
                    {ward.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* form kebutuhan project */}
          <div>
            <p className="text-sm md:text-lg lg:text-xl">List Proyek</p>
            {projectForms.map((form, index) => (
              <div
                key={form.id}
                className="form-input relative rounded-lg md:rounded-2xl p-2 md:p-5 space-y-3 drop-shadow-lg my-2 md:my-5"
                style={{
                  background: "#F9F5EC",
                }}
              >
                {/* <div className="text-right"> */}
                <button
                  className="text-tera absolute top-0 md:top-3 right-3 md:right-5 text-4xl md:text-5xl hover:text-red-700"
                  onClick={() => handleRemoveProjectForm(index)}
                >
                  &times;
                </button>
                {/* </div> */}
                <div className="form-input rounded-2xl p-4 space-y-2 md:space-y-3">
                  <p className="text-sm md:text-lg lg:text-xl">
                    {index + 1}. Jenis Kebutuhan{" "}
                    <span className="text-red-600">*</span>
                  </p>
                  {/* ... (checkboxes) */}
                  <div className="grid grid-cols-3">
                    <div className="col-span-3 md:col-span-3 lg:col-span-2 grid grid-cols-3 md:grid-cols-5">
                      {/* <div className="flex space-x-2 md:space-x-16"> */}
                      {typeProject.map((data) => (
                        <div
                          key={data.id}
                          className="col-span-1 flex items-center hover:cursor-pointer gap-1 md:gap-3"
                        >
                          <input id={data.htmlFor} type="checkbox"></input>
                          <label
                            className="hover:cursor-pointer text-sm md:text-lg lg:text-xl"
                            htmlFor={data.htmlFor}
                          >
                            {data.title}
                          </label>
                        </div>
                      ))}
                      {/* </div> */}
                    </div>
                  </div>

                  <p className="text-sm md:text-lg lg:text-xl">
                    Ruangan Kebutuhan <span className="text-red-600">*</span>
                  </p>
                  <input
                    className="w-full text-sm md:text-lg lg:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-2 md:px-5 bg-transparent"
                    placeholder="Contoh : Ruang Tamu"
                  ></input>
                  <p className="text-sm md:text-lg lg:text-xl">
                    Ukuran Proyek <span className="text-red-600">*</span>
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
                    {/* ... (input panjang, lebar, dan luas) */}
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
                      {/* <span className="ml-2 text-sm md:text-lg">Meter</span> */}
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
                      {/* <span className="ml-2 text-sm md:text-lg">Meter</span> */}
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
                <button
                  onClick={handleAddProjectForm}
                  className="text-center text-sm md:text-lg bg-tera py-1 px-5 rounded-full text-white mt-5 md:mt-6 lg:mt-10"
                >
                  Tambahkan Proyek
                </button>
              </div>

              <div>
                <p className="text-sm md:text-lg lg:text-xl">Info Tambahan</p>
                <input
                  className="w-full text-sm md:text-lg lg:text-xl rounded-full h-8 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
                  placeholder="Alamat Proyek"
                ></input>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default FormEstimasi;
