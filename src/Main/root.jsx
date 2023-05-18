
import {createBrowserRouter} from 'react-router-dom'
import {ErrorPage, LandingPage, LoginPage, RegistrasiPage} from '../User/pages/index';
const router = createBrowserRouter([
    {
      path : "/",
      element : <LandingPage/>,
      errorElement : <ErrorPage/>,
    },
    {
      path : "/login",
      element : <LoginPage/>,
    },
    {
      path : "/registrasi",
      element : <RegistrasiPage/>
    }
  ]);

export default router;