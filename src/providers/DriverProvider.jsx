import 'driver.js/dist/driver.css';
import { createContext, useEffect, useRef, useState } from 'react';
import { driver } from 'driver.js';

export const DriverContext = createContext({ setSteps: () => {} });

export function DriverProvider({ children, driverOptions = {} }) {
  const [steps, setSteps] = useState([]);

  // useRef en vez de useState: la instancia de driver.js no debe recrearse en cada render.
  const driverRef = useRef(driver(driverOptions));

  useEffect(() => {
    if (steps.length) {
      const filteredSteps = steps.filter((step) => step);

      driverRef.current?.setSteps(filteredSteps);
      driverRef.current?.drive();
    }

    return () => {
      driverRef.current?.destroy();
    };
  }, [steps]);

  const driverContextValues = {
    driver: driverRef.current,
    setSteps,
  };

  return <DriverContext.Provider value={driverContextValues}>{children}</DriverContext.Provider>;
}
