// TodoItem.jsx
import React from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <li>
      <p
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text} -{" "}
        {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
      </p>
      <button onClick={() => updateTodo(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
