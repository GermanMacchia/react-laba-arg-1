import React, { useState } from 'react';
/* Context to pass all the functions between the different components who needs them */
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
  /* The value on the top of the screen is replaced by "number" which is the one we're typing */
  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };
  /* The back button slices the last character in "number" */
  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };
  /* Equal button's function, passes the type of operator*/
  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };
  /* The function which makes the math operation between the number and stored number */
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
  /* Returns all the functions with context to be used on display and all the buttons*/
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
