
*   ⏱ 30 minutes
    

*   Catalog
*   Js Py Sep 2020 Online
*   Week 10 Sep 2020 Online
*   Using Where

In the last reading, we learned how to create a simple SQL query using SELECT. In this reading, we'll be adding a [WHERE clause](http://www.postgresqltutorial.com/postgresql-where/) to our SELECT statement to further filter a database table and get specific rows back.

Using SELECT and WHERE
----------------------

Previously, we covered how to use SELECT queries to fetch all of a table's rows or specified table rows by column(s). We can filter information returned by our query by using a WHERE clause in our SELECT statement.

Let's look at some examples of adding a WHERE clause using our `puppies` table from before:

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

### WHERE clause for a single value

The simplest WHERE clause finds a row by a single column value. See the example below, which finds the rows where the breed equals 'Corgi':

    SELECT name, breed FROM puppies
      WHERE breed = 'Corgi';

`SELECT`, `FROM`, and `WHERE` are capitalized. Notice that the string must use single quotation marks. _Note: PostgreSQL converts all names of tables, columns, functions, etc. to lowercase unless they're double quoted._ For example: `create table Foo()` will create a table called `foo`, and `create table "Bar"()` will create a table called `Bar`. If you use double quotation marks in the query above, you'll get an error that says `column "Corgi" does not exist` because it thinks you're searching for the capitalized column name `Corgi`.

Use the command `psql -U postgres` in the terminal, and type in your 'postgres' user password to connect to the PostgreSQL server. You should have a puppies table in your postgres database from the last reading. Once you're in psql, enter the query above into the terminal and press Enter. You should get back one result for Callie the Corgi.

      name  | breed
    --------+-------
     Callie | Corgi

### WHERE clause for a list of values

We can also add a WHERE clause to check for a list of values. The syntax is `WHERE [column] IN ('value1', 'value2', 'value3')`. Let's say we wanted to find the name and breed of the puppies who are Corgis, Beagles, or Yorkshire Terriers. We could do so with the query below:

    SELECT name, breed FROM puppies
      WHERE breed IN ('Corgi', 'Beagle', 'Yorkshire Terrier');

Entering this query into psql should yield the following results:

      name  |       breed
    --------+-------------------
     Indie  | Yorkshire Terrier
     Callie | Corgi
     Jaxson | Beagle

### WHERE clause for a range of values

In addition to checking for string values, we can use the WHERE clause to check for a range of numeric/integer values. This time, let's find the name, breed, and age of the puppies who are between 0 to 6 months old.

    SELECT name, breed, age_yrs FROM puppies
      WHERE age_yrs BETWEEN 0 AND 0.6;

Entering this query into psql should yield the following results:

       name   |       breed       | age_yrs
    ----------+-------------------+---------
     Indie    | Yorkshire Terrier |     0.5
     Ladybird | Labradoodle       |     0.6
     Jaxson   | Beagle            |     0.4

ORDER BY
--------

Getting the values back from a database in any order it wants to give them to you is ludicrous. Instead, you will often want to specify the order in which you get them back. Say you wanted them in alphabetical order by their name. Then, you would write

    SELECT name, breed
    FROM puppies
    ORDER BY name;

Say you wanted that returned from oldest dog to youngest dog. You would write

    SELECT name, breed
    FROM puppies
    ORDER BY age_yrs DESC;

where `DESC` means in descending order. Note that the column that you order on does not have to appear in the column list of the `SELECT` statement.

LIMIT and OFFSET
----------------

Say your query would return one million rows because you've cataloged every puppy in the world. That would be a lot for any application to handle. Instead, you may want to limit the number of rows returned. You can do that with the `LIMIT` keyword.

    SELECT name, breed
    FROM puppies
    ORDER BY age_yrs
    LIMIT 100;

That would return the name and breed of the 100 youngest puppies. (Why?) That is, of the million rows that the statement would find, it _limits_ the number to only 100.

Let's say you want to see the _next_ 100 puppies after the first hundred. You can do that with the `OFFSET` keyword which comes after the `LIMIT` clause.

    SELECT name, breed
    FROM puppies
    ORDER BY age_yrs
    LIMIT 100 OFFSET 100;

That will return only rows 101 - 200 of the result set. It _limits_ the total number of records to return to 100. Then, it starts at the 100th row and counts 100 records. Those are the records returned.

SQL operators
-------------

