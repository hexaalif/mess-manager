// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClDOkGZQ9gxwPuin1XBQdeP9YqaF5Upf0",
  authDomain: "messmanager-481d6.firebaseapp.com",
  projectId: "messmanager-481d6",
  storageBucket: "messmanager-481d6.appspot.com",
  messagingSenderId: "473139126599",
  appId: "1:473139126599:web:4ddc4d4e7a35f8edae2c62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
