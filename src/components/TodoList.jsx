import React from "react";
import { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  // 새로운 투두의 입력을 상태로 관리
  const [newTodo, setNewTodo] = useState("");

  // input 태그의 변경을 감지해 상태에 입력값을 저장
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼 제출의 기본 이벤트 막아주기(새로고침 막기) = 브라우저의 기본 동작인 페이지 리로드 막기
    // 리액트 애플리케이션에서는 폼 제출 후 페이지를 리로드할 필요가 없고, 상태만 업데이트하여 화면을 변경하기 때문에 이 메서드로 기본 동작을 방지함

    // 유효성 검사 부분: new.Todo.trim()은 사용자가 입력한 문자열의 앞뒤 공백을 제거한 후, 입력된 값이 비어 있는지 확인함.
    // 입력값이 없거나 공백만 포함되어 있다면 handleSubmit 함수는 아무 작업도 하지 않고 종료됨.
    // -> 불필요한 빈 할 일이 리스트에 추가되지 않도록 방지 -> 사용자의 실수 줄이고 데이터의 무결성 유지에 도움이 됨.
    if (!newTodo.trim()) {
      return;
    }

    // 새로운 Todo 추가 및 상태 업데이트
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: newTodo, completed: false },
    ]);

    // 입력 초기화 부분: 새로운 할 일이 추가된 후, 입력 필드를 초기화하여 빈 문자열로 설정함 = 할 일을 추가한 후 입력 필드를 자동을 비워줌
    // -> 이를 통해 사용자는 다음 할 일을 입력할 준비를 할 수 있다. = 반복적인 데이터 입력 작업을 쉽게 할 수 있도록 함 -> 사용자 경험을 향상시키는 중요한 부분
    setNewTodo("");
  };

  const handleUpdate = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, // Spread Operator로 기존 항목 복사 후,
          completed: !todo.completed, // completed 속성만 반전
        };
      } else {
        return todo; // id가 일치하지 않으면 기존 항목 그대로 반환
      }
    });

    // 새로운 배열 상태로 업데이트
    setTodos(updatedTodos);
  };

  return (
    // JSX를 리턴하는 태그는 하나여야 하기 떄문에 div로 감싸줌
    <div>
      {/* 윗 부분에 form 태그 선언 */}
      <form onSubmit={handleSubmit}>
        {/* 투두 내용을 받아올 input 태그를 선언함 */}
        <input
          type="text"
          // input과 상태값을 연결
          value={newTodo}
          // input에 입력이 들어올 때마다 상태값을 변경
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      {/* 시맨틱 html 태그인 ul(unordered list), li(list item)를 사용하여 리스트를 만듭니다. */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => handleUpdate(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
