import React from 'react';
import './EditInput.css';

export const EditInput = (props) => {
  return (
    <>
      <input className="input_edit" placeholder="Edit your task" />
      <button type="button" className="button_edit" onClick={props.onClick}>
        {' '}
        Edit{' '}
      </button>
    </>
  );
};
