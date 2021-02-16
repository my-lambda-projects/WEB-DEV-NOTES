

### RDBMS and Database Entities
1. Define what a relational database management system is
- RDBMS stands for Relational Database Management System
- A software application that you run that your programs can connect to so that they can store, modify, and retrieve data.
- An RDBMS can track many databases. We will use PostgreSQL, or "postgres", primarily for our RDBMS and it will be able to create individual databases for each of our projects.

2. Describe what relational data is
- In general, relational data is information that is connected to other pieces of information.
- When working with relational databases, we can connect two entries together utilizing foreign keys (explained below).
- In a pets database, we could be keeping track of dogs and cats as well as the toys that each of them own. That "ownership" of a cat to a toy is the "relational" aspect of relational data. Two pieces of information that can be connected together to show some sort of meaning.

3. Define what a database is
- The actual location that data is stored.
- A database can be made up of many tables that each store specific kinds of information.
- We could have a pets database that stores information about many different types of animals. Each animal type could potentially be represented by a different table.

4. Define what a database table is
- Within a database, a table stores one specific kind of information.
- The records (entries) on these tables can be connected to records on other tables through the use of foreign keys
- In our pets database, we could have a `dogs` table, with individual records 

5. Describe the purpose of a primary key
- A primary key is used in the database as a unique identifier for the table.
- We often use an "id" field that simply increments with each entry. The incrementing ensures that each record has a unique identifier, even if their are other fields of the record that are repeated (two people with the same name would still need to have a unique identifier, for example).
- With a unique identifier, we can easily connect records within the table to records from other tables.

6. Describe the purpose of a foreign key
- A foreign key is used as the connector from this record to the primary key of another table's record.
- In our pets example, we can imagine two tables to demonstrate: a table to represent cats and a table to represent toys. Each of these tables has a primary key of "id" that is used as the unique identifier. In order to make a connection between a toy and a cat, we can add another field to the cat table called "owner_id", indicating that it is a foreign key for the cat table. By setting a toy's "owner_id" to the same value as a particular cat's "id", we can indicate that the cat is the owner of that toy.

7. Describe how to properly name things in PostgreSQL
- Names within postgres should generally consist of only lowercase letters, numbers, and underscores.
- Tables within a database are plural by convention, so a table for cats would typically be "cats" and office locations would be "office_locations" (all lowercase, underscores to replace spaces, plural)

8. Install and configure PostgreSQL 12, its client tools, and a GUI client for it named Postbird
- macOS: https://open.appacademy.io/learn/js-py---aug-2020-online/week-10-aug-2020-online/installing-postgresql-on-macos
- Ubuntu: The section starting with "Installing PostgreSQL Client Tools on Ubuntu": https://open.appacademy.io/learn/js-py---aug-2020-online/week-10-aug-2020-online/installing-postgresql-on-windows
  - Additional resource: https://help.ubuntu.com/community/PostgreSQL
- WSL2: https://github.com/appacademy-starters/postgres-docker
- WSL1: https://open.appacademy.io/learn/js-py---aug-2020-online/week-10-aug-2020-online/installing-postgresql-on-windows

9. Connect to an instance of PostgreSQL with the command line tool psql
- The `psql` command by default will try to connect to a database and username that matches your system's username
- We connect to a different database by providing an argument to the psql command
  - `psql pets`
- To connect with a different username we can use the `-U` flag followed by the username we would like to use. To connect to the `pets` database as `pets_user`
  - `psql -U pets_user pets`
