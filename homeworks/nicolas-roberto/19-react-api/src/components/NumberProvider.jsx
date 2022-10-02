import React, { useState } from 'react';

export const NumberContext = React.createContext();

export default function NumberProvider(props) {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleSetDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) + parseFloat(number)}`)}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) - parseFloat(number)}`)}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) / parseFloat(number)}`)}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number)}`)}`);
          break;
        case '%':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number)}`) / 100}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        number,
        storedNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
}
