import React, { FormEventHandler, useRef } from "react";
import { TodoItem } from "./TodoList";
import { nanoid } from "nanoid";

interface Props {
  addTodo: (todo: TodoItem) => void;
}

function NewTodoForm({ addTodo }: Props) {
  const todoRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (todoRef.current?.value) {
      const newTodo: TodoItem = {
        id: nanoid(),
        item: todoRef.current.value,
        isDone: false,
      };

      addTodo(newTodo);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="todoInput">New Todo</label>
        <br /> */}

        <input
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="New Todo"
          ref={todoRef}
        />

        <button type="submit" title="Add Todo">
          ADD TODO
        </button>
      </form>
    </>
  );
}

export default NewTodoForm;
