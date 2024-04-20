import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// Importing NotifyContext to get notify function
import NotifyContext from "./NotifyContext";

// Create a new context
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = () => {
  // Get notify function
  let { notify } = useContext(NotifyContext);

  // VARIABLES
  let [authToken, setAuthToken] = useState();

  let [fetching, setFetching] = useState(false);

  let navigate = useNavigate();

  let location = useLocation();

  // FUNCTIONS
  let signupUser = async (e) => {
    e.preventDefault();

    // TODO check if repassword and password is the same

    // Setting loading to true
    setFetching((fetching = true));

    // Posting to server and get response
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
    };

    const url = "http://localhost:3000/user/register";

    // TODO: Splitting error message string and notify multiple times
    try {
      const response = await axios.post(url, body);
      notify("success", response.data.message);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        notify("error", error.response.data.error);
      } else {
        notify("error", error.message);
      }
    }

    // Setting loading to false
    setFetching((fetching = false));
  };

  let loginUser = async (e) => {
    e.preventDefault();

    // Setting loading to true
    setFetching((fetching = true));

    // Posting to server and get response
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const body = {
        username: e.target.username.value,
        password: e.target.password.value,
      };

      const url = "http://localhost:3000/user/register";

      const response = await axiosInstance.post(url, body);

      // Access the set-cookie header to get cookies
      // const cookies = response.headers["set-cookie"]; // Array of cookie strings

      console.log(response);

      // if (cookies) {
      //   console.log("Cookies:", cookies); // This should output the set cookies
      // } else {
      //   console.log("No cookies set");
      // }
    } catch (error) {
      console.error("Error during request:", error.message);
    }

    // Setting loading to false
    setFetching((fetching = false));
  };

  let logoutUser = async () => {};

  let resetPassword = async (e) => {};

  let contextData = {
    // userauth related variables
    fetching: fetching,
    authToken: authToken,

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
