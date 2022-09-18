import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import { addTodo } from "../features/todos/todosSlice";

export const EntryForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const form = useRef(null);

  const handleChange = (e) => {
    setTodo({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    form.current.reset();
  };

  return (
    <form ref={form}>
      <input
        placeholder="Create Todo-Task"
        type="text"
        name="content"
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};
