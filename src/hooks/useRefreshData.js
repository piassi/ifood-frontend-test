import { useState, useEffect } from 'react';

export default function useRefreshData(refreshTime) {
  const [refreshData, setRefreshData] = useState(new Date().toISOString());

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshData(new Date().toISOString());
    }, refreshTime);
    return () => clearInterval(interval);
  }, [refreshTime]);

  return refreshData;
}
