const QUERY = {
  GET_ALL: 'SELECT * FROM funcionario_restaurante',
  GET_ONE: 'SELECT * FROM funcionario_restaurante WHERE restaurante_codigo = ? AND funcionario_codigo = ?',
  CREATE: 'INSERT INTO funcionario_restaurante (restaurante_codigo, funcionario_codigo) VALUES (?, ?)',
  DELETE: 'DELETE FROM funcionario_restaurante WHERE restaurante_codigo = ? AND funcionario_codigo = ?',
}

export default QUERY;

