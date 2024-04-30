"use server";

import { Todo } from "@/app/types";
import { editTodo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const todoBody = formData.get("todo");

  try {
    void fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: todoBody,
        completed: false,
        userId: 5,
      })
    })
  } catch (err) {
    console.error(err);
  }
}

export async function editTodoAction(todo: Todo) {
  try {
    await editTodo(todo);
    revalidatePath('/dashboard');

    return { success: true };
  } catch(err) {
    console.error(err);
    return { success: false, error: "Update failed" };
  }
}