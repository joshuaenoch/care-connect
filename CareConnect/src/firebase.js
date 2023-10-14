// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB2TzSycAsHpgEYsulnhWFYDcSW2VRUSo",
  authDomain: "care-connect-proto-v1.firebaseapp.com",
  projectId: "care-connect-proto-v1",
  storageBucket: "care-connect-proto-v1.appspot.com",
  messagingSenderId: "889650575658",
  appId: "1:889650575658:web:c149b1460b7b79820c8653",
  measurementId: "G-32949LZE3P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
