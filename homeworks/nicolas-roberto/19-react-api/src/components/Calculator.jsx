import React from 'react';

export default function Calculator() {
  return (
    <>
      <div className="display"></div>
      <div className="number-pad">
        <button>C</button>
        <button buttonValue="/">/</button>
        <button buttonValue="*">X</button>
        <button>D</button>
        <button buttonValue={7}>7</button>
        <button buttonValue={8}>8</button>
        <button buttonValue={9}>9</button>
        <button buttonValue="-">-</button>
        <button buttonValue={4}>4</button>
        <button buttonValue={5}>5</button>
        <button buttonValue={6}>6</button>
        <button buttonValue="+">+</button>
        <button buttonValue={1}>1</button>
        <button buttonValue={2}>2</button>
        <button buttonValue={3}>3</button>
        <button>=</button>
        <button buttonValue="%">%</button>
        <button buttonValue={0}>0</button>
        <button buttonValue="."></button>
      </div>
    </>
  );
}
