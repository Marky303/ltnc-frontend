import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';

import '../pagestyles/Admindashboard.css';

import { Dashboardcard, Statistic, Cashflow } from '/src/components/Admincard';

import Cashflowchart from '../components/Cashflowchart';

const Admindashboard = (props) => {
  const activeStatistic = <Statistic label="Active" value="15" type="active" />;
  const holdStatistic = <Statistic label="Hold" value="15" type="hold" />;
  const cashflowComponent = <Cashflow revenue="20" expenses="4" />;

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px'}}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px', width: '37.55%'}}>
        <Dashboardcard 
          title="Driver count" 
          main="12 / 20" 
        />
        <Dashboardcard 
          title="Truck count" 
          main="420" 
        />
      </div>
        <Cashflowchart/>
      </div>  

      <div style={{ marginTop: '-450px'}}>
        <Dashboardcard title="Trip Statistics" 
          buttonLabel="+" 
          onButtonClick={() => {}}
          main="">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px', marginLeft: '30px'}}>
          {activeStatistic}
          {holdStatistic}
        </div>
        </Dashboardcard>
      
        <Dashboardcard title="Cash" main="">
          {cashflowComponent}
        </Dashboardcard>

      </div>
      </div>
    </>
  );
};

export default Admindashboard;