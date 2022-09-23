import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo('');
    return;
  };

  return (
    <div className="App">
      <div className="container">
        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
