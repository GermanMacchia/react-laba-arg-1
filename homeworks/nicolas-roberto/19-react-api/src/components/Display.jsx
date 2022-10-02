import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import './styles.css';
/* Display screen prints the numbers on top with the operator and once */
/* you press "equals" button, it lets you keep doing operation with the remaining result. */
export default function Display() {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div className="display-screen">
      <h2>{!number ? `${storedNumber}` : `${storedNumber} ${functionType}  ${number}`}</h2>
      <h1>{!number.length && !storedNumber ? '0' : number || storedNumber}</h1>
    </div>
  );
}
