import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

import "../../assets/css/home-login.css";

const ResetPassword = () => {
  // Private link
  let { authTokens } = useContext(AuthContext);

  // Get function from context
  let { resetPassword } = useContext(AuthContext);

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
    resetPassword(e);
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
          <div class="form-box-resetpass js-resetpass-box">
            <h2 class="header-form">Reset Password</h2>
            <form action="" method="" class="body-form body-resetpass">

              <i class="fa-solid fa-lock"></i>
              <label for="password-resetpass">Password</label>
              <input type="password" id="password-resetpass" name="password-resetpass" placeholder="Password" required/>

              <i class="fa-solid fa-lock"></i>
              <label for="repassword-resetpass">Nhập lại password</label>
              <input type="password" id="repassword-resetpass" name="repassword-resetpass" placeholder="Password" required/>

              <Link to="/Login">
                <button type="submit" class="accept-btn js-accept-resetpass-btn">
                  Accept
                </button>
              </Link>
            </form>
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

export default ResetPassword;