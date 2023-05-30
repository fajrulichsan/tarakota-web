import { sendPasswordResetEmail } from "firebase/auth";
import { Fragment, useState } from "react";
import { auth } from "../../Config/firebase";
import Loader from "../LoaderPage/Loader";

const ResetPasswordForm = () => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [loading, setLoading] = useState(false)

    const handleResetPassword = async () => {
        if (validateForm()) {
            setLoading(true)
            await sendEmailResetPassword()
            .then((resp) => {
                console.log("berhasil kirim email")
                setLoading(false)
            })
            .catch((resp) => {
                console.log("gagal kirim email")
                console.log(resp)
                setLoading(false)
            })
        }
    };

    const sendEmailResetPassword = () => {
        return new Promise((resolve, rejects) => {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    rejects(error.code)
                });
        });
    };

    const validateForm = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var status = true;
        if (email == "") {
            setErrorEmail("Please fill in all fields.");
            status = false;
        } else if (!regex.test(email)) {
            setErrorEmail("Your Email Invalid");
            status = false;
        }

        return status;
    };

    return (
        <Fragment>
            {loading && <Loader />}
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 shadow-md rounded-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value), setErrorEmail("");
                            }}
                        />
                        {errorEmail && (
                            <p className="text-red-500 mb-4">{errorEmail}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        onClick={() => handleResetPassword()}
                        className="bg-blue-500 text-white rounded px-4 py-2"
                    >
                        Login
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default ResetPasswordForm;
