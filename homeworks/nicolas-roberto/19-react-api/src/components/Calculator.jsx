import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import BackButton from './BackButton';

export default function Calculator() {
  return (
    <>
      <div>
        <Display />
      </div>
      <div>
        <ClearButton />
        <BackButton />
        <FunctionButton buttonValue="%" />
        <FunctionButton buttonValue="/" />
        <NumberButton buttonValue={7} />
        <NumberButton buttonValue={8} />
        <NumberButton buttonValue={9} />
        <FunctionButton buttonValue="*" />
        <NumberButton buttonValue={4} />
        <NumberButton buttonValue={5} />
        <NumberButton buttonValue={6} />
        <FunctionButton buttonValue="-" />
        <NumberButton buttonValue={1} />
        <NumberButton buttonValue={2} />
        <NumberButton buttonValue={3} />
        <FunctionButton buttonValue="+" />
        <NumberButton buttonValue={0} />
        <NumberButton buttonValue="." />
        <EqualButton />
      </div>
    </>
  );
}
