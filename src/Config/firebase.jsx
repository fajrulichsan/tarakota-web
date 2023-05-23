import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2c6v3v_OIkZieHgAio6dBRNcAO5jIIHk",
  authDomain: "tarakotaweb-17db8.firebaseapp.com",
  projectId: "tarakotaweb-17db8",
  storageBucket: "tarakotaweb-17db8.appspot.com",
  messagingSenderId: "622105318332",
  appId: "1:622105318332:web:dcac5470fae4319c3851b9",
  measurementId: "G-YGTQTMT7BW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);