import React from 'react';
import useHealth from '../context/useHealth';
import BPChartCard from './BPChart/BPChartCard';


const Dashboard = () => {
  const { loading } = useHealth();

  return (
    <div>
      {!loading &&
        // <PatientsCard />
        // <BPChart />
        <BPChartCard />
      }
    </div>
  );
};

export default Dashboard;
