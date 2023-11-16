import React from 'react';
import {createContext, useContext, useState} from 'react';

const MotorcycleContext = createContext({});

export const useMotorcycleContext = () => useContext(MotorcycleContext);

export default function MotorcycleContextProvider({children}) {
  const [motorcycles, setMotorcycles] = useState([
    {
      id: 1,
      manufacturer: 'Honda',
      model: 'CB500F',
      km: '35000',
    },
  ]);
  const [currentMotorcycle, setCurrentMotorcycle] = useState();

  const addMotorcycle = motorcycle => {
    setMotorcycles(prev => {
      const id = prev[prev.length - 1].id + 1;
      return [...prev, {id: id, ...motorcycle}];
    });
  };

  const removeMotorcycle = id => {
    setMotorcycles(prev => prev.filter(m => m.id !== id));
  };

  const updateMotorcycle = motorcycle => {
    setMotorcycles(prev => {
      const index = prev.findIndex(m => m.id === motorcycle.id);
      const newMotorcycles = [...prev];
      newMotorcycles[index] = motorcycle;
      return newMotorcycles;
    });
  };

  return (
    <MotorcycleContext.Provider
      value={{
        motorcycles,
        addMotorcycle,
        removeMotorcycle,
        updateMotorcycle,
        currentMotorcycle,
        setCurrentMotorcycle,
      }}>
      {children}
    </MotorcycleContext.Provider>
  );
}
