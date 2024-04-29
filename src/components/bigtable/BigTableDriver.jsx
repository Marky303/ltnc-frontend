import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import "../../pagestyles/bigtable.css";

import ManagerContext from "../../context/ManagerContext";

const BigTableDriver = ({ data, tripInfo }) => {
  const navigate = useNavigate();
  let { driverList, getDriver } = useContext(ManagerContext);

  useEffect(() => {
    getDriver();
  }, []);

  useEffect(() => {}, [driverList]);

  return (
    <div className="bigtable-content">
      <div className="bigtable-header-driver">
        <div className="column-header">Name</div>
        <div className="column-header">Tel</div>
        <div className="column-header">Email</div>
        <div className="column-header">Address</div>
        <div className="column-header">Driving License</div>
        <div className="column-header">Point</div>
        <div className="column-header">Status</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="bigtable-body">
        {driverList.length != 0 ? (
          driverList.map((driver) => (
            <button className="bigtable-entry-driver" id="69420">
              <div className="bigtable-entry-field">{driver.fullName}</div>
              <div className="bigtable-entry-field">{driver.phoneNumber}</div>
              <div className="bigtable-entry-field">{driver.email}</div>
              <div className="bigtable-entry-field">{driver.address}</div>
              <div className="bigtable-entry-field">{driver.drivingLicense.join(", ")}</div>
              <div className="bigtable-entry-field">{driver.point}</div>
              <div className="bigtable-entry-field">{driver.status}</div>
            </button>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default BigTableDriver;
