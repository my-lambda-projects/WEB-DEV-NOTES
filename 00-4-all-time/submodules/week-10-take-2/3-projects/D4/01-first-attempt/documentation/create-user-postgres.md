# CREATE USER

> CREATE USER CREATE USER — define a new database role Synopsis CREATE USER name [ [ WITH ] option [ …

CREATE USER
-----------

CREATE USER — define a new database role

Synopsis
--------

CREATE USER _`name`_ \[ \[ WITH \] _`option`_ \[ ... \] \]

where _`option`_ can be:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT _`connlimit`_
    | \[ ENCRYPTED \] PASSWORD '_`password`_' | PASSWORD NULL
    | VALID UNTIL '_`timestamp`_'
    | IN ROLE _`role_name`_ \[, ...\]
    | IN GROUP _`role_name`_ \[, ...\]
    | ROLE _`role_name`_ \[, ...\]
    | ADMIN _`role_name`_ \[, ...\]
    | USER _`role_name`_ \[, ...\]
    | SYSID _`uid`_

Description
-----------

`CREATE USER` is now an alias for [CREATE ROLE](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/sql-createrole.html "CREATE ROLE"). The only difference is that when the command is spelled `CREATE USER`, `LOGIN` is assumed by default, whereas `NOLOGIN` is assumed when the command is spelled `CREATE ROLE`.

Compatibility
-------------

The `CREATE USER` statement is a PostgreSQL extension. The SQL standard leaves the definition of users to the implementation.


[Source](https://www.postgresql.org/docs/current/sql-createuser.html)