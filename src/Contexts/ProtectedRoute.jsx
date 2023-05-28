
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./ContextProvider";

const useAuth = () => {
    const { getCookieWithExpired } = useStateContext();
    // const token = localStorage.getItem("dataUser");
    if (getCookieWithExpired("dataUser")) {
        return true;
    } else {
        return false;
    }
};

const ProtectedRoutes = () => {
    const auth = useAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
