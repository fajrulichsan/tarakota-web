import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const [popupForm, setPopupForm] = useState(false)
    const setCookieWithExpired = (user, hours) => {
        const expirationMS = hours * 60 * 60 * 1000; 
        const expired = Date.now() + expirationMS;
        const dataUser = {
            token : user.accessToken,
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoUrl,
            expired : expired
        };
        localStorage.setItem("dataUser", JSON.stringify(dataUser));
    };

    const getCookieWithExpired = (key) => {
        const item = JSON.parse(localStorage.getItem(key));
        console.log(item)
        // console.log(Date.now())
        // console.log(item.expired)
        if (item && Date.now() < item.expired) {
            console.log("ini dah berlebih")
            return true;
        } else {
            console.log("sudah expired")
            localStorage.removeItem(key);   // remove jika expired
            return false;
        }
    }

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
        })
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
        <StateContext.Provider
            value={{
                setCookieWithExpired,
                getCookieWithExpired,
                popupForm,
                setPopupForm,
                showAlertSuccess,
                showAlertError
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
