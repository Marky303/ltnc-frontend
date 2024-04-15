import React, { useState, useEffect, useContext } from "react";

// Importing NotifyContext to get notify function
import NotifyContext from "../../context/NotifyContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pagenotfound = () => {
  // Get notify function
  let { notify } = useContext(NotifyContext);

  useEffect(() => {
    notify("warning", "Page not found");
  }, []);

  return (
    <div>
      <ToastContainer />
      <div>Error 404: page not found!</div>
    </div>
  );
};

export default pagenotfound;
