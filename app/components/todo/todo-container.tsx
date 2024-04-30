"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import clx from 'classnames';

import { Todo } from "./todo";
import { Todo as TodoType } from "@/app/types";
import { deleteTodoAction, editTodoAction } from "@/lib/actions";
import { SubmitForm } from "./SubmitForm";

type Props = {
  todo: TodoType;
}

export function TodoContainer({ todo }: Props) {
  const [selected, setSelected] = useState(false);
  const [value, changeValue] = useState(todo.todo);
  const editTodoActionWithTodo = editTodoAction.bind(null, {...todo, todo: value});
  const [state, formAction] = useFormState(editTodoActionWithTodo, null);

  useEffect(() => {
    if(state?.success) {
      setSelected(false);
    }
  }, [state])

  const onSelect = () => {
    setSelected(!selected);
  }

  const onComplete = () => {
    editTodoAction({ ...todo, completed: !!todo.completed ? 0 : 1 });
  }

  const onDelete = () => {
    deleteTodoAction(todo);
  }

  return (
    <>
      <li>
        <Todo todo={todo}>
          <button onClick={onDelete} className="btnDanger">Delete</button>
          <button onClick={onComplete} className={clx("ml-3", {
            "btnSecondary": todo.completed,
            "btnSuccess": !todo.completed,
          })}>{todo.completed ? "Undo" : "Complete"}</button>
          <button onClick={onSelect} className="btnPrimary ml-3">{selected ? "Close" : "Edit"}</button>
        </Todo>
      </li>
      {selected ? (
        <form action={formAction}>
          <input
            onChange={(e) => changeValue(e.target.value)}
            value={value}
            name="todo"
          />
          <SubmitForm />
        </form>
      ) : null}
      {state?.error ? <p>{state.error}</p> : null}
    </>
  );
}