CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255),
  state VARCHAR(255),
  population_estimate_2018 INT,
  population_census_2010 INT,
  land_area_sq_mi_2016 FLOAT,
  pop_density_per_sq_mi_2016 INT
);

INSERT INTO cities VALUES(DEFAULT, 'New York', 'New York',	8398748, 8175133, 301.5, 28317);
INSERT INTO cities VALUES(DEFAULT, 'Los Angeles', 'California', 3990456, 3792621,	468.7, 8484);
INSERT INTO cities VALUES(DEFAULT, 'Chicago', 'Illinois',	2705994, 2695598, 227.3, 11900);
INSERT INTO cities VALUES(DEFAULT, 'Houston', 'Texas', 2325502,	2100263, 637.5, 3613);
INSERT INTO cities VALUES(DEFAULT, 'Phoenix', 'Arizona', 1660272,	1445632, 517.6, 3120);
INSERT INTO cities VALUES(DEFAULT, 'Philadelphia', 'Pennsylvania', 1584138,	1526006, 134.2, 11683);
INSERT INTO cities VALUES(DEFAULT, 'San Antonio', 'Texas', 1532233,	1327407, 461.0, 3238);
INSERT INTO cities VALUES(DEFAULT, 'San Diego', 'California',	1425976, 1307402, 325.2, 4325);	
INSERT INTO cities VALUES(DEFAULT, 'Dallas', 'Texas',	1345047, 1197816, 340.9, 3866);
INSERT INTO cities VALUES(DEFAULT, 'San Jose', 'California', 1030119,	945942, 177.5, 5777);	
INSERT INTO cities VALUES(DEFAULT, 'Austin', 'Texas',	964254, 790390, 312.7, 3031);
INSERT INTO cities VALUES(DEFAULT, 'Jacksonville', 'Florida',	903889,	821784,	747.4, 1178);
INSERT INTO cities VALUES(DEFAULT, 'Fort Worth', 'Texas',	895008,	741206, 342.9, 2491);
INSERT INTO cities VALUES(DEFAULT, 'Columbus', 'Ohio', 892533, 787033, 218.5, 3936);
INSERT INTO cities VALUES(DEFAULT, 'San Francisco', 'California',	883305,	805235,	46.9, 18569);	
INSERT INTO cities VALUES(DEFAULT, 'Charlotte', 'North Carolina',	872498,	731424,	305.4, 2757);
INSERT INTO cities VALUES(DEFAULT, 'Indianapolis', 'Indiana',	867125,	820445,	361.5, 2366);
INSERT INTO cities VALUES(DEFAULT, 'Seattle', 'Washington',	744955,	608660, 83.8, 8405);
INSERT INTO cities VALUES(DEFAULT, 'Denver', 'Colorado', 716492,	600158,	153.3, 4521);
INSERT INTO cities VALUES(DEFAULT, 'Washington', 'District of Columbia',	702455,	601723,	61.1, 11148);
INSERT INTO cities VALUES(DEFAULT, 'Boston', 'Massachusetts',	694583,	617594,	48.3, 13938);
INSERT INTO cities VALUES(DEFAULT, 'El Paso', 'Texas', 682669,	649121,	256.8, 2660);
INSERT INTO cities VALUES(DEFAULT, 'Detroit', 'Michigan',	672662,	713777,	138.8, 4847);
INSERT INTO cities VALUES(DEFAULT, 'Nashville', 'Tennessee', 669053, 601222, 475.9, 1388);
INSERT INTO cities VALUES(DEFAULT, 'Portland', 'Oregon', 653115, 583776, 133.5, 4793);

CREATE TABLE airports (
  id SERIAL PRIMARY KEY,
  city_id INT REFERENCES cities,
  FAA_id VARCHAR(3),
  IATA_id VARCHAR(3),
  ICAO_id VARCHAR(4),
  name VARCHAR(500)
);

