import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import AuthContext from "./UserauthContext";
import NotifyContext from "./NotifyContext";

// Create a new context
const DriverContext = createContext();

export default DriverContext;

export const DriverProvider = () => {
  let { notify } = useContext(NotifyContext);
  let { updateUserinfo } = useContext(AuthContext);

  let switchStatus = async (status) => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/user/switchStatus";

      const body = {
        available: status,
      };

      const response = await axiosInstance.post(url, body);

      if (response.status == 200) {
        updateUserinfo();
        notify("success", "State changed!")
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

  }

  




  let contextData = {
    // trucking related variables
    

    // trucking related functions
    switchStatus: switchStatus,
  };

  return (
    // If loading is true, render nothing, else render everything as normal
    <DriverContext.Provider value={contextData}>
      {<Outlet />}
    </DriverContext.Provider>
  );
};
