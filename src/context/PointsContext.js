"use client"; 
import { createContext, useContext, useState } from 'react';


const PointsContext = createContext();


export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  return (
    <PointsContext.Provider value={{ points, setPoints }}>
      {children}
    </PointsContext.Provider>
  );
};


export const usePoints = () => {
  const context = useContext(PointsContext);
  return context;
};
