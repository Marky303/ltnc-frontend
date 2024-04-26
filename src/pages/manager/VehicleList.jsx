import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

import BigTableVehicle from "../../components/bigtable/BigTableVehicle";

import "../../pagestyles/Listingpages/driverlist.css"

const DriverList = () => {
  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  return authTokens ? (
    userInfo.admin ? (
      <div className="driverpage-wrapper">
        <BigTableVehicle/>
      </div>
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/home" />
  );
};

export default DriverList;
