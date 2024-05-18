// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-bRAxNSN32oPoiMjVPZBXTx2NFjzrmig",
  authDomain: "netflix-gpt-63107.firebaseapp.com",
  projectId: "netflix-gpt-63107",
  storageBucket: "netflix-gpt-63107.appspot.com",
  messagingSenderId: "111032570547",
  appId: "1:111032570547:web:7c47e998f43d61723396c6",
  measurementId: "G-L2XXPGXQVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()