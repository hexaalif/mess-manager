// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdkPuS56BC5RXWV0CgGJKurAICJdD4FdI",
  authDomain: "mess-manager-82518.firebaseapp.com",
  projectId: "mess-manager-82518",
  storageBucket: "mess-manager-82518.appspot.com",
  messagingSenderId: "1002486202053",
  appId: "1:1002486202053:web:632908f3f79657d5263aac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
