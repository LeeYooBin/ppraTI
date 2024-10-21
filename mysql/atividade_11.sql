CREATE DATABASE atividade_11;
USE atividade_11;

CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATETIME NOT NULL,
  table_number INT NOT NULL,
  customer_name VARCHAR(255) NOT NULL
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  menu_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (menu_id) REFERENCES menu(id),
  UNIQUE (order_id, menu_id)
);

INSERT INTO menu (name, description, price) VALUES
('Espresso', 'Strong Black coffee.', 3.00),
('Cappuccino', 'Espresso with milk.', 4.50),
('Latte', 'Espresso with milk and a light layer of foam.', 4.00),
('Mocha', 'Espresso with chocolate and milk, topped with whipped cream.', 5.00),
('Americano', 'Espresso with hot water.', 3.50);

INSERT INTO orders (date, table_number, customer_name) VALUES
('2024-10-01 10:00:00', 1, 'Chris Bumstead'),
('2024-10-01 10:30:00', 2, 'Mike Sommerfield'),
('2024-10-01 10:30:00', 3, 'Urs Kalecinski'),
('2024-10-02 11:00:00', 4, 'Ramon Dino');

INSERT INTO order_items (order_id, menu_id, quantity) VALUES
(1, 1, 2),
(1, 2, 1), 
(2, 3, 1),
(2, 4, 2),
(3, 5, 1),
(3, 4, 2),
(4, 4, 3),
(4, 3, 1);


# Listagem do cardápio ordenada por nome
SELECT * 
FROM menu
ORDER BY name;

# Comandas e os itens da comanda ordenados data e código da comanda e, também o nome do café
SELECT 
  o.id AS order_id, 
  o.date, 
  o.table_number, 
  o.customer_name, 
  m.id AS menu_id, 
  m.name AS coffee_name, 
  m.description, 
  oi.quantity, 
  m.price AS unit_price, 
  (m.price * oi.quantity) AS total_price
FROM orders o
JOIN order_items oi 
ON o.id = oi.order_id
JOIN menu m 
ON oi.menu_id = m.id
ORDER BY o.date, o.id, m.name;

# Comandas com o valor total da comanda ordenada por data
SELECT 
  o.id AS order_id, 
  o.date, 
  o.table_number, 
  o.customer_name,
  SUM(m.price * oi.quantity) AS total_order_value
FROM orders o
JOIN order_items oi 
ON o.id = oi.order_id
JOIN menu m 
ON oi.menu_id = m.id
GROUP BY o.id
ORDER BY o.date;

# Comandas com mais de um tipo de café
SELECT 
  o.id AS order_id, 
  o.date, 
  o.table_number, 
  o.customer_name,
  SUM(m.price * oi.quantity) AS total_order_value
FROM orders o
JOIN order_items oi 
ON o.id = oi.order_id
JOIN menu m 
ON oi.menu_id = m.id
GROUP BY o.id
HAVING COUNT(DISTINCT oi.menu_id) > 1
ORDER BY o.date;

# Total de faturamento por data
SELECT 
  DATE(o.date) AS sale_date, 
  SUM(m.price * oi.quantity) AS total_revenue
FROM orders o
JOIN order_items oi 
ON o.id = oi.order_id
JOIN menu m 
ON oi.menu_id = m.id
GROUP BY sale_date
ORDER BY sale_date;
