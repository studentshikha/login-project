
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC53LDUuFEf_Ww_VjZxvp_KxKvL0p-MPm8",
  authDomain: "login-frontend-99350.firebaseapp.com",
  projectId: "login-frontend-99350",
  storageBucket: "login-frontend-99350.firebasestorage.app",
  messagingSenderId: "288456320706",
  appId: "1:288456320706:web:487f81bf5ec20a3db9fd5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;