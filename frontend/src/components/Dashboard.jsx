import React from 'react';
import useHealth from '../context/useHealth';

const Dashboard = () => {
  const { healthData, loading } = useHealth();

  return (
    <div>
      <h1>Welcome!</h1>
      {loading && <p>Busy loading...</p>}
      {healthData && <pre>{JSON.stringify(healthData, null, 2)}</pre>}
    </div>
  );
};

export default Dashboard;
