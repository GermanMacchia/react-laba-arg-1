import { React, useState } from 'react';
import './App.css';
import Container from './Components/Container/Container';
import Screen from './Components/Screen/Screen';
import Keyboard from './Components/Keyboard/Keyboard';
import Button from './Components/Button/Button';
function App() {
  const [buttons] = useState([
    'C',
    '÷',
    'X',
    'delete',
    7,
    8,
    9,
    '-',
    4,
    5,
    6,
    '+',
    1,
    2,
    3,
    '%',
    0,
    '.',
    '=',
  ]);
  const [operation, setOperation] = useState([]);
  const [result, setResult] = useState([0]);
  const handleClick = (btnValue) => {
    let newOperation = [...operation, btnValue];
    if (
      typeof btnValue === 'number' ||
      (typeof btnValue !== 'number' && /^\d+$/.test(operation[operation.length - 1]))
    ) {
      //Only sets sign key, if we have a number before it.
      setOperation([...newOperation]);
      setResult([...newOperation]);
    }
    if (btnValue === '%') {
      handlePercent(newOperation);
    }
  };
  const resetCalc = () => {
    setOperation([]);
    setResult([0]);
  };
  const deleteLast = () => {
    operation.pop();
    setOperation([...operation]);
    setResult([...operation]);
  };
  const handlePercent = (calc) => {
    let percentOperation = [...calc];
    const signExp = /([-dC*+=÷])/g;
    let percentIndex = calc.indexOf('%');
    let lastSignIndex;
    for (let i = 0; i < percentOperation.length; i++) {
      if ((signExp).test(percentOperation[i])) {
        lastSignIndex = i;
      }
    }
    if (!lastSignIndex || percentIndex <= lastSignIndex) {
      // If the percentage sign is the only sign in the operation, or if it was found before other signs, it divides the number before it by 100, as it behaves in most calculators.
      let numberToDivideByHundred = calc.slice(0, percentIndex).join(''); // Takes the part of the operation since the begginig to the percentage sign, that is the number affected by the sign that we should divide by 100.      
      percentOperation = Number((numberToDivideByHundred) / 100);  // Will store the result of the percentage.
      setResult(percentOperation.toString().split(''));  // Generates an array with the result number stringified, so we can do further operations upon this result/operation.
      setOperation(percentOperation.toString().split(''));
    } else {
      // If the percentage sign is found after another sign, it would behave like this: takes the number before the percentage sign and divides it by 100, then multiplies it by the number before the other sign, because it will be a percentage of this other number.
      let numberToDivideByHundred = percentOperation.slice(lastSignIndex + 1, percentIndex).join(''); // Takes the part of the operation since the last sign to the percentage sign, that is the number affected by the sign that we should divide by 100.
      let multiplier = Function('return ' + percentOperation.slice(0, lastSignIndex).join(''))();
      percentOperation = ([multiplier, percentOperation[lastSignIndex], (Number(numberToDivideByHundred) / 100) * multiplier].join(''));
      setResult(percentOperation.toString().split(''));  // Generates an array with the result number stringified, so we can do other operations upon this result/operation.
      setOperation(percentOperation.toString().split(''));
    }
  };
  const handleEqual = () => {
    let signsExp = /([-dC*+=÷/X])/g;
    let operationArray = operation.join('');
    operationArray = operationArray.replace('X', '*').replace('÷', '/');
    let operationString = operationArray.split(signsExp).join('');
    if (signsExp.test(operationString[operation.length - 1])) {
      // If we click equal button after a sign, it removes the sign and leaves the number before it.
      operationString = operationString.substring(0, operationString.length - 1);
    }
    const res = Function('return ' + operationString)();
    setResult(res.toString().split(''));  // Generates an array with the result number stringified, so we can do other operations upon this result/operation.
    setOperation(res.toString().split(''));
  };
  return (
    <Container>
      <Screen input={operation} output={result} />
      <Keyboard>
        {buttons.map((btn, i) => (
          <Button
            key={i}
            value={btn}
            onClick={
              btn === 'C'
                ? resetCalc
                : btn === 'delete'
                  ? deleteLast
                  : btn === '='
                    ? handleEqual
                    : () => handleClick(btn)
            }
          />
        ))}
      </Keyboard>
    </Container>
  );
}

export default App;
