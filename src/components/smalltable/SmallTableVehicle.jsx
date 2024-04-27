import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import ManagerContext from "../../context/ManagerContext";

import "../../pagestyles/smalltable.css";

const SmallTable = ({ tripInfo }) => {
  const navigate = useNavigate();
  let { listCar } = useContext(ManagerContext);

  let handleNext = (vehicleid) => {
    navigate(
      "/createtrip4/" +
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
        tripInfo.driverid +
        "/" +
        vehicleid
    );
  };

  return (
    <div className="smalltable-content">
      <div className="smalltable-header">
        <div className="column-header">Liscence Plate</div>
        <div className="column-header">Size</div>
        <div className="column-header">Weight</div>
        <div className="column-header">Maint.</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="smalltable-body">
        {listCar ? (
          listCar.map((car) => (
            <button
              className="smalltable-entry"
              id={car._id}
              onClick={() => {
                handleNext(car._id);
              }}
            >
              <div className="smalltable-entry-field">{car.licensePlate}</div>
              <div className="smalltable-entry-field">{car.size}</div>
              <div className="smalltable-entry-field">{car.weight}</div>
              <div className="smalltable-entry-field">{Math.round((1 - car.kmTraveled/car.kmMaintenance)*100)}%</div>
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
