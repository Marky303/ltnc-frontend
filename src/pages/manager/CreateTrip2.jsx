import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreateTrip2 = () => {
  const { title, desc, departtime, start, end, expense } = useParams();

  
  
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

export default CreateTrip2;