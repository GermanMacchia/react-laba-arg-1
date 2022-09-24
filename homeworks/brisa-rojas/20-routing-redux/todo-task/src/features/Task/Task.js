import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import './styles.css';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

function Task(props) {
  const dispatch = useDispatch();

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsBeingEdited(false);
    }
    return;
  };

  return (
    <div className="task">
      <input
        type="text"
        value={props.task}
        className="task__text"
        readOnly={!isBeingEdited}
        onKeyDown={handleEnterKeyDown}
        onChange={(event) => dispatch(props.editTask(props.id, event.target.value))}
      />
      <img
        src={editIcon}
        alt="edit task"
        className="task__icon task__edit"
        onClick={() => setIsBeingEdited(!isBeingEdited)} // toggle edit mode
      />
      <img
        src={deleteIcon}
        alt="delete task"
        className="task__icon task__delete"
        onClick={() => dispatch(props.deleteTask(props.id))}
      />
    </div>
  );
}

export default Task;
