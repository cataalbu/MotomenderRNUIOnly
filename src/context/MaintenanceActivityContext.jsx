import React, {createContext, useContext, useState} from 'react';

const MaintenanceActivityContext = createContext({});

export const useMaintenanceActivityContext = () =>
  useContext(MaintenanceActivityContext);

export default function MaintenanceActivityContextProvider({children}) {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: 'Oil change',
      maxKm: '10000',
      moneyInvested: '89.99',
      motorcycle: 'Honda CB500F',
      observations: 'Used Motul oil',
    },
  ]);

  const [currentActivity, setCurrentActivity] = useState();

  const addActivity = activity => {
    setActivities(prev => {
      const id = prev[prev.length - 1].id + 1;
      return [...prev, {id, ...activity}];
    });
  };

  const removeActivity = id => {
    setActivities(prev => prev.filter(m => m.id !== id));
  };

  const updateActivity = activity => {
    setActivities(prev => {
      const index = prev.findIndex(m => m.id === activity.id);
      const newActivities = [...prev];
      newActivities[index] = activity;
      return newActivities;
    });
  };

  return (
    <MaintenanceActivityContext.Provider
      value={{
        activities,
        addActivity,
        removeActivity,
        updateActivity,
        currentActivity,
        setCurrentActivity,
      }}>
      {children}
    </MaintenanceActivityContext.Provider>
  );
}
