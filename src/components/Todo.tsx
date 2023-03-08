import React, { MouseEventHandler } from "react";
import { TodoItem } from "./TodoList";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface Props {
  todo: TodoItem;
  handleIsDone: (todoId: string, isDone: boolean) => void;
  editTodo: (todoId: string, text: string) => void;
  deleteTodo: (todoId: string) => void;
}

function Todo({ todo, handleIsDone, deleteTodo, editTodo }: Props) {
  const handleIsChecked: MouseEventHandler = (e) => {
    handleIsDone(todo.id, !todo.isDone);
  };

  const handleDelete: MouseEventHandler = (e) => {
    deleteTodo(todo.id);
  };

  const handleEdit: MouseEventHandler = (e) => {};

  return (
    <div
      style={{
        textDecoration: todo.isDone ? "line-through" : "",
        cursor: "pointer",
      }}
      onClick={handleIsChecked}
    >
      <span>{todo.item}</span>

      <span className="icons">
        <button title="Edit Todo" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button onClick={handleDelete} title="Delete Todo">
          <FaTrashAlt />
        </button>
      </span>
    </div>
  );
}

export default Todo;
