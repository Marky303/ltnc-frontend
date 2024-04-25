import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Typography from '@mui/material/Typography';

const chartSetting = {
  yAxis: [
    {
      label: 'Shipment Statistic',
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
    ontime: 15,
    offtime: 5,
    cancelled: 0,
    week: 'Week 1',
  },
  {
    ontime: 16,
    offtime: 2,
    cancelled: 1,
    week: 'Week 2',
  },
  {
    ontime: 18,
    offtime: 1,
    cancelled: 1,
    week: 'Week 3',
  },
  {
    ontime: 17,
    offtime: 1,
    cancelled: 1,
    week: 'Week 4',
  },
];

const valueFormatter = (value) => `${value}`;

export default function Tripschart() {
  return (
    <div style={{ height: '600px', width: 'calc(100% - 740px)', marginTop: '40px', display: 'grid' }}>
      <Typography variant="h5" gutterBottom>
          Performance
        </Typography>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'week' }]}
      series={[
        { dataKey: 'ontime', label: 'On-time Delivery', valueFormatter },
        { dataKey: 'offtime', label: 'Off-time Delivery', valueFormatter },
        { dataKey: 'cancelled', label: 'Cancelled', valueFormatter },
      ]}
    />
    </div>
  );
}
