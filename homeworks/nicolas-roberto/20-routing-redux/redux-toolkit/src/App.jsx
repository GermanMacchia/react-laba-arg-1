import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  /* Single todo item (initial value is an empty string) */
  const [todo, setTodo] = useState('');
  /* Every todo in an array */
  const [todos, setTodos] = useState([]);
  /* All id's */
  const [editId, setEditId] = useState(0);
  /* When Add/submit button is pressed, handleSubmit is called */
  const handleSubmit = (event) => {
    /* Prevents page refresh */
    event.preventDefault();
    /* If editId has a value */
    if (editId) {
      /* Finds the item (todo) that we need to edit/update inside the array (todos) */
      const editTodo = todos.find((edit) => edit.id === editId);
      /* Searches every element in the todos array */
      const updatedTodos = todos.map((update) =>
        /* And replaces the value of the selected element for the new input value, keeping the same id */
        update.id === editTodo.id ? (update = { id: update.id, todo }) : { id: update.id, todo: update.todo },
      );
      /* setTodos array values is changed to updatedTodos */
      setTodos(updatedTodos);
      /* Set the input values back to empty state */
      setEditId(0);
      setTodo('');
      return;
    }
    /* If todo string is not empty (if input has a value) */
    if (todo !== '') {
      /* Appends todo value to todos */
      /* Date.now produces an unique number (current date in milliseconds) and it's used as an id */
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      /* Once todo is append to todos, the input's value resets to an empty string */
      setTodo('');
    }
  };

  /* To delete the item, we filter a new array with all the items which id's is different to the one selected */
  const handleDelete = (id) => {
    const deleteCurrent = todos.filter((del) => del.id !== id);
    /* and then, set "deleteCurrent" to setTodos */
    setTodos([...deleteCurrent]);
  };
  /* To edit and item, we "find" the current item's id */
  const handleEdit = (id) => {
    const editTodo = todos.find((edit) => edit.id === id);
    /* and set editTodo value to setTodo, the input, to give it a new value */
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
