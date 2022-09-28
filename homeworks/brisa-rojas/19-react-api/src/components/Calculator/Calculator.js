import React, { useState } from 'react';
import './styles.css';
import Display from '../Display/Display.js';
import Keyboard from '../Keyboard/Keyboard.js';

const Calculator = () => {
  // operations should be first shown on 'result' paragraph and then when equals is clicked,
  // the calc should be shown on 'calculation' paragraph and the result on 'result' paragraph
  const [result, setResult] = useState('');
  const [history, setHistory] = useState('');
  const [reseted, setReseted] = useState(true);
  const [lastKeyWasEquals, setLastKeyWasEquals] = useState(false);

  const handleClickOnNumber = (number) => {
    let stringifyedNum = number.toString();
    setResult(lastKeyWasEquals ? stringifyedNum : result + stringifyedNum);
    setLastKeyWasEquals(false);
  };

  const handleClickOnClear = () => {
    setResult('');
    setHistory('');
    setReseted(true);
    setLastKeyWasEquals(false);
  };

  const handleClickOnEquals = () => {
    setHistory(result);
    setResult(eval(result));
    setReseted(false);
    setLastKeyWasEquals(true);
  };

  const handleClickOnOperator = (operator) => {
    let lastChar = history.split('');
    lastChar = lastChar[lastChar.length - 1];

    //cant start with division or multiplication operator (tough it is possible in to start with a negative number for example)
    if (result === '' && (operator === '/' || operator === '*')) return;

    //cant have two / or * operators in a row (but *-3 is ok for example)
    if ((lastChar === '/' || lastChar === '*') && (operator === '/' || operator === '*')) return;

    setResult(result + operator);
    setLastKeyWasEquals(false);
  };
  const handleClickOnPercent = () => {
    // % cant be the first character or after an operator
    let lastChar = result.toString().split('');
    lastChar = lastChar[lastChar.length - 1];
    if (
      result === '' ||
      lastChar === '/' ||
      lastChar === '*' ||
      lastChar === '+' ||
      lastChar === '-' ||
      lastChar === '%'
    )
      return;
    setResult(result + '%');
  };

  const handleClickOnDelete = () => {
    let newResult = result.toString().split('');
    newResult = newResult.slice(0, -1);
    setResult(newResult.join(''));
    setLastKeyWasEquals(false);
  };

  return (
    <div className="calculator">
      <Display
        result={result}
        calculation={reseted ? null : history}
        handleClickOnHistory={() => {
          setResult(history);
          setHistory('');
        }}
      />
      <Keyboard
        handleClickOnNumber={handleClickOnNumber}
        handleClickOnClear={handleClickOnClear}
        handleClickOnEquals={handleClickOnEquals}
        handleClickOnOperator={handleClickOnOperator}
        handleClickOnDelete={handleClickOnDelete}
        handleClickOnPercent={handleClickOnPercent}
      />
    </div>
  );
};

export default Calculator;
