import clx from 'classnames';
import { type Todo as TodoType } from "@/app/types";

export function Todo({todo, children}: {todo: TodoType, children: React.ReactNode}) {
  return (
    <div className="rounded-md bg-white p-3 border border-gray-300 cursor-pointer">
      <p className={clx({ "line-through": !!todo.completed })}>{todo.todo}</p>
      {children}
    </div>
  );
}