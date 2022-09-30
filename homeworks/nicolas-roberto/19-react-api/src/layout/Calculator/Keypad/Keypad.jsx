import React from 'react';
import './Keypad.css';
import KeypadColumn from './KeypadColumn/KeypadColumn';
import Btn from '../../../components/Btn.jsx';

export default function Keypad() {
  return (
    <div className="keypad">
      <KeypadColumn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
      </KeypadColumn>
      <KeypadColumn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
      </KeypadColumn>
      <KeypadColumn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
      </KeypadColumn>
      <KeypadColumn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
      </KeypadColumn>
    </div>
  );
}
