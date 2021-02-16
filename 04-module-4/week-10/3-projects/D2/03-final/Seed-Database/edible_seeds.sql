CREATE TABLE edibleSeeds
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    price_per_pound INTEGER NOT NULL,
    in_stock BOOLEAN NOT NULL DEFAULT FALSE
);
INSERT INTO edibleSeeds
    (id, name, type, price_per_pound, in_stock
    )
VALUES
    (1, 'Chia', 'Pseudocereal', 6.95, yes),
    (2, 'Flax', 'Pseudocereal', 6.90,   yes),
    (3, 'Amaranth', 'Pseudocereal', 14.99,  yes),
    (4, 'Quinoa',   'Pseudocereal', 12.49,  no),
    (5, 'Sesame',   'Pseudocereal', 13.49,  yes),
    (6, 'Hemp', 'Other',    10.99,  yes),
    (7, 'Chickpea', 'Legume',   7.99,   yes),
    (8, 'Pea    Legume',    7.50,   no),
    (9, 'Soybean    Legume',    12.99,  yes),
    (10, 'Acorn',   'Nut'   11.99,  yes),
    (11, 'Almond',  'Nut'   13.99,  yes),
    (12, 'Beech',   'Nut'   10.94,  yes),
    (13, 'Chestnut',    'Nut'   13.99,  yes),
    (14, 'Water Chestnut',  'Nut'   9.99,   no),
    (15, 'Macadamia',   'Nut'   25.00,  yes),
    (16, 'Pistachio',   'Nut',  20.00,  yes),
    (17, 'Pine nuts',   'Nut-like gymnosperm',  23.00,  yes),
    (18, 'Pecan',   'Nut', 6.99,    yes),
    (19, 'Juniper berries', 'Nut-like gymnosperm',  11.99,  yes),
    (20, 'Cashew',  'Nut',  23.61,  yes),
    (21, 'Hazelnut',    'Nut',  25.49,  yes),
    (22, 'Sunflower seed',  'Other',    9.99,   yes),
    (23, 'Poppy seed',  'Other',    12.99,  yes),
    (24, 'Barley',  'Cereal',   9.99,   yes),
    (25, 'Maize',   'Cereal',   6.98,   yes),
    (26, 'Oats',    'Cereal',   9,.99,  yes),
    (27, 'Rice',    'Cereal',   7.90,   yes),
    (28, 'Rye', 'Cereal',   9.87,   yes),
    (29, 'Spelt,'   'Cereal',   7.50,   yes),
    (30, 'Wheat berries',   'Cereal',   2.50,   no),
    (31, 'Buckwheat',   'Pseudocereal', 5.60,   yes),
    (32, 'Jackfruit',   'Other',    15.00,  yes),
    (33, 'Durian',  'Other',    8.26,   no),
    (34, 'Lotus seed',  'Other',    12.99,  yes),
    (35, 'Ginko'    'Nut-like gymnosperm', 12.80,   yes),
    (36, 'Peanut',  'Legume',   5.99,   yes),
    (37, 'Pumpkin seed',    'Other',    5.99,   yes),
    (38,  'Watermelon seed', 'Other',   6.99,   yes),
    (39, 'Pomegraate seed', 'Other',    27.63,  yes),
    (40, 'Cacao bean', 'Other', 12.99,  yes);
















