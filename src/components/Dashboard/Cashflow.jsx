import React, { useContext, useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import Typography from "@mui/material/Typography";

import "../../pagestyles/Dashboard/cashflow.css";

import ManagerContext from "../../context/ManagerContext";

const chartSetting = {
  yAxis: [
    {
      label: "Cash Flow",
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const dataset = [
  {
    rev: 15,
    exp: 5,
    day: "Mon",
  },
  {
    rev: 16,
    exp: 2,
    day: "Tue",
  },
  {
    rev: 18,
    exp: 1,
    day: "Wed",
  },
  {
    rev: 17,
    exp: 1,
    day: "Thu",
  },
  {
    rev: 17,
    exp: 1,
    day: "Fri",
  },
  {
    rev: 18,
    exp: 2,
    day: "Sat",
  },
  {
    rev: 17,
    exp: 1,
    day: "2024-04-26",
  },
];

const valueFormatter = (value) => `${value}`;

const Cashflow = () => {
  let { getallTrip } = useContext(ManagerContext);

  let [data, setdata] = useState([]);

  useEffect(() => {
    async function getHist() {
      // Get the current date and set it to the beginning of the day
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Midnight of the current day

      // Array to store the UNIX timestamp range and date for each day in the last 7 days
      const last7DaysDetails = [];

      // Helper function to format dates as "YYYY-MM-DD"
      const formatDate = (date) => date.toISOString().split("T")[0];

      // Loop through the last 7 days
      for (let i = 0; i < 7; i++) {
        const startOfDay = new Date(now);
        startOfDay.setDate(now.getDate() - i); // Go back 'i' days to get the start date

        const endOfDay = new Date(startOfDay);
        endOfDay.setHours(23, 59, 59, 999); // Set to the end of the day

        // Store the UNIX timestamp range and the formatted date
        last7DaysDetails.push({
          date: formatDate(startOfDay), // Get the formatted date (YYYY-MM-DD)
          startUnix: startOfDay.getTime(),
          endUnix: endOfDay.getTime(),
        });
      }

      // Reverse the array to get the dates in chronological order
      last7DaysDetails.reverse(); // From oldest to newest

      let allTrip = await getallTrip();

      for (let i = 0; i < 7; i++) {
        let revenue = 0;
        let expense = 0;
        for (let j = 0; j < allTrip.length; j++) {
          if (
            allTrip[j].timeCome >= last7DaysDetails[i].startUnix &&
            allTrip[j].timeCome <= last7DaysDetails[i].endUnix
          ) {
            revenue += Math.floor(Number(allTrip[j].revenue));
            expense += Math.floor(Number(allTrip[j].expense));
          }
        }

        let entry = {
          rev: revenue,
          exp: expense,
          day: last7DaysDetails[i].date,
        };

        data.push(entry);
      }

      console.log(data);
    }

    getHist();
  }, []);

  return (
    <div className="cashflow-wrapper">
      <div className="cashflow-header">Cash flow (kVND)</div>

      <div className="cashflow-chart">
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: "band", dataKey: "day" }]}
          series={[
            { dataKey: "rev", label: "Revenue", valueFormatter },
            { dataKey: "exp", label: "Expenses", valueFormatter },
          ]}
        />
      </div>
    </div>
  );
};

export default Cashflow;
