import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import "../../pagestyles/bigtable.css";

import DriverContext from "../../context/DriverContext";

const BigTableTripDriver = () => {
  // Get navigate function
  const navigate = useNavigate();
  let { getHistory, history } = useContext(DriverContext);

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
        <div className="column-header">Arrival</div>
        <div className="column-header">Actual arrival</div>
        <div className="column-header">Vehicle</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="bigtable-body">
        {history.length != 0 ? (
          history.map((trip) => (
            <button className="bigtable-entry-trip" id="69420">
              <div className="bigtable-entry-field">title</div>
              <div className="bigtable-entry-field">start</div>
              <div className="bigtable-entry-field">HANOI</div>
              <div className="bigtable-entry-field">Depart</div>
              <div className="bigtable-entry-field">End</div>
              <div className="bigtable-entry-field">Actual</div>
              <div className="bigtable-entry-field">car</div>
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
