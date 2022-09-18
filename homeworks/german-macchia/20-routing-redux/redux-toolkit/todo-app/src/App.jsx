import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { EntryForm } from "./components/Form";

function App() {
  const { entries } = useSelector((store) => store.todos);

  const listEntries = () =>
    entries.map((todo) => {
      return (
        <div>
          <p>{todo.content}</p>
          <img alt="edit" />
          <img alt="delete" />
        </div>
      );
    });

  return (
    <div className="App">
      <EntryForm />
      <div>{listEntries()}</div>
    </div>
  );
}

export default App;
