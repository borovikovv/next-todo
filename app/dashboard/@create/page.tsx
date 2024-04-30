import { SubmitButton } from "./SubmitForm";
import { createTodo } from "../../../lib/actions";

export default async function Create() { 
  return (
    <div className="mt-5">
      <form action={createTodo} className="flex gap-2">
        <textarea name="todo" />
        <SubmitButton />
      </form>
    </div>
  )
}