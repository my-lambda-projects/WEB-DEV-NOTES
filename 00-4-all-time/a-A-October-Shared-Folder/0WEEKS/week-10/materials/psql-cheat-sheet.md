# A PostgreSQL cheat sheet

> Learn to move your first steps with the PostgreSQL console with this cheat sheet.

_Learn to move your first steps with the PostgreSQL console with this cheat sheet._

 [![A PostgreSQL command line cheat sheet](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/static/7690eafc4f448cd4a3f3f9e479ec6091/7a3d6/postgresql.png "A PostgreSQL command line cheat sheet")](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/blog/static/7690eafc4f448cd4a3f3f9e479ec6091/c1b63/postgresql.png) 

PostgreSQL is a fantastic database isn't it? However for all those starting out, **PostgreSQL console** could be confusing to say the least.

Let's see in this cheatsheet what are the basic commands for **moving your first steps it the PostgreSQL console**.

[](#first-steps-with-postgresql)First steps with PostgreSQL
-----------------------------------------------------------

First of all you want to login into the console. To do so become the user postgres from the command line with:

Once inside enter the PostgreSQL console with:

If you use [Postgres.app](https://postgresapp.com/) for MacOS, from the terminal you can run `psql` followed by the default database name:

If you see this prompt you're in:

[](#interacting-with-databases)Interacting with databases
---------------------------------------------------------

Once inside the PostgreSQL console you can interact with databases. From now on I'll omit the prompt `postgres=#`. To **create a new database**:

To list all the databases in the server:

In addition to the shortcut there is also the extended version:

To delete a database **(warning zone)**:

To connect to a database run:

or:

and you should see:

    You are now connected to database "family" as user "postgres"

Note that **outside the PostgreSQL console** you can also create a database with `createdb`:

[](#interacting-with-tables)Interacting with tables
---------------------------------------------------

Once connected to a database you can **list all its tables** with:

This command will give you a representation of all the tables in the database:

              List of relations
     Schema |   Name   | Type  |  Owner   
    --------+----------+-------+----------
     public | daughter | table | postgres
     public | mother   | table | postgres
    (2 rows)

My example assumes a simple database with two tables [connected through a many to one relationship](https://www.valentinog.com/blog/many-to-one/). To describe a table, that is, to see its columns, run:

This command will give you a complete description of the table:

                                          Table "public.daughter"
       Column   |          Type          | Collation | Nullable |               Default                
    ------------+------------------------+-----------+----------+--------------------------------------
     id         | smallint               |           | not null | nextval('daughter_id_seq'::regclass)
     first_name | character varying(254) |           | not null | 
     last_name  | character varying(254) |           | not null | 
     mother_id  | integer                |           | not null | 
    Indexes:
        "daughter_pkey" PRIMARY KEY, btree (id)
    Foreign-key constraints:
        "fk_mother_id" FOREIGN KEY (mother_id) REFERENCES mother(id)

You can see every column in the table with the corresponding type. If there is any primary or foreign key you'll see them as well.

[](#postgresql-roles)PostgreSQL roles
-------------------------------------

Database users can interact, modify, update, and see databases. In PostgreSQL they're called **roles**. To create a new user from the PostgreSQL console run:

    CREATE ROLE my_user WITH LOGIN PASSWORD 'my_password';

PostgreSQL roles may own one or more database. Once you create a role you can assign an entire database to it:

    CREATE DATABASE my_database WITH OWNER my_user;

If you want to give a user the ability to create new databases, run:

    ALTER USER my_user CREATEDB;

When you're done with databases, roles, and tables you can finally exit the console with:

[](#postgresql-dumping-a-remote-database)PostgreSQL: dumping a remote database
------------------------------------------------------------------------------

It's common when migrating between systems to migrate first the application code, fetch the database from the old system, and load it in the new environment.

With `pg_dump` you can dump a remote database to the local environment. To do so, set the `PGPASSWORD` environment:

    unset HISTFILE
    export PGPASSWORD=4c1d4f7591801abb

Then, use `pg_dump` to dump the remote database on the local machine:

    pg_dump -h dbhost.example -d dbname -U dbuser > backup_file

To load the dump on the new machine, create the database and then run:

    psql dbname < backup_file

[](#postgresql-console-getting-help)PostgreSQL console: getting help
--------------------------------------------------------------------

The PostgreSQL console has a lot more commands, and there are also a lot of **SQL instructions in the PostgreSQL dialect**. To see the complete list of all the SQL command available in PostgreSQL you can run:

To see a complete list of PostgreSQL command run:


[Source](https://www.valentinog.com/blog/psql/)