import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import { useSelector } from 'react-redux';
import Todo from './components/TodoList';

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="App">
      <h1>HelloWorld!</h1>
      <CreateTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} task={todo.task} />
      ))}
    </div>
  );
}

export default App;
