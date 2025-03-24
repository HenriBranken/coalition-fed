import React from 'react';
import useHealth from '../context/useHealth';
import PatientList from './Patients/PatientList';

const Dashboard = () => {
  const { healthData, loading } = useHealth();

  return (
    <div>
      {!loading &&
        <PatientList />
      }      
      {/* <PatientTile key={0} name={patient.name} gender={patient.gender} age={patient.age} picUrl={patient.profile_picture} /> */}
      {healthData && <pre>{JSON.stringify(healthData, null, 2)}</pre>}
    </div>
  );
};

export default Dashboard;
