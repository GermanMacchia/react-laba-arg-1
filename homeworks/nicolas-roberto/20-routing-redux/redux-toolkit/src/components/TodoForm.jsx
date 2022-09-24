import React from 'react';
import './TodoForm.css';

export default function TodoForm({ handleSubmit, todo, editId, setTodo }) {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form_input"
        type="text"
        placeholder="Create Todo-Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-form_submit" type="submit">
        {' '}
        {editId ? 'Edit' : 'Add'}
      </button>
    </form>
  );
}
