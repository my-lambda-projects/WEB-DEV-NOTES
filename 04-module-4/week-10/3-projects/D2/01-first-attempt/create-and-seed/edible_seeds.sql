-- CREATE TABLE edibleSeeds(

-- --name - VARCHAR that accepts 255 characters
-- --type - VARCHAR that accepts 255 characters
-- --price_per_pound - FLOAT or REAL
-- --in_stock - BOOLEAN
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     type VARCHAR(255) NOT NULL,
--     price_per_pound NUMERIC(4,2) NOT NULL,
--     in_stock BOOLEAN NOT NULL
-- );

 INSERT INTO edibleSeeds(name,type,price_per_pound,in_stock )
VALUES
-- ( 'Chia',	'Pseudocereal',	6.95, 'yes'),
-- ('Flax',	'Pseudocereal',	6.90,	'yes'),
-- ('Amaranth',	'Pseudocereal',	14.99,	'yes'),
-- ('Quinoa',	'Pseudocereal',	12.49,	'no'),
-- ('Sesame',	'Pseudocereal',	13.49,	'yes'),
-- ('Hemp',	'Other',	10.99,	'yes'),
-- ('Chickpea',	'Legume',	7.99,	'yes'),
-- ('Pea',	'Legume',	7.50,	'no'),
-- ('Soybean',	'Legume',	12.99,	'yes'),
-- ('Acorn',	'Nut',	11.99,	'yes'),
-- ('Almond',	'Nut',	13.99,	'yes'),
-- ('Beech',	'Nut',	10.94,	'yes'),
-- ('Chestnut',	'Nut',	13.99,	'yes');
('Water Chestnut',	'Nut',	9.99,	'no'),
('Macadamia',	'Nut',	25.00,	'yes'),
('Pistachio',	'Nut',	20.00	,'yes'),
('Pine nuts',	'Nut-like gymnosperm',	23.00,	'yes'),
('Pecan',	'Nut',	6.99,	'yes'),
('Juniper berries',	'Nut-like gymnosperm',	11.99	,'yes'),
('Cashew',	'Nut',	23.61,	'yes'),
('Hazelnut',	'Nut',	25.49,	'yes'),
('Sunflower seed',	'Other',	9.99,	'yes'),
('Poppy seed',	'Other',	12.99,	'yes'),
('Barley',	'Cereal',	9.99,	'yes'),
('Maize',	'Cereal',	6.98,	'yes'),
('Oats'	,'Cereal',	9.99	,'yes'),
('Rice',	'Cereal',	7.90,	'yes'),
('Rye',	'Cereal',	9.87,	'yes'),
('Spelt',	'Cereal',	7.50,	'yes'),
('Wheat berries',	'Cereal',	2.50,	'no'),
('Buckwheat',	'Pseudocereal',	5.60,	'yes'),
('Jackfruit',	'Other',	15.00,	'yes'),
('Durian',	'Other',	8.26,	'no'),
('Lotus seed', 'Other',	12.99,	'yes'),
('Ginko',	'Nut-like gymnosperm',	12.80,	'yes'),
('Peanut',	'Legume',	5.99,	'yes'),
('Pumpkin seed',	'Other',	5.99,	'yes'),
('Watermelon seed',	'Other',	6.99,	'yes'),
('Pomegranate seed',	'Other',	27.63,	'yes'),
('Cacao bean',	'Other',	12.99,	'yes');
