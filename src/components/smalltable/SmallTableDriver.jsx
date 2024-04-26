import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import "../../pagestyles/smalltable.css";

const SmallTable = ({data, tripInfo}) => {
  // Get navigate function
  const navigate = useNavigate();

  

  let handleNext = (driverid) => {
    console.log(data);
    console.log(tripInfo)

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
        tripInfo.expense +
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
      <div className="smalltable-header">
        <div className="column-header">Name</div>
        <div className="column-header">Tel</div>
        <div className="column-header">Rating</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="smalltable-body">
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>

        <button className="smalltable-entry" id="69420">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
      </div>
    </div>
  );
};

export default SmallTable;
