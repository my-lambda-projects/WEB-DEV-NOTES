# Writing And Running A Seed File In PSQL
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Creating a seed file](#creating-a-seed-file)
- [Populating a database via < (“left caret”)](#populating-a-database-via-left-caret)
- [Populating the database via | (“pipe”)](#populating-the-database-via-pipe)
- [What we learned:](#what-we-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

After a database is created, we need to populate it, or _seed_ it, with data.
Until now, we’ve used the command-line psql interface to create tables and
insert rows into those tables. While that’s fine for small datasets, it would
be cumbersome to add a large dataset using the command line.

In this reading, we’ll learn how to create and run a seed file, which makes the
process of populating a database with test data much easier.

## Creating a seed file

You can create a seed file by opening up VSCode or any text editor and saving a
file with the `.sql` extension.

Let’s create a seed file called `seed-data.sql` that’s going to create a new
table called `pies` and insert 50 pie rows into the table. Use the code below
to create the seed file, and make sure to save your seed file on your machine.

_**seed-data.sql**_
```sql
CREATE TABLE pies (
  flavor VARCHAR(255) PRIMARY KEY,
  price FLOAT
);

INSERT INTO pies VALUES('Apple', 19.95);
INSERT INTO pies VALUES('Caramel Apple Crumble', 20.53);
INSERT INTO pies VALUES('Blueberry', 19.31);
INSERT INTO pies VALUES('Blackberry', 22.86);
INSERT INTO pies VALUES('Cherry', 22.32);
INSERT INTO pies VALUES('Peach', 20.45);
INSERT INTO pies VALUES('Raspberry', 20.99);
INSERT INTO pies VALUES('Mixed Berry', 21.45);
INSERT INTO pies VALUES('Strawberry Rhubarb', 24.81);
INSERT INTO pies VALUES('Banana Cream', 18.66);
INSERT INTO pies VALUES('Boston Toffee', 25.00);
INSERT INTO pies VALUES('Banana Nutella', 22.12);
INSERT INTO pies VALUES('Bananas Foster', 24.99);
INSERT INTO pies VALUES('Boston Cream', 23.75);
INSERT INTO pies VALUES('Cookies and Cream', 18.27);
INSERT INTO pies VALUES('Coconut Cream', 22.89);
INSERT INTO pies VALUES('Chess', 25.00);
INSERT INTO pies VALUES('Lemon Chess', 25.00);
INSERT INTO pies VALUES('Key Lime', 19.34);
INSERT INTO pies VALUES('Lemon Meringue', 19.58);
INSERT INTO pies VALUES('Guava', 18.92);
INSERT INTO pies VALUES('Mango', 19.55);
INSERT INTO pies VALUES('Plum', 20.21);
INSERT INTO pies VALUES('Apricot', 20.55);
INSERT INTO pies VALUES('Gooseberry', 23.54);
INSERT INTO pies VALUES('Lingonberry', 24.35);
INSERT INTO pies VALUES('Pear Vanilla Butterscotch', 25.13);
INSERT INTO pies VALUES('Baked Alaska', 25.71);
INSERT INTO pies VALUES('Chocolate', 19.00);
INSERT INTO pies VALUES('Chocolate Mousse', 21.46);
INSERT INTO pies VALUES('Mexican Chocolate', 28.33);
INSERT INTO pies VALUES('Chocolate Caramel', 26.67);
INSERT INTO pies VALUES('Chocolate Chip Cookie Dough', 18.65);
INSERT INTO pies VALUES('Pecan', 26.33);
INSERT INTO pies VALUES('Bourbon Caramel Pecan', 27.88);
INSERT INTO pies VALUES('Chocolate Pecan', 27.63);
INSERT INTO pies VALUES('Pumpkin', 20.91);
INSERT INTO pies VALUES('Sweet Potato', 20.75);
INSERT INTO pies VALUES('Purple Sweet Potato', 26.34);
INSERT INTO pies VALUES('Cheesecake', 28.99);
INSERT INTO pies VALUES('Butterscotch Praline', 29.78);
INSERT INTO pies VALUES('Salted Caramel', 30.32);
INSERT INTO pies VALUES('Salted Honey', 59.00);
INSERT INTO pies VALUES('Sugar Cream', 33.89);
INSERT INTO pies VALUES('Mississippi Mud', 28.67);
INSERT INTO pies VALUES('Turtle Fudge', 30.58);
INSERT INTO pies VALUES('Fruit Loops', 20.45);
INSERT INTO pies VALUES('Black Forest', 34.99);
INSERT INTO pies VALUES('Maple Cream', 35.88);
INSERT INTO pies VALUES('Smores', 26.43);
INSERT INTO pies VALUES('Milk Bar', 46.00);

SELECT * FROM pies;
```

## Populating a database via < (“left caret”)

Now that you have a seed file, you can insert it into a database with a
simple command.

Create a database named "bakery".

The syntax is `psql -d [database] < [path_to_file/file.sql]`. The left caret
(`<`) takes the standard input from the file on the right (your seed file) and
inputs it into the program on the left (`psql`).

Open up your terminal, and enter the following command. Make sure to replace
`path_to_my_file` with the actual file path.

```shell
psql -d bakery < path_to_my_file/seed-data.sql
```

In the terminal, you should see a bunch of `INSERT` statements and the entire
“pies” table printed out (from the `SELECT *` query in the seed file).

You can log into psql and use `\dt` to verify that your new table has been
added to the database:

```shell
postgres=# \dt
List of relations
 Schema |     Name     | Type  |  Owner
 public | breeds       | table | appacademy
 public | pies         | table | appacademy
 public | puppies      | table | appacademy
```

## Populating the database via | (“pipe”)

You could also use the “pipe” (`|`) to populate the database with your seed
file.

The syntax is `cat [path_to_file/file.sql] | psql -d [database]`. ‘cat’ is a
standard Unix utility that reads files sequentially, writing them to standard
output. The “pipe” (`|`) takes the standard output of the command on the left
and pipes it as standard input to the command on the right.

Try out this method in your terminal. If you have an existing “pies” table,
you’ll need to drop this table before you can add it again:

```sql
DROP TABLE pies;
```

Then, enter the following. Make sure to replace `path_to_my_file` with the
actual file path.

```shell
cat path_to_my_file/seed-data.sql | psql -d postgres
```

Again, you should see a bunch of `INSERT` statements and the entire “pies”
table printed out (from the `SELECT *` query in the seed file).

You can log into psql and use `\dt` to verify that your new table has been
added to the database:

```shell
postgres=# \dt
List of relations
 Schema |     Name     | Type  |  Owner
 public | friends      | table | postgres
 public | pies         | table | postgres
 public | puppies      | table | postgres
```

## What we learned:

* What a seed file is
* How to create a seed file
* How to populate a database with a seed file using <
* How to populate a database with a seed file using |
