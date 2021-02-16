# User Management Walk-Through
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Naming a user](#naming-a-user)
- [Creating a superuser](#creating-a-superuser)
- [Creating a limited user](#creating-a-limited-user)
- [Removing a user](#removing-a-user)
- [Case sensitivity](#case-sensitivity)
- [What you learned](#what-you-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

**This is a walk-through**: Please type along as you read what's going on in
this article.

In this walk-through, you will

* Create superusers with full access to the system,
* Create normal users,
* Delete users from the system, and,
* See how SQL is not case sensitive

It's good practice to create a different database user for each application that
you will have connect to an RDBMS. This prevents applications from reading and
changing data in _other_ databases that they should not have access to.

The "User" in PostgreSQL is a **database entity** that represents a person or
system that will connect to the RDBMS and access data from one or more
databases. This is the first entity that you will create, modify, and destroy.

All user management is beyond the scope of the ANSI SQL standard. That means
each relational database management system has its own vendor-specific
extensions about how to do this. When working with a new RDBMS, check out its
documentation about how to create users, groups, and other security entities.

## Naming a user

Names of users should not create spaces or dashes. They should contain only
lower case letters, numbers, and underscores.

* Good user names
  * appacademy
  * patel_kush_112
  * bdorsey
* Bad (incorrect) user names
  * Ned Ruggeri
  * melvin-howard-tormé
  * b.d.o.r.s.e.y

## Creating a superuser

On Windows, open your Ubuntu shell. On macOS, open your Terminal. Start the
PostgreSQL command line client with the command `psql postgres`.

You should see some information about the version of the database and the
command line tool, plus a helpful hint to type "help" if you need help. Then,
you will see the `psql` prompt:

```
postgres=#
```

The value "postgres" means that you're currently connected to the "postgres"
database. More on that in the next article.

To create a user in PostgreSQL you will use the following command. It creates a
user with the name "test_superuser" and the password "test". _Type_ that command
(please don't copy and paste it) and run it by hitting Enter (or Return).

```sql
CREATE USER test_superuser
WITH
PASSWORD 'test'
SUPERUSER;
```

Note that this SQL statement ends with a semicolon. All SQL statements in
PostgreSQL do. Don't forget it. If you do forget it, just type it on an empty
line. The above statement, for example, can also be entered as the following
where the semicolon is on a line all its own.

```sql
CREATE USER test_superuser
WITH
PASSWORD 'test'
SUPERUSER
;
```

If you typed it correctly, you will see the message `CREATE ROLE`. Because you
created test_superuser as a super user, when a person or application uses that
login, they can do whatever they want. You will test out that fact, now.

Quit your current session by typing `\q` and hitting Enter (or Return). Now type
the following command to connect to PostgreSQL with the newly-created user. It
instructs the client to connect as the user "test_superuser" (`-U
test_superuser`) to the database named "postgres" (`postgres`) and prompt for
the password (`-W`) for the user.

```shell
psql -W -U test_superuser postgres
```

At the prompt, type the password _test_ that you used when you created the user.
If everything went well, then you will find yourself at the SQL prompt just like
before. To prove to you that you're now the "test_superuser", type the following
command.

```sql
SELECT CURRENT_USER;
```

It should respond with the following output:

```
  current_user
----------------
 test_superuser
(1 row)
```

## Creating a limited user

You're logged in as a super user that can do anything. Use that power! Create
another user that does not have such amazing power. You will rarely create super
users in real life. The following user creation is more appropriate. It creates
just a normal user that can log in. Then, you can assign that user specific
access to specific databases.

```sql
CREATE USER test_normal_user
WITH
PASSWORD 'test';
```

That should also give you the `CREATE ROLE` message that means everything went
ok.

Quit the session by typing `\q` and pressing Enter (or Return). Start another as
the new user.

```psql
psql -U test_normal_user -W postgres
```

Type the password _test_ for this user. Confirm that you are now that new user
by using the `SELECT CURRENT_USER;` command. Once confirmed, try to create a
user named _hacking_the_planet_ with a password of _pwned!_. What happens?

That's right. This user doesn't have the security privileges to create users.

Create users to do the job you want them to do. Then, give the appropriate
permissions to that user. This will make a safe and secure application
development world for you and your team.

## Removing a user

Time to remove both of these users. The opposite of `CREATE USER` is `DROP
USER`. To drop a user, you just type `DROP USER «user name»;`.

Connect again as just you, the OG super user. (Once again, that's with the
command `psql postgres`.)

Drop the normal user with the command

```
DROP USER test_normal_user;
```

Then, drop the user with the name "test_superuser". You should receive the
message "DROP ROLE" for each of your commands.

## Case sensitivity

Unlike JavaScript, the keywords in SQL are case insensitive. that means you can
type any of the following and they'll all work.

```sql
DROP USER test_user;
Drop User test_user;
drop user test_user;
```

Notice that entity names like user names _are_ case sensitive.

SQL is conventionally written in all uppercase to distinguish the commands from
the names that you will have for your entities and their properties.

## What you learned

* That a user is a _database entity_ in PostgreSQL
* That it is best practice to create a user for each application that you will
  create
* How to create a super user with the `CREATE USER ... SUPERUSER` command
* How to create a restricted (normal) user with the `CREATE USER` command
* How to remove a user with the `DROP USER` command
* SQL keywords are not sensitive to case, but are conventionally written in
  uppercase
