import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import './styles.css';

export default function Display() {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div className="display-screen">
      <h2>{!number ? `${storedNumber}` : `${storedNumber} ${functionType}  ${number}`}</h2>
      <h1>{!number.length && !storedNumber ? '0' : number || storedNumber}</h1>
    </div>
  );
}
