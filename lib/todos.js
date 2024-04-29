import fs from 'node:fs';
import sql from 'better-sqlite3';

const db = sql('todos.db');

export async function getTodos() {
  return db.prepare('SELECT * FROM todos').all();
}

export async function getTodoById(slug) {
  return db.prepare('SELECT * FROM todos WHERE slug = ?').get(slug);
} 