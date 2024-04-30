"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

import { Todo } from "./todo";
import { Todo as TodoType } from "@/app/types";
import { editTodoAction } from "@/app/dashboard/@create/actions";

type Props = {
  todo: TodoType;
}

export function TodoContainer({ todo }: Props) {
  const [selected, setSelected] = useState(false);
  const [value, changeValue] = useState(todo.todo);
  const { pending } = useFormStatus();
  const editTodoActionWthTodo = editTodoAction.bind(null, {...todo, todo: value});

  const onSelect = () => {
    setSelected(!selected);
  }

  return (
    <>
      <li onClick={onSelect}>
        <Todo todo={todo} />
      </li>
      {selected ? (
        <form action={editTodoActionWthTodo}>
          <input onChange={(e) => changeValue(e.target.value)} value={value} name="todo" />
          <button className="btnPrimary ml-2" disabled={pending} type="submit">Edit</button>
        </form>
      ) : null}
    </>
  );
}