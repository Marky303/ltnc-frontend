import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

import "../../pagestyles/home-login.css";

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
            <form action="" method="" class="body-signup">
              <div class="user-infor">
                <div class="name-flex">
                  <i class="fa-solid fa-user"></i>
                  <label for="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="Username" required/>
                </div>

                <div class="name-flex">
                  <i class="fa-solid fa-user"></i>
                  <label for="Fullname">Fullname</label>
                  <input type="text" id="Fullname" name="Fullname" placeholder="Fullname" required/>
                </div>
              </div>

              <div class="user-infor">
                <div class="name-flex">
                  <i class="fa-solid fa-envelope"></i>
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email" required/>
                </div>

                <div class="name-flex">
                  <i class="fa-solid fa-phone"></i>
                  <label for="phone_number">Phone number</label>
                  <input type="text" id="phone_number" name="phone_number" placeholder="Phone number" required/>
                </div>
              </div>

              <i class="fa-solid fa-location-dot"></i>
              <label for="address">Address</label>
              <input type="text" id="address" name="address" placeholder="Address"required />

              <div class="vehical-type-form">
                <div class="vehical-type" >
                  <div>
                    <label for="vehicle1"> Truck</label>
                    <input type="radio" id="vehicle1" name="vehicle" value="Truck" required/>
                  </div>

                  <div>
                    <label for="vehicle2"> Coach</label>
                    <input type="radio" id="vehicle2" name="vehicle" value="Coach" required/>
                  </div>

                  <div>
                    <label for="vehicle3"> Container</label>
                    <input type="radio" id="vehicle3" name="vehicle" value="Container" required/>
                  </div>
                </div>
              </div>

              <i class="fa-solid fa-lock"></i>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" required/>

              <i class="fa-solid fa-lock"></i>
              <label for="repassword">Nhập lại password</label>
              <input type="password" id="repassword" name="repassword" placeholder="Password" required/>

              <button type="submit" class="accept-btn">
                Accept
              </button>
            </form>
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
