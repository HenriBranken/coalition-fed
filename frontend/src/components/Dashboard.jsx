import React from 'react';
import useHealth from '../context/useHealth';
import PatientsCard from './Patients/PatientsCard';


const Dashboard = () => {
  const { loading } = useHealth();

  return (
    <div>
      {!loading &&
        <PatientsCard />
      }
    </div>
  );
};

export default Dashboard;
