import React from 'react';
import deleteItem from '../assets/deleteItem.png';
import editItem from '../assets/editItem.png';
import { removeTodo } from '../helper/todoSlice';
import { useDispatch } from 'react-redux';
import './TodoInput.css';

export const TodoInput = (props) => {
  const dispatch = useDispatch();

  const inputValue = (e) => {
    e.target.value = props.text;
  };

  return (
    <div className="todo_container">
      <p className="text_todo" onChange={inputValue}>
        {props.text}
      </p>
      <img src={editItem} alt="edit_item_icon" className="edit_icon" />
      <img
        key={props.id}
        src={deleteItem}
        alt="delete_item_icon"
        onClick={() => dispatch(removeTodo(props.id))}
        className="delete_icon"
      />
    </div>
  );
};
