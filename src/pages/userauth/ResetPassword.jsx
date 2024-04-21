import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

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
      <div className="userauth-page-wrapper">
          <div className="resetpassword-form-cont">
            <p className="resetpassword-form-prompt">Reset Password</p>
            <hr className="resetpassword-form-line"></hr>
            <form className="resetpassword-form" onSubmit={(e) => handleSubmit(e)}>
              <fieldset className="form-disabled">
                <p className="form-spec">Email</p>
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <button className="resetpassword-submit-btn" type="submit">
                  Get email
                </button>
                <div className="resetpassword-redirect-cont">
                  <Link to="/login" className="resetpassword-redirect">
                    Login
                  </Link>
                  <span className="or-redirect-text">|</span>
                  <Link to="/signup" className="resetpassword-redirect">
                    Sign up
                  </Link>
                </div>
              </fieldset>
            </form>
          </div>
      </div>
    );
  };
  
  export default ResetPassword;