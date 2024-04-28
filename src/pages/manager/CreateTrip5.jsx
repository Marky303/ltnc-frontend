import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import AuthContext from "../../context/UserauthContext";
import ManagerContext from "../../context/ManagerContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

// Importing style
import "../../pagestyles/Createtrip/createtrip5.css";

const CreateTrip5 = () => {
  const navigate = useNavigate();
  let { tripCreated, delCreatedTrip } = useContext(ManagerContext);

  useEffect(() => {
    if (!tripCreated) navigate("/");
  }, []);

  // Private link
  let { authTokens, userInfo, parseDate } = useContext(AuthContext);

  let handleDel = (id) => {
    delCreatedTrip(id);
  };

  const formatter = new Intl.NumberFormat('de-DE');

  return authTokens ? (
    userInfo.admin && tripCreated ? (
      <div className="createtrip1-content-wrapper">
        <img className="viewprofile-bg" src={background}></img>
        <div className="createtrip1-content">
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Trip overview</h2>

            <div className="table-wrapper">
              <div className="tripoverview-card">
                <div className="tripoverview-text">
                  Title: <u>{tripCreated.title}</u>
                </div>
                <div className="tripoverview-text">
                  From <u>{tripCreated.source}</u> To{" "}
                  <u>{tripCreated.target}</u>
                </div>
                <div className="tripoverview-text">
                  Departure: <u>{parseDate(tripCreated.departureTime)}</u>
                </div>
                <div className="tripoverview-text">
                  Est arrival: <u>{parseDate(tripCreated.expectedTimeCome)}</u>
                </div>
                <div className="tripoverview-text">
                  Est Expense: <u>{formatter.format(tripCreated.expense+"000")+" "}vnd</u>
                </div>
                <div className="tripoverview-text">
                  Revenue: <u>{formatter.format(tripCreated.revenue+"000")+" "}vnd</u>
                </div>
              </div>
            </div>

            <div className="user-infor-tripcreated">
              <button
                className="deletecreated-trip-btn"
                onClick={() => {
                  handleDel(tripCreated._id);
                }}
              >
                Delete trip
              </button>
              <div className="fillerdiv"></div>
              <button
                className="accept-btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to main
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

export default CreateTrip5;
