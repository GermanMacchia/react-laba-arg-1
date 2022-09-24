import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from './mainInputSlice';
import './styles.css';

function MainInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleOnClick = (event) => {
    if (!inputValue.trim()) {
      return null;
    } // if input is empty, do nothing
    dispatch(addToDo(inputValue.trim()));
    setInputValue('');
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      dispatch(addToDo(inputValue.trim()));
      setInputValue('');
    }
    return;
  };

  return (
    <div className="main-input">
      <input
        type="text"
        placeholder="Create Todo-Task"
        className="main-input__input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleEnter}
      />
      <button className="main-input__button" type="submit" onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
}
export default MainInput;
