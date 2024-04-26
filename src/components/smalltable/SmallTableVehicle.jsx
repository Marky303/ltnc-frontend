import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import "../../pagestyles/smalltable.css";

const SmallTable = ({data, tripInfo}) => {
  // Get navigate function
  const navigate = useNavigate();

  

  let handleNext = (vehicleid) => {
    console.log(data);
    console.log(tripInfo)

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
        tripInfo.expense +
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
      <div className="smalltable-header-vehicle">
      <div className="fillerdiv"></div>
        <div className="column-header">Type</div>
        <div className="column-header">Liscence Plate</div>
        <div className="column-header">Volume</div>
        <div className="column-header">Maint.</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="smalltable-body">
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>
        <button className="smalltable-entry" id="69420" onClick={() => {handleNext(69420)}}>
          <div className="smalltable-entry-field">Coach</div>
          <div className="smalltable-entry-field">77F1-65757</div>
          <div className="smalltable-entry-field">42</div>
          <div className="smalltable-entry-field">23%</div>
        </button>


        
      </div>
    </div>
  );
};

export default SmallTable;
