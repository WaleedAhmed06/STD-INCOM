// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBngJeE6aV4sDNfA3nIR-jDY2VREqkMa0s",
  authDomain: "student-portal-d2e83.firebaseapp.com",
  projectId: "student-portal-d2e83",
  storageBucket: "student-portal-d2e83.appspot.com",
  messagingSenderId: "619593218140",
  appId: "1:619593218140:web:ab07b02c194cc0cc134e99",
  measurementId: "G-HW4VQWDED0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);