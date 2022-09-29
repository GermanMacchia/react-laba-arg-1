import React, { useState } from 'react';
import './styles.css';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

function Task(props) {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [todoText, setTodoText] = useState(props.todo);

  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsBeingEdited(false);
      props.editTask({ id: props.id, todoText: todoText });
      event.target.blur(); //takes focus out of input
    }
    return;
  };

  const shouldElementBeFocused = (event) => {
    event.preventDefault();
    if (isBeingEdited) {
      event.target.focus();
    } else {
      event.target.blur();
    }
  };

  return (
    <div className={'task ' + (isBeingEdited ? 'task_editing-enabled' : 'task_editing-disabled')}>
      <input
        key={'task text ' + props.id}
        type="text"
        value={todoText}
        className="task__text"
        readOnly={!isBeingEdited}
        onKeyDown={handleEnterKeyDown}
        onFocus={shouldElementBeFocused}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <img
        key={'edit icon ' + props.id}
        src={editIcon}
        alt="edit task"
        className="task__icon task__edit"
        onClick={() => {
          setIsBeingEdited(!isBeingEdited);
          if (isBeingEdited) {
            props.editTask({ id: props.id, todoText: todoText });
          }
        }} // toggle edit mode and save changes to store if it was being edited before
      />
      <img
        key={'delete icon ' + props.id}
        src={deleteIcon}
        alt="delete task"
        className="task__icon task__delete"
        onClick={() => {
          props.deleteTask(props.id);
        }}
      />
    </div>
  );
}

export default Task;
