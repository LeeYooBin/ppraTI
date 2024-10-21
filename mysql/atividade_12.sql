CREATE DATABASE atividade_12;
USE atividade_12;

CREATE TABLE teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL,
  degree VARCHAR(100) NOT NULL,
  phone_numbers TEXT NOT NULL
);

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  registration_code VARCHAR(10) NOT NULL UNIQUE,
  registration_date DATE NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  birth_date DATE NOT NULL,
  height DECIMAL(3, 2) NOT NULL,
  weight DECIMAL(5, 2) NOT NULL
);

CREATE TABLE classes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_count INT NOT NULL,
  class_time TIME NOT NULL,
  duration INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  course_type VARCHAR(100) NOT NULL,
  teacher_id INT NOT NULL,
  monitor_id INT,
  FOREIGN KEY (teacher_id) REFERENCES teachers(id),
  FOREIGN KEY (monitor_id) REFERENCES students(id)
);

CREATE TABLE absences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  class_id INT NOT NULL,
  absence_date DATE NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (class_id) REFERENCES classes(id)
);

INSERT INTO teachers (cpf, name, birth_date, degree, phone_numbers) VALUES
('12345678901', 'Arnold Schwarzenegger', '1947-07-30', 'Masters', '1234-5678'),
('23456789012', 'Frank Zane', '1942-06-28', 'Masters', '2345-6789'),
('34567890123', 'Sergio Oliva', '1941-07-30', 'PhD', '3456-7890'),
('45678901234', 'Lee Haney', '1959-11-11', 'PhD', '4567-8901');

INSERT INTO students (registration_code, registration_date, name, address, phone, birth_date, height, weight) VALUES
('A001', '2024-01-10', 'Chris Bumstead', '123 Muscle St', '555-1111', '1995-02-02', 1.80, 85.00),
('A002', '2024-01-15', 'Ramon Dino', '456 Fitness Rd', '555-2222', '1995-01-01', 1.79, 80.00),
('A003', '2024-01-20', 'Terrence Ruffin', '789 Strength Blvd', '555-3333', '1995-03-03', 1.76, 82.00),
('A004', '2024-01-25', 'Breon Ansley', '321 Power Ave', '555-4444', '1991-05-30', 1.75, 79.00),
('A005', '2024-01-30', 'Mike Sommerfield', '654 Fit St', '555-5555', '1990-12-15', 1.78, 77.00),
('A006', '2024-02-05', 'Urs Kalecinski', '789 Elite Rd', '555-6666', '1996-05-20', 1.83, 88.00),
('A007', '2024-02-10', 'Dorian Yates', '654 Power St', '555-7777', '1962-11-19', 1.80, 110.00),
('A008', '2024-02-15', 'Phil Heath', '321 Muscle Ave', '555-8888', '1979-12-02', 1.78, 102.00),
('A009', '2024-02-20', 'Jay Cutler', '789 Fit Blvd', '555-9999', '1973-08-03', 1.78, 113.00),
('A010', '2024-02-25', 'Kai Greene', '987 Body St', '555-1010', '1975-07-12', 1.85, 115.00);

INSERT INTO classes (student_count, class_time, duration, start_date, end_date, course_type, teacher_id, monitor_id) VALUES
(30, '10:00:00', 60, '2024-02-01', '2024-05-01', 'Bodybuilding Basics', 1, 1),
(20, '14:00:00', 90, '2024-02-01', '2024-05-01', 'Advanced Bodybuilding', 2, 2),
(25, '09:00:00', 120, '2024-02-01', '2024-05-01', 'Nutrition for Bodybuilders', 3, 3),
(15, '08:00:00', 60, '2024-02-01', '2024-05-01', 'Classic Physique Training', 4, 4),
(10, '16:00:00', 90, '2024-02-01', '2024-05-01', 'Strength Training Techniques', 1, 5),
(12, '18:00:00', 120, '2024-02-01', '2024-05-01', 'Nutrition and Recovery', 2, 6),
(18, '19:00:00', 75, '2024-02-01', '2024-05-01', 'Competition Prep', 3, 7),
(22, '20:00:00', 90, '2024-02-01', '2024-05-01', 'Bodybuilding Techniques', 4, 8);

INSERT INTO absences (student_id, class_id, absence_date) VALUES
(1, 1, '2024-02-10'),
(2, 2, '2024-02-15'),
(3, 3, '2024-02-20'),
(4, 1, '2024-02-25'),
(5, 2, '2024-03-01'),
(6, 3, '2024-03-05'),
(7, 4, '2024-03-10'),
(8, 5, '2024-03-15'),
(9, 6, '2024-03-20'),
(10, 7, '2024-03-25'),
(1, 8, '2024-04-01');


-- Lista dos alunos
SELECT * FROM students;

-- Lista de alunos e turmas em que estão matriculados
SELECT 
  s.id AS student_id,
  s.name AS student_name,
  c.id AS class_id,
  c.course_type,
  c.class_time,
  c.start_date,
  c.end_date
FROM students s
JOIN classes c 
ON s.id = c.monitor_id;

-- Lista de alunos sem falta
SELECT s.*
FROM students s
LEFT JOIN absences a 
ON s.id = a.student_id
GROUP BY s.id
HAVING COUNT(a.id) = 0;

-- Lista de professores e quantidade de turma
SELECT 
  t.id AS teacher_id, 
  t.name AS teacher_name, 
  COUNT(c.id) AS class_count
FROM teachers t
LEFT JOIN classes c 
ON t.id = c.teacher_id
GROUP BY t.id;

-- Lista de professores com os dados
SELECT 
  t.name AS teacher_name,
  SUBSTRING_INDEX(t.phone_numbers, ',', 1) AS phone_number, 
  c.id AS class_id, 
  c.start_date, 
  c.end_date, 
  c.class_time, 
  c.course_type, 
  s.name AS student_name
FROM teachers t
JOIN classes c 
ON t.id = c.teacher_id
JOIN students s 
ON c.monitor_id = s.id
ORDER BY t.name, c.id, s.name;

-- Altera o nome dos professores
UPDATE teachers SET name = UPPER(name);

-- Nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo
UPDATE students 
SET name = UPPER(name)
WHERE id IN (
  SELECT monitor_id 
  FROM classes 
  WHERE student_count = (SELECT MAX(student_count) FROM classes)
);

-- Exclui as ausências dos alunos nas turmas que estes são monitores
DELETE FROM absences 
WHERE student_id IN (
  SELECT monitor_id 
  FROM classes
);
