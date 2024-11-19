import React from 'react';
import './Stats.css';

const Stats = ({ summary }) => {
  return (
    <div className="stats">
      <h2>India COVID-19 Summary</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Cases</h3>
          <p>{summary?.total || 'N/A'}</p>
        </div>
        <div className="stat-card">
          <h3>Confirmed (Indian)</h3>
          <p>{summary?.confirmedCasesIndian || 'N/A'}</p>
        </div>
        <div className="stat-card">
          <h3>Confirmed (Foreign)</h3>
          <p>{summary?.confirmedCasesForeign || 'N/A'}</p>
        </div>
        <div className="stat-card">
          <h3>Discharged</h3>
          <p>{summary?.discharged || 'N/A'}</p>
        </div>
        <div className="stat-card">
          <h3>Deaths</h3>
          <p>{summary?.deaths || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
