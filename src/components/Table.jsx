import React from 'react';
import '../pagestyles/Table.css';

const Table = () => {
  const rows = [
    {tripID: '', route: '' , dispatchDate: '', dispatchTime: '', EAT: '', distance: '', status: '' },
  ];

  const tableData = [
    {
      tripID: '0001',
      route: 'Ho Chi Minh - Vung Tau',
      dispatchDate: '23/4/2024',
      dispatchTime: '7:00 AM',
      eat: '10 Hours',
      distance: '97 km',
      status: 'In Transit'
    },
    {
      tripID: '0002',
      route: 'Ha Noi - Thanh Hoa',
      dispatchDate: '23/5/2024',
      dispatchTime: '---',
      eat: '16 Hours',
      distance: '157.3 km',
      status: 'Ready'
    },
    {
      tripID: '0003',
      route: 'Hue - Da Nang',
      dispatchDate: '23/6/2024',
      dispatchTime: '---',
      eat: '11 Hours',
      distance: '106 km',
      status: 'Ready'
    }
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>TripID</th>
            <th>Route</th>
            <th>Dispatch date</th>
            <th>Dispatch time</th>
            <th>Est. Arrival time</th>
            <th>Distance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.tripID}</td>
              <td>{row.route}</td>
              <td>{row.dispatchDate}</td>
              <td>{row.dispatchTime}</td>
              <td>{row.eat}</td>
              <td>{row.distance}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
