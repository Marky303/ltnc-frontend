import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";

import "../../pagestyles/bigtable.css";

import ManagerContext from "../../context/ManagerContext";
import UserauthContext from "../../context/UserauthContext";

const BigTableTripManager = () => {
  // Get navigate function
  const navigate = useNavigate();
  let { parseDate } = useContext(UserauthContext);
  let { getTrip, tripList } = useContext(ManagerContext);

  useEffect(() => {
    getTrip();
  }, []);

  useEffect(() => {}, [tripList]);

  const formatter = new Intl.NumberFormat("de-DE");

  return (
    <div className="bigtable-content">
      <div className="bigtable-header-trip-manager">
        <div className="column-header">Title</div>
        <div className="column-header">Start</div>
        <div className="column-header">End</div>
        <div className="column-header">Departure</div>
        <div className="column-header">Est Arrival</div>
        <div className="column-header">Actual Arrival</div>
        <div className="column-header">Expense</div>
        <div className="column-header">Revenue</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="bigtable-body">
        {tripList.length != 0 ? (
          tripList.map((trip) => (
            <Popup
              trigger={
                <button className="bigtable-entry-trip-manager" id="69420">
                  <div className="bigtable-entry-field">{trip.title}</div>
                  <div className="bigtable-entry-field">{trip.source}</div>
                  <div className="bigtable-entry-field">{trip.target}</div>
                  <div className="bigtable-entry-field">
                    {parseDate(trip.departureTime)}
                  </div>
                  <div className="bigtable-entry-field">
                    {parseDate(trip.expectedTimeCome)}
                  </div>
                  <div className="bigtable-entry-field">
                    {parseDate(trip.timeCome)}
                  </div>
                  <div className="bigtable-entry-field">
                    {formatter.format(trip.expense + "000") + " "}vnd
                  </div>
                  <div className="bigtable-entry-field">
                    {formatter.format(trip.revenue + "000") + " "}vnd
                  </div>
                </button>
              }
              position="center right"
            >
              <div className="tripdriver-popup">
                <div className="tripdriver-text">
                  Driver name: {trip.driver.fullName}
                </div>
                <div className="tripdriver-text">
                  Point: {trip.driver.point}
                </div>
                <div className="tripdriver-text">
                  Tel: {trip.driver.phoneNumber}
                </div>
                <div className="tripdriver-text">
                  Email: {trip.driver.email}
                </div>
                <div className="tripdriver-text">
                  Driving License: {trip.driver.drivingLicense.join(", ")}
                </div>
              </div>
            </Popup>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default BigTableTripManager;
