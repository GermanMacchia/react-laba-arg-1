import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './features/todo/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';

function App() {
  const [inputValue, setInputValue] = useState('');

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: inputValue,
    };

    dispatch(addTodo(newTodo));
    setInputValue('');
  };

  return (
    <main className="min-h-screen bg-gradient font-primary text-3xl flex flex-col items-center gap-5">
      <form className="flex mt-28">
        <input
          className="w-[554px] h-[65px] px-5 "
          placeholder="Create Todo-Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-add-bg text-white w-[122px] h-[65px]" type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </form>

      <div className="flex flex-col gap-5 mt-28">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} inputValue={inputValue} />
        ))}
      </div>
    </main>
  );
}

export default App;
