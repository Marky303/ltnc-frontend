import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import AuthContext from "../../context/UserauthContext";
import NotifyContext from "../../context/NotifyContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

// Importing style
import "../../pagestyles/Createtrip/createtrip1.css";

// Importing table component
import SmallTableDriver from "../../components/smalltable/SmallTableDriver";

const CreateTrip2 = () => {
  const navigate = useNavigate();
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
  };

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  // Going back to form
  let handleBack = () => {
    navigate(
      "/createtrip1/" +
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
  }

  return authTokens ? (
    userInfo.admin ? (
      <div className="createtrip1-content-wrapper">
        <img className="viewprofile-bg" src={background}></img>
        <div className="createtrip1-content">
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Choose a driver (Step 2)</h2>

            <div className="table-wrapper">
              <SmallTableDriver tripInfo={tripInfo}/>
            </div>

            <div className="user-infor">
              <button className="back-btn" onClick={handleBack}>Back</button>
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

export default CreateTrip2;
