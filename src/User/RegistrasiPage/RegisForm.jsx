import { Fragment, useState } from "react";
import { auth } from "../../Config/firebase";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../LoaderPage/Loader";

const RegisForm = () => {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorEmail("");
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrorPassword("");
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setErrorConfirmPassword("");
    };

    const handleShowPasswordChange = () => {
        setShowPassword(!showPassword);
    };

    const handleRegistration = async () => {
        if (validateFormRegistration()) {
            setloading(true);
            console.log("kita tunggu")
            await handleSignUpFirebase({auth, email, password})
              .then(() => {
                  console.log("berhasil");
                  setloading(false);
                  window.Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Your work has been saved",
                      showConfirmButton: false,
                      timer: 1500,
                  });
              })
              .catch((error) => {
                  setloading(false);
                  errorSignUp(error);
                  console.log("gagal deh")
              })
            console.log("udeh")

        } else {
            console.log("gagal");
        }
    };

    const handleSignUpFirebase = ({auth, email, password}) => {
        const result = new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    sendEmailVerification(auth.currentUser).then(() =>
                        // send email notification
                        resolve(true)
                    );
                })
                .catch((error) => {
                    reject(error.code);
                });
        });
        return result;
    };

    const errorSignUp = (error) => {
        if (error == "auth/email-already-in-use") {
            setErrorEmail("Sorry this email already in use");
        }
    };

    const validateFormRegistration = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var status = true;
        if (!email) {
            setErrorEmail("Please fill in all fields.");
            status = false;
        }
        if (!regex.test(email)) {
            setErrorEmail("Your Email Invalid");
            status = false;
        }

        if (!password) {
            setErrorPassword("Please fill in all fields.");
            status = false;
        } else if (password.length < 8) {
            setErrorPassword("Password harus 8 karakter");
            status = false;
        }

        if (!confirmPassword) {
            setErrorConfirmPassword("Please fill in all fields.");
            status = false;
        }

        if (password != confirmPassword) {
            setErrorConfirmPassword("The password you entered is different");
            status = false;
        }
        return status;
    };

    return (
        <Fragment>
            {loading && <Loader />}
            <div className="w-full h-screen flex justify-center items-center">
                <div className="mx-auto pt-8">
                    <h2 className="text-2xl font-bold mb-4">Registration</h2>
                    <div>
                        <label className="block mb-2">Email:</label>
                        <input
                            type="email"
                            className="border border-gray-300 p-2 mb-2"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {errorEmail && (
                            <p className="text-red-500 mb-4">{errorEmail}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2">Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="border border-gray-300 p-2 mb-2"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {errorPassword && (
                            <p className="text-red-500 mb-4">{errorPassword}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2">Confirm Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="border border-gray-300 p-2 mb-2"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        {errorConfirmPassword && (
                            <p className="text-red-500 mb-4">
                                {errorConfirmPassword}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={showPassword}
                            onChange={handleShowPasswordChange}
                        />
                        <label>Show Password</label>
                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
                        onClick={handleRegistration}
                    >
                        Register
                    </button>
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default RegisForm;
