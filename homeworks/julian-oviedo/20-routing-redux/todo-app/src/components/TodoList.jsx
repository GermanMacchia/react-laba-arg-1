import React from 'react';
import deleteImg from '../assets/icons/delete 1.svg';
import editImg from '../assets/icons/write 1.svg';
import { deleteTodo, editTodo } from '../app/todoSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Todo = ({ id, task }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(
      deleteTodo({
        id: id,
      }),
    );
  }

  function toggleEdit() {
    setEditing(!editing);
    const inputFocus = document.querySelector('#' + id);
    inputFocus.focus();
  }

  function handleEdit() {
    dispatch(
      editTodo({
        id: id,
        newTodo: value,
      }),
    );
    setEditing(false);
  }

  let result;

  return (
    <div className="list-group">
      {!editing
        ? (result = (
            <>
              <input className="list-group__input" value={task} id={id} />
              <img src={editImg} alt="edit" onClick={toggleEdit}></img>
              <img src={deleteImg} alt="delete" onClick={handleDelete}></img>
            </>
          ))
        : (result = (
            <>
              <input
                className="list-group__input"
                value={value}
                id={id}
                onChange={(e) => setValue(e.target.value)}
              ></input>
              <button className="list-group__button-save" onClick={handleEdit}>
                Save
              </button>
              <button className="list-group__button-cancel" onClick={toggleEdit}>
                Cancel
              </button>
            </>
          ))}
    </div>
  );
};

export default Todo;
