import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Reducers/TodoReducer';
import './Todos.css';

/* Redux hook useDispatch is use to dispatch addToDo action to update state. */
export default function AddTodo() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: '',
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const add = () => {
    /* Prevents to add empty input values */
    if (content === '') {
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: '' });
  };
  const { content } = state;
  return (
    <div className="container">
      <input
        className="add-input"
        placeholder="Create Todo-Task"
        type="text"
        value={content}
        name="content"
        onChange={handleChange}
        maxLength={22}
      ></input>
      <button className="submit-button" type="button" onClick={add}>
        Add
      </button>
    </div>
  );
}