A SQL operator is a word or character that is used inside a WHERE clause to perform comparisons or arithmetic operations. In the three examples above, we used SQL operators inside of WHERE clauses to filter table rows -- `=`, `IN`, `BETWEEN`, and `AND`.

The following is a listing of SQL operators. We can combine any of these operators in our query or use a single operator by itself.

### Logical operators

| Operator | Description                                                   |
| -------- | ------------------------------------------------------------- |
| ALL      | TRUE if all of the subquery values meet the condition.        |
| AND      | TRUE if all the conditions separated by AND are TRUE.         |
| ANY      | TRUE if any of the subquery values meet the condition.        |
| BETWEEN  | TRUE if the operand is within the range of comparisons.       |
| EXISTS   | TRUE if the subquery returns one or more records.             |
| IN       | TRUE if the operand is equal to one of a list of expressions. |
| LIKE     | TRUE if the operand matches a pattern (accepts "wildcards").  |
| NOT      | Displays a record if the condition(s) is NOT TRUE.            |
| OR       | TRUE if any of the conditions separated by OR is TRUE.        |
| SOME     | TRUE if any of the subquery values meet the condition.        |

Here is another example query with a WHERE clause using several logical operators: `NOT`, `IN`, `AND`, and `LIKE`.

    SELECT name, breed FROM puppies
      WHERE breed NOT IN ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle')
        AND breed NOT LIKE '%Shepherd';

**Note**: Pay attention to that `LIKE` operator. You will use it more than you want to. The wildcard it uses is the percent sign. Here's a table to help you understand.

| `LIKE`    | Matches "dog" | Matches "hotdog" | Matches "dog-tired" | Matches "ordogordo" |
| --------- | ------------- | ---------------- | ------------------- | ------------------- |
| `'dog'`   | yes           | no               | no                  | no                  |
| `'%dog'`  | yes           | yes              | no                  | no                  |
| `'dog%'`  | yes           | no               | yes                 | no                  |
| `'%dog%'` | yes           | yes              | yes                 | yes                 |

Entering this query into psql should yield the following results:

      name  |       breed
    --------+-------------------
     Indie  | Yorkshire Terrier
     Zoe    | Korean Jindo
     Callie | Corgi
     Jaxson | Beagle

With the query above, we filtered out six puppies: two Miniature Schnauzers, one Basset Hound, one Labradoodle, and two Shepherds. We started with ten puppies in the table, so we're left with four table rows. There are two puppies who are Shepherd breeds: an Australian Shepherd and a German Shepherd. We used the `LIKE` operator to filter these. In `'%Shepherd`, the `%` matches any substring value before the substring 'Shepherd'.

### Arithmetic operators

| Operator | Meaning                     | Syntax |
| -------- | --------------------------- | ------ |
| +        | Addition                    | a + b  |
| \-       | Subtraction                 | a - b  |
| \*       | Multiplication              | a \* b |
| /        | Division                    | a / b  |
| %        | Modulus (returns remainder) | a % b  |

Here is an example query with a WHERE clause using the multiplication operator to find puppies that are 6 months old:

    SELECT name, breed, age_yrs FROM puppies
      WHERE age_yrs * 10 = 6;

Entering the above query into psql will yield one result:

       name   |    breed    | age_yrs
    ----------+-------------+---------
     Ladybird | Labradoodle |     0.6

### Comparison operators

| Operator | Meaning                  | Syntax |
| -------- | ------------------------ | ------ |
| \=       | Equals                   | a = b  |
| !=       | Not equal to             | a != b |
| <>       | Not equal to             | a <> b |
| \>       | Greater than             | a > b  |
| <        | Less than                | a < b  |
| \>=      | Greater than or equal to | a >= b |
| <=       | Less than or equal to    | a <= b |
| !<       | Not less than            | a !< b |
| !>       | Not greater than         | a !> b |

Here is an example query with a WHERE clause using the `>` comparison operator:

    SELECT name, breed, weight_lbs FROM puppies
      WHERE weight_lbs > 50;

Entering the above query into psql will yield one result:

     name |      breed      | weight_lbs
    ------+-----------------+------------
     Max  | German Shepherd |         65

What we learned:
----------------

*   How to use a WHERE clause in a SELECT query
*   How to construct WHERE clauses matching a single value, a list of values, and a range of values
*   What SQL operators are
*   How to use logical operators, arithmetic operators, and comparison operators

Did you find this lesson helpful?


[Source](https://open.appacademy.io/learn/js-py---sep-2020-online/week-10-sep-2020-online/using-where)
