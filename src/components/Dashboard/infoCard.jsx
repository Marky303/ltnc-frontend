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
  // Initialize state to track the checkbox status
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    // Get the new checked status
    const checked = e.target.checked;

    // Update the state
    setIsChecked(checked);

    // Call the desired function based on the new state
    if (checked) {
      onCheckboxChecked(); // Function to be triggered when checked
    } else {
      onCheckboxUnchecked(); // Function to be triggered when unchecked
    }
  };

  // Function to trigger when checkbox is checked
  const onCheckboxChecked = () => {
    console.log("Checkbox is checked!");
    // Additional logic can be added here
  };

  // Function to trigger when checkbox is unchecked
  const onCheckboxUnchecked = () => {
    console.log("Checkbox is unchecked!");
    // Additional logic can be added here
  };

  return true ? (
    false ? (
      <div className="trip-card-inprogress">
        <div className="trip-title">
          <button className="stop-trip-btn">Stop</button>
          <div className="trip-title-text">Trip in progress</div>
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
    ) : (
      <div className="trip-card-pending">
        <div className="trip-title-pending">
          <button className="stop-trip-btn">Cancel</button>
          <div className="trip-title-text">Pending trip</div>
          <button className="accept-trip-btn">Accept</button>
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
    )
  ) : (
    <div className="trip-card">
      <div className="trip-title">
        <div className="slider-wrapper">
          <label className="switch">
            <input
              type="checkbox"
              checked={isChecked} // Bind the state to the checkbox
              onChange={handleCheckboxChange} // Handle change events
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="trip-title-text">{isChecked ? ("You are receiving trips") : ("You are NOT receiving trips")}</div>
      </div>
    </div>
  );
};

export default Infocard;
