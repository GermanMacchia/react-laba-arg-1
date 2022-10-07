import React from 'react';
import { useRef } from 'react';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/slice';
import { editTodo } from '../../redux/slice';
import './Task.css';
const Task = ({ title, id }) => {
  const ref = useRef(null);
  const handleClick = () => ref.current.focus();

  const dispatch = useDispatch();
  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };
  const editTask = (e) => {
    dispatch(
      editTodo({
        value: e.target.value,
        identifier: id,
      }),
    );
  };
  return (
    <div className="task">
      <input
        className="task__input"
        type="text"
        defaultValue={title}
        onChange={(e) => {
          editTask(e);
        }}
        ref={ref}
      />
      <div className="task__edit">
        <img
          src={editIcon}
          alt="Edit"
          className="edit__icon"
          onClick={() => {
            handleClick();
          }}
        />
      </div>
      <div className="task__delete">
        <img
          src={deleteIcon}
          alt="Delete"
          className="delete__icon"
          onClick={() => {
            removeTask();
          }}
        />
      </div>
    </div>
  );
};

export default Task;
