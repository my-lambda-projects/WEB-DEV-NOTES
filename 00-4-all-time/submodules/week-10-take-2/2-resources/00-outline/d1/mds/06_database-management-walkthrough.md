# Database Management Walk-Through
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Naming a database](#naming-a-database)
- [Creating a database for your user](#creating-a-database-for-your-user)
- [Creating other users and databases](#creating-other-users-and-databases)
- [Applying security to databases](#applying-security-to-databases)
- [Listing databases and granting privileges](#listing-databases-and-granting-privileges)
- [Time to clean up](#time-to-clean-up)
- [What you've done](#what-youve-done)

<!-- /code_chunk_output -->
________________________________________________________________________________

**This is a walk-through**: Please type along as you read what's going on in
this article.

In this walk-through, you will

* Create a database for your user,
* Create databases for other users,
* Apply security to the databases to prevent access,
* See the first example of "relational data" in the RDBMS, and,
* Create other databases and apply security to them.

Now that you can create users for each of your applications, it's time for you
to be able to create a **database**. The database is where you will store the
data for your application.

You've been using the following command to log in as your superuser to the
"postgres" database. This works because if you don't specify a user with the
`-U` command line parameter, it just uses the name of the currently logged in
user, your user name.

```sql
psql postgres
```

That's because if you don't specify a database, then PostgreSQL will try to
connect you to a database that has the same name as your user. Try it, now.

```sql
psql
```

When you run this, if there is no database with your user name, then you will
receive an error message that reads like the following. (The text has been
wrapped in the example for readability.)

```
psql: error: could not connect to server:
      FATAL:  database "appacademy" does not exist
```

## Naming a database

Names of databases should not create spaces or dashes. They should contain only
lower case letters, numbers, and underscores.

* Good database names
  * appacademydata
  * financials2020
  * chicago_office
* Bad (incorrect) database names
  * App Academy Data
  * financials-2020
  * chicago.office

## Creating a database for your user

So that you don't have to type "postgres" every time you want to connect on the
command line, you can create a database with your user name so that one will
exist. To determine your user name, type the following command at your shell,
_not_ in PostgreSQL.

```shell
whoami
```

That will show you the name of your user. Remember that name. Now, start your
PostgreSQL command line as your superuser.

```shell
psql postgres
```

That should result in the `psql` command prompt of `postgres=#`. Again, that
means that you are currently connected to the "postgres" database.

Once you're greeted by the `postgres=#` command prompt, you can create a
database for your user by typing the following command. Don't copy and paste,
here. Type it out.

```sql
CREATE DATABASE «your user name» WITH OWNER «your user name»;
```

By making yourself the owner of that database, then your user can do anything
with it.

For the examples in these articles, the user name is "appacademy", so the
authors typed

```sql
CREATE DATABASE appacademy WITH OWNER appacademy;
```

If the command succeeds, you will see the message "CREATE DATABASE". Now, quit
the client using `\q`. Now, connect, again, to PostgreSQL by just typing the
following.

```shell
psql
```

Now, when you log in, you will be greeted by a command prompt that reads

```
«your user name»=#
```

You're connected to your very own database! And, now, you have less to type when
you want to start `psql`! Yay for less typing!

## Creating other users and databases

Create two normal users with the following user names and passwords using the
`CREATE USER` command from the last article.

| User name | Password |
|-----------|----------|
| ada       | ada1234  |
| odo       | ODO!!!1  |

Now, create two databases, each named for a user with that user as the owner.
Again, type these rather than copying and pasting.

```sql
CREATE DATABASE ada WITH OWNER ada;
CREATE DATABASE odo WITH OWNER odo;
```

Now that you have new users and databases for them, it's time to test out that
you can connect to PostgreSQL with those users. Quit your current session by
typing `\q` and pressing Enter (or Return). Then, start a new session for "ada"
by using the following `psql` command that will prompt for the user's password
(`-W`) and connect as the specified user (`-U ada`).

```shell
psql -W -U ada
```

**Note**: Those command line parameters can come in any order, usually. The
above statement can also be written as `psql -U ada -W`, for example.

When you enter that and type the password for "ada" which is "ada1234" from the
table above, you should see that you are now connected to the "ada" database in
the prompt.

```
ada=>
```

Notice that the character at the end is now a ">" rather than the "#" that
you're used to seeing. That's because "ada" is a normal user. Normal user
prompts end with ">". Your user, the one tied to your user name, is a super
user. That results in a "#"

Quit this session and connect as the "odo" user, now. You will notice that
because "odo" is a normal user, that you will see this prompt, too.

```
odo=>
```

## Applying security to databases

You've created a database for "odo". Type the following command which will try
to connect as the user "ada" (`-U ada`) to the database "odo" (`odo`).

```shell
psql -W -U ada odo
```

After you type the password, you may be surprised to find out that "ada" can
connect to the database "odo" that's owned by the user "odo"! That's because all
databases, when they're created, by default allow access to what is known as the
"PUBLIC" schema, a kind of group that everyone belongs to. You sure don't want
that if you want to prevent the user "ada" from messing up the data in the
database "odo", and the user "odo" from messing up the data in the database
"ada".

To do that, you have to revoke connection privileges to "PUBLIC". That's like
putting a biometric lock on a bank safety deposit box so that only the owner of
that deposit box (and bank officials) can get into it and do stuff with its
contents.

To do that, quit the current `psql` session if you're in one. Connect to
PostgreSQL as your user, a superuser. Again, now that you have your own
database, you can just type `psql` at your macOS Terminal command line or Ubuntu
shell command line. Once you have your prompt

```
«your user name»=#
```

you want to type a command that will revoke all privileges from the databases
named "odo" and "ada" the connection privileges of the entire "PUBLIC" group. To
do that, you write the command with the form:

```sql
REVOKE CONNECT ON DATABASE «database name» FROM PUBLIC;
```

Do that for both databases. Each time you run it, you should see the message
"REVOKE" showing that it worked.

Now, quit your session (`\q`). With the connection privilege revoked, "ada" can
no longer connect to database "odo" and vice versa. Try typing the following.

```shell
psql -W -U ada odo
```

You should see an error message similar to the following.

```
psql: error: could not connect to server:
      FATAL:  permission denied for database "odo"
DETAIL:  User does not have CONNECT privilege.
```

Try connecting with the user "odo" to the database named "ada". You should see
the same error message except with the database named "ada" in it.

But, your superuser status will not be thwarted! You can still connect to either
of those because of your superuser privileges. Neither of the following commands
should fail.

```shell
# Connect to the database "odo" as your superuser
psql odo
```

```shell
# Connect to the database "ada" as your superuser
psql ada
```

Superusers can connect to any and all databases. Because _superuser_!

Remember you created a database for your user? Now, revoke connection privileges
from it for "PUBLIC", too.

## Listing databases and granting privileges

Now, say the user "ada" needs another database, one that will contain data that
"ada" wants to keep separate from the data in the database "ada". Connect to
PostgreSQL as your user. Create a new database without specifying the owner.

```sql
CREATE DATABASE hr_data;
```

Now, type the command to list databases on your installation of PostgreSQL.

```sql
\list
```

You will see something akin to the following. The entries in the "Collate",
"Cypte", and "Access privileges" columns may differ. That's fine and can be
ignored. Also, where you see "appacademy", you'll probably see your user name.

| Name       | Owner      | Encoding | Collate | Ctype | Access privileges          |
|------------|------------|----------|---------|-------|----------------------------|
| ada        | ada        | UTF8     | C       | C     | =T/ada                   + |
|            |            |          |         |       | ada=CTc/ada                |
| appacademy | appacademy | UTF8     | C       | C     |                            |
| hr_data    | appacademy | UTF8     | C       | C     |                            |
| odo        | odo        | UTF8     | C       | C     | =T/odo                   + |
|            |            |          |         |       | odo=CTc/odo                |
| postgres   | appacademy | UTF8     | C       | C     |                            |
| template0  | appacademy | UTF8     | C       | C     | =c/appacademy            + |
|            |            |          |         |       | appacademy=CTc/appacademy  |
| template1  | appacademy | UTF8     | C       | C     | =c/appacademy            + |
|            |            |          |         |       | appacademy=CTc/appacademy  |

You will see that for the database that you just created, "hr_data", that the
owner is you. Go ahead and revoke all access to it from "PUBLIC" like you did in
the last section. Once you've done that, no one but you (and other superusers)
can connect to the "hr_data" database. (You may want to exit the `psql` shell
and try connecting with the credentials for the "ada" user just to make sure. If
you do that, reconnect as your user so you can continue with the security
management.)

Now, you need to add "ada" back to it so that user can connect to the database.
The opposite of `REVOKE ... FROM ...` is `GRANT ... TO ...`. So, you will type
the following:

```sql
GRANT CONNECT ON DATABASE hr_data TO ada;
```

Now, if you exit the `psql` shell and connect as "ada", you will see that user
can connect. Make sure that's true.

```shell
psql -U ada hr_data
```

Once you have confirmed that "ada" can connect, make sure that user "odo" cannot
connect.

```shell
psql -U odo hr_data
```

That command should return the error message that reads that the user "does not
have CONNECT privilege."

## Time to clean up

Time to clean up the entities that you've created in this walk-through. You
already know how to delete a user by using the `DROP USER` statement. Log in as
your superuser and try to drop the "ada" user. You should see an error message
similar to the following.

```
ERROR:  role "ada" cannot be dropped because some objects depend on it
DETAIL:  owner of database ada
privileges for database hr_data
```

This tells you that you can't drop that user because database objects in the
system rely on the existence of the user "ada". This is the first example that
you've seen of _relational data_. The database "ada" is related to the user
"ada" because user "ada" owns the database "ada". The database "hr_data" is
related to the user "ada" because the user "ada" has access privileges for the
database "hr_data".

This is one of the primary reasons that relational databases provide such an
important role in application design and development. If you or your application
puts data into the database that relates to other data, you can't just remove it
without removing _all of the related data, too_!

To remove the related data from user "ada", you need to revoke the connect
privilege on "hr_data" for user "ada". Then, you need to delete the database
"ada" that user "ada" owns. You've seen some `REVOKE` statements in this article
that revoke the connect privilege from "PUBLIC". It's the same for an individual
user, too, just replace "PUBLIC" with the name of the user.

Then, the opposite of `CREATE DATABASE` is `DROP DATABASE` just like the
opposite of `CREATE USER` is `DROP USER`.

Putting together those two hints, you can type commands like this to get the
job done.

```sql
REVOKE CONNECT ON DATABASE hr_data FROM ada;
DROP DATABASE ada;
DROP USER ada;
```

Run in that order, the first two statements remove the data _related_ to the
user "ada". Once that's gone, you can finally remove the user "ada" itself.

Do the same for the user "odo", deleting the related data, first. Remember, you
can run the `DROP` statement for the user "odo" to see what data relates to that
user.

**Note**: When you run a statement in PostgreSQL that results in an error
message, do not worry! You have not corrupted anything! These are helpful
statements to let you know that the state of the database won't allow you to
perform the requested operation. These kinds of error statements are guideposts
for you to follow to get to the place you want to be.

## What you've done

You have successfully created databases for yourself and other users. You have
created a database with you as the owner and given access to it to another user.
You have locked down databases so only owners (and superusers) can access them.
You know how to see the owner of a database. You know how to remove a user from
a database after removing all data related to the user.

This is the start of a lovely secure set of databases.
