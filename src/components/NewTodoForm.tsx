import React, { FormEventHandler, useRef } from "react";
import { TodoItem } from "./TodoList";
import { nanoid } from "nanoid";

import styles from "./NewTodoForm.module.css";

interface Props {
  addTodo: (todo: TodoItem) => void;
  isEditing?: boolean;
  editTodo?: (todoId: string, text: string) => void;
  todo?: TodoItem;
}

function NewTodoForm({ addTodo, isEditing = false, editTodo, todo }: Props) {
  const todoRef = useRef<HTMLInputElement>(null);

  // if (isEditing && todoRef.current?.value) {
  //   todoRef.current.value = todo.item
  // }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (todoRef.current?.value) {
      const newTodo: TodoItem = {
        id: nanoid(),
        item: todoRef.current.value,
        isDone: false,
      };

      addTodo(newTodo);
      todoRef.current.value = "";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.NewTodoForm}>
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
