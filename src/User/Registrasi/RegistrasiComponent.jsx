import { Fragment } from 'react'

const Registrasi = () => {
  return (
    <Fragment>
        <Fragment>
            <div className="flex flex-col space-y-2 w-full h-screen justify-center">
                <div className="flex flex-col space-y-6 bg-gray-50 w-60 mx-auto p-10">
                    <div>
                        <p>Email</p>
                        <input className="bg-gray-200 " type="text" placeholder="Email" name="email"/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input className="bg-gray-200 " type="password" placeholder="Password" name="password"/>
                    </div>
                    <div>
                        <p>Konfirmasi Password</p>
                        <input className="bg-gray-200 " type="password" placeholder="Konfirmasi Password" name="confirmationPassword"/>
                    </div>
                    <div>
                        <input  type="checkbox" id="showPassword"/>Show Password
                    </div>
                    <div className="flex">
                        <button name="submit" className="bg-red-500 text-white rounded-full w-1/2 " type="submit">Login</button>
                        <button name="submit" onClick={() => window.location.href ="/registrasi"} className="bg-red-500 text-white rounded-full w-1/2" type="submit">Registrasi</button>
                    </div>
                </div>
            </div>
        </Fragment>
    </Fragment>
  )
}

export default Registrasi;