import React from 'react';
import './App.css';
import { addToDo, deleteToDo, editToDo } from './features/MainInput/mainInputSlice';
import MainInput from './features/MainInput/MainInput';
import Task from './features/Task/Task';
import { useSelector } from 'react-redux';

function App() {
  let tasks = useSelector((state) => state.mainInput.tasks);
  let ids = useSelector((state) => state.mainInput.id);

  return (
    <div className="App">
      <MainInput />
      {tasks.map((task, index) => {
        return <Task key={ids[index]} task={task} id={ids[index]} deleteTask={deleteToDo} editTask={editToDo} />;
      })}
    </div>
  );
}

export default App;
