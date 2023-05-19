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

    const login = () =>{
        if(validation()){
            console.log("berhasil")
        }else{
            console.log("gagal");
        }
    }

    function validation (){
        let status = false;
        $(".required").each(function () {
            $(this).siblings("#requiredAllert").hide();
            if($(this).val() == ""){
                $(this).css("border", "1px solid red");
                $(this).after("<p id='requiredAllert' style='color: red'>Tidak boleh kosong</p>")
                status = false;
            }else{
                $(this).css("border", "1px solid black");
                status = true;
            }
        })
        return status;
    }
    
    return (
        <Fragment>
            <div className="flex flex-col space-y-2 w-full h-screen justify-center">
                <div className="flex flex-col space-y-6 bg-gray-100 mx-auto p-10">
                    <div>
                        <p>Email</p>
                        <input className="bg-white required" type="text" placeholder="Email" name="email"/>
                        {/* <p id="emailAllert" className="text-red"></p> */}
                    </div>
                    <div>
                        <p>Password</p>
                        <input className="bg-white required" type="password" placeholder="Password" name="password"/>
                        {/* <p id="passwordAllert" className="text-red"></p> */}
                    </div>
                    <div>
                        <input  type="checkbox" id="showPassword"/>Show Password
                    </div>
                    <div className="flex">
                        <button  onClick={() => login()} className="bg-red-500 text-white rounded-full w-1/2 " type="submit">Login</button>
                        <button  onClick={() => window.location.href ="/registrasi"} className="bg-red-500 text-white rounded-full w-1/2" type="submit">Registrasi</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginComponent;
