// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRsaSa7LkimyjlAEvfjZpBX2Qe_zA8gPU",
  authDomain: "proyec-auten.firebaseapp.com",
  projectId: "proyec-auten",
  storageBucket: "proyec-auten.appspot.com",
  messagingSenderId: "683481567401",
  appId: "1:683481567401:web:0557c47b57021e98fe59b8",
  measurementId: "G-P3RFYSJNY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
