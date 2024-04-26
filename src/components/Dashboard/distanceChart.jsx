import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

import "../../pagestyles/Dashboard/distanceChart.css"

const Data = [579, 321, 763, 438, 910, 526, 571];
const Labels = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

export default function Distancechart() {
  return (
    <div className="distance-chart">
        <Typography variant="h6" gutterBottom>
          Distance Driven
        </Typography>
            <LineChart
            series={[
            { data: Data, label: 'Kilometer' },
            ]}
            xAxis={[{ scaleType: 'point', data: Labels }]}
        />
    </div>
  );
}