import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HealthContext from './HealthContext';

export const HealthContextProvider = ({ children }) => {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem('healthData');
    if (cached) {
      setHealthData(JSON.parse(cached));
      setLoading(false);
    }

    const fetchHealthData = async () => {
      try {
        const res = await axios.get('/api/auth');
        setHealthData(res.data);
        localStorage.setItem('healthData', JSON.stringify(res.data));
      } catch (error) {
        console.error('Error fetching health data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthData();
  }, []);

  return (
    <HealthContext.Provider value={{ healthData, loading }}>
      {children}
    </HealthContext.Provider>
  );
};
