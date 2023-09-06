import { createBrowserRouter } from "react-router-dom";
import {
    DashboardPage,
    ErrorPage,
    LandingPage,
    LoginPage,
    RegistrasiPage,
    ResetPasswordPage
} from "../User/pages/index";
import ProtectedRoute from "../Contexts/ProtectedRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <ErrorPage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dev",
        element: <LandingPage />,
    },
    {
        path: "/registrasi",
        element: <RegistrasiPage />,
    },
    {
        path : "/reset-password",
        element: <ResetPasswordPage/>
    },
    {
        path: "/auth",
        element: <ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "dashboard",
                element: <DashboardPage />,
            },
        ],
    },
]);

export default router;
