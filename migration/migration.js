export default async function createTables(connection) {
    try {
        connection.query('create database `filaru`')

      await connection.query(`
      create table if not exists alunos (
        matricula VARCHAR(20) PRIMARY KEY
      );`)
  
      await connection.query(`
      CREATE TABLE IF NOT EXISTS restaurantes (
        codigo INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(60)
      );`)
  
      await connection.query(`
      CREATE TABLE IF NOT EXISTS filas (
        codigo INT PRIMARY KEY AUTO_INCREMENT,
        restaurante_codigo INT,
        vagas_restantes INT,
        posicao_atual INT,
        data_fila DATE,
        FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo)
      );`)
  
      await connection.query(`
      CREATE TABLE IF NOT EXISTS funcionarios (
        codigo INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(60),
        data_admissao DATE
      );`)
  
      await connection.query(`
      CREATE TABLE IF NOT EXISTS pratos (
        codigo INT PRIMARY KEY AUTO_INCREMENT,
        principal VARCHAR(30),
        salada VARCHAR(30),
        carne VARCHAR(30),
        suco VARCHAR(30),
        sobremesa VARCHAR(30)
      );`)
  
      await connection.query(`
      CREATE TABLE IF NOT EXISTS cardapios (
        codigo INT PRIMARY KEY AUTO_INCREMENT,
        restaurante_codigo INT,
        data_cardapio DATE,
        pratos_codigo INT,
        FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo),
        FOREIGN KEY (pratos_codigo) REFERENCES pratos(codigo)
      );`)
  
      await connection.query(`
      CREATE TABLE IF NOT EXISTS aluno_fila (
        aluno_matricula VARCHAR(20),
        codigo_fila INT,
        posicao INT,
        FOREIGN KEY (aluno_matricula) REFERENCES alunos(matricula),
        FOREIGN KEY (codigo_fila) REFERENCES filas(codigo),
        PRIMARY KEY (aluno_matricula, codigo_fila)
      );`)
  
      await connection.query(`
      CREATE TABLE IF NOT EXISTS cardapio_prato (
        cardapio_codigo INT,
        prato_codigo INT,
        FOREIGN KEY (cardapio_codigo) REFERENCES cardapios(codigo),
        FOREIGN KEY (prato_codigo) REFERENCES pratos(codigo)
      );`)
  
      await connection.query(`INSERT INTO alunos (matricula) VALUES ('2017000001');`);
      await connection.query(`INSERT INTO alunos (matricula) VALUES ('2017000002');`);
      await connection.query(`INSERT INTO alunos (matricula) VALUES ('2017000003');`);
      
      await connection.query(`INSERT INTO restaurantes (nome) VALUES ('Restaurante Universitário Ondina');`);
      await connection.query(`INSERT INTO restaurantes (nome) VALUES ('Restaurante Universitário São Lázaro');`);
      
      await connection.query(`INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (1, 100, 1, '2017-10-01');`);
      await connection.query(`INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (1, 100, 1, '2017-10-02');`);
      await connection.query(`INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (2, 100, 1, '2017-10-03');`);
      
      await connection.query(`INSERT INTO funcionarios (nome, data_admissao) VALUES ('João', '2017-10-01');`);
      await connection.query(`INSERT INTO funcionarios (nome, data_admissao) VALUES ('Maria', '2017-10-01');`);
  
      console.log('Migrations applied!');
    } catch (error) {
      console.error('Error running migrations:', error);
  }
}