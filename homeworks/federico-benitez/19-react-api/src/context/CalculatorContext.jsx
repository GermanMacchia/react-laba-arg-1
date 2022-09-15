import React, { useContext, useMemo, createContext } from 'react';

const CalculatorContext = createContext(null);

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('CalculatorProvider must be present to use useCalculatorContext');
  }

  return context;
}

export function CalculatorProvider({ children }) {
  const result = 10000;

  const value = useMemo(
    () => ({
      result,
    }),
    [],
  );

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
}
