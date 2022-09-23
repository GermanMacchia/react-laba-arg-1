import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editId) {
      const editTodo = todos.find((edit) => edit.id === editId);
      const updatedTodos = todos.map((update) =>
        update.id === editTodo.id ? (update = { id: update.id, todo }) : { id: update.id, todo: update.todo },
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo('');
      return;
    }

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo('');
    }
  };

  const handleDelete = (id) => {
    const deleTodo = todos.filter((del) => del.id !== id);
    setTodos([...deleTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((edit) => edit.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <TodoForm handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo} />
        <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
