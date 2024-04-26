import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import "../../pagestyles/bigtable.css";

const BigTableVehicle = ({ data, tripInfo }) => {
  // Get navigate function
  const navigate = useNavigate();

  return (
    <div className="bigtable-content">
      <div className="bigtable-header-vehicle">
        <div className="fillerdiv"></div>
        <div className="column-header">Type</div>
        <div className="column-header">Liscence Plate</div>
        <div className="column-header">Params</div>
        <div className="column-header">Volume</div>
        <div className="column-header">Fuel</div>
        <div className="column-header">Maint.</div>
        <div className="column-header">Status</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="bigtable-body">
        <button
          className="bigtable-entryvehicle"
          id="69420"
          onClick={() => {
            handleNext(69420);
          }}
        >
          <div className="fillerdiv"></div>
          <div className="bigtable-entry-field">Coach</div>
          <div className="bigtable-entry-field">77F1-65757</div>
          <div className="bigtable-entry-field">42</div>
          <div className="bigtable-entry-field">23%</div>
          <div className="bigtable-entry-field">23%</div>
          <div className="bigtable-entry-field">1000/5000</div>
          <div className="bigtable-entry-field">Active</div>
        </button>
        
      </div>
    </div>
  );
};

export default BigTableVehicle;
