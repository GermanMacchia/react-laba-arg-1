import React from 'react';
import Task from '../Task/Task';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.tasks);
  return (
    <ul className="tasks-list">
      {todos.map((todo) => (
        <Task key={todo.id} id={todo.id} title={todo.name} />
      ))}
    </ul>
  );
};

export default TodoList;
