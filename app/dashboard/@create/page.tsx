"use client";

import { useEffect, useState } from 'react';
import { useFormState } from "react-dom";
import { SubmitButton } from "./SubmitForm";
import { createTodoAction } from "../../../lib/actions";

export default function Create() { 
  const [todoValue, setTodoValue] = useState('');
  const createTodoActionWithTodo = createTodoAction.bind(null, {todo: todoValue, completed: 0, user_id: 4 });
  const [state, formAction] = useFormState(createTodoActionWithTodo, null);

  useEffect(() => {
    if(state?.success) {
      setTodoValue("");
    }
  }, [state])

  return (
    <div className="mt-5">
      <form action={formAction} className="flex gap-2">
        <textarea onChange={(e) => setTodoValue(e.target.value)} value={todoValue} name="todo" />
        <SubmitButton disabled={!todoValue} />
      </form>
    </div>
  )
}