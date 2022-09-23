import React from 'react';

export default function TodoForm({ handleSubmit, todo, setTodo }) {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Create Todo-Task" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
