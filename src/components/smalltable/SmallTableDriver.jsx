import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import ManagerContext from "../../context/ManagerContext";

import "../../pagestyles/smalltable.css";

const SmallTable = ({ tripInfo }) => {
  const navigate = useNavigate();
  let { listDriver } = useContext(ManagerContext);

  let handleNext = (driverid) => {
    navigate(
      "/createtrip3/" +
        tripInfo.title +
        "/" +
        tripInfo.desc +
        "/" +
        tripInfo.start +
        "/" +
        tripInfo.end +
        "/" +
        tripInfo.departdate +
        "/" +
        tripInfo.departtime +
        "/" +
        tripInfo.revenue +
        "/" +
        tripInfo.vehicle +
        "/" +
        driverid
    );
  };

  return (
    <div className="smalltable-content">
      <div className="smalltable-header-driver">
        <div className="column-header">Name</div>
        <div className="column-header">Tel</div>
        <div className="column-header">Rating</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="smalltable-body">
        {listDriver ? (
          listDriver.map((driver) => (
            <button
              className="smalltable-entry-driver"
              id={driver._id}
              onClick={() => {
                handleNext(driver._id);
              }}
            >
              <div className="smalltable-entry-field">{driver.fullName}</div>
              <div className="smalltable-entry-field">{driver.phoneNumber}</div>
              <div className="smalltable-entry-field">{driver.point}</div>
            </button>
          ))
        ) : (
          <div>No driver found</div>
        )}
      </div>
    </div>
  );
};

export default SmallTable;
