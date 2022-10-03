import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editTodo } from '../Reducers/TodoReducer';

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
    <div>
      {isEditing ? (
        <div>
          <h3>Edit Todo-Task</h3>
          <input
            placeholder="Edit Todo-Task"
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
          ></input>
          <button type="button" onClick={edit}>
            Edit
          </button>
        </div>
      ) : (
        <ul>
          {todoList.map(({ id, content }) => {
            return (
              <li key={id}>
                <span>{content}</span>
                <span>
                  <button onClick={() => onEditToggle(id, content)}>Edit</button>
                  <button onClick={() => dispatch(deleteToDo({ id }))}>Delete</button>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
