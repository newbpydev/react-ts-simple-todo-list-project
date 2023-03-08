import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import styles from "./TodoList.module.css";

export interface TodoItem {
  id: string;
  item: string;
  isDone: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: "1",
      item: "buy a car",
      isDone: false,
    },
    {
      id: "2",
      item: "change the wheel",
      isDone: true,
    },
    {
      id: "3",
      item: "learn web dev",
      isDone: false,
    },
  ]);

  const addTodo = (todo: TodoItem) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (todoId: string, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, item: text } : todo
      )
    );
  };

  const handleIsDone = (todoId: string, isDone: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === todoId ? { ...todo, isDone } : todo))
    );
  };

  const renderTodos = () => {
    return (
      <div className={styles.TodoList}>
        <h1>
          React Todo List!<span>A Simple React Todo List App.</span>
        </h1>

        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleIsDone={handleIsDone}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>

        <NewTodoForm addTodo={addTodo} />
      </div>
    );
  };

  return <div>{renderTodos()}</div>;
}

export default TodoList;
