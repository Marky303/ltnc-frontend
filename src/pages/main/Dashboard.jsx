import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";

const Dashboard = () => {
  // Implement if authorized
  let { currentUser } = useContext(AuthContext);

  return currentUser ? (<div>This is the dashboard page</div>) : (<Navigate to="/login" />);
};

export default Dashboard;
