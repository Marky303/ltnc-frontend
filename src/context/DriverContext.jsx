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
  let { updateUserinfo, userInfo } = useContext(AuthContext);

  let [waitingTrip, setwaitingTrip] = useState(null);

  let [history, setHistory] = useState([]);

  let getHistory = async () => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/user/history";

      const response = await axiosInstance.get(url);

      if (response.status == 200) {
        setHistory(response.data);
        return response.data
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
        notify("success", "State changed!");
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

  let getwaitingTrip = async () => {
    if (userInfo.status != "inactive")
      try {
        const axiosInstance = axios.create({
          withCredentials: true, // This allows sending/receiving cookies with requests
        });

        const url = "http://localhost:3000/user/getWaitingTrip";

        const response = await axiosInstance.get(url);

        if (response.status == 200) {
          setwaitingTrip(response.data);
          if (response.data.trip.done == false)
            notify("warning", "Trip in progress");
          else notify("warning", "Pending trip");
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
            // TODO: better way to realise this
            notify("error", "No trip pending");
          }
        }
        // Error from anywhere
        else {
          notify("error", error.message);
        }
      }
  };

  let cancelTrip = async () => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      const url =
        "http://localhost:3000/user/cancelTrip/" + waitingTrip.trip._id;

      const response = await axiosInstance.get(url);

      if (response.status == 200) {
        notify("success", response.data.message);
        setwaitingTrip(null);
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

  let startTrip = async () => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      const url =
        "http://localhost:3000/user/startTrip/" + waitingTrip.trip._id;

      const response = await axiosInstance.get(url);

      if (response.status == 200) {
        notify("success", "Started trip!");
        setwaitingTrip(response.data);
        updateUserinfo();
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

  let finishTrip = async () => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      const url =
        "http://localhost:3000/user/finishTrip/" + waitingTrip.trip._id;

      const response = await axiosInstance.get(url);

      console.log(response.data);

      if (response.status == 200) {
        notify("success", "Trip finished!");
        setwaitingTrip(null);
        updateUserinfo();
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
    // trucking related variables
    waitingTrip: waitingTrip,
    history: history,

    // trucking related functions
    switchStatus: switchStatus,
    getwaitingTrip: getwaitingTrip,
    cancelTrip: cancelTrip,
    startTrip: startTrip,
    finishTrip: finishTrip,
    getHistory: getHistory,
  };

  return (
    // If loading is true, render nothing, else render everything as normal
    <DriverContext.Provider value={contextData}>
      {<Outlet />}
    </DriverContext.Provider>
  );
};
