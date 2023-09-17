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
    <div className="h-auto -mt-2 px-20">
      <div
        className="rounded-2xl p-20"
        style={{
          background: "#F9F5EC",
          boxShadow: "7px 11px 30px 0px #D4B754",
        }}
      >
        <div
          className="text-xl border-l-4 border-orange-600 rounded-r-full"
          style={{ background: "rgba(212, 183, 84, 0.40)" }}
        >
          <p>*Catatan</p>
          <p>
            Kolom dengan tanda <span className="text-red-600">*</span>
          </p>
        </div>
        <div className="space-y-5 py-10">
          {formInput.map((data) => (
            <div key={data.id}>
              <p>
                {data.title} <span className="text-red-600">*</span>
              </p>
              <input
                name={data.name}
                className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
                placeholder={data.placeholder}
              ></input>
            </div>
          ))}

          {/* dropdown alamat */}
          <div className="flex gap-10">
            <div className="w-1/3">
              <p>
                Provinsi <span className="text-red-600">*</span>
              </p>
              <select
                className="w-full rounded-full h-10 border-2 px-5 border-gray-600 bg-transparent"
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
            <div className="w-1/3">
              <p>
                Kota/Kabupaten <span className="text-red-600">*</span>
              </p>
              <select
                className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
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
            <div className="w-1/3">
              <p>
                Kecamatan <span className="text-red-600">*</span>
              </p>
              <select
                className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
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
          </div>

          {/* form kebutuhan project */}
          <div>
            <p>List Proyek</p>
            {/* container add request */}

            {projectForms.map((form, index) => (
              <div
                key={form.id}
                className="form-input rounded-2xl p-10 space-y-3 my-7"
                style={{
                  background: "#F9F5EC",
                  boxShadow: "7px 11px 30px 0px #D4B754",
                }}
              >
                <div className="text-right">
                  <button
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleRemoveProjectForm(index)}
                  >
                    Hapus
                  </button>
                </div>
                <div className="form-input rounded-2xl p-10 space-y-3">
                  <p>
                    {index + 1}. Jenis Kebutuhan{" "}
                    <span className="text-red-600">*</span>
                  </p>
                  {/* ... (checkboxes) */}
                  <div className="flex space-x-16">
                    {typeProject.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center hover:cursor-pointer gap-3"
                      >
                        <input id={data.htmlFor} type="checkbox"></input>
                        <label
                          className="hover:cursor-pointer"
                          htmlFor={data.htmlFor}
                        >
                          {data.title}
                        </label>
                      </div>
                    ))}
                  </div>
                  <p>
                    Ruangan Kebutuhan <span className="text-red-600">*</span>
                  </p>
                  <input
                    className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
                    placeholder="Contoh : Ruang Tamu"
                  ></input>
                  <p>
                    Ukuran Proyek <span className="text-red-600">*</span>
                  </p>
                  <div className="flex justify-evenly">
                    {/* ... (input panjang, lebar, dan luas) */}
                    <div>
                      <p>
                        panjang <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="number"
                        className="w-28 rounded-full h-8 border-2 border-gray-600 px-5 bg-transparent"
                        placeholder="contoh : 4"
                        value={form.length}
                        onChange={(e) => handleLengthChange(e, index)}
                      ></input>
                      <span className="ml-2">Meter</span>
                    </div>
                    <div>
                      <p>
                        Lebar <span className="text-red-600">*</span>
                      </p>
                      <input
                        type="number"
                        className="w-28 rounded-full h-8 border-2 border-gray-600 px-5 bg-transparent"
                        placeholder="contoh : 4"
                        value={form.width}
                        onChange={(e) => handleWidthChange(e, index)}
                      ></input>
                      <span className="ml-2">Meter</span>
                    </div>
                    <div>
                      <p>
                        Luas <span className="text-red-600">*</span>
                      </p>
                      <div className="w-40 text-white bg-red-600 rounded-full py-1.5 px-8">
                        {projectFormsCountArea[index].length *
                          projectFormsCountArea[index].width}{" "}
                        meter persegi
                      </div>
                    </div>
                    {/* <button onClick={() => handleRemoveProjectForm(index)}>Hapus</button> */}
                  </div>
                </div>
              </div>
            ))}

            {/* add new project  */}
            <div className="">
              <button onClick={handleAddProjectForm} className="text-end mt-10">
                Tambahkan Proyek
              </button>
              <div>
                <p>Info Tambahan</p>
                <input
                  className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
                  placeholder="Alamat Proyek"
                ></input>
              </div>
              <div className="flex justify-end mt-5">
                <button
                  className="w-52 py-1.5 right-0 place-items-end text-white rounded-full"
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
