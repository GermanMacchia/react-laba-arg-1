import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo({ todo }) {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <article className="flex">
      <h1 className="bg-white w-[554px] h-[65px] flex items-center px-3">{todo.text}</h1>
      <div className="flex">
        <button>
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
