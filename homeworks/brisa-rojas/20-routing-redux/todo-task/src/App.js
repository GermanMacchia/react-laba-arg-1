import React from 'react';
import './App.css';
import { deleteToDo, editToDo } from './components/MainInput/mainInputSlice';
import MainInput from './components/MainInput/MainInput';
import Task from './components/Task/Task';
import { useSelector } from 'react-redux';

function App(props) {
  let tasks = useSelector((state) => state.mainInput.tasks);
  let ids = useSelector((state) => state.mainInput.id);
  let counter = useSelector((state) => state.mainInput.counter);
  
  let tasksToRender =[];

  for (let i = 0; i < counter; i++) {
    let task = tasks[i];
    let id = ids[i];  
    tasksToRender.push(<Task key={id} task={task} id={id} deleteTask={deleteToDo} editTask={editToDo} />);
  }
  
  return (
    <div className="App">
      <MainInput />
      {tasksToRender}
    </div>
  );
}

export default App;
