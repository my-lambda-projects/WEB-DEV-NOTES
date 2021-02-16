# Joins vs. Subqueries
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [What is a JOIN?](#what-is-a-join)
- [What is a subquery?](#what-is-a-subquery)
  - [Single-value subquery](#single-value-subquery)
  - [Multiple-row subquery](#multiple-row-subquery)
- [Using joins vs. subqueries](#using-joins-vs-subqueries)
  - [Should I use a JOIN or a subquery?](#should-i-use-a-join-or-a-subquery)
- [Helpful links:](#helpful-links)

<!-- /code_chunk_output -->
________________________________________________________________________________

To select, or not to select? That is the query. We’ve barely scratched the
surface of SQL queries. Previously, we went over how to write simple SQL
queries using the `SELECT` statement, and we learned how to incorporate a `WHERE` clause into our queries.

There’s a lot more we could add to our queries to get more refined results. In
this reading, we’ll go over joins and subqueries and talk about when we would
use one over the other.

## What is a JOIN?

We briefly looked at the `JOIN` operation after we created foreign keys in a
previous reading. The [JOIN operation][1] allows us to retrieve rows from
multiple tables.

To review, we had two tables: a "breeds" table and a "puppies" table. The two
tables shared information through a foreign key. The foreign key `breed_id`
lives on the "puppies" table and is related to the primary key `id` of the
"breeds" table.

We wrote the following `INNER JOIN` operation to get only the rows from the
“puppies” table with a matching `breed_id` in the “friends” table:

```sql
SELECT * FROM puppies
INNER JOIN breeds ON (puppies.breed_id = breeds.id);
```

[INNER JOIN][2] can be represented as a Venn Diagram, which produces rows from
Table A that match some information in Table B.

![inner-join-venn-diagram]

We got the following table rows back from our `INNER JOIN` on the "puppies"
table. These rows represent the center overlapping area of the two circles. We
can see that the data from "puppies" appears first, followed by the joined data
from the "friends" table.

```sql
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
```

There are different types of `JOIN` operations. The ones you'll use most often are:

1. **Inner Join** -- Returns a result set containing rows in the left table that
   match rows in the right table.
2. **Left Join** --  Returns a result set containing all rows from the left
   table with the matching rows from the right table. If there is no match, the
   right side will have null values.
3. **Right Join** -- Returns a result set containing all rows from the right
   table with matching rows from the left table. If there is no match, the left
   side will have null values.
4. **Full Outer Join** -- Returns a result set containing all rows from both the
   left and right tables, with the matching rows from both sides where
   available. If there is no match, the missing side contains null values.
5. **Self-Join** -- A self-join is a query in which a table is joined to itself.
   Self-joins are useful for comparing values in a column of rows within the
   same table.

(_See this tutorial doc on [PostgreSQL Joins][3] for more information on the
different `JOIN` operations._)

## What is a subquery?

A subquery is essentially a `SELECT` statement nested inside another `SELECT`
statement. A subquery can return a single (“scalar”) value or multiple rows.

### Single-value subquery

Let’s see an example of how to use a subquery to return a single value. Take
the "puppies" table from before. We had a column called `age_yrs` in that table
(see below).

```sql
postgres=# SELECT * FROM puppies;
 id |   name   | age_yrs | breed_id | weight_lbs | microchipped
----+----------+---------+----------+------------+--------------
  1 | Cooper   |     1.0 |        8 |         18 | t
  2 | Indie    |     0.5 |        9 |         13 | t
  3 | Kota     |     0.7 |        1 |         26 | f
  4 | Zoe      |     0.8 |        6 |         32 | t
  5 | Charley  |     1.5 |        2 |         25 | f
  6 | Ladybird |     0.6 |        7 |         20 | t
  7 | Callie   |     0.9 |        4 |         16 | f
  8 | Jaxson   |     0.4 |        3 |         19 | t
  9 | Leinni   |     1.0 |        8 |         25 | t
 10 | Max      |     1.6 |        5 |         65 | f
(10 rows)
```

We’ll use the [PostgreSQL aggregate function][4] `AVG` to get an average puppy
age.

```sql
SELECT
  AVG (age_yrs)
FROM
  puppies;
```

Assuming our previous “puppies” table still exists in our database, if we
entered the above statement into psql we’d get an _**average age of 0.9**_.
(_Note: Try it out yourself in psql! Refer to the reading "Retrieving Rows From
A Table Using SELECT" if you need help remembering how we set up the “puppies”
table._)

Let's say that we wanted to find all of the puppies that are older than the
average age of 0.9. We could write the following query:

```sql
SELECT
  name,
  age_yrs,
  breed
FROM
  puppies
WHERE
  age_yrs > 0.9;
```

In the above query, we compared `age_yrs` to an actual number (0.9). However, as
more puppies get added to our table, the average age could change at any time.
To make our statement more dynamic, we can plug in the query we wrote to find
the average age into another statement as a _subquery_ (surrounded by
parentheses).

```sql
SELECT
  puppies.name,
  age_yrs,
  breeds.name
FROM
  puppies
INNER JOIN
  breeds ON (breeds.id = puppies.breed_id)
WHERE
  age_yrs > (
    SELECT
      AVG (age_yrs)
    FROM
      puppies
  );
```

We should get the following table rows, which include only the puppies older
than 9 months:

```shell
  name   | age_yrs |        breed
---------+---------+---------------------
 Cooper  |     1.0 | Miniature Schnauzer
 Charley |     1.5 | Basset Hound
 Leinni  |     1.0 | Miniature Schnauzer
 Max     |     1.6 | German Shepherd
```

### Multiple-row subquery

We could also write a subquery that returns multiple rows.

In the reading "Creating A Table In An Existing PostgreSQL Database", we
created a “friends” table. In "Foreign Keys And The JOIN Operation", we set up a
primary key in the “puppies” table that is a foreign key in the “friends” table
-- `puppy_id`. We’ll use this ID in our subquery and outer query.

**"friends" table**
```shell
id | first_name | last_name | puppy_id
----+------------+-----------+----------
  1 | Amy        | Pond      |        4
  2 | Rose       | Tyler     |        5
  3 | Martha     | Jones     |        6
  4 | Donna      | Noble     |        7
  5 | River      | Song      |        8
```

Let’s say we wanted to find all the puppies that are younger than 6 months old.

```sql
SELECT puppy_id
FROM puppies
WHERE
  age_yrs < 0.6;
```

This would return two rows:

```shell
puppy_id
----------
        2
        8
(2 rows)
```

Now we want to use the above statement as a subquery (inside parentheses) in
another query. You’ll notice we’re using a `WHERE` clause with the [IN][5]
operator to check if the `puppy_id` from the “friends” table meets the
conditions in the subquery.

```sql
SELECT *
FROM friends
WHERE
  puppy_id IN (
    SELECT puppy_id
    FROM puppies
    WHERE
      age_yrs < 0.6
  );
```

We should get just one row back. River Song has a puppy younger than 6 months
old.

```shell
 id | first_name | last_name | puppy_id
----+------------+-----------+----------
  5 | River      | Song      |        8
(1 row)
```

## Using joins vs. subqueries

We can use either a `JOIN` operation or a subquery to filter for the same
information. Both methods can be used to get info from multiple tables. Take the query/subquery from above:

```sql
SELECT *
FROM friends
WHERE
  puppy_id IN  (
    SELECT puppy_id
    FROM puppies
    WHERE
      age_yrs < 0.6
  );
```

Which produced the following result:

```shell
 id | first_name | last_name | puppy_id
----+------------+-----------+----------
  5 | River      | Song      |        8
(1 row)
```

Instead of using a `WHERE` clause with a subquery, we could use a `JOIN`
operation:

```sql
SELECT *
FROM friends
INNER JOIN puppies ON (puppies.puppy_id = friends.puppy_id)
WHERE
  puppies.age_yrs < 0.6;
```

Again, we’d get back one result, but because we used an `INNER JOIN` we have
information from both the “puppies” and “friends” tables.

```shell
id | first_name | last_name | puppy_id |  name  | age_yrs | breed  | weight_lbs | microchipped | puppy_id
----+------------+-----------+----------+--------+---------+--------+------------+--------------+----------
  5 | River      | Song      |        8 | Jaxson |     0.4 | Beagle |         19 | t            |        8
(1 row)
```

### Should I use a JOIN or a subquery?

As stated earlier, we could use either a JOIN operation or a subquery to filter
for table rows. However, you might want to think about whether using a JOIN or a
subquery is more appropriate for retrieving data.

A JOIN operation is ideal when you want to combine rows from one or more tables
based on a match condition. Subqueries work great when you’re returning a single
value. When you’re returning multiple rows, you could opt for a subquery or a
JOIN.

Executing a query using a JOIN could potentially be faster than executing a
subquery that would return the same data. (A subquery will execute once for each
row returned in the outer query, whereas the `INNER JOIN` only has to make one
pass through the data.) However, this isn’t always the case. Performance
depends on the size of your data, what you’re filtering for, and how the server
optimizes the query. With smaller datasets, the difference in performance of a
JOIN and subquery is imperceptible. However, there are use cases where a
subquery would improve performance.

(_See this article for more info: [When is a SQL Subquery 260x Faster than a
Left Join?][6]_)

We can use the the [EXPLAIN][11] statement to see runtime statistics of our
queries that help with debugging slow queries. (We'll get into this more later!)

## Helpful links:

* PostgreSQL Tutorial: [PostgreSQL Joins][3]
* PostgreSQL Tutorial: [PostgreSQL Subquery][7]
* PostgreSQL Docs: [Subquery Expressions][8]
* Essential SQL: [Subqueries versus Joins][9]
* Essential SQL: [Using Subqueries with the Select Statement][10]

[1]: https://www.postgresql.org/docs/8.3/tutorial-join.html
[2]: http://www.postgresqltutorial.com/postgresql-inner-join/
[3]: http://www.postgresqltutorial.com/postgresql-joins/
[4]: https://www.postgresql.org/docs/8.2/functions-aggregate.html
[5]: http://www.postgresqltutorial.com/postgresql-in/
[6]: https://crate.io/a/sql-subquery-vs-left-join/
[7]: http://www.postgresqltutorial.com/postgresql-subquery/
[8]: https://www.postgresql.org/docs/8.3/functions-subquery.html
[9]: https://www.essentialsql.com/what-is-the-difference-between-a-join-and-subquery/
[10]: https://www.essentialsql.com/get-ready-to-learn-sql-server-20-using-subqueries-in-the-select-statement/
[11]: http://www.postgresqltutorial.com/postgresql-explain/
[inner-join-venn-diagram]: images/inner-join-venn-diagram.png
