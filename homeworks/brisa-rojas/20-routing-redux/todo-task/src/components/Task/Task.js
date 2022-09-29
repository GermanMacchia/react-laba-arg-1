import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

function Task(props) {
  const dispatch = useDispatch();

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  let todoText = useSelector((state) => state.tasks[props.id]);

  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsBeingEdited(false);
    }
    return;
  };
  const shouldElementBeFocused = (event) => {
    event.preventDefault();
    if (isBeingEdited) {
      event.target.focus();
    }
    else {
      event.target.blur();
    }
  };

  return (
    <div className={"task " + (isBeingEdited ? 'task_editing-enabled' : 'task_editing-disabled' )}>
      <input
        type="text"
        value={todoText}
        className="task__text"
        readOnly={!isBeingEdited}
        onKeyDown={handleEnterKeyDown}
        onFocus={shouldElementBeFocused}
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
        onClick={() => {
          const taskData = { 'id': props.id };
          dispatch(props.deleteTask(taskData));
        }}
      />
    </div>
  );
}

export default Task;
