import { React, useState } from 'react';
import './App.css'
import Container from './Components/Container/Container';
import Screen from './Components/Screen/Screen';
import Keyboard from './Components/Keyboard/Keyboard';
import Button from './Components/Button/Button';
function App() {
  const [buttons, setButtons] = useState(['C', '÷', 'X', 'delete', 7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, '%', 0, '.', '=']);
  const [operation, setOperation] = useState([]);
  const handleClick = (btnValue) => {
    if (typeof btnValue === 'number' || (typeof btnValue !== 'number' && typeof operation[operation.length - 1] === 'number')) {
      setOperation([...operation, btnValue]); //Only sets sign key, if we have a number before it.
    }
  }
  const resetCalc = () => {
    setOperation([]);
  }
  const deleteLast = () => {
    operation.pop();
    setOperation([...operation]);
  }
  const handleEqual = () => {
    
  } 
  return (
    <Container>
      <Screen value={operation} />
      <Keyboard>
        {buttons.map((btn, i) => (
          <Button key={i} value={btn}
            onClick={btn === 'C' ? resetCalc : btn === 'delete' ? deleteLast : () => handleClick(btn)} />
        ))}
      </Keyboard>
    </Container>
  );
}

export default App;
