import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

import BigTableDriver from "../../components/bigtable/BigTableDriver";

import "../../pagestyles/Listingpages/driverlist.css"

const VehicleList = () => {
  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  return authTokens ? (
    userInfo.admin ? (
      <div className="driverpage-wrapper">
        <BigTableDriver/>
      </div>
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/home" />
  );
};

export default VehicleList;
