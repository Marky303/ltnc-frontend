import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

import "../../assets/css/home-login.css";

const Signup = () => {
  // Private link
  let { authTokens } = useContext(AuthContext);

  // Getting signup function
  let { signupUser } = useContext(AuthContext);

  // Implement loading
  let { fetching } = useContext(AuthContext);

  // Useeffect to implement loading
  useEffect(() => {
    let element = document.getElementsByClassName("form-disabled");
    if (element.length > 0) {
      if (fetching) element[0].setAttribute("disabled", "disabled");
      else element[0].removeAttribute("disabled");
    }
  }, [fetching]);

  // Retain fields on failed request
  let handleSubmit = (e) => {
    e.preventDefault();
    signupUser(e);
  };

  // TODO implement private route
  return authTokens ? (
    <Navigate to="/" />
  ) : (
    <div id="body">
      <div class="login-section js-login-section">
        <div class="login-content">
          <div class="login-close">
            <Link to="/Home"><i class="login-close-btn js-login-close-btn fa-solid fa-xmark"></i></Link>
          </div>
          <div class="form-box-signup js-signup-box">
            <h2 class="header-form">Registration</h2>
            <div class="body-signup">
              <div class="user-infor">
                <div class="name-flex">
                  <i class="fa-solid fa-user"></i>
                  <label for="username-signup">Username</label>
                  <input type="text" id="username-signup" placeholder="Username" />
                </div>

                <div class="name-flex">
                  <i class="fa-solid fa-user"></i>
                  <label for="Fullname-signup">Fullname</label>
                  <input type="text" id="Fullname-signup" placeholder="Fullname" />
                </div>
              </div>

              <div class="user-infor">
                <div class="name-flex">
                  <i class="fa-solid fa-envelope"></i>
                  <label for="email-signup">Email</label>
                  <input type="email" id="email-signup" placeholder="Email" />
                </div>

                <div class="name-flex">
                  <i class="fa-solid fa-phone"></i>
                  <label for="phone_number-signup">Phone number</label>
                  <input type="number" id="phone_number-signup" placeholder="Phone number" />
                </div>
              </div>

              <i class="fa-solid fa-location-dot"></i>
              <label for="address-signup">Address</label>
              <input type="text" id="address" placeholder="Address" />

              <div class="vehical-type-form">
                <div class="vehical-type">
                  <div>
                    <label for="vehicle1"> Truck</label>
                    <input type="radio" id="vehicle1" name="vehicle" value="Truck" />
                  </div>

                  <div>
                    <label for="vehicle2"> Coach</label>
                    <input type="radio" id="vehicle2" name="vehicle" value="Coach" />
                  </div>

                  <div>
                    <label for="vehicle3"> Container</label>
                    <input type="radio" id="vehicle3" name="vehicle" value="Container" />
                  </div>
                </div>

                <div class="vehical-name">
                  <i class="fa-solid fa-car"></i>
                  <label for="vehical_name-signup">Vehical name</label>
                  <input type="text" id="vehical_name-signup" placeholder="Vehical Name" />
                </div>
              </div>

              <i class="fa-solid fa-lock"></i>
              <label for="password-signup">Password</label>
              <input type="password" id="password-signup" placeholder="Password" />

              <i class="fa-solid fa-lock"></i>
              <label for="repassword-signup">Nhập lại password</label>
              <input type="password" id="repassword-signup" placeholder="Password" />

              <button class="accept-btn">
                Accept
              </button>
            </div>
            <div class="footer-form">
              <Link to="/Login"><button class="login js-login-btn">Login</button></Link>
              <Link to="/VerifyEmail"><button class="reset-password js-resetpass-btn">Reset password</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div class="content-section">
          <p class="text-title">Quản lí vận chuyển</p>
          <p class="text-title-next">Hàng đầu<br />thế giới</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
