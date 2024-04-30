import fs from 'node:fs';
import sql from 'better-sqlite3';
import { Todo } from '@/app/types';

const db = sql('todos.db');

export async function getTodos() {
  return db.prepare('SELECT * FROM todos').all();
}

export async function getTodoById(id: number) {
  return db.prepare('SELECT * FROM todos WHERE id = ?').get(id);
} 

export async function deleteTodo(id: number) {
  return db.prepare('DELETE FROM todos WHERE id = ?').run(id);
}

export async function editTodo(todo: Todo) {
  const stmt = db.prepare(`
    UPDATE todos SET todo = ?, completed = ? WHERE id = ?`);
    stmt.run(todo.todo, todo.completed, todo.id);
}