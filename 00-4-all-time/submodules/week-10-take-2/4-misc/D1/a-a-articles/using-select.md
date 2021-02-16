# App Academy Open



Using SELECT
------------



In the first reading, we covered SQL and PostgreSQL and how to set up PostgreSQL. In this reading, we're going to learn how to write a simple SQL query using SELECT.

What is a query?
----------------

SQL stands for _Structured Query Language_, and whenever we write SQL we're usually querying a database. A query is simply a question we're asking a database, and we're aiming to get a response back. The response comes back to us as a list of table rows.

Example table
-------------

Let's say we had the following database table called `puppies`. We'll use this table to make our queries:

_**puppies table**_

| name     | age\_yrs | breed               | weight\_lbs | microchipped |
| -------- | -------- | ------------------- | ----------- | ------------ |
| Cooper   | 1        | Miniature Schnauzer | 18          | yes          |
| Indie    | 0.5      | Yorkshire Terrier   | 13          | yes          |
| Kota     | 0.7      | Australian Shepherd | 26          | no           |
| Zoe      | 0.8      | Korean Jindo        | 32          | yes          |
| Charley  | 1.5      | Basset Hound        | 25          | no           |
| Ladybird | 0.6      | Labradoodle         | 20          | yes          |
| Callie   | 0.9      | Corgi               | 16          | no           |
| Jaxson   | 0.4      | Beagle              | 19          | yes          |
| Leinni   | 1        | Miniature Schnauzer | 25          | yes          |
| Max      | 1.6      | German Shepherd     | 65          | no           |

Using psql in the terminal
--------------------------

As we covered in the first reading, psql allows us to access the PostgreSQL server and make queries via the terminal. Open up the terminal on your machine, and connect to the PostgreSQL server by using the following psql command:

    psql -U postgres

The above command lets you access the PostgreSQL server as the user 'postgres' (`-U` stands for user). After you enter this command, you'll be prompted for the password that you set for the 'postgres' user during installation. Type it in, and hit Enter. Once you've successfully logged in, you should see the following in the terminal:

    Password for user postgres:
    psql (11.5, server 11.6)
    Type "help" for help.
    
    postgres=#

You can exit psql at anytime with the command `\q`, and you can log back in with `psql -U postgres`. (_See this [Postgres Cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) for a list of more PSQL commands._)

We'll use the following PostgreSQL to create the `puppies` table above. After you've logged into the psql server, type the following code and hit Enter.

_**puppies.sql**_

    create table puppies (
      name VARCHAR(100),
      age_yrs NUMERIC(2,1),
      breed VARCHAR(100),
      weight_lbs INT,
      microchipped BOOLEAN
    );
    
    insert into puppies
    values
    ('Cooper', 1, 'Miniature Schnauzer', 18, 'yes');
    
    insert into puppies
    values
    ('Indie', 0.5, 'Yorkshire Terrier', 13, 'yes'),
    ('Kota', 0.7, 'Australian Shepherd', 26, 'no'),
    ('Zoe', 0.8, 'Korean Jindo', 32, 'yes'),
    ('Charley', 1.5, 'Basset Hound', 25, 'no'),
    ('Ladybird', 0.6, 'Labradoodle', 20, 'yes'),
    ('Callie', 0.9, 'Corgi', 16, 'no'),
    ('Jaxson', 0.4, 'Beagle', 19, 'yes'),
    ('Leinni', 1, 'Miniature Schnauzer', 25, 'yes' ),
    ('Max', 1.6, 'German Shepherd', 65, 'no');

In the above SQL, we created a new table called `puppies`, and we gave it the following columns: `name`, `age_yrs`, `breed`, `weight_lbs`, and `microchipped`. We filled the table with ten rows containing data for each puppy, by using `insert into puppies values ()`.

