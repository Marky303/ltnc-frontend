import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

// Importing NotifyContext to get notify function
import NotifyContext from "./NotifyContext";

// Import firebase neccesities
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

import auth from "../firebase.js";

// Create a new context
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = () => {
  // Get notify function
  let { notify } = useContext(NotifyContext);

  // VARIABLES
  let [currentUser, setCurrentUser] = useState();

  let [fetching, setFetching] = useState(false);

  let [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  let location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // FUNCTIONS
  let signupUser = async (e) => {
    e.preventDefault();

    // Setting loading to true
    setFetching((fetching = true));

    // Posting to server and get response
    createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    )
      .then(async (userCredential) => {
        // Send email verification after signing up
        const user = userCredential.user;
        sendEmailVerification(user);

        // Create new user instance in database
        // Check if token is valid
        const token = auth.currentUser && (await auth.currentUser.getIdToken());

        const payloadHeader = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: e.target.email.value,
            name: e.target.username.value,
          }),
        };
        const res = await fetch(
          "http://localhost:3000/auth/signup/",
          payloadHeader
        );

        console.log(res);

        // Logout after logging in (unverified email)
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            notify(
              "success",
              "User registered successfully. Confirmation email sent."
            );
          })
          .catch((error) => {
            throw new Error(error.message);
          });
      })
      .catch((error) => {
        var errorMessage = error.code + " " + error.message;
        notify("error", errorMessage);
      });

    // Setting loading to false
    setFetching((fetching = false));

    // Redirect to login page
    navigate("/login");
  };

  let loginUser = async (e) => {
    e.preventDefault();

    // Setting loading to true
    setFetching((fetching = true));

    // Posting to server and get response
    signInWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    )
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Check if the account is email verified
        if (!(user && user.emailVerified)) {
          signOut(auth)
            .then(() => {
              // Notify if user failed vibe check
              notify("error", "Email has not been verified");
            })
            .catch((error) => {
              throw new Error(error.message);
            });
        } else {
          // Check if token is valid
          const token =
            auth.currentUser && (await auth.currentUser.getIdToken());

          const payloadHeader = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
          const res = await fetch(
            "http://localhost:3000/auth/login/",
            payloadHeader
          );

          if (res.status == 200) {
            // Notify if successfully logged in
            notify("success", "Logged in!");
            // Redirect to dashboard page
            navigate("/");
          } else {
            notify("error", "Cannot log in!");
            logoutUser();
          }
        }
      })
      .catch((error) => {
        var errorMessage = error.code + " " + error.message;
        notify("error", errorMessage);
      });

    // Setting loading to false
    setFetching((fetching = false));
  };

  let logoutUser = async () => {
    signOut(auth)
      .then(() => {
        // Notify if user failed vibe check
        notify("warning", "Logged out!");
      })
      .catch((error) => {
        notify("error", error.message);
      });
  };

  let resetPassword = async (e) => {
    sendPasswordResetEmail(auth, e.target.email.value)
      .then(() => {
        notify("success", "Password reset email sent!");
      })
      .catch((error) => {
        e.preventDefault()
        notify("error", error.message);
      });
  };

  let contextData = {
    // userauth related variables
    fetching: fetching,
    currentUser: currentUser,

    // userauth related functions
    signupUser: signupUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    resetPassword: resetPassword,
  };

  return (
    // If loading is true, render nothing, else render everything as normal
    <AuthContext.Provider value={contextData}>
      {<Outlet />}
    </AuthContext.Provider>
  );
};
