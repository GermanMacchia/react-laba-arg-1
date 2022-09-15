import React, { useState } from 'react';
import Button from './components/Button';

const buttons = [
  ['C', '/', 'X', 'DEL'],
  [7, 8, 9, '-'],
  [4, 5, 6, '+'],
  [1, 2, 3, '='],
  ['%', 0, '.'],
];

function App() {
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

  console.log('calculator', calculator);
  console.log('last operation', lastOperation);
  //
  return (
    <div className="min-h-screen bg-neutral  grid place-content-center font-primary">
      <main className="w-[375px] h-[812px] text-neutral bg-neutral-calculator flex flex-col">
        <div className="flex-1 flex flex-col justify-end items-end p-5">
          <div className="flex text-size-secondary font-light">
            <p className="">{lastOperation.firstInput && lastOperation.firstInput}</p>
            <p className="">{lastOperation.sign && lastOperation.sign}</p>
            <p className="">{lastOperation.secondInput && lastOperation.secondInput}</p>
          </div>
          <div className="flex text-size-primary">
            <p className="">{calculator.secondInput !== 0 && calculator.secondInput}</p>
            <p className="">{calculator.sign && calculator.sign}</p>
            <p className="">{calculator.firstInput && calculator.firstInput}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-auto gap-[1px] ">
          {buttons.flat().map((btn, index) => {
            return (
              <Button
                key={index}
                value={btn}
                calculator={calculator}
                setCalculator={setCalculator}
                lastOperation={lastOperation}
                setLastOperation={setLastOperation}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
