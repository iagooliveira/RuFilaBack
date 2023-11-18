const QUERY = {
  GET_ALL: 'SELECT * FROM funcionarios',
  GET_ONE: 'SELECT * FROM funcionarios WHERE codigo = ?',
  CREATE: 'INSERT INTO funcionarios (nome, data_admissao) VALUES (?, ?)',
  DELETE: 'DELETE FROM funcionarios WHERE codigo = ?',
}

export default QUERY;

