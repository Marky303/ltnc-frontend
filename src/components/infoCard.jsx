import React, { useContext, useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import '../pagestyles/infoCard.css';

const Infocard = () => {


return (
<div class="info-card">
    <div class="trip-card">
        <h3>Trip Information</h3>
        <p>Trip ID: 0001</p>
        <p>Client: Ltd. Shopee Express</p>
        <p>Pickup Location: HCM MEGA SOC</p>
        <p>Destination: Ba Ria-Vung Tau Post Office</p>
        <p>Est. Arrival Time: 10 Hours</p>
        <p>Distance: 97 km</p>
    </div>


    <div class="vehicle-card">
        <h3>Vehicle Information</h3>
          <p>Driver: Nguyen Van A</p>
          <p>Registration Number: APAC-567</p>
          <p>Type: Truck</p>
          <p>Capacity: 4.5 tons</p>
          <p>Fuel: Gas</p>
          <p>Fuel Capacity: 946 liters</p>
    </div>
</div>
);
};

export default Infocard;