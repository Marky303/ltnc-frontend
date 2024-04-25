import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';

import '../pagestyles/Dashboard.css';
import Infocard from '../components/infoCard';
import Tripschart from '../components/tripsChart';
import Distancechart from '../components/distanceChart';

const Dashboard = (props) => (
    <>
       <Navbar />
        <div className="dashboard-content">
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Outlet />
            <Infocard/>
            <Tripschart/>
            </div>
        </div>
        <Distancechart/>
    </>

);

export default Dashboard;