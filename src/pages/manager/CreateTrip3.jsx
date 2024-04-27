import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

// Importing NotifyContext to get notify function
import NotifyContext from "../../context/NotifyContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

// Importing style
import "../../pagestyles/Createtrip/createtrip2.css";

// Importing table component
import SmallTableVehicle from "../../components/smalltable/SmallTableVehicle";

const CreateTrip3 = () => {
  // Get navigate function
  const navigate = useNavigate();

  // Getting notify function
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
  };

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  // Going back to form
  let handleBack = () => {
    navigate(
      "/createtrip2/" +
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
        vehicle
    );
  };

  return authTokens ? (
    userInfo.admin ? (
      <div className="createtrip1-content-wrapper">
        <img className="viewprofile-bg" src={background}></img>
        <div className="createtrip1-content">
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Choose a vehicle (Step 3)</h2>

            <div className="table-wrapper">
              <SmallTableVehicle tripInfo={tripInfo} />
            </div>

            <div className="user-infor">
              <button className="back-btn" onClick={handleBack}>
                Back
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

export default CreateTrip3;
