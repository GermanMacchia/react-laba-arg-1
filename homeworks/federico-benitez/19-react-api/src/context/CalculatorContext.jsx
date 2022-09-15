import React, { useContext } from 'react';
import { createContext } from 'react';

const CalculatorContext = createContext(null);

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('CalculatorProvider must be present to use useCalculatorContext');
  }

  return context;
}

export function CalculatorProvider({ children }) {
  const value = useMemo(() => ({}), []);

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
}
