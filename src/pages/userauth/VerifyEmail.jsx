import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

import "../../assets/css/home-login.css";

const VerifyEmail = () => {
  // Private link
  let { authTokens } = useContext(AuthContext);

  // Get function from context
  let { verifyEmail } = useContext(AuthContext);

  // Get fetching
  let { fetching } = useContext(AuthContext);

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
    verifyEmail(e);
  };

  return authTokens ? (
    <Navigate to="/" />
  ) : (
    <div id="body">
      <div class="login-section js-login-section">
        <div class="login-content">
          <div class="login-close">
            <Link to="/Home"><i class="login-close-btn js-login-close-btn fa-solid fa-xmark"></i></Link>
          </div>

          <div class="form-box-verify js-verify-box">
            <h2 class="header-form">Verify email</h2>
            <div class="body-form body-verify">
              <i class="fa-solid fa-envelope"></i>
              <label for="email-verify">Emter your email address and we will send you a link to reset your
                password and <span>Please,check your email</span></label>
              <input type="email" id="email-verify" placeholder="Email" />
              <Link to="/ResetPassword">
                <button class="accept-btn js-verify-btn">
                  Verify Email
                </button>
              </Link>
            </div>
            <div class="footer-form footer-verify">
              <Link to="/Login"><button class="login js-login-btn">Login</button></Link>
              <Link to="/Signup"><button class="signup js-signup-btn">Sign up</button></Link>
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

export default VerifyEmail;