const QUERY = {
  GET_ALL: 'SELECT * FROM cardapio_prato',
  GET_ONE: 'SELECT * FROM cardapio_prato WHERE cardapio_codigo = ? AND prato_codigo = ?',
  CREATE: 'INSERT INTO cardapio_prato (cardapio_codigo, prato_codigo) VALUES (?, ?)',
  DELETE: 'DELETE FROM cardapio_prato WHERE cardapio_codigo = ? AND prato_codigo = ?',
}

export default QUERY;

