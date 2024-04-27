import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import AuthContext from "./UserauthContext";
import NotifyContext from "./NotifyContext";

// Create a new context
const ManagerContext = createContext();

export default ManagerContext;

export const ManagerProvider = () => {
  let { notify } = useContext(NotifyContext);
  let { updateUserinfo } = useContext(AuthContext);

  let [listCar, setlistCar] = useState();
  let [listDriver, setlistDriver] = useState();
  let [tripCreated, settripCreated] = useState();
  let [fetching, setFetching] = useState(false);

  const navigate = useNavigate();

  let findOperator = async (e) => {
    setFetching(true);

    let time = e.target.departdate.value + "T" + e.target.departtime.value;
    const timeObject = new Date(time);

    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/trip/findDriver";

      const body = {
        title: e.target.title.value,
        description: e.target.desc.value,
        departureTime: timeObject,
        source: e.target.start.value,
        target: e.target.end.value,
        revenue: e.target.revenue.value,
        vehicle: e.target.vehicle.value,
      };

      const response = await axiosInstance.post(url, body);

      if (response.status == 200) {
        setlistCar(response.data.listCar);
        setlistDriver(response.data.listDriver);
        navigate(
          "/createtrip2/" +
            e.target.title.value +
            "/" +
            e.target.desc.value +
            "/" +
            e.target.start.value +
            "/" +
            e.target.end.value +
            "/" +
            e.target.departdate.value +
            "/" +
            e.target.departtime.value +
            "/" +
            e.target.revenue.value +
            "/" +
            e.target.vehicle.value
        );
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

    setFetching(false);
  };

  let createTrip = async (
    title,
    desc,
    start,
    end,
    departdate,
    departtime,
    revenue,
    driverid,
    vehicleid,
    type,
    fuel
  ) => {
    let time = departdate + "T" + departtime;
    const timeObject = new Date(time);

    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/trip";

      const body = {
        driverId: driverid,
        carId: vehicleid,
        title: title,
        description: desc,
        departureTime: timeObject,
        source: start,
        target: end,
        revenue: revenue,
        vehicle: type,
        fuel: fuel,
      };

      const response = await axiosInstance.post(url, body);

      if (response.status == 201) {
        setlistCar(null);
        setlistDriver(null);
        navigate("/createtrip5");
        notify("success", "Trip created");
        settripCreated(response.data);
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
    listCar: listCar,
    listDriver: listDriver,
    fetching: fetching,
    tripCreated: tripCreated,

    // trucking related functions
    findOperator: findOperator,
    createTrip: createTrip,
  };

  return (
    // If loading is true, render nothing, else render everything as normal
    <ManagerContext.Provider value={contextData}>
      {<Outlet />}
    </ManagerContext.Provider>
  );
};
