DROP DATABASE IF EXISTS `filaru`;
CREATE DATABASE `filaru`;
USE `filaru`;

DROP TABLE IF EXISTS `alunos`;
DROP TABLE IF EXISTS `filas`;
DROP TABLE IF EXISTS `restaurantes`;
DROP TABLE IF EXISTS `funcionarios`;
DROP TABLE IF EXISTS `funcionario_restaurante`;
DROP TABLE IF EXISTS `cardapios`;
DROP TABLE IF EXISTS `aluno_fila`;
DROP TABLE IF EXISTS `pratos`;
DROP TABLE IF EXISTS `cardapio_prato`;

CREATE TABLE alunos (
  matricula VARCHAR(20) PRIMARY KEY
);

CREATE TABLE restaurantes (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(60)
);

CREATE TABLE filas (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  restaurante_codigo INT,
  vagas_restantes INT,
  posicao_atual INT,
  data_fila DATE,
  FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo)
);

CREATE TABLE funcionarios (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(60),
  data_admissao DATE
);

CREATE TABLE funcionario_restaurante (
 restaurante_codigo INT,
 funcionario_codigo INT,
 FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo),
 FOREIGN KEY (funcionario_codigo) REFERENCES funcionarios(codigo),
 PRIMARY KEY (restaurante_codigo, funcionario_codigo)
);

CREATE TABLE pratos (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  principal VARCHAR(30),
  salada VARCHAR(30),
  carne VARCHAR(30),
  suco VARCHAR(30),
  sobremesa VARCHAR(30)
);

CREATE TABLE cardapios (
  codigo INT PRIMARY KEY AUTO_INCREMENT,
  restaurante_codigo INT,
  data_cardapio DATE,
  pratos_codigo INT,
  FOREIGN KEY (restaurante_codigo) REFERENCES restaurantes(codigo),
  FOREIGN KEY (pratos_codigo) REFERENCES pratos(codigo)
);

CREATE TABLE aluno_fila (
  aluno_matricula VARCHAR(20),
  codigo_fila INT,
  posicao INT,
  FOREIGN KEY (aluno_matricula) REFERENCES alunos(matricula),
  FOREIGN KEY (codigo_fila) REFERENCES filas(codigo),
  PRIMARY KEY (aluno_matricula, codigo_fila)
);

CREATE TABLE cardapio_prato (
  cardapio_codigo INT,
  prato_codigo INT,
  FOREIGN KEY (cardapio_codigo) REFERENCES cardapios(codigo),
  FOREIGN KEY (prato_codigo) REFERENCES pratos(codigo)
);

INSERT INTO alunos (matricula) VALUES ('2017000001');
INSERT INTO alunos (matricula) VALUES ('2017000002');
INSERT INTO alunos (matricula) VALUES ('2017000003');

INSERT INTO restaurantes (nome) VALUES ('Restaurante Universitário Ondina');
INSERT INTO restaurantes (nome) VALUES ('Restaurante Universitário São Lázaro');

INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (1, 100, 1, '2017-10-01');
INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (1, 100, 1, '2017-10-02');
INSERT INTO filas (restaurante_codigo, vagas_restantes, posicao_atual, data_fila) VALUES (2, 100, 1, '2017-10-03');

INSERT INTO funcionarios (nome, data_admissao) VALUES ('João', '2017-10-01');
INSERT INTO funcionarios (nome, data_admissao) VALUES ('Maria', '2017-10-01');

INSERT INTO funcionario_restaurante (restaurante_codigo, funcionario_codigo) VALUES (1, 1);
INSERT INTO funcionario_restaurante (restaurante_codigo, funcionario_codigo) VALUES (2, 2);

INSERT INTO pratos (principal, salada, carne, suco, sobremesa) VALUES ('Arroz', 'Salada', 'Carne', 'Suco', 'Sobremesa');

INSERT INTO cardapios (restaurante_codigo, data_cardapio, pratos_codigo) VALUES (1, '2017-10-01', 1);
INSERT INTO cardapios (restaurante_codigo, data_cardapio, pratos_codigo) VALUES (2, '2017-10-02', 1);

INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES ('2017000001', 1, 1);
INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES ('2017000002', 1, 2);
INSERT INTO aluno_fila (aluno_matricula, codigo_fila, posicao) VALUES ('2017000003', 2, 1);

INSERT INTO cardapio_prato (cardapio_codigo, prato_codigo) VALUES (1, 1);
INSERT INTO cardapio_prato (cardapio_codigo, prato_codigo) VALUES (2, 1);
