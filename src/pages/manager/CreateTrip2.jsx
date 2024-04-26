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
import "../../pagestyles/createtrip2.css";

// Importing table component
import SmallTable from "../../components/smalltable/SmallTable";

const CreateTrip2 = () => {
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
    arrivaldate,
    arrivaltime,
    expense,
    revenue,
    vehicle,
  } = useParams();

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  // Test
  let data = "something";

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
        arrivaldate +
        "/" +
        arrivaltime +
        "/" +
        expense +
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
              <SmallTable data={data}/>
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
