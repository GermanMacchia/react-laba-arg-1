import React from 'react';
import editTodo from '../assets/write.svg';
import deleteTodo from '../assets/delete.svg';

export default function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <ul className="todo-list">
      {todos.map((t) => (
        <li key={t.id} className="todo-list_item">
          <span className="todo-list_text" key={t.id}>
            {t.todo}
          </span>
          <button className="todo-list_edit" onClick={() => handleEdit(t.id)}>
            <img src={editTodo} alt="Edit" />
          </button>
          <button className="todo-list_delete" onClick={() => handleDelete(t.id)}>
            <img src={deleteTodo} alt="Delete" />
          </button>
        </li>
      ))}
    </ul>
  );
}
