import React from 'react';
import deleteItem from '../../assets/deleteItem.png';
import { removeTodo } from '../../helper/todoSlice';
import { useDispatch } from 'react-redux';
import editItem from '../../assets/editItem.png';
import './TodoInput.css';

export const TodoInput = ({ text, toggleEdit, id }) => {
  const dispatch = useDispatch();

  const inputValue = (e) => {
    e.target.value = text;
  };

  const callToggleEdit = () => {
    toggleEdit(id)
  }

  return (
    <div className="todo_container">
      <p className="text_todo" onChange={inputValue}>
        {text}
      </p>
      <img src={editItem} alt="edit_item_icon" className="edit_icon" onClick={callToggleEdit} />
      <img
        key={id}
        src={deleteItem}
        alt="delete_item_icon"
        onClick={() => dispatch(removeTodo(id))}
        className="delete_icon"
      />
    </div>
  );
};
