import { createBrowserRouter } from "react-router-dom";
import {
    ErrorPage,
    LandingPage,
} from "../User/pages/index";
import ProtectedRoute from "../Contexts/ProtectedRoute";
import ProjectPage from "../User/pages/ProjectPage";
import ProjectDetailPage from "../User/pages/ProjectDetailPage";
import Estimation from "../User/pages/Estimation";
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
    {
        path: "/project/:id",
        element: <ProjectDetailPage/>
    },
    {
        path: "/estimasi",
        element: <Estimation/>
    }
]);

export default router;
