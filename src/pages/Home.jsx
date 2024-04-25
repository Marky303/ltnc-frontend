import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import '../pagestyles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-content">
    <h1>This is the homepage</h1>
    <p>Discover Our Services</p>
    <button onClick={() => navigate('./Dashboard')}>Go to Dashboard</button>
  </div>
  )
};

export default Home;
