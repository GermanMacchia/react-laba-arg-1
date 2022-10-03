import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Reducers/TodoReducer';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: '',
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const add = () => {
    if (content === '') {
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: '' });
  };
  const { content } = state;
  return (
    <div>
      <input placeholder="Create Todo-Task" type="text" value={content} name="content" onChange={handleChange}></input>
      <button type="button" onClick={add}>
        Add
      </button>
    </div>
  );
}
