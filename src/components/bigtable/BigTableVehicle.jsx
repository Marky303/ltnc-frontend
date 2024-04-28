import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";

import "../../pagestyles/bigtable.css";

import ManagerContext from "../../context/ManagerContext";
import NotifyContext from "../../context/NotifyContext";

const BigTableVehicle = ({ data, tripInfo }) => {
  const navigate = useNavigate();
  let { vehicleList, getVehicle, delVehicle, maintVehicle, maintDoneVehicle } =
    useContext(ManagerContext);
  let { notify } = useContext(NotifyContext);

  useEffect(() => {
    getVehicle();
  }, []);

  useEffect(() => {}, [vehicleList]);

  let handleEdit = (id) => {
    navigate("/vehicles/edit/" + id);
  };

  let handleAdd = () => {
    navigate("/vehicles/add");
  };

  let handleDel = (id) => {
    let foo = prompt('Type "accept" to delete the vehicle');
    if (foo=="accept")
      delVehicle(id);
    else 
      notify("warning", "Wrong input")
  };

  let handleMaint = (id, kmMaint) => {
    maintVehicle(id, kmMaint);
  };

  let handleMaintDone = (id) => {
    let cost = prompt("Please enter maintenance cost: ");
    maintDoneVehicle(id, cost);
  };

  let handleCheckMaint = (id) => {
    let i = 0
    for (i; i < vehicleList.length; i++) {
      if (vehicleList[i]._id == id) break;
    }
    navigate("/vehicles/" + i);
  };

  const formatter = new Intl.NumberFormat('de-DE');

  return (
    <div className="bigtable-content">
      <div className="bigtable-header-vehicle">
        <div className="fillerdiv"></div>
        <div className="column-header">Type</div>
        <div className="column-header">Liscence Plate</div>
        <div className="column-header">Size</div>
        <div className="column-header">Weight</div>
        <div className="column-header">Fuel</div>
        <div className="column-header">Maint.</div>
        <div className="column-header">Status</div>
        <div className="fillerdiv"></div>
      </div>
      <div className="bigtable-body">
        <button
          className="bigtable-entryvehicle-addnew"
          id="69420"
          onClick={() => {
            handleAdd();
          }}
        >
          <div className="add-vehicle-text">Add new vehicle</div>
        </button>

        {vehicleList.length != 0 ? (
          vehicleList.map((vehicle) => (
            <Popup
              trigger={
                <button className="bigtable-entryvehicle" id={vehicle._id}>
                  <div className="fillerdiv"></div>
                  <div className="bigtable-entry-field">{vehicle.type}</div>
                  <div className="bigtable-entry-field">
                    {vehicle.licensePlate}
                  </div>
                  <div className="bigtable-entry-field">{vehicle.size}{" "}(m*m)</div>
                  <div className="bigtable-entry-field">{formatter.format(vehicle.weight)}{" "}(ton)</div>
                  <div className="bigtable-entry-field">{vehicle.fuel}</div>
                  <div className="bigtable-entry-field">
                    {vehicle.kmTraveled}/{vehicle.kmMaintenance}{" "}(km)
                  </div>
                  <div className="bigtable-entry-field">{vehicle.status}</div>
                </button>
              }
              position="top center"
            >
              {vehicle.status == "maintenance" ? (
                <div className="vehicle-popup">
                  <button
                    className="del-vehicle-btn"
                    onClick={() => handleDel(vehicle._id)}
                  >
                    <i class="fa-solid fa-x"></i>
                  </button>
                  <button
                    className="maint-vehicle-btn"
                    onClick={() => handleMaintDone(vehicle._id)}
                  >
                    <i class="fa-solid fa-circle-check"></i>
                  </button>
                  <button
                    className="maint-vehicle-btn"
                    onClick={() => handleCheckMaint(vehicle._id)}
                  >
                    <i class="fa-solid fa-clipboard-list"></i>
                  </button>
                  <button
                    className="edit-vehicle-btn"
                    onClick={() => handleEdit(vehicle._id)}
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              ) : vehicle.kmTraveled >= vehicle.kmMaintenance &&
                vehicle.status == "inactive" ? (
                <div className="vehicle-popup">
                  <button
                    className="del-vehicle-btn"
                    onClick={() => handleDel(vehicle._id)}
                  >
                    <i class="fa-solid fa-x"></i>
                  </button>
                  <button
                    className="maint-vehicle-btn"
                    onClick={() =>
                      handleMaint(vehicle._id, vehicle.kmMaintenance)
                    }
                  >
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                  </button>
                  <button
                    className="maint-vehicle-btn"
                    onClick={() => handleCheckMaint(vehicle._id)}
                  >
                    <i class="fa-solid fa-clipboard-list"></i>
                  </button>
                  <button
                    className="edit-vehicle-btn"
                    onClick={() => handleEdit(vehicle._id)}
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              ) : (
                <div className="vehicle-popup-2btn">
                  <button
                    className="del-vehicle-btn"
                    onClick={() => handleDel(vehicle._id)}
                  >
                    <i class="fa-solid fa-x"></i>
                  </button>
                  <button
                    className="maint-vehicle-btn"
                    onClick={() => handleCheckMaint(vehicle._id)}
                  >
                    <i class="fa-solid fa-clipboard-list"></i>
                  </button>
                  <button
                    className="edit-vehicle-btn"
                    onClick={() => handleEdit(vehicle._id)}
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              )}
            </Popup>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default BigTableVehicle;
