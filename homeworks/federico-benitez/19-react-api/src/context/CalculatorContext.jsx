import React, { useContext, useMemo, createContext, useCallback, useState } from 'react';
import { isMathOperation, getMathSymbol, getResult } from '../helpers';

const CalculatorContext = createContext(null);

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error('CalculatorProvider must be present to use useCalculatorContext');
  }

  return context;
}

const INITIAL_STATE = {
  current: 0,
  previous: null,
  operation: null,
};

export function CalculatorProvider({ children }) {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleOperation = (operation) => {
    //debugger;
    const mathOperation = isMathOperation(operation);
    if (mathOperation) {
      if (!values.previous) {
        return setValues({
          previous: values.current,
          current: 0,
          operation,
        });
      } else {
        return setValues((prev) => ({
          previous: isNaN(prev.previous) ? prev.current : getResult(prev.previous, prev.current, prev.operation),
          current: 0,
          operation,
        }));
      }
    }
    switch (operation) {
      case 'clean':
        setValues(INITIAL_STATE);
        break;
      case 'equal':
        setValues(({ previous, current, operation }) => ({
          previous: `${previous} ${getMathSymbol(operation)} ${current}`,
          current: getResult(current, previous, operation),
        }));
        break;
      default:
        console.log(operation);
        break;
    }
  };

  const doAction = useCallback(
    (key) => {
      if (isNaN(key.value)) {
        //Except on '.' '%'
        handleOperation(key.value);
        return;
      }
      setValues((v) => {
        if (v.current === 0) return { ...v, current: key.value };

        return { ...v, current: key.value + v.current * 10 };
      });

      console.log('key', key);
    },
    [values],
  );

  console.log(values);

  const value = useMemo(
    () => ({
      previous: values.previous,
      current: values.current,
      doAction,
    }),
    [values],
  );

  return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>;
}
