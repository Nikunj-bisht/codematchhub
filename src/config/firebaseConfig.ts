// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnPQexN2bIGmek_V-gJRC1X3BA4Z2-17E",
  authDomain: "codematchhub-2e476.firebaseapp.com",
  projectId: "codematchhub-2e476",
  storageBucket: "codematchhub-2e476.appspot.com",
  messagingSenderId: "588972985147",
  appId: "1:588972985147:web:6679634ddf6571725b851e",
  measurementId: "G-P7QQWKMMR8"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
const db = getFirestore(app)

const analytics = getAnalytics(app);
export {db}