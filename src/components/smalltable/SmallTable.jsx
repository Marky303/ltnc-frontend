import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";

import "../../pagestyles/smalltable.css";

const SmallTable = (props) => {
  let data = props.data;

  return (
    <div className="smalltable-content">
      <div className="smalltable-header">
        <div className="column-header">Name</div>
        <div className="column-header">Tel</div>
        <div className="column-header">Rating</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="smalltable-body">
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
        <button className="smalltable-entry">
          <div className="smalltable-entry-field">Mark</div>
          <div className="smalltable-entry-field">123456</div>
          <div className="smalltable-entry-field">42</div>
        </button>
      </div>
    </div>
  );
};

export default SmallTable;
