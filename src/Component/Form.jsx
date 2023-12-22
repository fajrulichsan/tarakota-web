import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Fade } from "react-reveal";
import "./css/sweetalert.css";
import { Fragment } from "react";

const formInput = [
  {
    id: 1,
    title: "Nama Lengkap",
    name: "namaLengkap",
    tipe: "text",
    placeholder: "Nama Lengkap",
  },
  {
    id: 2,
    title: "No Hp",
    name: "noHp",
    tipe: "number",
    placeholder: "No Hp",
  },
  {
    id: 3,
    title: "Email",
    name: "email",
    tipe: "email",
    placeholder: "Email",
  },
];

const Form = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Kirim Data",
      text: "Pastikan data yang diinputkan benar",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Kembali",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        header: "custom-swal-header",
        title: "custom-swal-title",
        content: "custom-swal-content",
        actions: "custom-swal-buttons",
        confirmButton: "custom-swal-confirm",
        cancelButton: "custom-swal-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        emailjs
          .sendForm(
            "service_emizq9q",
            "template_s5dehg",
            e.target,
            "RHjp-oAmRy8VkGhmc"
          )
          .then(
            (result) => {
              console.log("Email sent successfully", result);
              setLoading(false);
              showAlertSuccess();
            },
            (error) => {
              console.error("Email sending failed", error);
              setLoading(false);
              showAlertError();
            }
          );
      }
    });

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

  // const aletSuccess = () =>{
  //   Swal.fire({
  //     text: 'Data berhasil dikirim, silahkan tunggu informasi lebih lanjut dari tim kami',
  //     icon : "success",
  //     showCancelButton: false,
  //     confirmButtonText: 'OK',
  //     customClass: {
  //       container: 'custom-swal-container',
  //       popup: 'custom-swal-popup',
  //       header: 'custom-swal-header',
  //       title: 'custom-swal-title',
  //       content: 'custom-swal-content',
  //       actions: 'custom-swal-buttons',
  //       confirmButton: 'custom-swal-confirm',
  //     }
  //   }
  //   )
  // }

  const showAlertSuccess = () => {
    Swal.fire({
      text: "Data berhasil dikirim, silahkan tunggu informasi lebih lanjut dari tim kami",
      icon: "success",
      showCancelButton: false,
      confirmButtonText: "OK",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        header: "custom-swal-header",
        title: "custom-swal-title",
        content: "custom-swal-content",
        actions: "custom-swal-buttons",
        confirmButton: "custom-swal-confirm",
      },
    });
  };

  const showAlertError = () => {
    Swal.fire({
      text: "Terjadi kesalahan saat mengirim email. Silahkan coba lagi.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "OK",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        header: "custom-swal-header",
        title: "custom-swal-title",
        content: "custom-swal-content",
        actions: "custom-swal-buttons",
        confirmButton: "custom-swal-confirm",
      },
    });
  };

  return (
    <Fragment>
       {loading && (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )}
      
      <Fade bottom>
        <div
          className="mx-5 md:mx-20 lg:mx-32 rounded-2xl mb-10 md:mb-20 shadow-md md:shadow-lg md:shadow-gold shadow-gold"
          style={{ background: "#F9F5EC" }}
        >
          <div className="p-8 md:p-16 lg:px-20 ">
            <form onSubmit={sendEmail} className="space-y-3 md:space-y-5 ">
              {formInput.map((data) => (
                <div key={data.id}>
                  <p className="text-sm md:text-lg">
                    {data.title} <span className="text-red-600">*</span>
                  </p>
                  <input
                    name={data.name}
                    type={data.tipe}
                    className="w-full text-sm md:text-lg focus:bg-transparent rounded-full h-9 md:h-10 border-2 border-gray-600 px-5 bg-transparent"
                    placeholder={data.placeholder}
                    required
                  ></input>
                </div>
              ))}
              <input
                name="programTarakota"
                value="Bangun Tarakota"
                hidden
              ></input>
              <input name="bangunDisplay" value="block" hidden></input>
              <input name="bisnisDisplay" value="none" hidden></input>
              <input name="bagibagiDisplay" value="none" hidden></input>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-tera w-auto px-10 py-1.5 text-sm md:text-lg text-white rounded-full"
                  disabled={loading}
                >
                  {loading ? "Mengirim..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Form;
