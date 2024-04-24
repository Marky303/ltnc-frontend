import React, { useContext, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

//import css
import "../../pagestyles/home-login.css";

const Header_home = () => {
  return (
    <div id="header">
      <Link to="/Home">
        <img src="/src/assets/img/logo/logo-home.jpg" alt="logo" />
      </Link>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/Home">
            <i class="home-icon fa-solid fa-house"></i>
            Home
          </Link>
        </li>
        <li class="nav-item">
          <a href="#">About us</a>
        </li>
        <li class="nav-item">
          <a
            href="https://www.facebook.com/profile.php?id=100024503231046"
            target="_blank"
            rel="noopener"
          >
            Contact
          </a>
        </li>
      </ul>
      <div class="login">
        <Link to="/Login">
          <button type="button" class="login-btn js-login-btn">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header_home;
