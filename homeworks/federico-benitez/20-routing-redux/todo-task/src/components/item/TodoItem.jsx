import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditInput, todoDeleted } from '@features/todo/todo-slice';
import { Edit, Delete } from '../buttons';
import { EditTodo } from '.';

export default function TodoItem({ data }) {
  const { isEditInputVisible } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(todoDeleted(data.id));
  }

  const showEditTodo = () => dispatch(showEditInput());

  return (
    <div className="todo">
      {isEditInputVisible ? (
        <EditTodo data={data} />
      ) : (
        <>
          <div className="input">{data.value}</div>
          <Edit onClick={showEditTodo} className="todo__button" />
          <Delete onClick={handleDelete} className="todo__button" />
        </>
      )}
    </div>
  );
}
