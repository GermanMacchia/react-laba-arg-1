import React, { useState } from 'react';
import { addTodo } from '../helper/todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo } from '../helper/todoSlice';
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

  //function change the value at "editing", so the user can edit their tasks
  const toggleEdit = () => {
    setEditing(true);
  };

  const edit = () => {
    dispatch(editTodo(text));
    setEditing(false);
    console.log('edited');
  };


  return (
    <>
      {editing ? (
        todos.map((todo) => <Modal id={todo.id} onClick={edit} />)
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
