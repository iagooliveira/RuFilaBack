const QUERY = {
  GET_ALL: 'SELECT * FROM alunos',
  GET_ONE: 'SELECT * FROM alunos WHERE matricula = ?',
  CREATE: 'INSERT INTO alunos (matricula) VALUES (?)',
  DELETE: 'DELETE FROM alunos WHERE matricula = ?',
}

export default QUERY;
