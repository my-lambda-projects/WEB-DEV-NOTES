CREATE TABLE flower_seeds (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(300) NOT NULL, 
    main_color VARCHAR(100) NOT NULL, 
    seeds_per_packet INTEGER NOT NULL, 
    price_per_packet FLOAT NOT NULL, 
    in_stock BOOLEAN NOT NULL
); 

INSERT INTO flower_seeds 
VALUES 
(1, 'Begonia Fiona Red', 'Red', 25,	4.95,	yes),,
(2, 'Moonflower Seeds', 'White',	25,	2.95,	yes),,
(3, 'Easy Wave F1 Lavender Sky Blue Petunia Seeds', 'Lavender',	10,	4.25,	yes),,
(4, 'Super Hero Spry Marigold Seeds', 'Marigold',	50,	2.95,	no),,
(5,	'Zinnia Zinderella Lilac', 'Pink',	25,	3.95,	yes),,
(6,	'Mini Ornamental Mint Seeds', 'Green',	10,	3.95,	yes),
(7,	'Kabloom Light Pink Blast Calibrachoa', 'Green',	10,	4.95,	yes),
(8,	'Calibrachoa Kabloom Coral', 'Coral',	10,	4.95,	no),
(9,	'Fiesta del Sol Mexican Sunflower Seeds', 'Red', 30,	3.95,	no),
(10, 'Cosmos Apricot Lemonade', 'Yellow',	25,	3.95,	yes),
(11, 'Zinderella Purple Zinnia Seeds', 'Purple',	25,	3.95,	yes),
(12, 'Fireball Marigold Seeds', 'Varies',	25,	3.95,	yes),
(13, 'Gerbera Revolution Bicolor Red Lemon', 'Red', 10,	8.95,	no),
(14, 'Paradise Island Calibrachoa Fuseables Seeds', 'Varies',	5,	6.95,	yes),
(15, 'Cheyenne Spirit Coneflower Seeds', 'Varies',	15,	7.95,	no),
(16, 'Leucanthemum Madonna', 'White',	25,	4.95,	no),
(17, 'Zinnia Zinderella Peach', 'Peach',	25,	3.95,	yes),
(18, 'Kabloom Orange Calibrachoa', 'Orange',	10,	4.95,	yes),
(19, 'Fountain Blue Lobelia Seeds', 'Blue',	100,	2.50,	yes),
(20, 'Envy Zinnia Seeds', 'Green',	50,	2.95,	yes); 

