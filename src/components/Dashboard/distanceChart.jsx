import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { LineChart } from "@mui/x-charts/LineChart";
import Typography from "@mui/material/Typography";

import "../../pagestyles/Dashboard/distanceChart.css";

import DriverContext from "../../context/DriverContext";
import UserauthContext from "../../context/UserauthContext";

// Get x latest trips
const limit = 5;

export default function Distancechart() {
  let { parseDate } = useContext(UserauthContext);
  let { history, getHistory } = useContext(DriverContext);

  let [Data, setData] = useState([]);
  let [Labels, setLabels] = useState([]);

  useEffect(() => {
    async function getHist() {
      let history = await getHistory();
      if (history.length != 0 && history !== undefined) {
        let i = limit > history.length ? history.length : limit;
        for (i; i >= 0; i--) {
          if (history[i]) {
            Data.push(history[i].distance);
            Labels.push(history[i].title);
          } //
        }
      }
    }

    getHist();
  }, []);

  return (
    <div className="distance-chart">
      <Typography variant="h6" gutterBottom>
        Distance Driven {"("+(limit+1)} latest trips{")"}
      </Typography>
      <LineChart
        series={[{ data: Data, label: "Kilometer" }]}
        xAxis={[{ scaleType: "point", data: Labels }]}
      />
    </div>
  );
}
