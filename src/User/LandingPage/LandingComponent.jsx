import { applyActionCode } from "firebase/auth";
import { Fragment, useEffect  } from "react";
import { auth } from "../../Config/firebase";
import { useLocation } from "react-router-dom";
const LandingComponent = () => {
  const location = useLocation();

    const searchParams  = new URLSearchParams(location.search);
    const mode = searchParams.get('mode');
    const actionCode = searchParams.get('oobCode');
    const continueUrl = searchParams.get('continueUrl');
    const lang = searchParams.get('lang') || 'en';

    console.log(mode, actionCode, continueUrl, lang)
    
    useEffect(() => {
      applyActionCode(auth, actionCode).then((resp) => {
            console.log(resp)
          }).catch((error) => {
            console.log(error)
          });
    }, [])
    


  return (
    <Fragment>
    <h1 className='flex justify-center bg-red-200'>Ini adalah Landing</h1>
    <p>Berhasil di verifikasi</p>
    </Fragment>
  )
}

export default LandingComponent;