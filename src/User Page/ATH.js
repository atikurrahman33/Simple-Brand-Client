// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDujGn4Qp1Hb5NKYXueScqQzPi-3r-9AbQ",
  authDomain: "my-event-project-ec72c.firebaseapp.com",
  projectId: "my-event-project-ec72c",
  storageBucket: "my-event-project-ec72c.appspot.com",
  messagingSenderId: "30232476303",
  appId: "1:30232476303:web:9fdf0f03b12a9598df0efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;