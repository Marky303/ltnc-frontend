import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import "../../pagestyles/Dashboard/infoCard.css";

const Infocard = () => {
  return (
    <div className="trip-card">
      <div className="trip-title">
        <button className="stop-trip-btn">Stop</button>
        <div className="trip-title-text">Trip name example</div>
      </div>
      <div className="trip-content">
        <div className="trip-info">
          <div className="trip-info-title">Info</div>
          <hr></hr>
          <div className="trip-info-text-wrapper">
            <div className="trip-info-text">
              Helloasdasssssssssssssssssssssssssssssssssssssss
            </div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
          </div>
        </div>
        <div className="trip-vehicle">
          <div className="trip-vehicle-title">Vehicle</div>
          <hr></hr>
          <div className="trip-vehicle-text-wrapper">
            <div className="trip-info-text">
              Helloasdasssssssssssssssssssssssssssssssssssssss
            </div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
            <div className="trip-info-text">Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
