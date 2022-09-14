import React from 'react';
import { numberClick } from '../utils/numberClick';

function Button({ value, setCalculator, calculator }) {
  // Get class for each button
  const getClassForButton = () => {
    const btnClass = {
      '+': 'text-primary bg-neutral-operator',
      '-': 'text-primary bg-neutral-operator',
      X: 'text-primary bg-neutral-operator',
      '/': 'text-primary bg-neutral-operator',
      DEL: 'text-primary bg-neutral-operator',
      '=': 'bg-primary row-span-2',
      C: 'bg-neutral-operator',
    };

    if (typeof value === 'number' || value === '.' || value === '%') return 'bg-neutral-number';

    return btnClass[value];
  };

  const classForButton = getClassForButton();

  // User click number
  const handleNumberClick = () => {
    console.log('number called');
    const numberValue = numberClick(value, calculator.firstInput);

    setCalculator({
      ...calculator,
      firstInput: numberValue,
    });
  };

  const handleSignClick = () => {
    console.log('sign called');

    setCalculator({
      sign: value,
      secondInput: !calculator.secondInput && calculator.firstInput ? calculator.firstInput : calculator.secondInput,
      firstInput: '',
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
      });
    }
  };

  const handleResetClick = () => {
    console.log('reset called');
    setCalculator({
      firstInput: '0',
      sign: '',
      secondInput: '',
    });
  };

  const handleDeleteClick = () => {
    // Cant delete results
    if (calculator.secondInput && !calculator.firstInput) {
      return;
    }

    const firstInputToString = calculator.firstInput.toString();
    setCalculator({
      ...calculator,
      firstInput: Number(firstInputToString.slice(0, -1)),
    });
  };

  const handleClick = () => {
    const btns = {
      '+': handleSignClick,
      '-': handleSignClick,
      '/': handleSignClick,
      '*': handleSignClick,
      '=': handleEqualsClick,
      C: handleResetClick,
      DEL: handleDeleteClick,
    };

    if (typeof value === 'number') return handleNumberClick();
    return btns[value]();
  };

  return (
    <button className={`p-4 py-8 text-2xl ${classForButton}`} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
