import { createBrowserRouter } from "react-router-dom";
import {
    ErrorPage,
    LandingPage,
} from "../User/pages/index";
import ProtectedRoute from "../Contexts/ProtectedRoute";
const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <ErrorPage/>,
    //     errorElement: <ErrorPage />,
    // },
    {
        path: "/",
        element: <LandingPage />,
    },
    // {
    //     path: "/registrasi",
    //     element: <RegistrasiPage />,
    // },
    // {
    //     path : "/reset-password",
    //     element: <ResetPasswordPage/>
    // },
    // {
    //     path: "/auth",
    //     element: <ProtectedRoute />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: "dashboard",
    //             element: <DashboardPage />,
    //         },
    //     ],
    // },
]);

export default router;
