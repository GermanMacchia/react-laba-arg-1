import React from 'react';
import Task from '../Task/Task';
import { useSelector } from 'react-redux';

const TodoList = () => {
 const todos = useSelector((state) => {
    return state.tasks;
  });
  return (
    <ul className="tasks-list">
      {todos.map((todo, index) => (
        <Task key={todo.id} id={todo.id} idx={index} title={todo.name}/>
      ))}
    </ul>
  );
};

export default TodoList;
