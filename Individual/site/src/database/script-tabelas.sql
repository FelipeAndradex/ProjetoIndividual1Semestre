-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
CREATE DATABASE GeniusMind;
USE GeniusMind;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE AreaConhecimento (
idAreaConhecimento INT PRIMARY KEY AUTO_INCREMENT,
NomeArea VARCHAR(45),
fkUsuarioConhecimento INT,
CONSTRAINT fkUsuarioConhecimento FOREIGN KEY(fkUsuarioConhecimento)
REFERENCES Usuario(idUsuario)
) AUTO_INCREMENT = 1000;

CREATE TABLE Quizz (
idQuizz INT PRIMARY KEY AUTO_INCREMENT,
Nota DECIMAL(5,2),
fkUsuario INT,
CONSTRAINT fkUsuario FOREIGN KEY(fkUsuario)
REFERENCES Usuario(idUsuario)
) AUTO_INCREMENT = 500;

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
