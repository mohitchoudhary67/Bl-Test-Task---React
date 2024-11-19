import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import RegionalStats from './components/RegionalStats';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Stats summary={data?.data?.summary} />
          <RegionalStats regions={data?.data?.regional} />
        </>
      )}
    </div>
  );
};

export default App;
