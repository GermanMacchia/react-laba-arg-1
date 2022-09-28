import React, { useState } from 'react';
import './styles.css';
import Display from '../Display/Display.js';
import Keyboard from '../Keyboard/Keyboard.js';

const Calculator = () => {
  // operations should  be first shown on 'result' paragraph and then when equals is clicked, the result should be shown on 'calculation' paragraph
  const [result, setResult] = useState('');
  const [history, setHistory] = useState('');
  const [reseted, setReseted] = useState(true);

  const handleClickOnNumber = (number) => {
    let stringifyedNum = number.toString();
    setResult(result + stringifyedNum);
  };

  const handleClickOnClear = () => {
    setResult('');
    setHistory('');
    setReseted(true);
  };

  const handleClickOnEquals = () => {
    setHistory(result);
    setResult(eval(result));
    setReseted(false);
  };

  const handleClickOnOperator = (operator) => {
    let lastChar = history.split('');
    lastChar = lastChar[lastChar.length - 1];

    //cant start with division or multiplication operator (tough it is possible in to start with a negative number for example)
    if (result === '' && (operator === '/' || operator === '*')) return;

    //cant have two / or * operators in a row (but *-3 is ok for example)
    if ((lastChar === '/' || lastChar === '*') && (operator === '/' || operator === '*')) return;

    setResult(result + operator);
  };

  const handleClickOnDelete = () => {
    let newResult = result.slice(0, -1);
    setResult(newResult);
  };

  return (
    <div className="calculator">
      <Display result={result} calculation={reseted ? null : history} />
      <Keyboard
        handleClickOnNumber={handleClickOnNumber}
        handleClickOnClear={handleClickOnClear}
        handleClickOnEquals={handleClickOnEquals}
        handleClickOnOperator={handleClickOnOperator}
        handleClickOnDelete={handleClickOnDelete}
      />
    </div>
  );
};

export default Calculator;
