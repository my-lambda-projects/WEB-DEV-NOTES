# PostgreSQL Indexes
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [PostgreSQL Indexes](#postgresql-indexes)
  - [What is a PostgreSQL index?](#what-is-a-postgresql-index)
  - [How to create an index](#how-to-create-an-index)
    - [Types of indexes](#types-of-indexes)
  - [When to use an index](#when-to-use-an-index)
  - [Helpful links:](#helpful-links)
  - [What we learned:](#what-we-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

PostgreSQL indexes can help us optimize our queries for faster performance. In
this reading, we'll learn how to create an index, when to use an index, and when
to avoid using them.

## What is a PostgreSQL index?

A PostgreSQL index works like an index in the back of a book. It points to
information contained elsewhere and can be a faster method of looking up the
information we want.

A book index contains a list of references with page numbers. Instead of having
to scan all the pages of the book to find the places where specific information
appears, a reader can simply check the index. In similar fashion, PostgreSQL
indexes, which are special lookup tables, let us make faster database queries.

Let’s say we had the following table:

| addresses    |
| ------------ |
| address_id   |
| address      |
| address2     |
| city_id      |
| postal_code  |
| phone_number |

And we made a query to the database like the following:

```sql
SELECT * FROM addresses WHERE phone_number = '5556667777';
```

The above query would scan every row of the "addresses" table to find matching
rows based on the given phone number. If "addresses" is a large table (let's say
with millions of entries), and we only expect to get a small number of results
back (one row, or a few rows), then such a query would be an inefficient way to
retrieve data. Instead of scanning every row, we could create an index for the
phone column for faster data retrieval.

## How to create an index

To create a [PostgreSQL index][1], use the following syntax:

```sql
CREATE INDEX index_name ON table_name (column_name);
```

We can create a phone number index for the above "addresses" table with the
following:

```sql
CREATE INDEX addresses_phone_index ON addresses (phone_number);
```

You can delete an index using the `DROP INDEX` command:

```sql
DROP INDEX addresses_phone_index;
```

After an index has been created, the system will take care of the rest -- it
will update an index when the table is modified and use the index in queries
when it improves performance over a full table scan.

### Types of indexes

PostgreSQL provides several index types: B-tree, Hash, GiST and GIN. The CREATE
INDEX command creates B-tree indexes by default, which fit the most common
situations. While it's good to know other index types exist, you'll probably
find yourself using the default B-tree most often.

**Single-Column Indexes**
Uses only one table column.

Syntax:
```sql
CREATE INDEX index_name ON table_name (column_name);
```

Addresses Example:
```sql
CREATE INDEX addresses_phone_index ON addresses (phone_number);
```

**Multiple-Column Indexes**
Uses more than one table column.

Syntax:
```sql
CREATE INDEX index_name ON table_name (col1_name, col2_name);
```

Addresses Example:
```sql
CREATE INDEX idx_addresses_city_post_code ON addresses (city_id, postal_code);
```

**Partial Indexes**
Uses subset of a table defined by a conditional expression.

Syntax:
```sql
CREATE INDEX index_name ON table_name WHERE (conditional_expression);
```

Addresses Example:
```sql
CREATE INDEX addresses_phone_index ON addresses (phone_number) WHERE (city_id = 2);
```

**Note**: Check out [Chapter 11 on Indexes][3] in the PostgreSQL docs for more
about types of indexes.

## When to use an index

Indexes are intended to enhance database performance and are generally thought
to be a faster data retrieval method than a sequential (or row-by-row) table
scan. However, there are instances where using an index would not improve
efficiency, such as the following:

* When working with a relatively small table (i.e. not a lot of rows)
* When a table has frequent, large-batch update or insert operations
* When working with columns that contain many NULL values
* When working with columns that are frequently manipulated

An important thing to note about indexes is that, while they can optimize READ
(i.e. table query) speed, they can also hamper WRITE (i.e. table
updates/insertions) speed. The latter's performance is affected due to the
system having to spend time updating indexes whenever a change or insertion is
made to the table.

The system optimizes database performance and decides whether to use an
index in a query or to perform a sequential table scan, but we can analyze query
performance ourselves to debug slow queries using `EXPLAIN` and `EXPLAIN ANALYZE`.

Here is an example of using `EXPLAIN` from the [PostgreSQL docs][2]:

```sql
EXPLAIN SELECT * FROM tenk1;

                         QUERY PLAN
-------------------------------------------------------------
 Seq Scan on tenk1  (cost=0.00..458.00 rows=10000 width=244)
```

In the QUERY PLAN above, we can see that a sequential table scan (`Seq Scan`)
was performed on the table called "tenk1". In parentheses, we see performance
information:

* Estimated start-up cost (or time expended before the scan can start): 0.00
* Estimated total cost: 458.00
* Estimated number of rows output: 10000
* Estimated average width (in bytes) of rows: 244

It's important to note that, although we might mistake the number next to `cost`
for milliseconds, `cost` is not measured in any particular unit and is
an arbitrary measurement relatively based on other query costs.

If we use the `ANALYZE` keyword after `EXPLAIN` on a `SELECT` statement, we can
get more information about query performance:

```sql
EXPLAIN ANALYZE SELECT *
FROM tenk1 t1, tenk2 t2
WHERE t1.unique1 < 100 AND t1.unique2 = t2.unique2;

                                                            QUERY PLAN
----------------------------------------------------------------------------------------------------------------------------------
 Nested Loop  (cost=2.37..553.11 rows=106 width=488) (actual time=1.392..12.700 rows=100 loops=1)
   ->  Bitmap Heap Scan on tenk1 t1  (cost=2.37..232.35 rows=106 width=244) (actual time=0.878..2.367 rows=100 loops=1)
         Recheck Cond: (unique1 < 100)
         ->  Bitmap Index Scan on tenk1_unique1  (cost=0.00..2.37 rows=106 width=0) (actual time=0.546..0.546 rows=100 loops=1)
               Index Cond: (unique1 < 100)
   ->  Index Scan using tenk2_unique2 on tenk2 t2  (cost=0.00..3.01 rows=1 width=244) (actual time=0.067..0.078 rows=1 loops=100)
         Index Cond: (unique2 = t1.unique2)
 Total runtime: 14.452 ms
 ```

We can see in the QUERY PLAN above that there are other types of scans
happening: Bitmap Heap Scan, Bitmap Index Scan, and Index Scan. We know that an
index has been created, and the system is using it to scan for results instead
of performing a sequential scan. At the bottom, we also have a total runtime of
14.42 ms, which is pretty fast.

## Helpful links:

* [PostgreSQL docs: Indexes][3]
* [PostgreSQL docs: Performance Tips][4]
* [Heroku DevCenter: Efficient Use of PostgreSQL Indexes][5]

## What we learned:

* How to create a PostgreSQL index
* Types of indexes
* Use cases for indexes and when to avoid them
* How to use `EXPLAIN` to analyze query performance

[1]: https://www.postgresql.org/docs/9.1/sql-createindex.html
[2]: https://www.postgresql.org/docs/9.1/using-explain.html
[3]: https://www.postgresql.org/docs/9.1/indexes.html
[4]: https://www.postgresql.org/docs/8.1/performance-tips.html
[5]: https://devcenter.heroku.com/articles/postgresql-indexes
