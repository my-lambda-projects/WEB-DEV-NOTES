# 17 Practical psql Commands That You Don't Want To Miss

> In this tutorial, you will get a list of the most commonly used psql commands that help you interact with the PostgreSQL database server more effectively.

**Summary**: in this tutorial, we give you a list of common psql commands that help you query data from the PostgreSQL database server faster and more effectively.

1) Connect to PostgreSQL database
---------------------------------

The following command [connects to a database](https://www.postgresqltutorial.com/postgresql-jdbc/connecting-to-postgresql-database/) under a specific user. After pressing `Enter` PostgreSQL will ask for the password of the user.

`psql -d database -U  user -W` 

For example, to connect to `dvdrental` database under `postgres` user, you use the following command:

`C:\Program Files\PostgreSQL\9.5\bin>psql -d dvdrental -U postgres -W
Password for user postgres:
dvdrental=`

If you want to connect to a database that resides on another host, you add the -h option as follows:

`psql -h host -d database -U user -W`

In case you want to use SSL mode for the connection, just specify it as shown in the following command:

`psql -U user -h host "dbname=db sslmode=require"`

2) Switch connection to a new database
--------------------------------------

Once you are connected to a database, you can switch the connection to a new database under a user specified by `user`. The previous connection will be closed. If you omit the `user` parameter, the current `user` is assumed.

The following command connects to `dvdrental` database under `postgres` user:

`postgres=
You are now connected to database "dvdrental" as user "postgres".
dvdrental=`

3) List available databases
---------------------------

To [list all databases](https://www.postgresqltutorial.com/postgresql-show-databases/) in the current PostgreSQL database server, you use `\l` command:

4) List available tables
------------------------

To [list all tables](https://www.postgresqltutorial.com/postgresql-show-tables/) in the current database, you use `\dt` command:

Note that this command shows the only table in the currently connected database.

5) Describe a table
-------------------

To [describe a table](https://www.postgresqltutorial.com/postgresql-describe-table/) such as a column, type, modifiers of columns, etc., you use the following command:

6) List available schema
------------------------

To list all [schemas](https://www.postgresqltutorial.com/postgresql-schema/) of the currently connected database, you use the `\dn` command.

7) List available functions
---------------------------

To list available functions in the current database, you use the `\df` command.

8) List available views
-----------------------

To list available [views](https://www.postgresqltutorial.com/postgresql-views/) in the current database, you use the `\dv` command.

9) List users and their roles
-----------------------------

To list all users and their assign roles, you use `\du` command:

10) Execute the previous command
--------------------------------

To retrieve the current version of PostgreSQL server, you use the `version()` function as follows:

Now, you want to save time typing the previous command again, you can use `\g` command to execute the previous command:

psql executes the previous command again, which is the [SELECT statement](https://www.postgresqltutorial.com/postgresql-select/),.

11) Command history
-------------------

To display command history, you use the `\s` command.

If you want to save the command history to a file, you need to specify the file name followed the `\s` command as follows:

12) Execute psql commands from a file
-------------------------------------

In case you want to execute psql commands from a file, you use `\i` command as follows:

13) Get help on psql commands
-----------------------------

To know all available psql commands, you use the `\?` command.

To get help on specific PostgreSQL statement, you use the `\h` command.

For example, if you want to know detailed information on [ALTER TABLE](https://www.postgresqltutorial.com/postgresql-alter-table/) statement, you use the following command:

14) Turn on query execution time
--------------------------------

To turn on query execution time, you use the `\timing` command.

`dvdrental=
Timing is on.
dvdrental=
 count

  1000
(1 row)

Time: 1.495 ms
dvdrental=`

You use the same command `\timing` to turn it off.

`dvdrental=
Timing is off.
dvdrental=`

15) Edit command in your own editor
-----------------------------------

It is very handy if you can type the command in your favorite editor. To do this in psql, you `\e` command. After issuing the command, psql will open the text editor defined by your EDITOR environment variable and place the most recent command that you entered in psql into the editor.

![psql commands](https://sp.postgresqltutorial.com/wp-content/uploads/2015/07/psql-commands.jpg)

After you type the command in the editor, save it, and close the editor, psql will execute the command and return the result.

![psql command example](https://sp.postgresqltutorial.com/wp-content/uploads/2015/07/psql-command-example.jpg)

It is more useful when you edit a function in the editor.

![psql commadn ef edit function](https://sp.postgresqltutorial.com/wp-content/uploads/2015/07/psql-command-ef-edit-function.jpg)

16) Switch output options
-------------------------

psql supports some types of output format and allows you to customize how the output is formatted on the fly.

*    `\a` command switches from aligned to non-aligned column output.
*    `\H` command formats the output to HTML format.

17) Quit psql
-------------

To quit psql, you use `\q` command and press `enter` to exit psql.

In this tutorial, you have learned how to use psql commands to perform various commonly used tasks in PostgreSQL.

*   Was this tutorial helpful ?
*   [Yes](#)[No](#)


[Source](https://www.postgresqltutorial.com/psql-commands/)