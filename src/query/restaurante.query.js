const QUERY = {
  GET_ALL: 'SELECT * FROM restaurantes',
  GET_ONE: 'SELECT * FROM restaurantes WHERE codigo = ?',
  CREATE: 'INSERT INTO restaurantes (nome) VALUES (?)',
  DELETE: 'DELETE FROM restaurantes WHERE codigo = ?',
}

export default QUERY;
