import { createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

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

    return (
        <StateContext.Provider
            value={{
                setCookieWithExpired,
                getCookieWithExpired
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
