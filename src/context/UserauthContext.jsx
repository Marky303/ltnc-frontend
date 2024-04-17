import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

// Importing NotifyContext to get notify function
import NotifyContext from "./NotifyContext";

// Import firebase neccesities
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "../firebase.js";

// Create a new context
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = () => {
  // Get notify function
  let { notify } = useContext(NotifyContext);

  // VARIABLES
  // Get and set authTokens variable if it is saved in localStorage
  // Preventing logging out when reloading page
  let [authTokens, setauthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [userInfo, setuserInfo] = useState(() =>
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );

  let [fetching, setFetching] = useState(false);

  let [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  let location = useLocation();

  // FUNCTIONS
  let signupUser = async (e) => {
    // PREVENT PAGE RELOAD ON FORM SUBMIT SOMEHOW IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT
    // IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT
    e.preventDefault();

    // Setting loading to true
    setFetching((fetching = true));

    // Posting to server and get response

    createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
      .then((userCredential) => {
        // Send email verification after signing up
        const user = userCredential.user;
        userCredential.sendEmailVerification();

        // TEST
        console.log(userCredential)
        console.log(user)

        notify(
          "success",
          "User registered successfully. Confirmation email sent."
        );
      })
      .catch((error) => {
        var errorMessage = error.code + " " + error.message;
        notify("error", errorMessage);
      });

    // Setting loading to false
    setFetching((fetching = false));
  };

  // FUNCTIONS
  let loginUser = async (e) => {
    // PREVENT PAGE RELOAD ON FORM SUBMIT SOMEHOW IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT
    // IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT
    e.preventDefault();

    // Setting loading to true
    setFetching((fetching = true));

    // Posting to server and get response
    signInWithEmailAndPassword(auth, email, password);

    // Setting loading to false
    setFetching((fetching = false));

    // Notify user
  };

  let contextData = {
    // userauth related variables
    authTokens: authTokens,
    userInfo: userInfo,
    fetching: fetching,

    // userauth related functions
    signupUser: signupUser,
  };

  return (
    // If loading is true, render nothing, else render everything as normal
    <AuthContext.Provider value={contextData}>
      {<Outlet />}
    </AuthContext.Provider>
  );
};
