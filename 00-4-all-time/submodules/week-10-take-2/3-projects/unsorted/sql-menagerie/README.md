# Solving The SQL Menagerie

In our SQL readings, we learned how to write basic SQL queries and incorporate
`WHERE` clauses to filter for more specific results. We also learned how to use
a `JOIN` operation to get information from multiple tables.

In this project, put your SQL knowledge to the test and show off your querying
skills.

We've put together a collection (let's call it a _menagerie_) of SQL problems
for you to solve below. Solve them all, and you'll be the master of the
menagerie!

## Getting started

Clone the starter repository from
https://github.com/appacademy-starters/sql-select-exercises-starter.

## Project overview

1. In Phase 1, pipe the seed file into a new database.
2. In Phase 2, query the seed tables with basic `SELECT` statements.
3. In Phase 3, query the seed tables using `WHERE` clauses to get more specific
   rows back.
4. In Phase 4, use a `JOIN` operation to get data from both seed tables.
5. Bonuses! Go beyond what we learned in the readings to deepen your SQL query
   knowledge.

## Phase 1: Pipe in a seed file to create new database tables

We've set up a seed file for you to use in this project called
_**cities_and_airports.sql_** that will create two tables: a "cities" table and
an "airports" table. These tables show the top 25 most populous U.S. cities and
their airports, respectively. Pipe this file into your database, and use these
tables for the rest of the project phases.

Go through the following steps:

1. Log into `psql`.
2. Create a new database called "travel".
3. Pipe the _cities_and_airports.sql_ seed file into the "travel" database.
4. Check that there's data in both the "cities" and "airports" tables.

## Phase 2: Write basic SELECT statements

Retrieve rows from a table using `SELECT` FROM SQL statements.

1. Write a SQL query that returns the city, state, and estimated population in
   2018 from the "cities" table.

2. Write a SQL query that returns all of the airport names contained in the
   "airports" table.

## Phase 3: Add WHERE clauses

Select specific rows from a table using WHERE and common operators.

1. Write a SQL query that uses a `WHERE` clause to get the estimated population
   in 2018 of the city of San Diego.
2. Write a SQL query that uses a `WHERE` clause to get the city, state, and
   estimated population in 2018 of cities in this list: Phoenix, Jacksonville,
   Charlotte, Nashville.
3. Write a SQL query that uses a `WHERE` clause to get the cities with an
   estimated 2018 population between 800,000 and 900,000 people. Show the city,
   state, and estimated population in 2018 columns.
4. Write a SQL query that uses a `WHERE` clause to get the names of the cities
   that had an estimated population in 2018 of at least 1 million people (or
   1,000,000 people).
5. Write a SQL query to get the city and estimated population in 2018 in number
   of millions (_i.e. without zeroes at the end: 1 million_), and that uses a
   `WHERE` clause to return only the cities in Texas.
6. Write a SQL query that uses a `WHERE` clause to get the city, state, and
   estimated population in 2018 of cities that are NOT in the following states:
   New York, California, Texas.
7. Write a SQL query that uses a `WHERE` clause with the `LIKE` operator to get
   the city, state, and estimated population in 2018 of cities that start with
   the letter "S". (_Note: See the PostgreSQL doc on [Pattern Matching][1] for
   more information._)
8. Write a SQL query that uses a `WHERE` clause to find the cities with either
   a land area of over 400 square miles OR a population over 2 million people
   (or 2,000,000 people). Show the city name, the land area, and the estimated
   population in 2018.
9. Write a SQL query that uses a `WHERE` clause to find the cities with either
   a land area of over 400 square miles OR a population over 2 million people
   (or 2,000,000 people) -- but not the cities that have both. Show the city
   name, the land area, and the estimated population in 2018.
10. Write a SQL query that uses a `WHERE` clause to find the cities where the
    population has increased by over 200,000 people from 2010 to 2018. Show
    the city name, the estimated population in 2018, and the census population
    in 2010.

## Phase 4: Use a JOIN operation

Retrieve rows from multiple tables joining on a foreign key.

The "airports" table has a foreign key called `city_id` that references
the `id` column in the "cities" table.

1. Write a SQL query using an INNER JOIN to join data from the "cities" table
   with data from the "airports" table using the `city_id` foreign key.
   Show the airport names and city names only.

2. Write a SQL query using an INNER JOIN to join data from the "cities" table
   with data from the "airports" table to find out how many airports are in New
   York City using the city name. (_Note: Use the [aggregate function][2]
   COUNT() to count the number of matching rows._)

## Bonuses

1. **Apostrophe:** Write a SQL query to get all three ID codes (_the Federal
   Aviation Administration (FAA) ID, the International Air Transport Association
   (IATA) ID, and the International Civil Aviation Organization (ICAO) ID_) from
   the "airports" table for Chicago O'Hare International Airport. (_Note:
   You'll need to escape the quotation mark in O'Hare.
   See [How to include a single quote in a SQL query][3]._)

2. **Formatting Commas:** Refactor Phase 2, Query #1 to turn the INT for
   estimated population in 2018 into a character string with commas.
   (_Note: See [Data Type Formatting Functions][4]_)

   * Phase 2, Query #1: Write a SQL query that returns the city, state, and
     estimated population in 2018 from the "cities" table.

3. **Decimals and Rounding:** Refactor Phase 3, Query #5 to turn number of
   millions from an integer into a decimal rounded to a precision of two decimal
   places. (_Note: See [Numeric Types][5] and the [ROUND function][6]._)

   * Phase 3, Query #5: Write a SQL query to get the city and estimated
     population in 2018 in number of millions (_i.e. without zeroes at the end:
     1 million_), and that uses a `WHERE` clause to return only the cities in Texas.

4. **ORDER BY and LIMIT Clauses:** Refactor Phase 3, Query #10 to return only
   one city with the biggest population increase from 2010 to 2018. Show the
   city name, the estimated population in 2018, and the census population in
   2010 for that city. (_Note: You'll do the same calculation as before, but
   instead of comparing it to 200,000, use the [ORDER BY Clause][7] with the
   [LIMIT][8] Clause to sort the results and grab only the top result.)

   * Phase 3, Query #10: Write a SQL query that uses a `WHERE` clause to find
     the cities where the population has increased by over 200,000 people from
     2010 to 2018. Show the city name, the estimated population in 2018, and the
     census population in 2010.

   [1]: https://www.postgresql.org/docs/9.6/functions-matching.html
   [2]: https://www.postgresql.org/docs/9.6/functions-aggregate.html
   [3]: https://www.essentialsql.com/include-single-quote-sql-query/
   [4]: https://www.postgresql.org/docs/9.6/functions-formatting.html
   [5]: https://www.postgresql.org/docs/9.6/datatype-numeric.html
   [6]: https://www.postgresqltutorial.com/postgresql-round/
   [7]: https://www.postgresql.org/docs/9.6/sql-select.html#SQL-ORDERBY
   [8]: https://www.postgresql.org/docs/9.6/sql-select.html#SQL-LIMIT
