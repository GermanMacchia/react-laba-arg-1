import React from 'react';
import './TodoList.css';

export default function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <ul>
      {todos.map((t) => (
        <div className="todo-list">
          <li key={t.id} className="todo-list_item">
            <span className="todo-list_text" key={t.id}>
              {t.todo}
            </span>
          </li>
          <button className="todo-list_edit" onClick={() => handleEdit(t.id)}></button>
          <button className="todo-list_delete" onClick={() => handleDelete(t.id)}></button>
        </div>
      ))}
    </ul>
  );
}
