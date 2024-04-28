import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import ManagerContext from "../../context/ManagerContext";
import UserauthContext from "../../context/UserauthContext";

import "../../pagestyles/smalltable.css";

const SmallTableMaint = ({ vehicle }) => {
  const navigate = useNavigate();
  let { parseDate } = useContext(UserauthContext);

  useEffect(() => {
    console.log(vehicle);
  }, []);

  const formatter = new Intl.NumberFormat('de-DE');

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
              <div className="smalltable-entry-field">{formatter.format(entry.cost+"000")}{" "}vnd</div>
              <div className="smalltable-entry-field">{parseDate(entry.time)}</div>
            </button>
          ))
        ) : (
          <div className="no-entry-found">No entry found</div>
        )}
      </div>
    </div>
  );
};

export default SmallTableMaint;
