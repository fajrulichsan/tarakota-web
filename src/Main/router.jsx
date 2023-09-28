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
import BagiBagiPage from "../User/pages/BagiBagiPage";
import BersamaPage from "../User/pages/BersamaPage";
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
        path: "/bangun-tarakota",
        element: <BangunPage/>
    },
    {
        path: "/bisnis-tarakota",
        element: <BisnisPage/>
    },
    {
        path: "/bagibagi-tarakota",
        element: <BagiBagiPage/>
    },
    {
        path: "/bersama-tarakota",
        element: <BersamaPage/>
    }
]);

export default router;
