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
      <div className="login-section js-login-section">
        <div className="login-content">
          <div className="login-close">
            <Link to="/Home"><i className="login-close-btn js-login-close-btn fa-solid fa-xmark"></i></Link>
          </div>
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Registration</h2>
            <form action="" method="" className="body-signup" onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="form-disabled">
              <div className="user-infor">
                <div className="name-flex">
                  <i className="fa-solid fa-user"></i>
                  <label for="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="Username"/>
                </div>

                <div className="name-flex">
                  <i className="fa-solid fa-user"></i>
                  <label for="Fullname">Fullname</label>
                  <input type="text" id="Fullname" name="Fullname" placeholder="Fullname"/>
                </div>
              </div>

              <div className="user-infor">
                <div className="name-flex">
                  <i className="fa-solid fa-envelope"></i>
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email"/>
                </div>

                <div className="name-flex">
                  <i className="fa-solid fa-phone"></i>
                  <label for="phone_number">Phone number</label>
                  <input type="text" id="phone_number" name="phone_number" placeholder="Phone number"/>
                </div>
              </div>

              <i className="fa-solid fa-location-dot"></i>
              <label for="address">Address</label>
              <input type="text" id="address" name="address" placeholder="Address"/>

              <div className="vehical-type-form">
                <div className="vehical-type" >
                  <div>
                    <label for="vehicle1"> Truck</label>
                    <input type="checkbox" id="truck" name="vehicles" value="truck"/>
                  </div>

                  <div>
                    <label for="vehicle2"> Coach</label>
                    <input type="checkbox" id="coach" name="vehicles" value="coach"/>
                  </div>

                  <div>
                    <label for="vehicle3"> Container</label>
                    <input type="checkbox" id="container" name="vehicles" value="container"/>
                  </div>
                </div>
              </div>

              <i className="fa-solid fa-lock"></i>
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password"/>

              <i className="fa-solid fa-lock"></i>
              <label for="repassword">Nhập lại password</label>
              <input type="password" id="repassword" name="repassword" placeholder="Password"/>

              <button type="submit" className="accept-btn">
                Accept
              </button>
            </fieldset>
            </form>
            <div className="footer-form">
              <Link to="/Login"><button className="login js-login-btn">Login</button></Link>
              <Link to="/VerifyEmail"><button className="reset-password js-resetpass-btn">Reset password</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="content-section">
          <p className="text-title">Quản lí vận chuyển</p>
          <p className="text-title-next">Hàng đầu<br />thế giới</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
