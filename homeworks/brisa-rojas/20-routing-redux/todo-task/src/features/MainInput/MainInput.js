import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import { addToDo } from './mainInputSlice';
import './styles.css';

function MainInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleOnClick = (event) => {
    if (!inputValue){
      console.log('input is empty');
      return null;
    }  // if input is empty, do nothing
    dispatch(addToDo(inputValue));
    setInputValue('');
  };


  return (
    <div className="main-input">
      <input
        type="text"
        placeholder="Create Todo-Task"
        className="main-input__input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="main-input__button" onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
}
export default MainInput;