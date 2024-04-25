import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

// Importing style
import "../../pagestyles/createtrip1.css";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

// Importing NotifyContext to get notify function
import NotifyContext from "../../context/NotifyContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

const CreateTrip1 = () => {
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

  const tripInfo = {
    title: title,
    desc: desc,
    start: start,
    end: end,
    departdate: departdate,
    departtime: departtime,
    arrivaldate: arrivaldate,
    arrivaltime: arrivaltime,
    expense: expense,
    revenue: revenue,
    vehicle: vehicle,
  };

  const textFieldList = [
    "title",
    "desc",
    "start",
    "end",
    "departdate",
    "departtime",
    "arrivaldate",
    "arrivaltime",
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
    }
  }, []);

  // Programming warcrime
  let handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty field

    navigate(
      "/createtrip2/" +
        e.target.title.value +
        "/" +
        e.target.desc.value +
        "/" +
        e.target.start.value +
        "/" +
        e.target.end.value +
        "/" +
        e.target.departdate.value +
        "/" +
        e.target.departtime.value +
        "/" +
        e.target.arrivaldate.value +
        "/" +
        e.target.arrivaltime.value +
        "/" +
        e.target.expense.value +
        "/" +
        e.target.revenue.value +
        "/" +
        e.target.vehicle.value
    );
  };

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  return authTokens ? (
    userInfo.admin ? (
      <div className="createtrip1-content-wrapper">
        <img className="viewprofile-bg" src={background}></img>
        <div className="createtrip1-content">
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Create a trip (Step 1)</h2>
            <form
              action=""
              method=""
              className="body-signup"
              onSubmit={(e) => handleSubmit(e)}
            >
              <fieldset className="form-disabled">
                <div className="user-infor">
                  <div className="name-flex">
                    <i className="fa-solid fa-user"></i>
                    <label>Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title of your trip..."
                    />
                  </div>

                  <div className="name-flex">
                    <i className="fa-solid fa-user"></i>
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
                    <i className="fa-solid fa-envelope"></i>
                    <label>Start</label>
                    <input
                      type="email"
                      id="start"
                      name="start"
                      placeholder="Starting point..."
                    />
                  </div>

                  <div className="name-flex">
                    <i className="fa-solid fa-phone"></i>
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
                    <i className="fa-solid fa-envelope"></i>
                    <label>Departure date</label>
                    <input type="date" id="departdate" name="departdate" />
                  </div>

                  <div className="name-flex">
                    <i className="fa-solid fa-phone"></i>
                    <label>Departure time</label>
                    <input type="time" id="departtime" name="departtime" />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i className="fa-solid fa-envelope"></i>
                    <label>Arrival date</label>
                    <input type="date" id="arrivaldate" name="arrivaldate" />
                  </div>

                  <div className="name-flex">
                    <i className="fa-solid fa-phone"></i>
                    <label>Arrival time</label>
                    <input type="time" id="arrivaltime" name="arrivaltime" />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i className="fa-solid fa-user"></i>
                    <label for="username">Expense</label>
                    <input
                      type="text"
                      id="expense"
                      name="expense"
                      placeholder="Expense of your trip..."
                    />
                  </div>

                  <div className="name-flex">
                    <i className="fa-solid fa-user"></i>
                    <label for="Fullname">Revenue</label>
                    <input
                      type="text"
                      id="revenue"
                      name="revenue"
                      placeholder="Revenue to be made..."
                    />
                  </div>
                </div>

                <i className="fa-solid fa-location-dot"></i>
                <label for="address">Vehicle</label>
                <select className="vehicle-select" id="vehicle" name="vehicle">
                  <option name="coachid" value="Some vehicle">
                    Some vehicle
                  </option>
                  <option name="contid" value="Some other vehicle">
                    Some other vehicle
                  </option>
                  <option name="vanid" value="Some other other vehicle">
                    Some other van vehicle
                  </option>
                </select>

                <button type="submit" className="accept-btn">
                  Accept
                </button>
              </fieldset>
            </form>
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

export default CreateTrip1;
