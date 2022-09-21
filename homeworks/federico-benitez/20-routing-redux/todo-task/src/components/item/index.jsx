import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditInput, hideEditInput, todoAdded, todoDeleted, todoEdited } from '@features/todo/todo-slice';
import { Add, Edit, Delete } from '../buttons';

function TodoItem({ data }) {
  const { isEditInputVisible } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(todoDeleted(data.id));
  }

  const editTodo = () => dispatch(showEditInput());

  return (
    <div className="todo">
      {isEditInputVisible ? (
        <EditInput data={data} />
      ) : (
        <>
          <div className="input">{data.value}</div>
          <Edit onClick={editTodo} className="todo__button" />
          <Delete onClick={handleDelete} className="todo__button" />
        </>
      )}
    </div>
  );
}

const EditInput = ({ data }) => {
  const [value, setValue] = useState(data.value);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (e) => setValue(e.target.value);

  function handleEdit() {
    dispatch(
      todoEdited({
        id: data.id,
        newValue: value,
      }),
    );
  }

  useEffect(() => {
    //To cancel edit clicking outside of the component
    const clickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch(hideEditInput());
      }
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="todo">
      <input className="input" type="text" value={value} onChange={handleChange} />
      <button className="button__add" onClick={handleEdit}>
        Save
      </button>
    </div>
  );
};

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
      <Add className="button__add" onClick={handleAdd} />
    </div>
  );
};

export { NewTodo, TodoItem };
