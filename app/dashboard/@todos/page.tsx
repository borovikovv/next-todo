import { Todo as TodoType } from "../../types";
import { TodoContainer } from "@/app/components/todo";
import { getTodos } from'@/lib/todos';

export default async function Todos() {
  const todos = await getTodos() as TodoType[];

  return (
    <div>
      <ul className="flex gap-1 flex-col p-2">
        {
          todos.map((todo) =>  {
            return <TodoContainer key={todo.id} todo={todo} />
          })
        }
      </ul>
    </div>
  );
}