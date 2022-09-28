import React from 'react';
import './App.css';
import { deleteToDo, editToDo } from './slices/tasksSlice';
import AddTaskInput from './components/AddTaskInput/AddTaskInput';
import Task from './components/Task/Task';
import { useSelector } from 'react-redux';

function App(props) {
  let tasks = useSelector((state) => state.tasks);

  let tasksToRender =[];

  for (let id in tasks){
    tasksToRender.push(<Task key={id} task={tasks.id} id={id} deleteTask={deleteToDo} editTask={editToDo} />);
  }
  
  return (
    <div className="App">
      <AddTaskInput />
      {tasksToRender}
    </div>
  );
}

export default App;