INSERT INTO airports VALUES(DEFAULT, 1, 'JFK',	'JFK', 'KJFK', 'John F. Kennedy International Airport');
INSERT INTO airports VALUES(DEFAULT, 1, 'LGA',	'LGA',	'KLGA',	'LaGuardia Airport');
INSERT INTO airports VALUES(DEFAULT, 2, 'LAX',	'LAX',	'KLAX',	'Los Angeles International Airport');
INSERT INTO airports VALUES(DEFAULT, 3, 'ORD',	'ORD',	'KORD',	'Chicago O''Hare International Airport');
INSERT INTO airports VALUES(DEFAULT, 3, 'MDW',	'MDW',	'KMDW',	'Chicago Midway International Airport');
INSERT INTO airports VALUES(DEFAULT, 4, 'IAH',	'IAH',	'KIAH',	'George Bush Intercontinental Airport');
INSERT INTO airports VALUES(DEFAULT, 4, 'HOU',	'HOU',	'KHOU',	'William P. Hobby Airport');
INSERT INTO airports VALUES(DEFAULT, 5, 'PHX',	'PHX',	'KPHX',	'Phoenix Sky Harbor International Airport');
INSERT INTO airports VALUES(DEFAULT, 6, 'PHL',	'PHL',	'KPHL',	'Philadelphia International Airport');
INSERT INTO airports VALUES(DEFAULT, 7, 'SAT',	'SAT',	'KSAT',	'San Antonio International Airport');
INSERT INTO airports VALUES(DEFAULT, 8, 'SAN',	'SAN',	'KSAN',	'San Diego International Airport');
INSERT INTO airports VALUES(DEFAULT, 9, 'DAL',	'DAL',	'KDAL',	'Dallas Love Field');
INSERT INTO airports VALUES(DEFAULT, 9, 'DFW',	'DFW',	'KDFW',	'Dallas/Fort Worth International Airport');
INSERT INTO airports VALUES(DEFAULT, 10, 'SJC',	'SJC',	'KSJC',	'Norman Y. Mineta San José International Airport');
INSERT INTO airports VALUES(DEFAULT, 11, 'AUS',	'AUS',	'KAUS',	'Austin-Bergstrom International Airport');
INSERT INTO airports VALUES(DEFAULT, 12, 'JAX',	'JAX',	'KJAX',	'Jacksonville International Airport');
INSERT INTO airports VALUES(DEFAULT, 13, 'DFW',	'DFW',	'KDFW',	'Dallas/Fort Worth International Airport');
INSERT INTO airports VALUES(DEFAULT, 14, 'CSG',	'CSG',	'KCSG',	'Columbus Metropolitan Airport');
INSERT INTO airports VALUES(DEFAULT, 15, 'SFO',	'SFO',	'KSFO',	'San Francisco International Airport');
INSERT INTO airports VALUES(DEFAULT, 16, 'CLT',	'CLT',	'KCLT',	'Charlotte/Douglas International Airport');
INSERT INTO airports VALUES(DEFAULT, 17, 'IND',	'IND',	'KIND',	'Indianapolis International Airport');
INSERT INTO airports VALUES(DEFAULT, 18, 'BFI',	'BFI',	'KBFI',	'King County International Airport');
INSERT INTO airports VALUES(DEFAULT, 18, 'SEA',	'SEA',	'KSEA',	'Seattle–Tacoma International Airport');
INSERT INTO airports VALUES(DEFAULT, 19, 'DEN',	'DEN',	'KDEN',	'Denver International Airport');
INSERT INTO airports VALUES(DEFAULT, 20, 'DCA',	'DCA',	'KDCA',	'Ronald Reagan Washington National Airport');
INSERT INTO airports VALUES(DEFAULT, 20, 'IAD',	'IAD',	'KIAD',	'Washington Dulles International Airport');
INSERT INTO airports VALUES(DEFAULT, 21, 'BOS',	'BOS',	'KBOS',	'Gen. Edward Lawrence Logan International Airport');
INSERT INTO airports VALUES(DEFAULT, 22, 'ELP',	'ELP',	'KELP',	'El Paso International Airport');
INSERT INTO airports VALUES(DEFAULT, 23, 'DTW',	'DTW',	'KDTW',	'Detroit Metropolitan Wayne County Airport');
INSERT INTO airports VALUES(DEFAULT, 24, 'BNA',	'BNA',	'KBNA',	'Nashville International Airport');
INSERT INTO airports VALUES(DEFAULT, 25, 'PDX',	'PDX',	'KPDX',	'Portland International Airport');