const QUERY = {
  GET_ALL: 'SELECT * FROM cardapios',
  GET_ONE: 'SELECT * FROM cardapios WHERE codigo = ?',
  CREATE: 'INSERT INTO cardapios (restaurante_codigo, data_cardapio) VALUES (?, ?)',
  DELETE: 'DELETE FROM cardapios WHERE codigo = ?',
}

export default QUERY;

