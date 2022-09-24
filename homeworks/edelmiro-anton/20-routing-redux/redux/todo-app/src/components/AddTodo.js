import React, { useState } from 'react';

import './AddTodo.css';

export const AddTodo = () => {
  return (
    <div className="mainInput">
      <input type="text" className="input_todoTask" placeholder="Create Todo-Task" />
      <button className="button_add">Add</button>
    </div>
  );
};
