import React, { useContext, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

const NavbarDriver = () => {
  // Getting logout function
  let { logoutUser } = useContext(AuthContext);

  return (
    <div id="header">
      <Link to="/Home">
        <img src="/src/assets/img/logo/logo-home.jpg" alt="logo" />
      </Link>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/">
            <i class="home-icon fa-solid fa-house"></i>
            Dashboard
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/history">
            <i class="fa-regular fa-calendar-days"></i>
            History
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/profile">
            <i class="fa-solid fa-user"></i>
            Profile
          </Link>
        </li>
      </ul>
      <div class="login">
        <button
          type="button"
          class="login-btn js-login-btn"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarDriver;
