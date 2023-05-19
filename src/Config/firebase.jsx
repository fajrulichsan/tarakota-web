// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2c6v3v_OIkZieHgAio6dBRNcAO5jIIHk",
  authDomain: "tarakotaweb-17db8.firebaseapp.com",
  projectId: "tarakotaweb-17db8",
  storageBucket: "tarakotaweb-17db8.appspot.com",
  messagingSenderId: "622105318332",
  appId: "1:622105318332:web:dcac5470fae4319c3851b9",
  measurementId: "G-YGTQTMT7BW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);