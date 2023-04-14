// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxpK3hW2AOdkpR7o0jUM64KxT0lYwGCt8",
  authDomain: "todo-f983e.firebaseapp.com",
  projectId: "todo-f983e",
  storageBucket: "todo-f983e.appspot.com",
  messagingSenderId: "833458794655",
  appId: "1:833458794655:web:ffac511c42d9cfc62972aa",
  measurementId: "G-7FNYJKTW25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);