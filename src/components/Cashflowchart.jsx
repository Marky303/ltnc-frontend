import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import Typography from '@mui/material/Typography';

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

export default function Cashflowchart() {
  return (
    <div style={{ height: '600px', width: 'calc(100% - 740px)', marginLeft: '70px', display: 'grid',
                  width: '1300px' }}>
      <Typography variant="h5" gutterBottom>
          Cash Flow
        </Typography>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
      series={[
        { dataKey: 'rev', label: 'Revenue', valueFormatter },
        { dataKey: 'exp', label: 'Expenses', valueFormatter },
      ]}
    />
    </div>
  );
}