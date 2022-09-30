import React from 'react';
import './Calculator.css';
import Screen from './Screen/Screen.jsx';
import Keypad from './Keypad/Keypad';

export default function Calculator() {
  return (
    <div className="calculator">
      <Screen />
      <Keypad />
    </div>
  );
}
