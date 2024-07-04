import { Low, JSONFile } from 'lowdb';

// Inicializar la base de datos JSON con el adaptador de archivo
const adapter = new JSONFile('data/users.json');
const db = new Low(adapter);

// Leer la base de datos y establecer valores predeterminados si está vacía
await db.read();
db.data ||= { users: [] };
await db.write();

export default db;
