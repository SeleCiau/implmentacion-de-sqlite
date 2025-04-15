import * as SQLite from 'expo-sqlite';

type Lectura = {
  id: number;
  ph: number;
  turbidez: number;
  fecha: string;
};

const db = SQLite.openDatabaseSync('lecturas.db');

export const initDatabase = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS lecturas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ph REAL,
        turbidez REAL,
        fecha TEXT
      );
    `);
    console.log('Tabla creada correctamente');
  } catch (error) {
    console.error('Error al crear tabla:', error);
  }
};

export const insertarLectura = async (ph: number, turbidez: number, fecha: string) => {
  try {
    await db.runAsync(
      'INSERT INTO lecturas (ph, turbidez, fecha) VALUES (?, ?, ?)',
      [ph, turbidez, fecha]
    );
    console.log('Lectura insertada correctamente');
  } catch (error) {
    console.error('Error al insertar lectura:', error);
  }
};

export const obtenerLecturas = async (callback: (data: Lectura[]) => void) => {
  try {
    const result = await db.getAllAsync<Lectura>(
      'SELECT * FROM lecturas ORDER BY fecha DESC'
    );
    callback(result);
  } catch (error) {
    console.error('Error al obtener lecturas:', error);
    callback([]);
  }
};

export const actualizarLectura = async (id: number, ph: number, turbidez: number) => {
  const fecha = new Date().toISOString();  // Aquí usamos la fecha y hora actual
  try {
    await db.runAsync(
      'UPDATE lecturas SET ph = ?, turbidez = ?, fecha = ? WHERE id = ?',
      [ph, turbidez, fecha, id]
    );
    console.log('Lectura actualizada correctamente');
  } catch (error) {
    console.error('Error al actualizar lectura:', error);
  }
};

// Función para eliminar una lectura
export const eliminarLectura = async (id: number) => {
  try {
    await db.runAsync('DELETE FROM lecturas WHERE id = ?', [id]);
    console.log('Lectura eliminada correctamente');
  } catch (error) {
    console.error('Error al eliminar lectura:', error);
  }
};
