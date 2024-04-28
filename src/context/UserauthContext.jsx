import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// Importing NotifyContext to get notify function
import NotifyContext from "./NotifyContext";

// Create a new context
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = () => {
  // Get notify function
  let { notify } = useContext(NotifyContext);

  // VARIABLES
  let [authTokens, setauthTokens] = useState(() =>
    Cookies.get("token") ? Cookies.get("token") : null
  );

  let [userInfo, setuserInfo] = useState(() =>
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );

  let [fetching, setFetching] = useState(false);

  let navigate = useNavigate();

  let location = useLocation();

  // GLOBAL PARSE DATE FUNCTION
  let parseDate = (unix) => {
    // Create a Date object from Unix time (convert to milliseconds)
    const date = new Date(unix);

    // Get the date in 'YYYY-MM-DD' format
    const datePart = date.toISOString().split("T")[0];

    // Get the time in 'HH:MM:SS' format without timezone
    const timePart = date.toLocaleTimeString("en-GB", {
      hour12: false, // 24-hour format
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Combine date and time without timezone information
    const dateTimeString = `${datePart} ${timePart}`;

    return dateTimeString;
  };

  // FUNCTIONS
  let signupUser = async (e) => {
    e.preventDefault();

    // Getting checked boxes' values
    const checkedBoxes = e.target.querySelectorAll(
      'input[name="vehicles"]:checked'
    );
    const values = Array.from(checkedBoxes).map((box) => box.value);
    // console.log(values);

    // TODO check if repassword and password is the same
    if (e.target.password.value === e.target.repassword.value) {
      // Setting loading to true
      setFetching((fetching = true));

      // Posting to server and get response
      // TODO: Splitting error message string and notify multiple times
      // USING PREDETERMINED RESULTS
      try {
        const response = await axios.post(
          "http://localhost:3000/user/register",
          {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value,
            phoneNumber: e.target.phone_number.value,
            address: e.target.address.value,
            drivingLicense: values,
            fullName: e.target.Fullname.value,
          },
          {
            headers: {
              "Content-Type": "application/json", // Custom headers
            },
          }
        );
        notify("success", response.data.message);
        navigate("/login");
      } catch (error) {
        // Error from backend
        if (error.response) {
          let messages = error.response.data.error;
          if (Array.isArray(messages)) {
            for (let i = 0; i < messages.length; i++) {
              notify("error", messages[i]);
            }
          } else {
            notify("error", messages);
          }
        }
        // Error from anywhere
        else {
          notify("error", error.message);
        }
      }
    } else {
      notify("error", "Password fields does NOT match!");
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

      const url = "http://localhost:3000/user/login";

      const response = await axiosInstance.post(url, body);

      // Check if the cookies is actually acquired
      const token = Cookies.get("token");

      if (token) {
        // Set userinfo
        setuserInfo(response.data);
        localStorage.setItem("userInfo", JSON.stringify(response.data));

        // Set token
        setauthTokens(token);

        // Notify and redirect
        notify("success", "Logged in!");
        navigate("/");
      } else {
        notify("error", "Something happened!");
      }
    } catch (error) {
      notify("error", error.response.data.error);
    }

    // Setting loading to false
    setFetching((fetching = false));
  };

  // TODO: maybe theres something more
  let logoutUser = async () => {
    // Posting to server and get response
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/user/logout";

      const response = await axiosInstance.get(url);

      if (response.status == 200) {
        notify("success", response.data);
      } else {
        notify("error", response.error);
      }
    } catch (error) {
      notify("error", error.response.data.error);
    }

    // Delete userinfo
    setuserInfo(null);
    localStorage.removeItem("userInfo");

    // Delete token
    setauthTokens(null);
    Cookies.remove("token");
    navigate("/login");
  };

  let updateProfile = async (e) => {
    // Getting checked boxes' values
    const checkedBoxes = e.target.querySelectorAll(
      'input[name="vehicles"]:checked'
    );
    const values = userInfo.admin
      ? userInfo.drivingLicense
      : Array.from(checkedBoxes).map((box) => box.value);

    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/user/profile";

      const body = {
        username: e.target.username.value,
        fullName: e.target.fullName.value,
        phoneNumber: e.target.phoneNumber.value,
        address: e.target.address.value,
        drivingLicense: values,
      };

      const response = await axiosInstance.put(url, body);

      if (response.status == 200) {
        notify("success", "Profile changed!");

        // Change user info
        setuserInfo(response.data);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      } else {
        notify("error", "Something happened");
      }
    } catch (error) {
      // Error from backend
      if (error.response) {
        let messages = error.response.data.error;
        if (Array.isArray(messages)) {
          for (let i = 0; i < messages.length; i++) {
            notify("error", messages[i]);
          }
        } else {
          notify("error", messages);
        }
      }
      // Error from anywhere
      else {
        notify("error", error.message);
      }
    }
  };

  let updateUserinfo = async () => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/user/profile";

      const response = await axiosInstance.get(url);

      if (response.status == 200) {
        setuserInfo(response.data);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      } else {
        notify("error", "Something happened");
      }
    } catch (error) {
      // Error from backend
      if (error.response) {
        let messages = error.response.data.error;
        if (Array.isArray(messages)) {
          for (let i = 0; i < messages.length; i++) {
            notify("error", messages[i]);
          }
        } else {
          notify("error", messages);
        }
      }
      // Error from anywhere
      else {
        notify("error", error.message);
      }
    }
  };

  let contextData = {
    // userauth related variables
    fetching: fetching,
    authTokens: authTokens,
    userInfo: userInfo,

    // userauth related functions
    signupUser: signupUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    updateProfile: updateProfile,
    updateUserinfo: updateUserinfo,
    parseDate: parseDate,
  };

  return (
    // If loading is true, render nothing, else render everything as normal
    <AuthContext.Provider value={contextData}>
      {<Outlet />}
    </AuthContext.Provider>
  );
};
