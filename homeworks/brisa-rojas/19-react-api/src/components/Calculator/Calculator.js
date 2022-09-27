import React from 'react';
import './styles.css';
import Display from '../Display/Display.js';
import Keyboard from '../Keyboard/Keyboard.js';

const Calculator = () => {
    return (
        <div className="calculator">
          <Display result={2} calculation={'2+5*3'}  />
          <Keyboard />
        </div>
      );
}
export default Calculator;