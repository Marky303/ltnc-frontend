import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

// import css
import "../../assets/css/home-login.css";


const Login = () => {
  // Private link
  let { authTokens } = useContext(AuthContext);

  // Getting signup function
  let { loginUser } = useContext(AuthContext);

  // Implement loading
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
    loginUser(e);
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
          <div class="form-box-login js-login-box">
            <h2 class="header-form">Login</h2>
            <form action="" method="" class="body-form body-login">
              <i class="fa-solid fa-user"></i>
              <label for="username">Username</label>
              <input type="text" id="username" name="username"  placeholder="Username" required/>

              <i class="fa-solid fa-lock"></i>
              <label for="password">Password</label>
              <input type="password" id="password" name="password"  placeholder="Password" required/>

              <button type="submit" class="accept-btn">
                Accept
              </button>
            </form>
            <div class="footer-form footer-login">
              <Link to="/Signup"><button class="signup js-signup-btn">Sign up</button></Link>
              <Link to="/VerifyEmail"><button class="reset-password js-resetpass-btn">Reset Password</button></Link>
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

export default Login;
