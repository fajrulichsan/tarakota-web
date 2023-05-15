
import {createBrowserRouter} from 'react-router-dom'
import {ErrorPage, LandingPage, Login} from '../User/pages/index';
const router = createBrowserRouter([
    {
      path : "/",
      element : <LandingPage/>,
      errorElement : <ErrorPage/>,
    },
    {
      path : "/login",
      element : <Login/>,
    }
  ]);

export default router;