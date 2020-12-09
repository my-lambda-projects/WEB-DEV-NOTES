# Inserting Data Into A Table
________________________________________________________________________________

If you have data, but it’s not in tables, does the data even exist? Not to an
app! We often need to create relational databases on the back end of the Web
apps we’re building so that we can ultimately display this data on the front
end of our application. All relational database data is stored in tables, so
it’s important to learn how to create tables and successfully query them.

Of the four data manipulation statements, `INSERT` is the easiest.

Create a new database named "folks". Now, create a new table named "friends"
with the following column specifications.

| Name       | Data type      | Constraints   |
|------------|----------------|---------------|
| id         | `SERIAL`       | `PRIMARY KEY` |
| first_name | `VARCHAR(255)` | `NOT NULL`    |
| last_name  | `VARCHAR(255)` | `NOT NULL`    |

Now that we have a new table, we need to add table rows with some data. We can
insert a new table row using the following syntax:

```shell
INSERT INTO table_name
VALUES
  (column1_value, colum2_value, column3_value);
```

Let’s fill out our “friends” table with information about five friends. In
psql, enter the following to add new table rows. _Note the use of single
quotation marks for string values. Also note that, since we used the [`SERIAL`
pseudo-type][1] to auto-increment the ID values, we can simply write `DEFAULT`
for the ID values when inserting new table rows._

```shell
INSERT INTO friends (id, first_name, last_name)
VALUES
  (DEFAULT, 'Amy', 'Pond');
```

You can also completely omit the `DEFAULT` keyword if you specify the names of
the columns that you want to insert into.

You can also use the "multiple values" insert. This prevents you from having to
write `INSERT` with every statement. Even better, if one fails, they all fail.
That can help protect your data integrity.

```
INSERT INTO friends (first_name, last_name)
VALUES
('Rose', 'Tyler'),
('Martha', 'Jones'),
('Donna', 'Noble'),
('River', 'Song');
```

Use `SELECT * FROM friends;` to verify that there are rows in the “friends”
table:

```shell
appacademy=# SELECT * FROM friends;
 id | first_name | last_name
----+------------+-----------
  1 | Amy        | Pond
  2 | Rose       | Tyler
  3 | Martha     | Jones
  4 | Donna      | Noble
  5 | River      | Song
```

Now let’s try to insert a new row using the ID of 5:

```shell
INSERT INTO friends (id, first_name, last_name)
VALUES (5, 'Jenny', 'Who');
```

Because ID is a primary key and that ID is already taken, we should get a
message in psql that it already exists:

```shell
appacademy=# insert into friends values (5, 'Jenny', 'Who');
ERROR:  duplicate key value violates unique constraint "friends_pkey"
DETAIL:  Key (id)=(5) already exists.
```

## What we learned:

* How to connect to an existing PostgreSQL database
* How to create a new PostgreSQL database
* How to create a new database table
* Accepted PostgreSQL data types
* How to add new rows to a database table
* What a primary key is/does

[1]: http://www.postgresqltutorial.com/postgresql-serial/
[2]: http://www.postgresqltutorial.com/postgresql-data-types/
