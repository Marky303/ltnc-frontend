import React, { useContext, useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import "../../pagestyles/Dashboard/managerInfo.css";

import ManagerContext from "../../context/ManagerContext";

const ManagerInfo = () => {
  let { driverList, getDriver, getVehicle, vehicleList, getTrip, tripList } =
    useContext(ManagerContext);

  // Driver stats
  let [totaldriver, settotaldriver] = useState(0);
  let [activedriver, setactivedriver] = useState(0);

  useEffect(() => {
    getDriver();
  }, []);

  useEffect(() => {
    settotaldriver(driverList.length);
    let online = 0;
    for (let i = 0; i < driverList.length; i++)
      if (driverList[i].status == "available") online++;
    setactivedriver(online);
  }, [driverList]);

  // Vehicle stats
  let [vehicleCount, setvehicleCount] = useState(0);

  useEffect(() => {
    getVehicle();
  }, []);

  useEffect(() => {
    setvehicleCount(vehicleList.length);
  }, [vehicleList]);

  // Trip stats
  let [activeTrip, setactiveTrip] = useState(0);
  let [pendingTrip, setpendingTrip] = useState(0);

  useEffect(() => {
    getTrip();
  }, []);

  useEffect(() => {
    let active = 0;
    let pending = 0;
    for (let i = 0; i < tripList.length; i++)
      if (tripList[i].done == false) active++;
      else pending++;
    setactiveTrip(active);
    setpendingTrip(pending);
  }, [tripList]);

  return (
    <div className="managerinfo-wrapper">
      <div className="managerinfo-line-wrapper-1">
        <div className="managerinfo-halfline-left">
          <div className="managerinfo-halfline-header">Driver count</div>
          <div className="managerinfo-halfline-content">
            {" "}
            <span style={{ color: "green" }}>{activedriver}</span> /{" "}
            {totaldriver}
          </div>
        </div>
        <div className="managerinfo-halfline-right">
          <div className="managerinfo-halfline-header">Vehicle count</div>
          <div className="managerinfo-halfline-content">{vehicleCount}</div>
        </div>
      </div>
      <div className="managerinfo-line-wrapper">
        <div className="managerinfo-halfline-header">Trip statistic</div>
        <div className="managerinfo-halfline-content-wrapper">
          <div className="managerinfo-halfline-half-content"><span style={{ color: "green" }}>Active {activeTrip}</span></div>
          <div className="managerinfo-halfline-half-content"><span style={{ color: "yellow" }}>Pending {pendingTrip}</span></div>
        </div>
      </div>
      <div className="managerinfo-line-wrapper">
        <div className="managerinfo-halfline-header">Cash (last 7 days)</div>
        <div className="managerinfo-halfline-content-wrapper">
          <div className="managerinfo-halfline-half-content">15</div>
          <div className="managerinfo-halfline-half-content">15</div>
        </div>
      </div>
    </div>
  );
};

export default ManagerInfo;
