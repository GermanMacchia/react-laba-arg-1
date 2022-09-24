import React, { useState } from 'react';
import { addTodo } from '../helper/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { TodoInput } from './TodoInput';
import './AddTodo.css';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  //function used in the <form> with the onSubmit event
  const handleAddTodo = (e) => {
    if (text === '') {
      alert('Please, add a task :)');
    } else {
      e.preventDefault();
      dispatch(addTodo(text));
    }
  };

  return (
    <div className="mainInput">
      <form className="form" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={text}
          onInput={(e) => setText(e.target.value)}
          className="input_todoTask"
          placeholder="Create Todo-Task"
        />
        <button type="submit" className="button_add">
          Add
        </button>
      </form>
      <div>{count > 0 && todos.map((todo) => <TodoInput text={todo.text} id={todo.id} />)}</div>
    </div>
  );
};
