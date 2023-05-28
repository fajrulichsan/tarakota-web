
import {createBrowserRouter} from 'react-router-dom'
import {DashboardPage, ErrorPage, LandingPage, LoginPage, RegistrasiPage} from '../User/pages/index';
import ProtectedRoute from '../Contexts/ProtectedRoute';
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/registrasi",
        element: <RegistrasiPage />,
    },
    {
        path: "/auth",
        element : <ProtectedRoute/>,
        errorElement: <ErrorPage />,
        children : [{
            path : "dashboard",
            element : <DashboardPage/>
        }]
    },
]);

export default router;