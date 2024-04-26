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
import "../../pagestyles/Createtrip/createtrip4.css";

// Importing table component
import SmallTableVehicle from "../../components/smalltable/SmallTableVehicle";

const CreateTrip4 = () => {
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
    expense,
    revenue,
    vehicle,
    driverid,
    vehicleid,
  } = useParams();

  const tripInfo = {
    title: title,
    desc: desc,
    start: start,
    end: end,
    departdate: departdate,
    departtime: departtime,
    expense: expense,
    revenue: revenue,
    vehicle: vehicle,
    driverid: driverid,
    vehicleid: vehicleid,
  };

  const textFieldList = [
    "title",
    "desc",
    "start",
    "end",
    "departdate",
    "departtime",
    "expense",
    "revenue",
    "vehicle",
  ];

  useEffect(() => {
    if (title) {
      let element;
      for (let i of textFieldList) {
        if (i === "vehicle") {
          let query = document.getElementsByName(tripInfo[i]);
          if (query[0]) {
            element = query[0];
            element.setAttribute("selected", "selected");
          } else {
            notify("error", "Vehicle not found, please try again");
            navigate("/");
          }
        } else {
          element = document.getElementsByName(i)[0];
          element.setAttribute("value", tripInfo[i]);
        }
      }
      notify("warning", "Please double check one last time");
    }
  }, []);

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  // Going back to form
  let handleBack = () => {
    navigate(
      "/createtrip3/" +
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
        expense +
        "/" +
        revenue +
        "/" +
        vehicle +
        "/" +
        vehicleid
    );
  };

  return authTokens ? (
    userInfo.admin ? (
      <div className="createtrip1-content-wrapper">
        <img className="viewprofile-bg" src={background}></img>
        <div className="createtrip1-content">
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Confirmation (Step 4)</h2>
            <form
              action=""
              method=""
              className="body-signup"
              onSubmit={(e) => handleSubmit(e)}
            >
              <fieldset className="form-disabled" disabled>
                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-box"></i>
                    <label>Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title of your trip..."
                    />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <label>Description</label>
                    <input
                      type="text"
                      id="desc"
                      name="desc"
                      placeholder="Short description..."
                    />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-location-dot"></i>
                    <label>Start</label>
                    <input
                      type="text"
                      id="start"
                      name="start"
                      placeholder="Starting point..."
                    />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-flag-checkered"></i>
                    <label>End</label>
                    <input
                      type="text"
                      id="end"
                      name="end"
                      placeholder="Ending point..."
                    />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-calendar"></i>
                    <label>Departure date</label>
                    <input type="date" id="departdate" name="departdate" />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-clock"></i>
                    <label>Departure time</label>
                    <input type="time" id="departtime" name="departtime" />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-receipt"></i>
                    <label for="username">Expense</label>
                    <input
                      type="text"
                      id="expense"
                      name="expense"
                      placeholder="Expense of your trip..."
                    />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <label for="Fullname">Revenue</label>
                    <input
                      type="text"
                      id="revenue"
                      name="revenue"
                      placeholder="Revenue to be made..."
                    />
                  </div>
                </div>

                <i class="fa-solid fa-truck"></i>
                <label for="address">Vehicle</label>
                <select className="vehicle-select" id="vehicle" name="vehicle">
                  <option name="coach" value="coach">
                    Coach
                  </option>
                  <option name="container" value="container">
                    Container
                  </option>
                  <option name="van" value="van">
                    Van
                  </option>
                </select>
              </fieldset>
            </form>

            <div className="driverct-card">
              <div className="trip-content">
                <div className="createtrip-info">
                  <div className="trip-info-title">Driver</div>
                  <hr></hr>
                  <div className="trip-info-text-wrapper">
                    <div className="trip-info-text">Social credit: 99</div>
                    <div className="trip-info-text">Tel: 99199213</div>
                    <div className="trip-info-text">
                      Address: 123 colonial str
                    </div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                  </div>
                </div>
                <div className="createtrip-vehicle">
                  <div className="trip-vehicle-title">Vehicle</div>
                  <hr></hr>
                  <div className="trip-vehicle-text-wrapper">
                    <div className="trip-info-text">
                      Helloasdasssssssssssssssssssssssssssssssssssssss
                    </div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                    <div className="trip-info-text">Hello</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="createtrip-user-infor">
              <button className="createtrip-back-btn" onClick={handleBack}>
                Back
              </button>
              <button className="createtrip-accept-btn">
                Accept
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

export default CreateTrip4;
