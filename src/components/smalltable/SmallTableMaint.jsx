import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import ManagerContext from "../../context/ManagerContext";

import "../../pagestyles/smalltable.css";

const SmallTableMaint = ({ vehicle }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(vehicle);
  }, []);

  return (
    <div className="smalltable-content">
      <div className="smalltable-header-maint">
        <div className="column-header">Cost</div>
        <div className="column-header">Time</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="smalltable-body">
        {vehicle.maintenanceHistory.length != 0 ? (
          vehicle.maintenanceHistory.map((entry) => (
            <button
              className="smalltable-entry-maint"
              // id={driver._id}
            >
              <div className="smalltable-entry-field">{entry.cost}</div>
              <div className="smalltable-entry-field">{Date(entry.time)}</div>
            </button>
          ))
        ) : (
          <div>No entry found</div>
        )}
      </div>
    </div>
  );
};

export default SmallTableMaint;
