import { useState, useEffect } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../Config/firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState("")

  const handleLogin = async () => {
    if(validateFormRegistration()){
        loginFirebase();
    }
  };


  const loginFirebase = () =>{
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.emailVerified + 'email')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            errorLogin(errorCode);
        });
  }

  const errorLogin = (error) =>{
    if(error == "auth/user-not-found"){
        setErrorEmail("Your email not found")
    }

    if(error == "auth/wrong-password"){
        setErrorPassword("Your password is wrong")
    }
    console.log(error)
  }

  const validateFormRegistration = () =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var status = true
    if(email == ""){
        setErrorEmail("Please fill in all fields." );
        status = false;
    }else if(!regex.test(email)){
        setErrorEmail("Your Email Invalid" );
        status = false;
    }

    if(!password){
        setErrorPassword("Please fill in all fields.");
        status = false;
    }

    return status;
  }

  const handleKeyPress = () =>{
    if (event.key === 'Enter' || event.which === 13) {
      handleLogin()
    }
  }


    useEffect(() => {
        
    }, [])


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={email}
            onChange={(e) => {setEmail(e.target.value), setErrorEmail("")}}
            onKeyUp ={handleKeyPress}
          />
           {errorEmail && <p className="text-red-500 mb-4">{errorEmail}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={password}
            onChange={(e) => {setPassword(e.target.value), setErrorPassword("")}}
            onKeyUp ={handleKeyPress}
          />
          {errorPassword && <p className="text-red-500 mb-4">{errorPassword}</p>}
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            className="mr-2"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword" className="text-sm text-gray-600">
            Show Password
          </label>
        </div>
        <button type="submit" onClick={() => handleLogin()} className="bg-blue-500 text-white rounded px-4 py-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
