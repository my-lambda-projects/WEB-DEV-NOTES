

## Using INNER JOIN


In relational databases, _relationships_ are key. We can create relationships, or _associations_, among tables so that they can access and share data. In a SQL database, we create table associations through _foreign keys_ and _primary keys_.

You've learned about primary and foreign keys. Now, it's time to put them to use.

## Setting up the database

Create a new database called "learn_joins". Connect to that database. Run the following SQL statements to create tables and the data in them.

    CREATE TABLE breeds (
      id SERIAL,
      name VARCHAR(50) NOT NULL,
      PRIMARY KEY (id)
    );

    INSERT INTO breeds (name)
    VALUES
    ('Australian Shepherd'),
    ('Basset Hound'),
    ('Beagle'),
    ('Corgi'),
    ('German Shepherd'),
    ('Korean Jindo'),
    ('Labradoodle'),
    ('Miniature Schnauzer'),
    ('Yorkshire Terrier');

    CREATE TABLE puppies (
      id SERIAL,
      name VARCHAR(50) NOT NULL,
      age_yrs DECIMAL(3,1) NOT NULL,
      breed_id INTEGER NOT NULL,
      weight_lbs INTEGER NOT NULL,
      microchipped BOOLEAN NOT NULL DEFAULT FALSE,
      PRIMARY KEY(id),
      FOREIGN KEY (breed_id) REFERENCES breeds(id)
    );

    INSERT INTO puppies (name, age_yrs, breed_id, weight_lbs, microchipped)
    VALUES
    ('Cooper', 1, 8, 18, true),
    ('Indie', 0.5, 9, 13, true),
    ('Kota', 0.7, 1, 26, false),
    ('Zoe', 0.8, 6, 32, true),
    ('Charley', 1.5, 2, 25, false),
    ('Ladybird', 0.6, 7, 20, true),
    ('Callie', 0.9, 4, 16, false),
    ('Jaxson', 0.4, 3, 19, true),
    ('Leinni', 1, 8, 25, true),
    ('Max', 1.6, 5, 65, false);

## Using JOIN to retrieve rows from multiple tables

Now that we've set up an association between the "puppies" table and the "friends" table, we can access data from both tables. We can do so by using a [JOIN operation](https://www.postgresql.org/docs/8.3/tutorial-join.html) in our SELECT query. Type the following into psql:

    SELECT * FROM puppies
    INNER JOIN breeds ON (puppies.breed_id = breeds.id);

The `JOIN` operation above is joining the "puppies" table with the "breeds" table together into a single table using the foreign key/primary key shared between the two tables: `breed_id`.

You should get all rows back containing all information for the puppies and breeds with matching `breed_id` values:

    postgres=# SELECT * FROM puppies
    postgres-# INNER JOIN breeds ON (puppies.breed_id = breeds.id);
     id |   name   | age_yrs | breed_id | weight_lbs | microchipped | id |        name
    ----+----------+---------+----------+------------+--------------+----+---------------------
      1 | Cooper   |     1.0 |        8 |         18 | t            |  8 | Miniature Schnauzer
      2 | Indie    |     0.5 |        9 |         13 | t            |  9 | Yorkshire Terrier
      3 | Kota     |     0.7 |        1 |         26 | f            |  1 | Australian Shepherd
      4 | Zoe      |     0.8 |        6 |         32 | t            |  6 | Korean Jindo
      5 | Charley  |     1.5 |        2 |         25 | f            |  2 | Basset Hound
      6 | Ladybird |     0.6 |        7 |         20 | t            |  7 | Labradoodle
      7 | Callie   |     0.9 |        4 |         16 | f            |  4 | Corgi
      8 | Jaxson   |     0.4 |        3 |         19 | t            |  3 | Beagle
      9 | Leinni   |     1.0 |        8 |         25 | t            |  8 | Miniature Schnauzer
     10 | Max      |     1.6 |        5 |         65 | f            |  5 | German Shepherd
    (10 rows)

We could make our query more specific by selecting specific columns, adding a `WHERE` clause, or doing any number of operations that we could do in a normal `SELECT` query. Aside from an `INNER JOIN`, we could also do different types of `JOIN` operations. (Refer to this overview on [PostgreSQL JOINS](http://www.postgresqltutorial.com/postgresql-joins/) for more information.)

## What we learned:

- What a foreign key is/does
- How to create a foreign key
- How to alter/update an existing table
- How to use the JOIN operation to get rows from two tables

## Helpful links:

- [PostgreSQL Docs: Constraints](https://www.postgresql.org/docs/9.2/ddl-constraints.html)
- [PostgreSQL Docs: Data Types > Numeric Types](https://www.postgresql.org/docs/10/datatype-numeric.html)
- [PostgreSQL Docs: Joins Between Tables](https://www.postgresql.org/docs/8.3/tutorial-join.html)
- [PostgreSQL Tutorial: PostgreSQL Joins](http://www.postgresqltutorial.com/postgresql-joins/)

Did you find this lesson helpful?

[Source](https://open.appacademy.io/learn/js-py---oct-2020-online/week-10-oct-2020-online/using-inner-join)
