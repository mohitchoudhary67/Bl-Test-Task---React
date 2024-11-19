import React from 'react';
import './RegionalStats.css';

const RegionalStats = ({ regions }) => {
  return (
    <div className="regional-stats">
      <h2>Regional Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Total Cases</th>
            <th>Discharged</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((region, index) => (
            <tr key={index}>
              <td>{region.loc}</td>
              <td>{region.totalConfirmed}</td>
              <td>{region.discharged}</td>
              <td>{region.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegionalStats;
