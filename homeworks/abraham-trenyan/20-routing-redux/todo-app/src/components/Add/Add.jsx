import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/slice';
import './Add.css';
const Add = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    dispatch(
      addTask({
        task: value,
      }),
    );
    setValue('');
  };
  return (
    <form className="add">
      <input
        value={value}
        className="add__input"
        type="text"
        placeholder="Create Todo-Task"
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="add__button" type="submit" onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default Add;
