import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link, useParams, useNavigate } from "react-router-dom";

import AuthContext from "../../context/UserauthContext";
import ManagerContext from "../../context/ManagerContext";

import background from "../../assets/img/background/userauthbg.webp";
import SmallTableMaint from "../../components/smalltable/SmallTableMaint";

const VehicleMaint = () => {
  let navigate = useNavigate();
  let { authTokens, userInfo } = useContext(AuthContext);
  let { vehicleList } = useContext(ManagerContext);

  const { id } = useParams();

  return (
    <div className="profile-content-wrapper">
      <img className="viewprofile-bg" src={background}></img>
      {authTokens ? (
        userInfo.admin ? (
          <div className="profile-content">
            <div className="form-box-signup js-signup-box">
              <h2 className="header-form">{vehicleList[id].licensePlate}</h2>

              <div className="table-wrapper">
                <SmallTableMaint vehicle={vehicleList[id]} />
              </div>
              <div className="user-infor">
                <button className="back-btn" onClick={() => {navigate("/vehicles")}}>Back</button>
              </div>
            </div>
          </div>
        ) : (
          <Navigate to="/" />
        )
      ) : (
        <Navigate to="/home" />
      )}
    </div>
  );
};

export default VehicleMaint;
