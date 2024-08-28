// TodoForm.jsx
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