- If there is a password for the user, we can tell psql that we would like a prompt for the password to show up by using the `-W` flag.
  - `psql -U pets_user -W pets` (the order of our flags doesn't matter, as long as any arguments associated with them are together, such as `pets_user` directly following `-U` in this example)

10. Identify whether a user is a normal user or a superuser by the prompt in the psql shell
- You can tell if you are logged in as a superuser or normal user by the prompt in the terminal.
- If the prompt shows `=>`, the user is a normal user
- If the prompt show `=#`, the user is a superuser

11. Create a user for the relational database management system
- Within psql, we can create a user with the `CREATE USER {username} {WITH options}` command.
- The most common options we'll want to use are `WITH PASSWORD 'mypassword'` to provide a password for the user we are creating, `CREATEDB` to allow the user to create new databases, or `SUPERUSER` to create a user with all elevated permissions.

12. Create a database in the database management system
- We can use the command `CREATE DATABASE {database name} {options}` inside psql to create a new database.
- A popular option we may utilize is `WITH OWNER {owner name}` to set another user as the owner of the database we are making.

13. Configure a database so that only the owner (and superusers) can connect to it
- We can `GRANT` and `REVOKE` privileges from a database to users or categories of users.
- In order to remove connection privileges to a database from the public we can use `REVOKE CONNECT ON DATABASE {db_name} FROM PUBLIC;`, removing all public connection access.
- If we wanted to grant it back, or to a specific user, we could similarly do `GRANT CONNECT ON DATABASE {db_name} FROM {specific user, PUBLIC, etc.};`

14. View a list of databases in an installation of PostgreSQL
- To list all databases we can use the `\l` or `\list` command in psql.

15. Create tables in a database
```sql
CREATE TABLE {table name} (
  {columnA} {typeA},
  {columnB} {typeB},
  etc...
);
```
- The whitespace does not matter. Creating the SQL statements on multiple lines is easier to read, but just like JavaScript, they can be presented differently.
- One common issue is that SQL does not like trailing commas, so the last column cannot have a comma after its type in this example.

16. View a list of tables in a database
- To list all database tables, use the `\dt` command.

17. Identify and describe the common data types used in PostgreSQL
- There are many different data types that we can use in our tables, here are some common examples:
  - `SERIAL`: autoincrementing, very useful for IDs
  - `VARCHAR(n)`: a string with a character limit of `n`
  - `TEXT`: doesn't have character limit, but less performant
  - `BOOLEAN`: true/false
  - `SMALLINT`: signed two-byte integer (-32768 to 32767)
  - `INTEGER`: signed four-byte integer (standard)
  - `BIGINT`: signed eight-byte integer (very large numbers)
  - `NUMERIC`: or `DECIMAL`, can store exact decimal values
  - `TIMESTAMP`: date and time

18. Describe the purpose of the UNIQUE and NOT NULL constraints, and create columns in database tables that have them
- In addition to the data type, we can provide flags for constraints to place on our column data.
- The `UNIQUE` flag indicates that the data for the column must not be repeated.
- By default we can create entries in our tables that are missing data from columns. When creating a pet, maybe we don't provide an age because we don't know it, for example. If we want to require that the data be present in order to create a new record, we can indicate that column must be `NOT NULL`.
- In the example below, we are requiring our pets to have unique names and for them to be present (both UNIQUE and NOT NULL). We have no such constraints on the age column, allowing repetition of ages or their complete absence.
```sql
CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  age SMALLINT
);
```

19. Create a primary key for a table
- When creating a table we can indicate the primary key by passing in the column name to parentheses like so:
```sql
CREATE TABLE people (
  id SERIAL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  PRIMARY KEY (id)
);
```
- We could have also used the `PRIMARY KEY` flag on the column definition itself:
```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);
```

20. Create foreign key constraints to relate tables
- In our table definition, we can use the line `FOREIGN KEY (foreign_key_stored_in_this_table) REFERENCE {other table} ({other_tables_key_name})` to connect two tables.
- This is probably easier to see in an example:
```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age SMALLINT,
  person_id INTEGER,
  FOREIGN KEY (person_id) REFERENCES people (id)
);
```

21. Explain that SQL is not case sensitive for its keywords but is for its entity names
- Exactly as the LO states, `CREATE TABLE` and `create table` are interpreted the same way. Using capitalization is a good convention in order to distinguish your keywords.
- The entity names that we use ARE case-sensitive, however. So a table named `pets` is unique from a table named `Pets`. In general, we prefer to use all lowercase for our entities to avoid any of this confusion.