We used the following [PostgreSQL data types](http://www.postgresqltutorial.com/postgresql-data-types/): `VARCHAR`, `NUMERIC`, `INT`, and `BOOLEAN`.

*   `VARCHAR(n)` is a variable-length character string that lets you store up to _n_ characters. Here we've set the character limit to 100 for the `name` and `breed` columns.
*   `NUMERIC(p,s)` is a floating-point number with _p_ digits and _s_ number of places after the decimal point. Here we've set the values for the `age_yrs` column to up to two digits before the decimal and one place after the decimal.
*   `INT` is a 4-byte integer, which we've set on the `weight_lbs` column.
*   `BOOLEAN` is, of course, a Boolean value. We've set the `microchipped` column to accept Boolean values. SQL accepts the standard Boolean values `true`, `false`, or `null`. However, you'll note that we've used `yes` and `no` in our `microchipped` column because [PostgreSQL Booleans](http://www.postgresqltutorial.com/postgresql-boolean/) can be any of the following values:

| TRUE   | FALSE   |
| ------ | ------- |
| true   | false   |
| 't'    | 'f'     |
| 'true' | 'false' |
| 'yes'  | 'no'    |
| 'y'    | 'n'     |
| '1'    | '0'     |

Simple SELECT Query
-------------------

We can write a simple [SELECT query](https://sqlzoo.net/wiki/SELECT_Reference) to get results back from the table above. The syntax for the SELECT query is `SELECT [columns] FROM [table]`.

### SELECT all rows

Using `SELECT *` is a quick way to get back all the rows in a given table. It is discouraged in queries that you write for your applications. Use it only when playing around with data, not for production code.

    SELECT *
    FROM   puppies;

Type the query above into your psql terminal, and make sure to add a semicolon at the end, which terminates the statement. `SELECT` and `FROM` should be capitalized. The above query should give us back the entire `puppies` table:

| name     | age\_yrs | breed               | weight\_lbs | microchipped |
| -------- | -------- | ------------------- | ----------- | ------------ |
| Cooper   | 1        | Miniature Schnauzer | 18          | yes          |
| Indie    | 0.5      | Yorkshire Terrier   | 13          | yes          |
| Kota     | 0.7      | Australian Shepherd | 26          | no           |
| Zoe      | 0.8      | Korean Jindo        | 32          | yes          |
| Charley  | 1.5      | Basset Hound        | 25          | no           |
| Ladybird | 0.6      | Labradoodle         | 20          | yes          |
| Callie   | 0.9      | Corgi               | 16          | no           |
| Jaxson   | 0.4      | Beagle              | 19          | yes          |
| Leinni   | 1        | Miniature Schnauzer | 25          | yes          |
| Max      | 1.6      | German Shepherd     | 65          | no           |

### SELECT by column

We can see all the rows in a given column by using `SELECT [column name]`.

    SELECT name
    FROM   puppies;

Type the query above into your psql terminal, and make sure to add a semicolon at the end, which terminates the statement. `SELECT` and `FROM` should be capitalized. The above query should give us back the following:

| name     |
| -------- |
| Cooper   |
| Indie    |
| Kota     |
| Zoe      |
| Charley  |
| Ladybird |
| Callie   |
| Jaxson   |
| Leinni   |
| Max      |

### SELECT multiple columns

To see multiple columns, we can concatenate the column names by using commas between column names.

    SELECT name
         , age_yrs
         , weight_lbs
    FROM   puppies;

Type the query above into your psql terminal, and make sure to add a semicolon at the end, which terminates the statement. `SELECT` and `FROM` should be capitalized. The above query should give us back the following:

| name     | age\_yrs | weight\_lbs |
| -------- | -------- | ----------- |
| Cooper   | 1        | 18          |
| Indie    | 0.5      | 13          |
| Kota     | 0.7      | 26          |
| Zoe      | 0.8      | 32          |
| Charley  | 1.5      | 25          |
| Ladybird | 0.6      | 20          |
| Callie   | 0.9      | 16          |
| Jaxson   | 0.4      | 19          |
| Leinni   | 1        | 25          |
| Max      | 1.6      | 65          |

Formatting SELECT statements
----------------------------

This is another of those hot-button topics with software developers. Some people like to put all the stuff on one line for each SQL keyword.

    SELECT name, age_yrs, weight_lbs
    FROM   puppies;

That works for short lists. But some tables have hundreds of columns. That gets long.

Some developers like what you saw earlier, the "each column name on its own line with the comma at the front".

    SELECT name
         , age_yrs
         , weight_lbs
    FROM   puppies;

They like this because if they need to comment out a column name, they can just put a couple of dashes at the beginning of the line.

    SELECT name
    --     , age_yrs
         , weight_lbs
    FROM   puppies;

Some developers just do a word wrap when lines get too long.

All of these are fine. Just stay consistent within a project how you do them.

What we learned:
----------------

*   What a query is
*   How to connect to the PostgreSQL server with psql
*   How to construct an example SQL table
*   PostgreSQL data types
*   How to write a simple SELECT query
*   How to SELECT all rows, rows by column, and rows by multiple columns

Did you find this lesson helpful?


[Source](https://open.appacademy.io/learn/js-py---sep-2020-online/week-10-sep-2020-online/using-select)
