import { Fragment, useEffect } from "react";
import $ from "jquery";

const LoginComponent = () => {

    useEffect(() => {
      $("#showPassword").click(function() {
        if($(this).is(":checked")){
            $("input[name='password']").attr("type","text");
        }else{
             $("input[name='password']").attr("type","password");
        }
      })
    }, [])
    
    return (
        <Fragment>
            <div className="flex flex-col  w-full h-screen justify-center">
                <div className="bg-gray-50 w-60 mx-auto p-10">
                    <div>
                        <p>Email</p>
                        <input className="bg-gray-200 " type="text" placeholder="Email" name="email"/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input className="bg-gray-200 " type="password" placeholder="Password" name="password"/>
                    </div>
                    <div>
                        <input  type="checkbox" id="showPassword"/>Show Password
                    </div>
                    <div className="flex">
                        <button name="submit" className="bg-red-500 text-white rounded-full p-2 px-7 " type="submit">Login</button>
                        <button name="submit" onClick={() => window.location.href ="/registrasi"} className="bg-red-500 text-white rounded-full p-2 px-7 " type="submit">Registrasi</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginComponent;
