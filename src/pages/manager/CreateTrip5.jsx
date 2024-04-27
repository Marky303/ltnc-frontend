import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import AuthContext from "../../context/UserauthContext";
import NotifyContext from "../../context/NotifyContext";
import ManagerContext from "../../context/ManagerContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

// Importing style
import "../../pagestyles/Createtrip/createtrip5.css";

const CreateTrip5 = () => {
  const navigate = useNavigate();
  let { tripCreated } = useContext(ManagerContext);

  useEffect(() => {
    if (!tripCreated) navigate("/");
  }, []);

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

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
                  Departure:{" "}
                  <u>
                    {tripCreated.departureTime
                      .slice(0, -8)
                      .replaceAll("T", " / ")}
                  </u>
                </div>
                <div className="tripoverview-text">
                  Estimated arrival:{" "}
                  <u>
                    {tripCreated.expectedTimeCome
                      .slice(0, -16)
                      .replaceAll("T", " / ")}
                  </u>
                </div>
                <div className="tripoverview-text">
                  Estimated Expense: <u>{tripCreated.expense}$</u>
                </div>
                <div className="tripoverview-text">
                  Revenue: <u>{tripCreated.revenue}$</u>
                </div>
              </div>
            </div>

            <div className="user-infor-tripcreated">
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
