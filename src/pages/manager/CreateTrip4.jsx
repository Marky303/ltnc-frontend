import React, { useState, useEffect, useContext, version } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import AuthContext from "../../context/UserauthContext";
import ManagerContext from "../../context/ManagerContext";
import NotifyContext from "../../context/NotifyContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

// Importing style
import "../../pagestyles/Createtrip/createtrip2.css";
import "../../pagestyles/Createtrip/createtrip4.css";

// Importing table component
import SmallTableVehicle from "../../components/smalltable/SmallTableVehicle";
import DriverList from "./VehicleList";
import { cardActionsClasses } from "@mui/material";

const CreateTrip4 = () => {
  const navigate = useNavigate();
  let { listCar, listDriver, createTrip } = useContext(ManagerContext);
  let { notify } = useContext(NotifyContext);

  // Load params if theres any
  const {
    title,
    desc,
    start,
    end,
    departdate,
    departtime,
    revenue,
    vehicle,
    driverid,
    vehicleid,
  } = useParams();

  const tripInfo = {
    title: title,
    desc: desc,
    start: start,
    end: end,
    departdate: departdate,
    departtime: departtime,
    revenue: revenue,
    vehicle: vehicle,
    driverid: driverid,
    vehicleid: vehicleid,
  };

  const textFieldList = [
    "title",
    "desc",
    "start",
    "end",
    "departdate",
    "departtime",
    "revenue",
    "vehicle",
  ];

  useEffect(() => {
    if (title) {
      let element;
      for (let i of textFieldList) {
        if (i === "vehicle") {
          let query = document.getElementsByName(tripInfo[i]);
          if (query[0]) {
            element = query[0];
            element.setAttribute("selected", "selected");
          } else {
            notify("error", "Vehicle not found, please try again");
            navigate("/");
          }
        } else {
          element = document.getElementsByName(i)[0];
          element.setAttribute("value", tripInfo[i]);
        }
      }
      notify("warning", "Please double check one last time");
    }
  }, [listCar, listDriver]);

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  // Going back to form
  let handleBack = () => {
    navigate(
      "/createtrip3/" +
        title +
        "/" +
        desc +
        "/" +
        start +
        "/" +
        end +
        "/" +
        departdate +
        "/" +
        departtime +
        "/" +
        revenue +
        "/" +
        vehicle +
        "/" +
        driverid
    );
  };

  let handleSubmit = () => {
    let i;
    for (i = 0; i < listCar; i++) {
      if (listCar[i]._id == vehicleid) {
        break;
      }
    }
    createTrip(title, desc, start, end, departdate, departtime, revenue, driverid, vehicleid, listCar[i].type, listCar[i].fuel);
  };

  return authTokens ? (
    userInfo.admin ? (
      <div className="createtrip1-content-wrapper">
        <img className="viewprofile-bg" src={background}></img>
        <div className="createtrip1-content">
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Confirmation (Step 4)</h2>
            <form
              action=""
              method=""
              className="body-signup"
            >
              <fieldset className="form-disabled" disabled>
                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-box"></i>
                    <label>Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title of your trip..."
                    />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <label>Revenue (kVND)</label>
                    <input
                      type="text"
                      id="revenue"
                      name="revenue"
                      placeholder="Short description..."
                    />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-location-dot"></i>
                    <label>Start</label>
                    <input
                      type="text"
                      id="start"
                      name="start"
                      placeholder="Starting point..."
                    />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-flag-checkered"></i>
                    <label>End</label>
                    <input
                      type="text"
                      id="end"
                      name="end"
                      placeholder="Ending point..."
                    />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-calendar"></i>
                    <label>Departure date</label>
                    <input type="date" id="departdate" name="departdate" />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-clock"></i>
                    <label>Departure time</label>
                    <input type="time" id="departtime" name="departtime" />
                  </div>
                </div>

                <i class="fa-solid fa-boxes-stacked"></i>
                <label for="address">Description</label>
                <input
                  className="vehicle-select"
                  type="text"
                  id="desc"
                  name="desc"
                  placeholder="Short description about your trip..."
                ></input>

                <i class="fa-solid fa-truck"></i>
                <label for="address">Vehicle</label>
                <select className="vehicle-select" id="vehicle" name="vehicle">
                  <option name="coach" value="coach">
                    Coach
                  </option>
                  <option name="container" value="container">
                    Container
                  </option>
                  <option name="truck" value="truck">
                    Truck
                  </option>
                </select>
              </fieldset>
            </form>

            <div className="driverct-card">
              <div className="trip-content">
                <div className="createtrip-info">
                  <div className="trip-info-title">Driver</div>
                  <hr></hr>
                  {listDriver ? (
                    listDriver.map((driver) =>
                      driver._id == driverid ? (
                        <div className="trip-info-text-wrapper">
                          <div className="trip-info-text">
                            Name: {driver.fullName}
                          </div>
                          <div className="trip-info-text">
                            Point: {driver.point}
                          </div>
                          <div className="trip-info-text">
                            Tel: {driver.phoneNumber}
                          </div>
                          <div className="trip-info-text">
                            Address: {driver.address}
                          </div>
                          <div className="trip-info-text">
                            Email: {driver.email}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )
                    )
                  ) : (
                    <div>No driver found</div>
                  )}
                </div>
                <div className="createtrip-vehicle">
                  <div className="trip-vehicle-title">Vehicle</div>
                  <hr></hr>
                  {listCar ? (
                    listCar.map((car) =>
                      car._id == vehicleid ? (
                        <div className="trip-vehicle-text-wrapper">
                          <div className="trip-info-text">
                            Plate: {car.licensePlate}
                          </div>
                          <div className="trip-info-text">Fuel: {car.fuel}</div>
                          <div className="trip-info-text">
                            Maint. Status: {car.kmTraveled}/{car.kmMaintenance}
                            (km)
                          </div>
                          <div className="trip-info-text">Size: {car.size}</div>
                          <div className="trip-info-text">
                            Weight: {car.weight}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )
                    )
                  ) : (
                    <div>No driver found</div>
                  )}
                </div>
              </div>
            </div>

            <div className="createtrip-user-infor">
              <button className="createtrip-back-btn" onClick={handleBack}>
                Back
              </button>
              <button className="createtrip-accept-btn" onClick={handleSubmit}>
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/home" />
  );
};

export default CreateTrip4;
