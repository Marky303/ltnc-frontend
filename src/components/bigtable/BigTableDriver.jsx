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
        <button className="bigtable-entry-driver" id="69420">
          <div className="bigtable-entry-field">Mark</div>
          <div className="bigtable-entry-field">123456</div>
          <div className="bigtable-entry-field">googogaga.emas</div>
          <div className="bigtable-entry-field">123 south side mf</div>
          <div className="bigtable-entry-field">42</div>
          <div className="bigtable-entry-field">42</div>
          <div className="bigtable-entry-field">42</div>
        </button>
      </div>
    </div>
  );
};

export default BigTableDriver;
