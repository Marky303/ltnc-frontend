import React, { useContext, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

// Import notify function
import NotifyContext from "../../context/NotifyContext";

// Importing toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Header-home.jsx
import Header_home from "./Header_home";

// Navbar states after login
import NavbarDriver from "./NavbarDriver";
import NavbarManager from "./NavbarManager";

const Navbar = () => {
  // Get notification from NotifyContext
  let { notification } = useContext(NotifyContext);

  // Implement if authorized
  let { authTokens } = useContext(AuthContext);

  // Driver/manager check
  let { userInfo } = useContext(AuthContext);

  // Display when theres a notification
  useEffect(() => {
    // Note that no parenthesis is used here
    notification;
  }, [notification]);

  return (
    <div>
      {authTokens ? (
        userInfo.admin ? (
          <NavbarManager />
        ) : (
          <NavbarDriver />
        )
      ) : (
        <Header_home />
      )}
      <ToastContainer />
    </div>
  );
};

export default Navbar;
