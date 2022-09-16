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
    setOperation([...operation, btnValue])
  }
  return (
    <Container>
      <Screen value={operation}/>
      <Keyboard>
        {buttons.map((btn, i) => (
          <Button key={i} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </Keyboard>
    </Container>
  );
}

export default App;
