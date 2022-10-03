import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Reducers/TodoReducer';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: '',
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, [`${e.target.name}Error`]: null });
  };
  const add = () => {
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: '' });
  };
  const { content } = state;
  return (
    <div className="form">
      <input type="text" value={content} name="content" onChange={handleChange}></input>
      <button type="button" className="button" onClick={add}>
        Add
      </button>
    </div>
  );
}
