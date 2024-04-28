import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useParams, useNavigate } from "react-router-dom";

import AuthContext from "../../context/UserauthContext";
import ManagerContext from "../../context/ManagerContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

const VehicleAdd = () => {
  let navigate = useNavigate();
  let { authTokens, userInfo } = useContext(AuthContext);
  let { addVehicle } = useContext(ManagerContext);

  // Handle adding vehicle
  let handleSubmit = (e) => {
    e.preventDefault();
    addVehicle(e);
  };

  return (
    <div className="profile-content-wrapper">
      <img className="viewprofile-bg" src={background}></img>
      {authTokens ? (
        userInfo.admin ? (
          <div className="profile-content">
            <div className="form-box-signup js-signup-box">
              <h2 className="header-form">Add new vehicle</h2>
              <form
                action=""
                method=""
                className="body-signup"
                onSubmit={(e) => handleSubmit(e)}
              >
                <fieldset className="form-disabled">
                  <i class="fa-solid fa-circle-info"></i>
                  <label for="address">License plate</label>
                  <input
                    type="text"
                    id="licensePlate"
                    name="licensePlate"
                    placeholder="Vehicle's license plate..."
                  />
                  <div className="user-infor">
                    <div className="name-flex">
                      <i class="fa-solid fa-truck"></i>
                      <label for="username">Type</label>
                      <select className="vehicle-select" id="type" name="type">
                        <option name="coach" value="coach" checked>
                          Coach
                        </option>
                        <option name="container" value="container">
                          Container
                        </option>
                        <option name="truck" value="truck">
                          Truck
                        </option>
                      </select>
                    </div>

                    <div className="name-flex">
                      <i class="fa-solid fa-gas-pump"></i>
                      <label for="username">Fuel</label>
                      <select className="vehicle-select" id="fuel" name="fuel">
                        <option name="xăng" value="xăng">
                          Xăng
                        </option>
                        <option name="dầu" value="dầu">
                          Dầu
                        </option>
                        <option name="điện" value="điện">
                          Điện
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="user-infor">
                    <div className="name-flex">
                      <i class="fa-solid fa-ruler"></i>
                      <label for="email">Size</label>
                      <input
                        type="text"
                        id="size"
                        name="size"
                        placeholder="Vehicle's height*width*length,..."
                      />
                    </div>

                    <div className="name-flex">
                      <i class="fa-solid fa-weight-hanging"></i>
                      <label for="phone_number">Weight</label>
                      <input
                        type="text"
                        id="weight"
                        name="weight"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <button type="submit" className="accept-btn">
                    Accept
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        ) : (
          <Navigate to="/" />
        )
      ) : (
        <Navigate to="/home" />
      )}
    </div>
  );
};

export default VehicleAdd;
