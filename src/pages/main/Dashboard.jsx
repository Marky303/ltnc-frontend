import React, { useState, useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

// Importing charts
import "../../pagestyles/Dashboard/Dashboard.css";
import Infocard from "../../components/Dashboard/infoCard";
import Tripschart from "../../components/Dashboard/tripsChart";
import Distancechart from "../../components/Dashboard/distanceChart";

import ManagerInfo from "../../components/Dashboard/managerInfo";
import Cashflow from "../../components/Dashboard/Cashflow";

{
  /* <Infocard />
<Tripschart /> */
}

// <Distancechart />

const Dashboard = () => {
  // Implement if authorized
  let { authTokens, userInfo } = useContext(AuthContext);

  return authTokens ? (
    userInfo.admin ? (
      <div className="dashboard-wrapper">
        <div className="dashboard-left-content">
          <ManagerInfo />
          
        </div>
        <div className="dashboard-right-content">
          <Cashflow/>
        </div>
      </div>
    ) : (
      <div className="dashboard-wrapper">
        <div className="dashboard-left-content">
          <div className="infocard-wrapper">
            <Infocard />
          </div>
          <Distancechart />
        </div>
        <div className="dashboard-right-content">
          <Tripschart />
        </div>
      </div>
    )
  ) : (
    <Navigate to="/home" />
  );
};

export default Dashboard;
