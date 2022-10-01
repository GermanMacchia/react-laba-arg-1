import React from 'react';
import deleteImg from '../assets/icons/delete 1.svg';
import editImg from '../assets/icons/write 1.svg';
import { deleteTodo } from '../app/todoSlice';
import { useDispatch } from 'react-redux';

const Todo = ({ id, task }) => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(
      deleteTodo({
        id: id,
      }),
    );
  }

  function handleEdit() {}

  return (
    <div className="list-group">
      <input value={task} />
      <img src={editImg} alt="edit" onClick={handleEdit}></img>
      <img src={deleteImg} alt="delete" onClick={handleDelete}></img>
    </div>
  );
};

export default Todo;
