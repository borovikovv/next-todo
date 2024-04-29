const sql = require('better-sqlite3');
const db = sql('todos.db');

const dummyTodos = [
  {
    id: 1,
    todo: "First dummy todo",
    completed: 0,
    user_id: 1,
  },
  {
    id: 2,
    todo: "Second dummy todo",
    completed: 0,
    user_id: 2,
  },
  {
    id: 3,
    todo: "Third dummy todo",
    completed: 0,
    user_id: 3,
  },
  {
    id: 4,
    todo: "Last dummy todo",
    completed: 0,
    user_id: 1,
  }
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS todos (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       todo TEXT NOT NULL,
       completed INTEGER,
       user_id INTEGER
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO todos VALUES (
         null,
         @todo,
         @completed,
         @user_id
      )
   `);

  for (const todo of dummyTodos) {
    stmt.run(todo);
  }
}

initData();