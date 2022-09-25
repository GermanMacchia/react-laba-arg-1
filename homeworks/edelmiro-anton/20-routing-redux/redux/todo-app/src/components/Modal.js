import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../helper/todoSlice';
import deleteItem from '../assets/deleteItem.png';

import './Modal.css';

export const Modal = (props) => {
  const dispatch = useDispatch();

  return (
    <dialog open>
      <input className="input_edit" placeholder="Edit your task" />
      <button type="button" className="button_closeModal ">
        {' '}
        Edit{' '}
      </button>
      <img
        src={deleteItem}
        alt="delete_item_icon"
        onClick={() => dispatch(removeTodo(props.id))}
        className="delete_icon_modal"
      />
    </dialog>
  );
};
