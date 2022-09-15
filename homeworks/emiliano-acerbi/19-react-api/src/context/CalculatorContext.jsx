import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const [calculator, setCalculator] = useState({
    sign: '',
    firstInput: '0',
    secondInput: '',
    result: '',
  });

  const [lastOperation, setLastOperation] = useState({
    sign: '',
    firstInput: '',
    secondInput: '',
    result: '',
  });

  // When user clicks number
  const handleNumberClick = (value) => {
    console.log('number called');

    const inputToString = value.toString();
    const inputValue = Number(calculator.firstInput + inputToString);

    setCalculator({
      ...calculator,
      firstInput: inputValue,
    });

    // If result exists, the calculator resets when clicking numbers
    if (calculator.result) {
      setCalculator({
        firstInput: inputValue,
        sign: '',
        secondInput: '',
        result: '',
      });
    }
  };

  const handleSignClick = (value) => {
    console.log('sign called');

    setCalculator({
      sign: value,
      secondInput: !calculator.secondInput && calculator.firstInput ? calculator.firstInput : calculator.secondInput,
      firstInput: '',
      result: '',
    });
  };

  const handleEqualsClick = () => {
    console.log('equals called');
    if (calculator.secondInput && calculator.firstInput) {
      const calculate = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          X: (a, b) => a * b,
          '/': (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalculator({
        secondInput: calculate(calculator.secondInput, calculator.firstInput, calculator.sign),
        sign: '',
        firstInput: '',
        result: calculate(calculator.secondInput, calculator.firstInput, calculator.sign),
      });
    }

    setLastOperation({
      firstInput: calculator.firstInput,
      secondInput: calculator.secondInput,
      sign: calculator.sign,
      result: calculator.result,
    });
  };

  const handleResetClick = () => {
    console.log('reset called');
    setCalculator({
      firstInput: '0',
      sign: '',
      secondInput: '',
      result: '',
    });

    setLastOperation({
      firstInput: '',
      sign: '',
      secondInput: '',
      result: '',
    });
  };

  const handleDotClick = () => {
    setCalculator({
      ...calculator,
      firstInput: calculator.firstInput + '.',
    });
  };

  const handleDeleteClick = () => {
    // Cant delete result
    if (calculator.secondInput && !calculator.firstInput) {
      return;
    }

    const firstInputToString = calculator.firstInput.toString();
    setCalculator({
      ...calculator,
      firstInput: Number(firstInputToString.slice(0, -1)),
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        calculator,
        lastOperation,
        setCalculator,
        setLastOperation,
        handleNumberClick,
        handleSignClick,
        handleEqualsClick,
        handleResetClick,
        handleDotClick,
        handleDeleteClick,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;
