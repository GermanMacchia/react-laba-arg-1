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
  });

  console.log({
    sign: calculator.sign,
    firstInput: calculator.firstInput,
    secondInput: calculator.secondInput,
  });
  //
  return (
    <div className="min-h-screen bg-neutral  grid place-content-center font-primary">
      <main className="w-[375px] h-[812px] text-neutral bg-neutral-calculator flex flex-col">
        <div className="flex-1 flex justify-end items-end p-5">
          <p className="text-5xl">{calculator.secondInput !== 0 && calculator.secondInput}</p>
          <p className="text-5xl">{calculator.sign && calculator.sign}</p>
          <p className="text-5xl">{calculator.firstInput && calculator.firstInput}</p>
        </div>
        <div className="grid grid-cols-4 mt-auto ">
          {buttons.flat().map((btn, index) => {
            return <Button key={index} value={btn} calculator={calculator} setCalculator={setCalculator} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
