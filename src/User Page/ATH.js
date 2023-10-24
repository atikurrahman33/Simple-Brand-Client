// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzn5rGXHDtqtfFZLlb5WmX_9MtbaN7PO0",
  authDomain: "simple-brand-cliend.firebaseapp.com",
  projectId: "simple-brand-cliend",
  storageBucket: "simple-brand-cliend.appspot.com",
  messagingSenderId: "746900362091",
  appId: "1:746900362091:web:fd315cf9d9db7643fd322e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;