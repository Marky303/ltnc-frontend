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

  // Driver list
  let [driverList, setdriverList] = useState([]);

  // Vehicle list
  let [vehicleList, setvehicleList] = useState([]);

  // Create trip
  let [listCar, setlistCar] = useState();
  let [listDriver, setlistDriver] = useState();
  let [tripCreated, settripCreated] = useState();
  let [fetching, setFetching] = useState(false);

  const navigate = useNavigate();

  let delCreatedTrip = async (id) => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/trip/" + id;

      const response = await axiosInstance.delete(url);

      if (response.status == 200) {
        notify("success", response.data.message);
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
    navigate("/")
  };

  let maintDoneVehicle = async (id, cost) => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/car/maintenanceDone/" + id;

      const body = {
        cost: cost,
      };

      const response = await axiosInstance.post(url, body);

      console.log(response);

      if (response.status == 200) {
        notify("success", response.data.message);
        getVehicle();
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

  let maintVehicle = async (id, kmMaint) => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/car/makeMaintenance/" + id;

      const body = {
        kmMaintenance: kmMaint,
      };

      const response = await axiosInstance.post(url, body);

      if (response.status == 200) {
        // Do another request
        const url = "http://localhost:3000/car/maintenance/" + id;
        const response = await axiosInstance.get(url);

        if (response.status == 200) {
          notify("success", response.data.message);
          getVehicle();
        }
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

  let delVehicle = async (id) => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/car/" + id;

      const response = await axiosInstance.delete(url);

      if (response.status == 200) {
        notify("success", "Vehicle deleted!");
        getVehicle();
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

  let addVehicle = async (e) => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/car";

      const body = {
        licensePlate: e.target.licensePlate.value,
        type: e.target.type.value,
        size: e.target.size.value,
        weight: e.target.weight.value,
        fuel: e.target.fuel.value,
      };

      const response = await axiosInstance.post(url, body);

      if (response.status == 201) {
        notify("success", "Vehicle created!");
        navigate("/vehicles");
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

  let editVehicle = async (e, id) => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/car/" + id;

      const body = {
        licensePlate: e.target.licensePlate.value,
        type: e.target.type.value,
        size: e.target.size.value,
        weight: e.target.weight.value,
        fuel: e.target.fuel.value,
      };

      const response = await axiosInstance.put(url, body);

      if (response.status == 200) {
        notify("success", "Vehicle updated!");
        navigate("/vehicles");
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

  let getVehicle = async () => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/car";

      const response = await axiosInstance.get(url);

      if (response.status == 200) {
        setvehicleList(response.data);
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

  let getDriver = async () => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true, // This allows sending/receiving cookies with requests
      });

      // Posting to server and get response
      const url = "http://localhost:3000/trip";

      const response = await axiosInstance.get(url);

      console.log(response);

      if (response.status == 200) {
        setdriverList(response.data);
        notify("Drivers acquired!");
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

      console.log(body);

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
    const timeObject = new Date(time).getTime();

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
    driverList: driverList,
    vehicleList: vehicleList,

    // trucking related functions
    findOperator: findOperator,
    createTrip: createTrip,
    getDriver: getDriver,
    getVehicle: getVehicle,
    editVehicle: editVehicle,
    addVehicle: addVehicle,
    delVehicle: delVehicle,
    maintVehicle: maintVehicle,
    maintDoneVehicle: maintDoneVehicle,
    delCreatedTrip: delCreatedTrip,
  };

  return (
    // If loading is true, render nothing, else render everything as normal
    <ManagerContext.Provider value={contextData}>
      {<Outlet />}
    </ManagerContext.Provider>
  );
};
