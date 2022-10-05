import React, { useState } from 'react';
import './EditInput.css';

export const EditInput = (props) => {
  const [value, setValue] = useState('');

  const edit = () =>{
    props.onClick(value)
  }

  return (
    <>
      <input className="input_edit" placeholder="Edit your task" onChange={(e) => setValue(e.target.value)} />
      <button type="button" className="button_edit" onClick={edit}>
        {' '}
        Edit{' '}
      </button>
    </>
  );
};
