import React from "react";
import { Outlet, Link } from "react-router-dom";

// Importing styles
import "../pagestyles/home-login.css"

// Importing navbar
import Navbar from "../components/navbar/Navbar";

// Explaination: Chug your preferred layout of the webpage in this class below
// Eg: Currently it has Navbar (selfexplainatory) and Outlet tag which
// renders whatever it is rendering from nested routes
const Layout = (props) => (
  <>
    <div className="navbar-wrapper">
      <Navbar></Navbar>
    </div>

    <Outlet />
  </>
);

export default Layout;
