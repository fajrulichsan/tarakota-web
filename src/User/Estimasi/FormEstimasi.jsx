import React, { useState, useEffect } from "react";

const FormEstimasi = () => {
  // State untuk data Provinsi, Kota/Kabupaten, dan Kecamatan
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Fungsi untuk mengambil data Provinsi dari API
  const fetchProvinces = async () => {
    try {
      const response = await fetch("http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json");
      const data = await response.json();
      setProvinces(data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  // Fungsi untuk mengambil data Kota/Kabupaten berdasarkan Provinsi yang dipilih
  const fetchCities = async (selectedProvince) => {
    try {
      const response = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`);
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // Fungsi untuk mengambil data Kecamatan berdasarkan Kota/Kabupaten yang dipilih
  const fetchDistricts = async (selectedCity) => {
    try {
      const response = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedCity}.json`);
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

  return (
    <div className="h-[60em] -mt-2 px-20">
      <div
        className="rounded-2xl p-10"
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
            Kolom dengan tanda{" "}
            <span className="text-red-600">*</span>
          </p>
        </div>
        <div className="space-y-5 px-5 py-10">
          <div>
            <p>
              Nama Lengkap <span className="text-red-600">*</span>
            </p>
            <input
              className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
              placeholder="Nama Lengkap"
            ></input>
          </div>
          <div>
            <p>
              No Hp <span className="text-red-600">*</span>
            </p>
            <input
              className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
              placeholder="No Hp"
            ></input>
          </div>
          <div>
            <p>
              Alamat Email <span className="text-red-600">*</span>
            </p>
            <input
              className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
              placeholder="Alamat Email"
            ></input>
          </div>
          <div>
            <p>
              Alamat Lengkap Proyek <span className="text-red-600">*</span>
            </p>
            <input
              className="w-full rounded-full h-10 border-2 border-gray-600 px-5 bg-transparent"
              placeholder="Alamat Proyek"
            ></input>
          </div>
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
                <option value="" disabled>Pilih Provinsi</option>
                {provinces.map(province => (
                  <option key={province.id} value={province.id}>{province.name}</option>
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
                <option value="" disabled>Pilih Kota/Kabupaten</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
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
                <option value="" disabled>Pilih Kecamatan</option>
                {districts.map(district => (
                  <option key={district.id} value={district.id}>{district.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEstimasi;


