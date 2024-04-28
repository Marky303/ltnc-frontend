import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import "../../pagestyles/bigtable.css";

import DriverContext from "../../context/DriverContext";
import UserauthContext from "../../context/UserauthContext";

const BigTableTripDriver = () => {
  // Get navigate function
  const navigate = useNavigate();
  let { getHistory, history } = useContext(DriverContext);
  let { parseDate } = useContext(UserauthContext);

  useEffect(() => {
    getHistory();
  }, []);

  useEffect(() => {}, [history]);

  return (
    <div className="bigtable-content">
      <div className="bigtable-header-trip">
        <div className="column-header">Title</div>
        <div className="column-header">Start</div>
        <div className="column-header">End</div>
        <div className="column-header">Departure</div>
        <div className="column-header">Est Arrival</div>
        <div className="column-header">Actual Arrival</div>
        <div className="column-header">Vehicle</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="bigtable-body">
        {history.length != 0 ? (
          history.map((trip) => (
            <button className="bigtable-entry-trip" id="69420">
              <div className="bigtable-entry-field">{trip.title}</div>
              <div className="bigtable-entry-field">{trip.source}</div>
              <div className="bigtable-entry-field">{trip.target}</div>
              <div className="bigtable-entry-field">{parseDate(trip.departureTime)}</div>
              <div className="bigtable-entry-field">{parseDate(trip.expectedTimeCome)}</div>
              <div className="bigtable-entry-field">{parseDate(trip.timeCome)}</div>
              <div className="bigtable-entry-field">{trip.vehicle}</div>
            </button>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default BigTableTripDriver;
