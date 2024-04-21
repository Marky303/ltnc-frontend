import React, { useContext, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../context/UserauthContext";

// Import notify function
import NotifyContext from "../context/NotifyContext";

// Importing toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  // Get notification from NotifyContext
  let { notification } = useContext(NotifyContext);

  // Implement if authorized
  let { authTokens } = useContext(AuthContext);

  // Getting logout function
  let { logoutUser } = useContext(AuthContext);

  // Display when theres a notification
  useEffect(() => {
    // Note that no parenthesis is used here
    notification;
  }, [notification]);

  return (
    <div>
      <div>This is the navbar</div>
      {authTokens ? (
        <button className="logout-btn" onClick={logoutUser}>Logout</button>
      ) : (
        <Link to="login">
              <button className="login-btn">Login</button>
        </Link>
      )}
      <ToastContainer />
    </div>
  );
};

export default Navbar;
