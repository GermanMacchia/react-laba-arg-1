import React from 'react';
import './Modal.css';

export const Modal = (props) => {
  return (
    <dialog open>
      <input className="input_edit" placeholder="Edit your task" />
      <button type="button" className="button_closeModal " onClick={props.onClick}>
        {' '}
        Edit{' '}
      </button>
    </dialog>
  );
};
