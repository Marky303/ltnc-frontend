import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

import "../pagestyles/home-login.css";

// Importing AuthContext
import AuthContext from "../context/UserauthContext";

const Home = () => {
  // Private link
  let { authTokens } = useContext(AuthContext);

  return authTokens ? (
    <Navigate to="/" />
  ) : (
    <div id="body">
      <div id="content">
        <div class="content-section">
          <p class="text-title">Quản lí vận chuyển</p>
          <p class="text-title-next">Hàng đầu<br />thế giới</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
