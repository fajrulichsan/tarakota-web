import { createBrowserRouter } from "react-router-dom";
import {
    ErrorPage,
    LandingPage,
} from "../User/pages/index";
import ProtectedRoute from "../Contexts/ProtectedRoute";
import ProjectPage from "../User/pages/ProjectPage";
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
    {
        path: "/project",
        element: <ProjectPage/>,
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
