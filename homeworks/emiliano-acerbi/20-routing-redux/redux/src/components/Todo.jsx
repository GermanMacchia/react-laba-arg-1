import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../features/todo/todoSlice';

function Todo({ todo }) {
  const [editModal, setEditModal] = useState(false);
  const [newInputValue, setNewInputValue] = useState('');
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditModal = () => {
    setEditModal(true);
  };

  const handleEditTodo = (e, id) => {
    e.preventDefault();
    dispatch(editTodo({ id, newText: newInputValue }));
    setNewInputValue('');
    setEditModal(false);
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setNewInputValue('');
    setEditModal(false);
  };

  return (
    <article className="flex text-xl">
      {/* Modal */}
      <form
        className={`absolute flex flex-col gap-3 bg-blue-300 shadow-md p-8 scale-0 ${
          editModal && 'scale-100'
        } duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
      >
        <p>
          <span className="font-bold">Selected todo:</span> {todo.text}
        </p>

        <label className="flex items-center">
          <p className="w-36 font-bold">New input:</p>
          <input
            type="text"
            className="w-full p-1"
            onChange={(e) => setNewInputValue(e.target.value)}
            value={newInputValue}
          />
        </label>

        <div className="flex gap-3">
          <button className=" bg-white p-2 w-28 shadow-sm" type="submit" onClick={(e) => handleEditTodo(e, todo.id)}>
            Edit
          </button>
          <button className=" bg-red-200 p-2 w-28 shadow-sm" onClick={(e) => handleCancelEdit(e)}>
            Cancel
          </button>
        </div>
      </form>

      <h2 className="bg-white w-[554px] h-[65px] flex items-center px-3">{todo.text}</h2>
      <div className="flex">
        <button onClick={() => handleEditModal()}>
          <img src="/edit.svg" alt="" />
        </button>
        <button onClick={() => handleRemoveTodo(todo.id)}>
          <img src="/delete.svg" alt="" />
        </button>
      </div>
    </article>
  );
}

export default Todo;
