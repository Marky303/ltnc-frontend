import React, { useContext, useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import "../../pagestyles/Dashboard/managerInfo.css";

import ManagerContext from "../../context/ManagerContext";

const ManagerInfo = () => {
  let {
    driverList,
    getDriver,
    getVehicle,
    vehicleList,
    getTrip,
    tripList,
    allTrip,
    getallTrip,
  } = useContext(ManagerContext);

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

  // All trip stats
  let [revenue, setRevenue] = useState(0);
  let [expense, setExpense] = useState(0);

  useEffect(() => {
    getallTrip();
  }, []);

  useEffect(() => {
    // Get the current date
    const now = new Date();

    // Calculate the end of today in UNIX time
    const endDate = new Date(now);
    endDate.setHours(23, 59, 59, 999); // Set to the end of the day

    // Calculate the start of 7 days ago in UNIX time
    const startDate = new Date(now);
    startDate.setDate(now.getDate() - 6); // Going back 6 days to get a total of 7 days
    startDate.setHours(0, 0, 0, 0); // Set to the beginning of the day

    let rev = 0;
    let exp = 0;

    for (let i = 0; i < allTrip.length; i++) {
    if (allTrip[i].timeCome>=startDate.getTime() && allTrip[i].timeCome<=endDate.getTime())
      rev += Math.floor(Number(allTrip[i].revenue));
      exp += Math.floor(Number(allTrip[i].expense));
    }
    setRevenue(rev);
    setExpense(exp);
  }, [allTrip]);

  const formatter = new Intl.NumberFormat("de-DE");

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
          <div className="managerinfo-halfline-half-content">
            <span style={{ color: "#2de640" }}>Active {activeTrip}</span>
          </div>
          <div className="managerinfo-halfline-half-content">
            <span style={{ color: "rgba(255, 251, 41, 0.84)" }}>
              Pending {pendingTrip}
            </span>
          </div>
        </div>
      </div>
      <div className="managerinfo-line-wrapper">
        <div className="managerinfo-halfline-header">
          Cash (last 7 days in VND)
        </div>
        <div className="managerinfo-halfline-content-wrapper">
          <div className="managerinfo-halfline-half-content">
            <span style={{ color: "#2de640" }}>
              {formatter.format(revenue + "000")}
            </span>
          </div>
          <div className="managerinfo-halfline-half-content">
            <span style={{ color: "rgb(255, 17, 17)" }}>
              {formatter.format(expense + "000")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerInfo;
