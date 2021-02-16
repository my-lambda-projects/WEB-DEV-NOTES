DROP DATABASE IF EXISTS my_bank;

CREATE DATABASE my_bank;

\c my_bank

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  balance NUMERIC(10, 2)
);

INSERT INTO accounts (first_name, balance)
VALUES 
('Alec', 12000000),
('JM', 32);