import React from 'react';
import NumberButton from './buttons/NumberButton';
import PercentButton from './buttons/PercentButton';
import ClearButton from './buttons/ClearButton';
import Display from './Display';
import EqualButton from './buttons/EqualButton';
import BackButton from './buttons/BackButton';
import './styles.css';
import DivideButton from './buttons/DivideButton';
import TimesButton from './buttons/TimesButton';
import MinusButton from './buttons/MinusButton';
import PlusButton from './buttons/PlusButton';

export default function Calculator() {
  return (
    <div className="calculator">
      {/* Display screen */}
      <Display />
      <div className="keypad">
        <ClearButton />
        <DivideButton buttonValue="/" />
        <TimesButton buttonValue="*" />
        <BackButton />
        <NumberButton buttonValue={7} />
        <NumberButton buttonValue={8} />
        <NumberButton buttonValue={9} />
        <MinusButton buttonValue="-" />
        <NumberButton buttonValue={4} />
        <NumberButton buttonValue={5} />
        <NumberButton buttonValue={6} />
        <PlusButton buttonValue="+" />
        <NumberButton buttonValue={1} />
        <NumberButton buttonValue={2} />
        <NumberButton buttonValue={3} />
        <EqualButton />
        <PercentButton buttonValue="%" />
        <NumberButton buttonValue={0} />
        <NumberButton buttonValue="." />
      </div>
    </div>
  );
}
