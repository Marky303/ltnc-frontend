import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import Typography from "@mui/material/Typography";

import "../../pagestyles/Dashboard/tripsChart.css";

import DriverContext from "../../context/DriverContext";
import UserauthContext from "../../context/UserauthContext";

const chartSetting = {
  yAxis: [
    {
      label: "Shipment Statistic",
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const data = [
  {
    ontime: 15,
    offtime: 5,
    week: "Week 1",
  },
  {
    ontime: 16,
    offtime: 2,
    week: "Week 2",
  },
  {
    ontime: 18,
    offtime: 1,
    week: "Week 3",
  },
  {
    ontime: 17,
    offtime: 1,
    week: "Week 4",
  },
];

function getWeekRange(weeksAgo = 1) {
  const today = new Date(); // Current date
  const todayDayOfWeek = today.getDay(); // Day of the week (0 = Sunday, 1 = Monday, etc.)

  // Calculate the Sunday for the desired week
  const targetSunday = new Date(today);
  targetSunday.setDate(today.getDate() - todayDayOfWeek - 7 * weeksAgo);

  // Calculate the Saturday for the same week
  const targetSaturday = new Date(targetSunday);
  targetSaturday.setDate(targetSunday.getDate() + 6);

  return { start: targetSunday, end: targetSaturday };
}

// Limit number of weeks
let limit = 4;

const valueFormatter = (value) => `${value}`;

export default function Tripschart() {
  let [data, setData] = useState([]);

  let { parseDateOnly } = useContext(UserauthContext);
  let { getHistory } = useContext(DriverContext);

  useEffect(() => {
    async function getHist() {
      let history = await getHistory();
      for (let i = limit - 1; i >= 0; i--) {
        const range = getWeekRange(i);

        let unixStart = range.start.getTime();
        let unixEnd = range.end.getTime();

        let onCount = 0;
        let offCount = 0;

        for (let j = 0; j < history.length; j++) {
          if (
            (history[j].timeCome >= unixStart, history[j].timeCome <= unixEnd)
          ) {
            if (history[j].timeCome <= history[j].expectedTimeCome) {
              onCount++;
            } else {
              offCount++;
            }
          }
        }

        let entry = {
          week: parseDateOnly(range.start) + " to " + parseDateOnly(range.end),
          ontime: onCount,
          offtime: offCount,
        };
        data.push(entry);
      }
    }

    getHist();
  }, []);

  return (
    <div className="tripchart-wrapper">
      <Typography variant="h5" gutterBottom>
        Performance
      </Typography>
      <BarChart
        dataset={data}
        xAxis={[{ scaleType: "band", dataKey: "week" }]}
        series={[
          { dataKey: "ontime", label: "On-time Delivery", valueFormatter },
          { dataKey: "offtime", label: "Off-time Delivery", valueFormatter },
        ]}
      />
    </div>
  );
}
