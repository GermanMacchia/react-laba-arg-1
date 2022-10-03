import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, editTodo } from '../Reducers/TodoReducer';

export default function ListTodo() {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: '',
    content: '',
  });
  const onEditToggle = (id, content) => {};

  const { content, id } = state;
  const edit = () => {
    dispatch(editTodo({ content, id }));
    setEditing(false);
  };
  return (
    <div>
      <ul className="todos">
        {todoList.map(({ id, content }) => {
          return (
            <li className="grid" key={id}>
              <span className="content">{content}</span>
              <span className="todo-action">
                <button className="edit" onClick={() => onEditToggle(id, content)}>
                  {' '}
                  Edit
                </button>
                <button className="close" onClick={() => dispatch(deleteToDo({ id }))}>
                  {' '}
                  Delete{' '}
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
