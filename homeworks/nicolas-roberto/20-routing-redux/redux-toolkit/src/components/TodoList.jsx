import React from 'react';
import './TodoList.css';

export default function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <div className="container-list">
      {todos.map((t) => (
        <div className="todo-list" key={t.id}>
          <div className="todo-list_item">
            <p className="todo-list_text">{t.todo}</p>
          </div>
          <button className="todo-list_edit" onClick={() => handleEdit(t.id)}></button>
          <button className="todo-list_delete" onClick={() => handleDelete(t.id)}></button>
        </div>
      ))}
    </div>
  );
}
