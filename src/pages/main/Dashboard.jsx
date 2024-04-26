import React, { useState, useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

// Importing charts
import "../../pagestyles/Dashboard/Dashboard.css";
import Infocard from "../../components/Dashboard/infoCard";
import Tripschart from "../../components/Dashboard/tripsChart";
import Distancechart from "../../components/Dashboard/distanceChart";

{/* <Infocard />
<Tripschart /> */}

// <Distancechart />

const Dashboard = () => {
  // Implement if authorized
  let { authTokens, userInfo } = useContext(AuthContext);

  return authTokens ? (
    userInfo.admin ? (
      <div> Manager dashboard </div>
    ) : (
      <div className="dashboard-wrapper">
        <div className="dashboard-left-content">
            <div className="infocard-wrapper">
              <Infocard/>
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
