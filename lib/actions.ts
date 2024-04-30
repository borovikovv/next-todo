"use server";

import { Todo } from "@/app/types";
import { createTodo, editTodo, deleteTodo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function createTodoAction(todo: Todo) {
  try {
    await createTodo(todo);
    revalidatePath('/dashboard');
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Create failed" };
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

export async function deleteTodoAction(todo: Todo) {
  if(!todo.id) return { success: false, error: "User hasn't id, failed" }
  try {
    await deleteTodo(todo.id);
    revalidatePath('/dashboard');
  } catch(err) {
    console.error(err);
  }
}