import React, { useContext, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// Import notify function
import NotifyContext from "../context/NotifyContext";

// Importing toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  // Get notification from NotifyContext
  let { notification } = useContext(NotifyContext);

  // Display when theres a notification
  useEffect(() => {
    // Note that no parenthesis is used here
    notification;
  }, [notification]);

  return (
    <div>
      <div>This is the navbar</div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
