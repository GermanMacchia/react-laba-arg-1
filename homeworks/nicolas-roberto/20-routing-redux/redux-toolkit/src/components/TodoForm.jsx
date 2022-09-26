import React from 'react';
import './TodoForm.css';

export default function TodoForm({ handleSubmit, todo, editId, setTodo }) {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form_input"
        type="text"
        maxLength={22}
        placeholder="Create Todo-Task"
        value={todo}
        /* When input value changes, its value is apllied on "todo" */
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-form_submit" type="submit">
        {' '}
        {/* Changes the text if there's a value inside editId value */}
        {editId ? 'Edit' : 'Add'}
      </button>
    </form>
  );
}
