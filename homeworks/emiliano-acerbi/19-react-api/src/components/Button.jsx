import React, { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import Delete from './Delete';
import Divider from './Divider';
import Equal from './Equal';
import Minus from './Minus';
import Multiplier from './Multiplier';
import Plus from './Plus';

function Button({ value }) {
  const { handleNumberClick, handleSignClick, handleEqualsClick, handleResetClick, handleDotClick, handleDeleteClick } =
    useContext(CalculatorContext);

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

  // Gets the correct function for the button
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

    if (typeof value === 'number') return handleNumberClick(value);
    return btns[value](value);
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
