import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editTodo } from '../Reducers/TodoReducer';
import './Todos.css';

export default function ListTodo() {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: '',
    content: '',
  });
  const onEditToggle = (id, content) => {
    setEditing(true);
    setState({ ...state, id, content });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const { content, id } = state;
  const edit = () => {
    dispatch(editTodo({ content, id }));
    setEditing(false);
  };
  return (
    <div className="todo-container">
      {isEditing ? (
        <>
          <h3>Edit Todo-Task</h3>
          <div className="container">
            <input
              className="edit-input"
              placeholder="Edit Todo-Task"
              type="text"
              value={content}
              name="content"
              onChange={handleChange}
              maxLength={22}
            ></input>
            <button className="submit-button" type="button" onClick={edit}>
              Edit
            </button>
          </div>
        </>
      ) : (
        <ul className="task-container">
          {todoList.map(({ id, content }) => {
            return (
              <div className="task-item_container" key={id}>
                <li className="task-item" key={id}>
                  <span>{content}</span>
                </li>
                <button className="edit-button" onClick={() => onEditToggle(id, content)}></button>
                <button className="delete-button" onClick={() => dispatch(deleteToDo({ id }))}></button>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
