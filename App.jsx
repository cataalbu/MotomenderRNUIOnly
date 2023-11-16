import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import MotorcycleContextProvider from './src/context/MotorcycleContext';
import MaintenanceActivityContextProvider from './src/context/MaintenanceActivityContext';

function App() {
  return (
    <MotorcycleContextProvider>
      <MaintenanceActivityContextProvider>
        <AppNavigation />
      </MaintenanceActivityContextProvider>
    </MotorcycleContextProvider>
  );
}

export default App;
