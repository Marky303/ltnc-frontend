import React, { useContext, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Typography from '@mui/material/Typography';

import "../../pagestyles/Dashboard/cashflow.css";

const chartSetting = {
  yAxis: [
    {
      label: 'Cash Flow',
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    rev: 15,
    exp: 5,
    day: 'Mon',
  },
  {
    rev: 16,
    exp: 2,
    day: 'Tue',
  },
  {
    rev: 18,
    exp: 1,
    day: 'Wed',
  },
  {
    rev: 17,
    exp: 1,
    day: 'Thu',
  },
  {
    rev: 17,
    exp: 1,
    day: 'Fri',
  },
  {
    rev: 18,
    exp: 2,
    day: 'Sat',
  },
  {
    rev: 17,
    exp: 1,
    day: 'Sun',
  },
];

const valueFormatter = (value) => `${value}`;

const Cashflow = () => {
  return (
    <div className="cashflow-wrapper">
      <div className="cashflow-header">
        Cash flow
      </div>

      <div className="cashflow-chart">
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
      series={[
        { dataKey: 'rev', label: 'Revenue', valueFormatter },
        { dataKey: 'exp', label: 'Expenses', valueFormatter },
      ]}
    />
    </div>
    </div>
  );
};

export default Cashflow;
