import React, { useContext, useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import '../pagestyles/Navbar.css';
import logoImage from "../assets/logo.png";


// Import notify function
import NotifyContext from "../context/NotifyContext";

// Importing toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  // Get notification from NotifyContext
  const navigate = useNavigate();
  let { notification } = useContext(NotifyContext);

  const location = useLocation();

  const checkActive = (path) => {
    return location.pathname === path ? 'navbar-button active' : 'navbar-button';
  };

  // Display when theres a notification
  useEffect(() => {
    // Note that no parenthesis is used here
    notification;
  }, [notification]);

  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleLogout = () => {
    // Logic for logging out goes here
    console.log('Logging out...');
  };

  return (
    <nav className="navbar">
      <img src={logoImage} alt="Page Logo" className="navbar-logo" />
      <span className="navbar-page-name">App Name</span>
      <button className="navbar-button" onClick={() => navigate('/Dashboard')}>Dashboard</button>
      <button className="navbar-button">Profile</button>
      <button className="navbar-button">History</button>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
        className="navbar-search"
      />
      <button className="navbar-button" onClick={handleLogout}>Logout</button>

    </nav>
  );
};

export default Navbar;
