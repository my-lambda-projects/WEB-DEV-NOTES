# Table Management -  Part I
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [What is a table?](#what-is-a-table)
- [Defining tables](#defining-tables)
  - [String types](#string-types)
  - [Numeric types](#numeric-types)
- [Other data types](#other-data-types)
- [Naming a table](#naming-a-table)
- [Writing the SQL](#writing-the-sql)
- [Listing tables and table definitions](#listing-tables-and-table-definitions)
- [Deleting a table](#deleting-a-table)
- [What you've done](#what-youve-done)

<!-- /code_chunk_output -->
________________________________________________________________________________

**This is a walk-through**: Please type along as you read what's going on in
this article.

In this walk-through, you will

* Learn about what a table is,
* How to create and delete tables,
* Who owns a table, and,
* Learn about different data types that you can use when defining a table.

You can now create users that can connect to the relational database management
system. You can now create databases and secure them so only certain users can
connect to them. Now, it's time to get into the part where you define the
entities that actually hold the data: **tables**!

## What is a table?

A table is a "logical" structure that defines how data is stored and contains
that data that meets the definition. Most people think about tables like
spreadsheets that have a specific number of columns and rows that contain the
data.

It is called a "logical" structure because we reason about it in terms of
columns and rows; however, the RDMBS is in charge of how the data is actually
stored on disk and, quite often, for performance reasons, it does _not_ look
like rows and columns. The way it is stored on disk is called the "physical"
structure because that's what is the actual physical representation of it. We do
not cover physical structures because they vary by RDBMS. If you become a
**database administrator** in the future, you may have to learn such things.

Here is a spreadsheet that contains some data about puppies.

![Puppies spreadsheet]

You can see that the columns are

* name
* age_yrs
* breed
* weight_lbs
* microchipped

Now, look at the data each column contains. You can guess at what kind of data
type is in each of them by their values. If you were to write that out using the
data types that you know from JavaScript, you might come up with the following
table.

| Column       | Data type |
| ------------ | --------- |
| name         | string    |
| age_yrs      | number    |
| breed        | string    |
| weight_lbs   | number    |
| microchipped | Boolean   |

In table definitions, you have to be more specific, unfortunately. This is so
the database can know things like "the maximum length of the string" or "will
the number have decimal points"? This is important information so that database
can know how to store it most efficiently. The following table shows you the
corresponding ANSI SQL data types for the JavaScript types from before.

| Column       | JavaScript data type | Max length | ANSI SQL data type |
| ------------ | -------------------- | ---------- | ------------------ |
| name         | string               | 50         | VARCHAR(50)        |
| age_yrs      | number               |            | NUMERIC(3,1)       |
| breed        | string               | 100        | VARCHAR(100)       |
| weight_lbs   | number               |            | INTEGER            |
| microchipped | Boolean              |            | BOOLEAN            |

You can see that "string" values map to something called a "VARCHAR" with a
maximum length.

You can see that "number" values map to something called a "NUMERIC" with some
numbers, or an INTEGER which is just a whole number.

You can see that "Boolean" values map to something called a "BOOLEAN" which is
nice because that's convenient.

## Defining tables

To define a table, you need to know what the different pieces of related data it
will store. Then, you need to know what kind each of those pieces are. Once you
have that, you can create a table with an ANSI SQL statement.

### String types

There are three kinds of commonly used string types that databases support based
on the ANSI SQL standard. This section talks about them.

The most commonly used type is known as the **CHARACTER VARYING** type. It means
that it can contain text of varying lengths up to a specified maximum. That
maximum is provided when you define the table. Instead of having to type
_CHARACTER VARYING_ all the time, you can use its weirdly named alias
**VARCHAR**, (pronounced "var-car" or "var-char" where each part rhymes with
"car"). So, to specify that a column can hold up to 50 characters, you would
write `VARCHAR(50)` in the table definition. (Remember, SQL is case insensitive
for its keywords. You can also write `varchar(50)` or `VarChar(50)` if you so
desired. Just be consistent.)

Another commonly used type is known simply as **TEXT**. This is a column that
can contain an "unlimited" number of characters. You may ask yourself, "Why
don't I just always use TEXT, then?" Performance is the reason. Columns with the
_TEXT_ type are notoriously slower than those with other string types. Use them
judiciously.

Purposefully left out from this discussion is a type named **CHARACTER** or
**CHAR**. It is like the **VARCHAR**, except that it is a fixed-width character
field. This author has _never_ seen it used in a production system except for
Oracle DB which did not, at one time, support a Boolean type. Other than that,
it was only useful back in the 1970s - 1990s when computer disk space and speed
were slow and expensive.

### Numeric types

ANSI SQL (and PostgreSQL) supports **INTEGER**, **NUMERIC**, and floating-point
numbers.

The _INTEGER_ should be familiar. It's just a number. In PostgreSQL, it can hold
almost all values that your application can handle. That's from -2,147,483,648
to +2,147,483,647. If, for some reason, you were writing a database that would
contain a record for every person in the world, you would need integers bigger
than that. To solve that problem, ANSI SQL (and PostgreSQL) supports the
**BIGINT** type that will hold values between -9,223,372,036,854,775,808 to
9,223,372,036,854,775,807. If your application needs bigger integers, there are
extensions available.

The **NUMERIC** type is a fixed-point number. When you specify it, it takes up
to two arguments. The first number is the total number of digits that a number
can have in that column. The second number is the number of digits after the
decimal point that you want to track. The specification _NUMERIC(4,2)_ will hold
the number _23.22_, but not the numbers _123.22_ (too many total digits) or
_23.222_ (which it will just ignore the extra decimal places and store _23.22_).
These exact numbers are important for things like storing values of money, where
rounding errors could cause significant errors in calculations.

If you don't care about rounding errors, you can use the **DOUBLE PRECISION**.
There is no short alias for it. You can just put decimal numbers in there and
they will come out pretty much the same. Don't use this kind of data type for
columns that contain values of money because they will round and someone will
get in trouble, eventually.

## Other data types

PostgreSQL supports a lot of other data types, as well. It has specialized data
types for money, dates and times, geometric types, network addresses, and JSON!
Ones that you will use a lot in this course are the ones for dates and times, as
well as the one for JSON.

Here's the link to the documentation on [PostgreSQL data types]. Go review the
documentation for the types that support dates and times as you will need to
know the **TIMESTAMP** and **DATE** types.

## Naming a table

Names of tables should not create spaces or dashes. They should contain only
lower case letters, numbers, and underscores.

Conventionally, many software developers name their database table names as the
plural form of the data that it holds. More importantly, many software libraries
known as ORMs (which you will cover, this week) use the plural naming
convention. You should use the plural naming convention while here at App
Academy.

* Good table names
  * student_grades
  * office_locations
  * people
* Bad (incorrect) table names
  * Student Grades
  * office-locations
  * person

**Note**: The opinion that database table names should be plural is the subject
of heated debate among many software developers. We don't argue about it at App
Academy. We acknowledge that it _really doesn't matter_ how they're named. You
should just be consistent in the way they're named. Because our tools will use
the plural forms, we use the plural forms.

## Writing the SQL

Creating a table with SQL has this general syntax.

```sql
CREATE TABLE «table name» (
  «column name» «data type»,
  «column name» «data type»,
  ...
  «column name» «data type»
);
```

A couple of things to note. First, it uses parentheses, not curly braces. Many
developers that use curly brace languages like JavaScript will eventually, out
of habit, put curly braces instead of parentheses. If you were to do that, the
RDBMS will tell you that you have a syntax error. Just grin and replace the
curly braces with parentheses.

Another thing to note is that the last column specification _cannot_ have a
comma after it. In JavaScript, we can have commas after the last entry in an
array or in a literal object definition. Not so in SQL. Again, the RDBMS will
tell you that there is a syntax error. Just delete that last comma.

Here's the table that contains the column definitions for the "puppies"
spreadsheet from before.

| Column       | JavaScript data type | Max length | ANSI SQL data type |
| ------------ | -------------------- | ---------- | ------------------ |
| name         | string               | 50         | VARCHAR(50)        |
| age_yrs      | number               |            | NUMERIC(3,1)       |
| breed        | string               | 100        | VARCHAR(100)       |
| weight_lbs   | number               |            | INTEGER            |
| microchipped | Boolean              |            | BOOLEAN            |

To write that as SQL, you would just put in the table name, column names, and
data types in the syntax from above. You would get the following.

```sql
CREATE TABLE puppies (
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);
```

Log into your database, if you're not already. (Make sure you're in _your_
database by looking at the prompt. It should read `«your user name»=#`.) Type in
the SQL statement from above. If you do it correctly, PostgreSQL will return the
message "CREATE TABLE".

## Listing tables and table definitions

You can see the tables in your database by typing `\dt` at the `psql` shell
prompt. The `\dt` command means "describe tables". If you do that now, assuming
that you've only created the "puppies" table, you should see the following with
your user name, of course.

```
           List of relations
 Schema |  Name   | Type  |   Owner
--------+---------+-------+------------
 public | puppies | table | appacademy
```

The user that runs the SQL statement that creates the table is the owner of that
table. Table owners, like database owners, will always be able to access the
table and its data. If you want a user other than the one that you're logged in
as to own the table, you have two ways of doing that.

* Log out and log in as the user that you want to own the table and run the
  `CREATE TABLE` statement as that user.
* As the superuser, run the `SET ROLE «user name»` command to switch the current
  user and run the `CREATE TABLE` statement as that user.

To see the definition of a particular table table, type `\d «table name»`. For
puppies, type `\d puppies`. You should see the following output.

```
                         Table "public.puppies"
    Column    |          Type          | Collation | Nullable | Default
--------------+------------------------+-----------+----------+---------
 name         | character varying(50)  |           |          |
 age_yrs      | numeric(3,1)           |           |          |
 breed        | character varying(100) |           |          |
 weight_lbs   | integer                |           |          |
 microchipped | boolean                |           |          |
```

For now, ignore the "Collation", "Nullable", and "Default" columns in that
output. The next article will address "Nullable" and "Default".

You can see that the data types that you provided have been translated into
their ANSI SQL full name equivalents.

Now, connect to the "postgres" database using the `\c postgres` command. It
should give you a message that you're now connected to the "postgres" database
as your user. The prompt should change from one that has your name to
`postgres=#`. Now, type `\dt` to list the tables in the "postgres" database. If
you haven't created any tables there, it will read "Did not find any relations."
If you type `\d puppies`, it will report that it can't find a relation named
"puppies".

This is because you're in a different database than the one in which you created
the "puppies" table. You just don't see the "puppies" table, here, because it
doesn't exit. That table is in another database, your user database. That's how
databases work: they provide an area where you can create tables in which you'll
store data. Different databases have different tables. You can't easily get at
tables in another database from the one that you're currently in. And, really,
you don't want to. Databases provide the storage and security boundaries for
data.

Change back to your user database by executing the command `\c «your user
name»`.

## Deleting a table

In the same way that you can delete users and databases by using the `DROP`
command, you can do the same for tables. To get rid of the "puppies" table,
execute the following SQL command.

```sql
DROP TABLE puppies;
```

It should tell you that it dropped the table. You can confirm that it is no
longer there by executing the `\dt` command.

## What you've done

In this section, you learned the basics about creating database entities called
"tables" and their ownership. You learned that tables are where you store data.
You discovered that the data that you store is defined by the columns and their
data types. You can now write SQL to create and drop tables.

Next up, you will learn about special kinds of columns, column constraints, and
building relations between tables.

[Puppies spreadsheet]: images/tables-puppies-spreadsheet.png
[PostgreSQL data types]: https://www.postgresql.org/docs/current/datatype.html
