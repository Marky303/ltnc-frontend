import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

import "../assets/css/home-login.css"
import Header_home from "../components/Header_home";

const Home = () => {
  return (
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
