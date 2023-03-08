import React, { FormEventHandler, MouseEventHandler, useState } from "react";
import { TodoItem } from "./TodoList";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface Props {
  todo: TodoItem;
  handleIsDone: (todoId: string, isDone: boolean) => void;
  editTodo: (todoId: string, text: string) => void;
  deleteTodo: (todoId: string) => void;
}

function Todo({ todo, handleIsDone, deleteTodo, editTodo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [textInput, setTextInput] = useState(todo.item);

  const handleIsChecked: MouseEventHandler = (e) => {
    handleIsDone(todo.id, !todo.isDone);
  };

  const handleDelete: MouseEventHandler = (e) => {
    deleteTodo(todo.id);
  };

  const toggleForm: MouseEventHandler = (e) => {
    setIsEditing(true);
  };

  const handleUpdate: FormEventHandler = (e) => {
    e.preventDefault();
    editTodo(todo.id, textInput);
    setIsEditing(false);
  };

  const renderTodo = () => {
    return (
      <div
        style={{
          textDecoration: todo.isDone ? "line-through" : "",
          color: todo.isDone ? "lightgrey" : "",
          cursor: "pointer",
        }}
        onClick={handleIsChecked}
      >
        <span>{todo.item}</span>

        <span className="icons">
          <button title="Edit Todo" onClick={toggleForm}>
            <FaEdit />
          </button>
          <button onClick={handleDelete} title="Delete Todo">
            <FaTrashAlt />
          </button>
        </span>
      </div>
    );
  };

  const renderEditForm = () => {
    return (
      <div>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="todoInput"
            id="todoInput"
            placeholder={todo.item}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button type="submit">SAVE</button>
        </form>
      </div>
    );
  };

  return <>{!isEditing ? renderTodo() : renderEditForm()}</>;
}

export default Todo;
