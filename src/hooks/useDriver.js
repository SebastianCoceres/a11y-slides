import { useContext } from 'react';
import { DriverContext } from '@/providers/DriverProvider';

export function useDriver() {
  const { driver, setSteps } = useContext(DriverContext);

  return { driver, setSteps };
}
