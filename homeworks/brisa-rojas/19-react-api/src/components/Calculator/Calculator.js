import React, {useState} from 'react';
import './styles.css';
import Display from '../Display/Display.js';
import Keyboard from '../Keyboard/Keyboard.js';



const Calculator = () => {
  let [lastCalculation, setLastCalculation] = useState('');
  let [lastResult, setLastResult] = useState('');

  const handleClickOnNumber = (i) => {
    console.log('click on !!!:', i);
    setLastCalculation(lastCalculation += i);
  };

  const handleClickOnClear = () => {
    setLastCalculation('');
    setLastResult('');
  };


  return (
    <div className="calculator">
      <Display result={lastResult} calculation={lastCalculation} />
      <Keyboard handleClickOnNumber={handleClickOnNumber} handleClickOnClear={handleClickOnClear} />
    </div>
  );
};
export default Calculator;
