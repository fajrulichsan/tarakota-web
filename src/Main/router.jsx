import { createBrowserRouter } from "react-router-dom";
import {
    ErrorPage,
    LandingPage,
} from "../User/pages/index";
import ProtectedRoute from "../Contexts/ProtectedRoute";
import ProjectPage from "../User/pages/ProjectPage";
import ProjectDetailPage from "../User/pages/ProjectDetailPage";
import Estimation from "../User/pages/Estimation";
import AboutUs from "../User/pages/AboutUs";
import ServicePage from "../User/pages/ServicePage";
import BangunPage from "../User/pages/BangunPage";
import BisnisPage from "../User/pages/BisnisPage";
const router = createBrowserRouter([
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
    },
    {
        path: "/tentang-kami",
        element: <AboutUs/>
    },
    {
        path: "/service",
        element: <ServicePage/>
    },
    {
        path: "/bangun",
        element: <BangunPage/>
    },
    {
        path: "/bisnis",
        element: <BisnisPage/>
    }
]);

export default router;
