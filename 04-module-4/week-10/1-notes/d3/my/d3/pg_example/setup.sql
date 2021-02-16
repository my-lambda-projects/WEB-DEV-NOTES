DROP DATABASE IF EXISTS breadit;

CREATE DATABASE breadit;

\c breadit

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50)
);

CREATE TABLE subbreadits (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(50)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  breadit_id INTEGER references subbreadits(id),
  user_id INTEGER references users(id),
  image_url VARCHAR(255),
  content TEXT
);


INSERT INTO users (username, email)
VALUES
('bob_the_baker', 'sourdoughbob@gmail.com'),
('roll_with_it', 'gina@gmail.com'),
('justLoafin', 'lancebakesbread@yahoo.com');


INSERT INTO subbreadits (topic)
VALUES 
('jokes'),
('pics'),
('recipes');


INSERT INTO posts (breadit_id, user_id, content)
VALUES
(1, 1, 'Why was the loaf of bread upset? His plans kept going a rye.'),
(1, 2, 'What does a loaf of bread say when breaking up with their significant other? You deserve butter.');