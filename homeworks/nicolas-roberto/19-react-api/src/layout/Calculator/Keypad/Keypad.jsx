import React from 'react';
import './Keypad.css';
import DarkButton from '../../../components/DarkButton.jsx';
import GreyButton from '../../../components/GreyButton.jsx';
import EqualsButton from '../../../components/EqualsButton.jsx';
export default function Keypad() {
  return (
    <div className="keypad">
      <GreyButton>C</GreyButton>
      <GreyButton>/</GreyButton>
      <GreyButton>X</GreyButton>
      <GreyButton>D</GreyButton>
      <DarkButton>7</DarkButton>
      <DarkButton>8</DarkButton>
      <DarkButton>9</DarkButton>
      <GreyButton>-</GreyButton>
      <DarkButton>4</DarkButton>
      <DarkButton>5</DarkButton>
      <DarkButton>6</DarkButton>
      <GreyButton>+</GreyButton>
      <DarkButton>1</DarkButton>
      <DarkButton>2</DarkButton>
      <DarkButton>3</DarkButton>
      <EqualsButton>=</EqualsButton>
      <DarkButton>%</DarkButton>
      <DarkButton>0</DarkButton>

      <DarkButton>.</DarkButton>
    </div>
  );
}
