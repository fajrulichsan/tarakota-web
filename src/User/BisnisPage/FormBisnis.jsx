import React from "react";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap (sesuai KTP)",
    name: "namaLengkap",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "Nomor Induk Keluarga (NIK) / No KTP",
    name: "noNik",
    placeholder: "No NIK",
  },
  {
    id: 3,
    title: "Alamat Lengkap sesuai KTP",
    name: "alamatLengkap",
    placeholder: "Alamat Lengkap",
  },
  {
    id: 4,
    title: "Alamat Lengkap Domisili",
    name: "alamatLengkapDomisili",
    placeholder: "Alamat Lengkap Domisili",
  },
  {
    id: 5,
    title: "Alamat Email",
    name: "alamatEmail",
    placeholder: "Alamat Email",
  },
  {
    id: 6,
    title: "Nomor Handphone",
    name: "noHp",
    placeholder: "No Hp",
  },
  {
    id: 7,
    title: "No Rekening",
    name: "noRekening",
    placeholder: "No Rekening",
  },
];

const programWithUList = [
  {
    id: 1,
    title: "Representatif Inverstor Relationship",
  },
  {
    id: 2,
    title: "Representatif Client Relationship",
  },
  {
    id: 3,
    title: "Representatif Franchise Relationship",
  },
  {
    id: 4,
    title: "Representatif Land Property Relationship",
  },
];

const bankList = [
  {
    id: 1,
    title: "Bank Central Asia (BCA)",
  },
  {
    id: 2,
    title: "Bank Rakyat Indonesia (BRI)",
  },
  {
    id: 3,
    title: "Bank Mandiri",
  },
];
const FormBisnis = () => {
  return (
    <div className="px-32 py-20">
      <div
        className="rounded-3xl p-16 px-24 space-y-4"
        style={{
          boxShadow: "7px 11px 30px 0px #D4B754",
        }}
      >
        {formInput.map((data) => (
          <div key={data.id}>
            <p className="text-xl">
              {data.title} <span className="text-red-600">*</span>
            </p>
            <input
              name={data.name}
              className="w-full text-xl rounded-full h-12 border-2 border-gray-600 px-5 bg-transparent"
              placeholder={data.placeholder}
            ></input>
          </div>
        ))}

        <div className="">
          <p className="text-xl">
            Bank Rekening <span className="text-red-600">*</span>
          </p>
          {bankList.map((data) => (
            <div key={data.id} className="flex items-center space-x-4">
              <input
                id={data.title}
                className="w-4 h-4"
                name="rekening"
                type="radio"
                value={data.title}
              ></input>
              <label htmlFor={data.title} className="text-xl">
                {data.title}
              </label>
            </div>
          ))}

          <div className="flex items-center space-x-4">
            <input id="bankLain" className="w-4 h-4" name="rekening" type="radio"></input>
            <label htmlFor="bankLain" className="text-xl w-24">Yang Lain :</label>
            <input className="w-full bg-transparent border-b-2 border-gray-500"></input>
          </div>
        </div>
        <div>
          <p className="text-xl">
            Cabang <span className="text-red-600">*</span>
          </p>
          <input
            name="cabang"
            className="w-full text-xl rounded-full h-12 border-2 border-gray-600 px-5 bg-transparent"
            placeholder="Cabang Bank"
          ></input>
        </div>
        <div>
          <p className="text-xl">
            Nama Pemilik Rekening <span className="text-red-600">*</span>
          </p>
          <input
            name="namaPemilikRekening"
            className="w-full text-xl rounded-full h-12 border-2 border-gray-600 px-5 bg-transparent"
            placeholder="Nama Pemilik Rekening"
          ></input>
        </div>

        <div className="">
          <p className="text-xl">
            Program TarakotaWithU yang dipilih{" "}
            <span className="text-red-600">*</span>
          </p>
          {programWithUList.map((data) => (
            <div key={data.id} className="flex items-center space-x-4">
              <input
                id={data.title}
                className="w-4 h-4"
                name="program"
                value={data.title}
                type="radio"
              ></input>
              <label htmlFor={data.title} className="text-xl">
                {data.title}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
            <button className="px-8 w-fit py-1.5 rounded-full bg-tera text-white text-xl mt-6"> Submit </button>
        </div>
      </div>
    </div>
  );
};

export default FormBisnis;
