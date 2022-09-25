import React, { useState } from 'react';
import { addTodo } from '../helper/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { TodoInput } from './TodoInput';
import { Modal } from './Modal';
import './AddTodo.css';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const [editing, setEditing] = useState(false); // To edit the todo task

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  //function used in the <form> with the onSubmit event
  const handleAddTodo = (e) => {
    if (text === '') {
      alert('Please, add a task :)');
      e.preventDefault();
    } else {
      e.preventDefault();
      dispatch(addTodo(text));
      setText((e.target.value = ''));
    }
  };

  const toggleEdit = () => {
    setEditing(true);
  };

  return (
    <>
      {editing ? (
        count > 0 ? (
          todos.map((todo) => <Modal id={todo.id} />)
        ) : (
          <div className="mainInput">
            <form className="form" onSubmit={handleAddTodo}>
              <input
                type="text"
                value={text}
                onInput={(e) => setText(e.target.value)}
                className="input_todoTask"
                placeholder="Create Todo-Task"
              />
              <button type="submit" className="button_add">
                Add
              </button>
            </form>
          </div>
        )
      ) : (
        <div className="mainInput">
          <form className="form" onSubmit={handleAddTodo}>
            <input
              type="text"
              value={text}
              onInput={(e) => setText(e.target.value)}
              className="input_todoTask"
              placeholder="Create Todo-Task"
            />
            <button type="submit" className="button_add">
              Add
            </button>
          </form>
          <div>
            {count > 0 &&
              todos.map((todo) => <TodoInput key={todo.id} text={todo.text} id={todo.id} onClick={toggleEdit} />)}
          </div>
        </div>
      )}
    </>
  );
};
