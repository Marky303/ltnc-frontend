import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../../context/UserauthContext";

import BigTableTripDriver from "../../components/bigtable/BigTableTripDriver";

const History = () => {
  let { authTokens, userInfo } = useContext(AuthContext);

  return authTokens ? (
    userInfo.admin ? (
      <div className="driverpage-wrapper">
        <BigTableTripDriver />
      </div>
    ) : (
      <div className="driverpage-wrapper">
        <BigTableTripDriver />
      </div>
    )
  ) : (
    <Navigate to="/home" />
  );
};

export default History;
