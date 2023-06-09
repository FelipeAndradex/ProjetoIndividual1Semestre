CREATE DATABASE GeniusMind;
USE GeniusMind;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE Login (
    idLogin INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT UNIQUE,
    CONSTRAINT fkUsuario FOREIGN KEY(fkUsuario) REFERENCES Usuario (idUsuario)
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

ALTER TABLE Usuario
ADD CONSTRAINT fkLogin FOREIGN KEY (idUsuario) REFERENCES Login (fkUsuario);
