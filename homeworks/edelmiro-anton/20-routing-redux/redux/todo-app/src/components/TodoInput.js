import React from 'react';
import deleteItem from '../assets/deleteItem.png';
import editItem from '../assets/editItem.png';
import './TodoInput.css';

export const TodoInput = () => {
  return (
    <div className="todo_container">
      <input type="text" className="input_todo" disabled />
      <img src={editItem} alt="edit_item_icon" className="edit_icon" />
      <img src={deleteItem} alt="delete_item_icon" className="delete_icon" />
    </div>
  );
};
