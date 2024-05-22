// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDinzmJdbhPlN7ZbJfp28ng3sH80m-O2BU",
  authDomain: "folder-react-structure.firebaseapp.com",
  projectId: "folder-react-structure",
  storageBucket: "folder-react-structure.appspot.com",
  messagingSenderId: "15397755871",
  appId: "1:15397755871:web:5c4d9861a9f5ee1775c26a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;