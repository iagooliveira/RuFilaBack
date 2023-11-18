const QUERY = {
  GET_ALL: 'SELECT * FROM pratos',
  GET_ONE: 'SELECT * FROM pratos WHERE codigo = ?',
  CREATE: 'INSERT INTO pratos (principal, salada, carne, suco, sobremesa) VALUES (?, ?, ?, ?, ?)',
  DELETE: 'DELETE FROM pratos WHERE codigo = ?',
}

export default QUERY;

