import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded, todoDeleted, todoEdited } from '@features/todo/todo-slice';
import { Add, Edit, Delete } from '../buttons';

function TodoItem({ data }) {
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(
      todoEdited({
        id: data.id,
        newValue: 'edited',
      }),
    );
  }

  function handleDelete() {
    dispatch(todoDeleted(data.id));
  }

  return (
    <div className="todo">
      <div className="input">{data.value}</div>
      <Edit onClick={handleEdit} className="todo__button" />
      <Delete onClick={handleDelete} className="todo__button" />
    </div>
  );
}

const NewTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  function handleAdd() {
    dispatch(todoAdded(value));
    setValue('');
  }

  return (
    <div className="todo">
      <input className="input" type="text" value={value} onChange={handleChange} />
      <Add onClick={handleAdd} />
    </div>
  );
};

export { NewTodo, TodoItem };
