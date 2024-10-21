CREATE DATABASE atividade_10;
USE atividade_10;

CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  course VARCHAR(100) NOT NULL,
  level INT DEFAULT 1,
  age INT NOT NULL
);

CREATE TABLE class (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  classroom VARCHAR(255) NOT NULL,
  time VARCHAR(10) NOT NULL
);

CREATE TABLE register (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  class_id INT,
  grade_1 FLOAT NOT NULL,
  grade_2 FLOAT NOT NULL,
  grade_3 FLOAT NOT NULL,
  final_grade FLOAT NOT NULL,
  absences INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (class_id) REFERENCES class(id)
);

INSERT INTO student (name, course, level, age) VALUES
('Nico De la Cruz', 'Engenharia de Software', 3, 27),
('Giorgian De Arrascaeta', 'Engenharia de Software', 3, 30),
('Pedro Guilherme', 'Ciência da Computação', 2, 27),
('Bruno Henrique', 'Ciência da Computação', 2, 33),
('Gerson Santos', 'Sistemas de Informação', 4, 27),
('Léo Pereira', 'Sistemas de Informação', 4, 28),
('Léo Ortiz', 'Engenharia Elétrica', 1, 28),
('Erick Pulgar', 'Engenharia Elétrica', 1, 30),
('Luiz Araújo', 'Administração', 2, 28),
('Gabriel Barbosa', 'Administração', 2, 28),
('Fabrício Bruno', 'Direito', 3, 28),
('David Luiz', 'Direito', 3, 37),
('Ayrton Lucas', 'Medicina', 5, 27),
('Gonçalo Plata', 'Medicina', 5, 23),
('Everton Cebolinha', 'Psicologia', 1, 28),
('Agustin Rossi', 'Psicologia', 1, 29),
('Wesley', 'Jornalismo', 3, 21),
('Michael', 'Jornalismo', 3, 28),
('Allan', 'Design', 2, 27),
('Carlos Alcaraz', 'Design', 2, 21),
('PATOLINO', 'Engenharia de Software', 3, 42),
('Diego Alves', 'Engenharia de Software', 3, 40),
('Diego Ribas', 'Engenharia de Software', 3, 40),
('Filipe Luis', 'Engenharia de Software', 3, 40);

INSERT INTO class (name, classroom, time) VALUES
('Engenharia de Software 101', 'Sala 12', '08:00'),
('Ciência da Computação 101', 'Sala 14', '10:00'),
('Sistemas de Informação 101', 'Sala 16', '14:00'),
('Administração 101', 'Sala 18', '16:00');

INSERT INTO register (student_id, class_id, grade_1, grade_2, grade_3, final_grade, absences) VALUES
(1, 1, 9.0, 8.5, 9.5, (9.0 + 8.5 + 9.5) / 3, 2),
(2, 1, 7.5, 8.0, 7.0, (7.5 + 8.0 + 7.0) / 3, 3),
(3, 2, 8.5, 9.0, 8.0, (8.5 + 9.0 + 8.0) / 3, 1),
(4, 2, 6.5, 7.0, 6.0, (6.5 + 7.0 + 6.0) / 3, 4),
(5, 3, 9.5, 9.0, 10.0, (9.5 + 9.0 + 10.0) / 3, 0),
(6, 3, 8.0, 7.5, 7.0, (8.0 + 7.5 + 7.0) / 3, 2),
(7, 1, 6.0, 7.0, 5.5, (6.0 + 7.0 + 5.5) / 3, 5),
(8, 1, 7.5, 8.5, 7.0, (7.5 + 8.5 + 7.0) / 3, 1),
(9, 4, 9.0, 8.0, 9.5, (9.0 + 8.0 + 9.5) / 3, 2),
(10, 4, 6.5, 7.5, 8.0, (6.5 + 7.5 + 8.0) / 3, 3),
(11, 2, 8.0, 9.0, 8.5, (8.0 + 9.0 + 8.5) / 3, 1),
(12, 2, 7.5, 7.0, 8.0, (7.5 + 7.0 + 8.0) / 3, 0),
(13, 3, 9.0, 8.5, 9.0, (9.0 + 8.5 + 9.0) / 3, 2),
(14, 3, 8.5, 7.5, 8.0, (8.5 + 7.5 + 8.0) / 3, 4),
(15, 1, 6.5, 6.0, 7.0, (6.5 + 6.0 + 7.0) / 3, 3),
(16, 1, 8.0, 8.5, 9.0, (8.0 + 8.5 + 9.0) / 3, 1),
(17, 4, 9.5, 9.0, 8.5, (9.5 + 9.0 + 8.5) / 3, 0),
(18, 4, 7.0, 6.5, 7.5, (7.0 + 6.5 + 7.5) / 3, 3),
(19, 2, 8.0, 7.5, 9.0, (8.0 + 7.5 + 9.0) / 3, 1),
(20, 2, 7.0, 8.0, 7.5, (7.0 + 8.0 + 7.5) / 3, 2),
(21, 2, 7.0, 8.0, 7.5, (7.0 + 8.0 + 7.5) / 3, 2),
(22, NULL, 7.0, 8.0, 7.5, (7.0 + 8.0 + 7.5) / 3, 2),
(23, NULL, 7.0, 8.0, 7.5, (7.0 + 8.0 + 7.5) / 3, 2),
(24, NULL, 7.0, 8.0, 7.5, (7.0 + 8.0 + 7.5) / 3, 2);


# Nomes de todos os alunos
SELECT student.name FROM student;

# Número de matrícula dos alunos
SELECT register.id, student.name
FROM register
JOIN student 
ON register.student_id = student.id;

# Número de matrícula de alunos que não estão matriculados em uma turma
SELECT register.id, student.name 
FROM register
JOIN student 
ON register.student_id = student.id
WHERE class_id IS NUll;

# Número de alunos matriculados em uma turma de número 30
SELECT register.id, student.name
FROM register
JOIN student 
ON register.student_id = student.id
WHERE register.class_id = 30;

# Número de alunos matriculados em uma turma de número 1
SELECT register.id, student.name
FROM register
JOIN student 
ON register.student_id = student.id
WHERE register.class_id = 1;

# Horário da turma do aluno 'PATOLINO'
SELECT class.time
FROM register
JOIN student 
ON register.student_id = student.id
JOIN class 
ON register.class_id = class.id
WHERE student.name = 'PATOLINO';
