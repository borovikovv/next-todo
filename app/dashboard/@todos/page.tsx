import { Todo as TodoType } from "../../types";
import { api } from "../../utils";
import { Todo } from "@/app/components/todo";

export default async function Todos() {
  const { todos } = await api<{ todos: TodoType[] }>('https://dummyjson.com/todos');

  return (
    <div>
      <ul className="flex gap-1 flex-col p-2">
        {
          todos.map((todo) =>  {
            return <Todo todo={todo} />
          })
        }
      </ul>
    </div>
  );
}