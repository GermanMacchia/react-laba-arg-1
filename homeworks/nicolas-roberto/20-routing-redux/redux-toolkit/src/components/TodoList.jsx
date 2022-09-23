import React from 'react';
import editTodo from '../assets/write.svg';
import deleteTodo from '../assets/delete.svg';

export default function TodoList({ todos }) {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li key={t.id} className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button>
            <img src={editTodo} alt="Edit" />
          </button>
          <button>
            <img src={deleteTodo} alt="Delete" />
          </button>
        </li>
      ))}
    </ul>
  );
}
