import { useEffect, useRef } from 'react';
import { useDriver } from '@/hooks/useDriver';

export function StepComponent({ children, stepIndex, ...driverStepProps }) {
  const refStep = useRef(null);

  const { setSteps } = useDriver();

  useEffect(() => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];

      newSteps[stepIndex] = { element: refStep.current, ...driverStepProps };

      return newSteps;
    });
  }, []);

  return <div ref={refStep}>{children}</div>;
}
