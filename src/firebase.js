import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACnRdO7n0wU_94ik3MBfYONXjBLT9gVgw",
    authDomain: "ltnc-f1c36.firebaseapp.com",
    projectId: "ltnc-f1c36",
    storageBucket: "ltnc-f1c36.appspot.com",
    messagingSenderId: "366104917841",
    appId: "1:366104917841:web:edf8bd27e69219a7c78570",
    measurementId: "G-FYW94MK1KR"
  };

const app = initializeApp(firebaseConfig);

// gives us an auth instance
const auth = getAuth(app);

// in order to use this auth instance elsewhere
export default auth;
