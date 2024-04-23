import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import Vehicletable from '../components/vehicleTable';

import '../pagestyles/Dashboard.css';

const Dashboard = (props) => (
    <>
       <Navbar />
        <div className="dashboard-content">
            <Outlet />
            <h1>Trip Information</h1>
            <Table />
            <h1>Vehicle Information</h1>
            <Vehicletable/>
        </div>
    </>

);

export default Dashboard;