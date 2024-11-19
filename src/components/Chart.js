import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Chart.css';

const Chart = ({ data }) => {
  const labels = ['Confirmed', 'Recovered', 'Deaths'];
  const values = [
    data?.TT?.total?.confirmed || 0,
    data?.TT?.total?.recovered || 0,
    data?.TT?.total?.deceased || 0,
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: 'COVID-19 Statistics',
        data: values,
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        borderColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <h2>COVID-19 Overview</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
