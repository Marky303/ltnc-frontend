import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing styles
import "../../pagestyles/profile.css";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

const Profile = () => {
  // Implement if authorized
  let { authTokens } = useContext(AuthContext);

  // Driver/manager check
  let { userInfo } = useContext(AuthContext);

  // Loading userinfo
  useEffect(() => {
    if (authTokens) {
      let element;
      const textFieldList = [
        "username",
        "fullName",
        "email",
        "phoneNumber",
        "address",
      ];
      for (let i of textFieldList) {
        element = document.getElementsByName(i)[0];
        element.setAttribute("value", userInfo[i]);
      }
      if (!userInfo.admin) {
        for (let i of userInfo.drivingLicense) {
          const checkbox = document.getElementsByClassName(i);
          checkbox[0].checked = true;
        }
      }
    }
  }, []);

  return (
    <div className="profile-content-wrapper">
      {authTokens ? (
        userInfo.admin ? (
          <div id="body-profile">
            <div className="profile-section js-login-section">
              <div className="login-content">
                <div className="form-box-signup js-signup-box">
                  <h2 className="header-form">Profile</h2>
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
                          <label for="username">Username</label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                          />
                        </div>

                        <div className="name-flex">
                          <i className="fa-solid fa-user"></i>
                          <label for="Fullname">Fullname</label>
                          <input
                            type="text"
                            id="Fullname"
                            name="fullName"
                            placeholder="Fullname"
                          />
                        </div>
                      </div>

                      <div className="user-infor">
                        <div className="name-flex">
                          <i className="fa-solid fa-envelope"></i>
                          <label for="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>

                        <div className="name-flex">
                          <i className="fa-solid fa-phone"></i>
                          <label for="phone_number">Phone number</label>
                          <input
                            type="text"
                            id="phone_number"
                            name="phoneNumber"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>

                      <i className="fa-solid fa-location-dot"></i>
                      <label for="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                      />

                      <button type="submit" className="accept-btn">
                        Accept
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="body-profile">
            <div className="profile-section js-login-section">
              <div className="login-content">
                <div className="form-box-signup js-signup-box">
                  <h2 className="header-form">Profile</h2>
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
                          <label for="username">Username</label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                          />
                        </div>

                        <div className="name-flex">
                          <i className="fa-solid fa-user"></i>
                          <label for="Fullname">Fullname</label>
                          <input
                            type="text"
                            id="Fullname"
                            name="fullName"
                            placeholder="Fullname"
                          />
                        </div>
                      </div>

                      <div className="user-infor">
                        <div className="name-flex">
                          <i className="fa-solid fa-envelope"></i>
                          <label for="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>

                        <div className="name-flex">
                          <i className="fa-solid fa-phone"></i>
                          <label for="phone_number">Phone number</label>
                          <input
                            type="text"
                            id="phone_number"
                            name="phoneNumber"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>

                      <i className="fa-solid fa-location-dot"></i>
                      <label for="address">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                      />

                      <div className="vehical-type-form">
                        <div className="vehical-type">
                          <div>
                            <label for="vehicle1"> Truck</label>
                            <input
                              type="checkbox"
                              id="truck"
                              name="vehicles"
                              value="truck"
                              className="truck"
                            />
                          </div>

                          <div>
                            <label for="vehicle2"> Coach</label>
                            <input
                              type="checkbox"
                              id="coach"
                              name="vehicles"
                              value="coach"
                              className="coach"
                            />
                          </div>

                          <div>
                            <label for="vehicle3"> Container</label>
                            <input
                              type="checkbox"
                              id="container"
                              name="vehicles"
                              value="container"
                              className="container"
                            />
                          </div>
                        </div>
                      </div>

                      <button type="submit" className="accept-btn">
                        Accept
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <Navigate to="/home" />
      )}
    </div>
  );
};

export default Profile;
