import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

const Login = () => {
  // Implement if authorized
  let { currentUser } = useContext(AuthContext);

  // Getting signup function
  let { loginUser } = useContext(AuthContext);

  // Implement loading
  let { fetching } = useContext(AuthContext);

  useEffect(() => {
    let element = document.getElementsByClassName("form-disabled");
    if (fetching) element[0].setAttribute("disabled", "disabled");
    else element[0].removeAttribute("disabled");
  }, [fetching]);

  // Retain fields on failed request
  let handleSubmit = (e) => {
    e.preventDefault();
    loginUser(e);
  };

  return currentUser ? (
    <Navigate to="/" />
  ) : (
    <div className="userauth-page-wrapper">
      <div className="login-form-cont">
        <p className="login-form-prompt">Login</p>
        <hr className="login-form-line"></hr>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <fieldset className="form-disabled">
            <p className="form-spec">Email</p>
            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <p className="form-spec">Password</p>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <button className="login-submit-btn" type="submit">
              Login
            </button>
            <div className="login-redirect-cont">
              <Link to="/signup" className="login-redirect">
                Sign up
              </Link>
              <span className="or-redirect-text">|</span>
              <Link to="/resetpassword" className="login-redirect">
                Reset password
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
