import React from 'react';
import Delete from './Delete';
import Divider from './Divider';
import Equal from './Equal';
import Minus from './Minus';
import Multiplier from './Multiplier';
import Plus from './Plus';

function Button({ value, setCalculator, calculator, lastOperation, setLastOperation }) {
  // Get class for each button
  const getClassForButton = () => {
    const btnClass = {
      '+': 'text-primary bg-neutral-operator text-4xl',
      '-': 'text-primary bg-neutral-operator',
      X: 'text-primary bg-neutral-operator',
      '/': 'text-primary bg-neutral-operator',
      DEL: 'text-primary bg-neutral-operator rounded-tr-[30px]',
      '=': 'bg-primary row-span-2',
      C: 'bg-neutral-operator rounded-tl-[30px]',
    };

    if (typeof value === 'number' || value === '.' || value === '%') return 'bg-neutral-number';

    return btnClass[value];
  };

  const classForButton = getClassForButton();

  const handleDotClick = () => {
    setCalculator({
      ...calculator,
      firstInput: calculator.firstInput + '.',
    });
  };

  // User click number
  const handleNumberClick = () => {
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

  const handleSignClick = () => {
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

  const handleClick = () => {
    const btns = {
      '+': handleSignClick,
      '-': handleSignClick,
      '/': handleSignClick,
      X: handleSignClick,
      '=': handleEqualsClick,
      C: handleResetClick,
      DEL: handleDeleteClick,
      '.': handleDotClick,
    };

    if (typeof value === 'number') return handleNumberClick();
    return btns[value]();
  };

  return (
    <button className={`px-4 py-8 text-2xl ${classForButton}`} onClick={handleClick}>
      {value === 'DEL' ? (
        <Delete />
      ) : value === '+' ? (
        <Plus />
      ) : value === '-' ? (
        <Minus />
      ) : value === 'X' ? (
        <Multiplier />
      ) : value === '=' ? (
        <Equal />
      ) : value === '/' ? (
        <Divider />
      ) : (
        value
      )}
    </button>
  );
}

export default Button;
