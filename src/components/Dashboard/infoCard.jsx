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

import DriverContext from "../../context/DriverContext";
import UserauthContext from "../../context/UserauthContext";

const Infocard = () => {
  // Get le stack
  const { switchStatus, getwaitingTrip, waitingTrip, cancelTrip, startTrip, finishTrip } =
    useContext(DriverContext);
  const { userInfo } = useContext(UserauthContext);

  // Initialize state to track the checkbox status
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    // Get the new checked status
    const checked = e.target.checked;

    // Update the state
    setIsChecked(checked);

    if (checked) {
      onCheckboxChecked();
    } else {
      onCheckboxUnchecked();
    }
  };

  // Load slider on page load
  useEffect(() => {
    if (userInfo.status === "available") {
      setIsChecked(true);
    } else setIsChecked(false);
  }, [userInfo]);

  // Function to trigger when checkbox is checked
  const onCheckboxChecked = () => {
    switchStatus(true);
  };

  // Function to trigger when checkbox is unchecked
  const onCheckboxUnchecked = () => {
    switchStatus(false);
  };

  // Load waiting trip on page load
  useEffect(() => {
    getwaitingTrip();
  }, []);

  useEffect(() => {}, [waitingTrip]);

  let handleCancel = () => {
    cancelTrip();
  };

  let handleStart = () => {
    startTrip();
  };

  let handleFinish = () => {
    finishTrip();
  }

  return waitingTrip ? (
    waitingTrip.trip.done == false ? (
      <div className="trip-card-inprogress">
        <div className="trip-title-pending">
          <button
            className="stop-trip-btn"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </button>
          <div className="trip-title-text">Trip in progress</div>
          <button
            className="accept-trip-btn"
            onClick={() => {
              handleFinish();
            }}
          >
            Finish
          </button>
        </div>
        <div className="trip-content">
          <div className="trip-info">
            <div className="trip-info-title">Info</div>
            <hr></hr>
            <div className="trip-info-text-wrapper">
              <div className="trip-info-text">
                <u>Desc</u>: {waitingTrip.trip.description}
              </div>
              <div className="trip-info-text">
                From {waitingTrip.trip.source} to {waitingTrip.trip.target}
              </div>
              <div className="trip-info-text">
                <u>Departure</u>: {Date(waitingTrip.trip.departureTime)}
              </div>
              <div className="trip-info-text">
                <u>Arrival</u>: {Date(waitingTrip.trip.expectedTimeCome)}
              </div>
              <div className="trip-info-text">
                <u>Route</u>: {waitingTrip.trip.route}
              </div>
            </div>
          </div>
          <div className="trip-vehicle">
            <div className="trip-vehicle-title">waitingTrip.car</div>
            <hr></hr>
            <div className="trip-vehicle-text-wrapper">
              <div className="trip-info-text">
                <u>License plt</u>: {waitingTrip.car.licensePlate}
              </div>
              <div className="trip-info-text">
                <u>Fuel</u>: {waitingTrip.car.fuel}
              </div>
              <div className="trip-info-text">
                <u>Size</u>: {waitingTrip.car.size}
              </div>
              <div className="trip-info-text">
                <u>Size</u>: {waitingTrip.car.weight}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="trip-card-pending">
        <div className="trip-title-pending">
          <button
            className="stop-trip-btn"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </button>
          <div className="trip-title-text">Pending trip</div>
          <button
            className="accept-trip-btn"
            onClick={() => {
              handleStart();
            }}
          >
            Accept
          </button>
        </div>
        <div className="trip-content">
          <div className="trip-info">
            <div className="trip-info-title">{waitingTrip.trip.title}</div>
            <hr></hr>
            <div className="trip-info-text-wrapper">
              <div className="trip-info-text">
                <u>Desc</u>: {waitingTrip.trip.description}
              </div>
              <div className="trip-info-text">
                From {waitingTrip.trip.source} to {waitingTrip.trip.target}
              </div>
              <div className="trip-info-text">
                <u>Departure</u>: {Date(waitingTrip.trip.departureTime)}
              </div>
              <div className="trip-info-text">
                <u>Arrival</u>: {Date(waitingTrip.trip.expectedTimeCome)}
              </div>
              <div className="trip-info-text">
                <u>Route</u>: {waitingTrip.trip.route}
              </div>
            </div>
          </div>
          <div className="trip-vehicle">
            <div className="trip-vehicle-title">{waitingTrip.car.type}</div>
            <hr></hr>
            <div className="trip-vehicle-text-wrapper">
              <div className="trip-info-text">
                <u>License plt</u>: {waitingTrip.car.licensePlate}
              </div>
              <div className="trip-info-text">
                <u>Fuel</u>: {waitingTrip.car.fuel}
              </div>
              <div className="trip-info-text">
                <u>Size</u>: {waitingTrip.car.size}
              </div>
              <div className="trip-info-text">
                <u>Size</u>: {waitingTrip.car.weight}
              </div>
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
        <div className="trip-title-text">
          {isChecked
            ? "You are receiving trips"
            : "You are NOT receiving trips"}
        </div>
      </div>
    </div>
  );
};

export default Infocard;
