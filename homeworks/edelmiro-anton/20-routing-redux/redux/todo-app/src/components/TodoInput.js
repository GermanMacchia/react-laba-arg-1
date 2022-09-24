import React from 'react';
import deleteItem from '../assets/deleteItem.png';
import editItem from '../assets/editItem.png';
import './TodoInput.css';

export const TodoInput = (props) => {
  const deleteTodo = () => {
    props.onClick(props.id);
  };

  const inputValue = (e) => {
    e.target.value = props.text;
  };

  return (
    <div className="todo_container">
      <p className="text_todo" onChange={inputValue}>
        {props.text}
      </p>
      <img src={editItem} alt="edit_item_icon" className="edit_icon" />
      <img src={deleteItem} alt="delete_item_icon" onClick={deleteTodo} className="delete_icon" />
    </div>
  );
};
