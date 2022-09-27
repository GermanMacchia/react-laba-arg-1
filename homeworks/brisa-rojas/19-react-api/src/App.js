import './App.css';
import Display from './components/Display/Display';
import Keyboard from './components/Keyboard/Keyboard.js';
function App() {
  return (
    <div className="App">
      <Display result={2} calculation={'2+5*3'}  />
      <Keyboard />
    </div>
  );
}

export default App;
