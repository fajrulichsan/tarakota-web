import { Fragment} from "react"
//  import  { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../Config/firebase";
// import { useStateContext } from "../../Contexts/ContextProvider";
// import { useNavigate } from "react-router-dom";
// import Loader from "../LoaderPage/Loader";
import "./Login.css"

const LoginForm = () => {
    // const navigate = useNavigate();
    // const { setCookieWithExpired } = useStateContext();
    // const [loading, setLoading] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    // const [errorEmail, setErrorEmail] = useState("");
    // const [errorPassword, setErrorPassword] = useState("");

    // const handleLogin = async () => {
    //     if (validateForm()) {
    //         setLoading(true);
    //         console.log("star login");
    //         await loginFirebase({ auth, email, password })
    //             .then((resp) => {
    //                 setCookieWithExpired(resp, 1); // set cookies
    //                 setLoading(false);
    //                 navigate("/auth/dashboard");
    //             })
    //             .catch((resp) => {
    //                 setLoading(false);
    //                 errorLogin(resp);
    //             });
    //         console.log("kelar");
    //     }
    // };

    // const loginFirebase = ({ auth, email, password }) => {
    //     const result = new Promise((resolve, rejects) => {
    //         signInWithEmailAndPassword(auth, email, password)
    //             .then((userCredential) => {
    //                 const user = userCredential.user;
    //                 if (user.emailVerified == true) {
    //                     //validate verification
    //                     resolve(user);
    //                 } else {
    //                     resolve(false);
    //                 }
    //             })
    //             .catch((error) => {
    //                 rejects(error.code);
    //             });
    //     });
    //     return result;
    // };

    // const errorLogin = (error) => {
    //     if (error == "auth/user-not-found") {
    //         setErrorEmail("Your email not found");
    //     }

    //     if (error == "auth/wrong-password") {
    //         setErrorPassword("Your password is wrong");
    //     }

    //     if (error == "auth/network-request-failed") {
    //         setErrorEmail("Ada masalah pada jaringan anda");
    //     }
    // };

    // const validateForm = () => {
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     var status = true;
    //     if (email == "") {
    //         setErrorEmail("Please fill in all fields.");
    //         status = false;
    //     } else if (!regex.test(email)) {
    //         setErrorEmail("Your Email Invalid");
    //         status = false;
    //     }

    //     if (!password) {
    //         setErrorPassword("Please fill in all fields.");
    //         status = false;
    //     }

    //     return status;
    // };

    // const handleKeyPress = () => {
    //     if (event.key === "Enter" || event.which === 13) {
    //         handleLogin();
    //     }
    // };

    return (
        // <Fragment>
        //     {loading && <Loader />}
        //     <div className="flex justify-center items-center h-screen">
        //         <div className="bg-white p-8 shadow-md rounded-lg w-96">
        //             <h2 className="text-2xl font-bold mb-4">Login</h2>
        //             <div className="mb-4">
        //                 <label
        //                     htmlFor="email"
        //                     className="block mb-2 font-medium"
        //                 >
        //                     Email
        //                 </label>
        //                 <input
        //                     type="email"
        //                     id="email"
        //                     className="border border-gray-300 rounded px-3 py-2 w-full"
        //                     value={email}
        //                     onChange={(e) => {
        //                         setEmail(e.target.value), setErrorEmail("");
        //                     }}
        //                     onKeyUp={handleKeyPress}
        //                 />
        //                 {errorEmail && (
        //                     <p className="text-red-500 mb-4">{errorEmail}</p>
        //                 )}
        //             </div>
        //             <div className="mb-4">
        //                 <label
        //                     htmlFor="password"
        //                     className="block mb-2 font-medium"
        //                 >
        //                     Password
        //                 </label>
        //                 <input
        //                     type={showPassword ? "text" : "password"}
        //                     id="password"
        //                     className="border border-gray-300 rounded px-3 py-2 w-full"
        //                     value={password}
        //                     onChange={(e) => {
        //                         setPassword(e.target.value),
        //                             setErrorPassword("");
        //                     }}
        //                     onKeyUp={handleKeyPress}
        //                 />
        //                 {errorPassword && (
        //                     <p className="text-red-500 mb-4">{errorPassword}</p>
        //                 )}
        //             </div>
        //             <div className="flex justify-between items-center mb-4">
        //                 <div>
        //                     <input
        //                         type="checkbox"
        //                         id="showPassword"
        //                         className="mr-2"
        //                         checked={showPassword}
        //                         onChange={() => setShowPassword(!showPassword)}
        //                     />
        //                     <label
        //                         htmlFor="showPassword"
        //                         className="text-sm text-gray-600"
        //                     >
        //                         Show Password
        //                     </label>
        //                 </div>
        //                 <button
        //                     className="text-sm text-gray-600"
        //                     onClick={() => navigate("/reset-password")}>
        //                         Lupa Password ?
        //                 </button>
        //             </div>
        //             <button
        //                 type="submit"
        //                 onClick={() => handleLogin()}
        //                 className="bg-blue-500 text-white rounded px-4 py-2"
        //             >
        //                 Login
        //             </button>
        //         </div>
        //     </div>
        // </Fragment>
        <Fragment>
            <div className="w-full h-screen bg-red-200 ">
                <div className="grid grid-cols-2 md:gap-2 py-3">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center bg-white" style={{height : "96vh"}}>
                            <div className="w-80 mx-auto space-y-10">
                                {/* navigation */}
                                <p
                                    className="flex gap-3 font-bold"
                                    style={{ color: "#E85738" }}
                                >
                                    <span>
                                        <img src="../../src/assets/img/arrow.svg"></img>
                                    </span>
                                    Beranda
                                </p>

                                {/* login header */}
                                <div className="flex flex-col space-y-1">
                                    <p className="text-3xl font-bold">
                                        Log In Akun
                                    </p>
                                    <p className="desc-gray font-medium">
                                        Hi, selamat datang di{" "}
                                        <span
                                            className="font-medium"
                                            style={{ color: "#E85738" }}
                                        >
                                            TARAKOTA
                                        </span>
                                    </p>
                                </div>

                                {/* form login */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <p className="text-base font-medium">
                                            Email
                                        </p>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Masukkan Email Anda"
                                            className="input-field bg-icon-email"
                                        ></input>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-base font-medium">
                                            Password
                                        </p>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Masukkan Password Anda"
                                            className="input-field bg-icon-pass"
                                        ></input>
                                    </div>
                                    <div className="flex justify-end">
                                        <p className="text-xs font-bold color-main">
                                            Lupa Password ?
                                        </p>
                                    </div>
                                    <button
                                        className="flex w-full justify-center rounded-full py-2 text-white font-semibold bg-main"
                                        type="button"
                                    >
                                        Log In
                                    </button>
                                </div>

                                {/* regist wording */}
                                <p className="text-xs color-gray font-normal text-center">
                                    Belum Punya Akun ?{" "}
                                    <span className="color-main font-bold">Daftar</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-200 hidden md:block">
                        <div>siap</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginForm;
