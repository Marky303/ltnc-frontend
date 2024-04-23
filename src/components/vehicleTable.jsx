import React from 'react';
import '../pagestyles/vehicleTable.css';


const Vehicletable = () => {
    const rows = [
        {tripID: '', VehicleregistrationNumber: '' , Type: '', Capacity: '', Fuel: ''},
      ];
    
      const tableData = [
        {
          tripID: '0001',
          VehicleregistrationNumber: 'Susan-0175',
          Type: 'Truck',
          Capacity: '4.5 tons',
          Fuel: 'Gas',
        },
        {
          tripID: '0002',
          VehicleregistrationNumber: 'Tali-0205',
          Type: 'Coach',
          Capacity: '40 passengers',
          Fuel: 'Electricity',
        },
        {
          tripID: '0003',
          VehicleregistrationNumber: 'TF-0156',
          Type: 'Container',
          Capacity: '13 tons',
          Fuel: 'Oil',
        }
      ];
    
      return (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>TripID</th>
                <th>Vehicle Registration Number</th>
                <th>Type</th>
                <th>Capacity</th>
                <th>Fuel</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.tripID}</td>
                  <td>{row.VehicleregistrationNumber}</td>
                  <td>{row.Type}</td>
                  <td>{row.Capacity}</td>
                  <td>{row.Fuel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
  
  export default Vehicletable;