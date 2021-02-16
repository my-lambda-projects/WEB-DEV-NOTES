psql: error: could not connect to server: FATAL:  password authentication failed for user "-W"
 ~ week-10 : (master) psql -W -U  test_superuser postgres
Password: 
psql: error: could not connect to server: FATAL:  password authentication failed for user "test_superuser"
 ~ week-10 : (master) 
 ~ week-10 : (master) 
 ~ week-10 : (master) 
 ~ week-10 : (master) psql -W -U test_superuser postgres
Password: 
psql: error: could not connect to server: FATAL:  password authentication failed for user "test_superuser"
 ~ week-10 : (master) psql -W -U test_superuser postgres
Password: 
psql (12.4 (Ubuntu 12.4-1.pgdg20.04+1), server 13.0 (Debian 13.0-1.pgdg100+1))
WARNING: psql major version 12, server major version 13.
         Some psql features might not work.
Type "help" for help.

postgres=# 
postgres=# SELECT CURRENT_USER;
  current_user  
----------------
 test_superuser
(1 row)

postgres=# CREATE USER test_normal_user
postgres-# WITH
postgres-# PASSWORD 'test';
CREATE ROLE
postgres=# \q
 ~ week-10 : (master) psql -U test_normal_user -W postgres
Password: 
psql: error: could not connect to server: FATAL:  password authentication failed for user "test_normal_user"
 ~ week-10 : (master) psql -U test_normal_user -W postgres
Password: 
psql (12.4 (Ubuntu 12.4-1.pgdg20.04+1), server 13.0 (Debian 13.0-1.pgdg100+1))
WARNING: psql major version 12, server major version 13.
         Some psql features might not work.
Type "help" for help.

postgres=> SELECT CURRENT_USER;
   current_user   
------------------
 test_normal_user
(1 row)

postgres=> psql -U hacking_the_planet  -W postgres
postgres-> pwned!
postgres-> ;
ERROR:  syntax error at or near "psql"
LINE 1: psql -U hacking_the_planet  -W postgres
        ^
postgres=> CREATE USER hacking_the_planet with password "pwned!";
ERROR:  syntax error at or near ""pwned!""
LINE 1: CREATE USER hacking_the_planet with password "pwned!";
                                                     ^
postgres=> 


                                      List of roles
   Role name    |                         Attributes                         | Member of 
----------------+------------------------------------------------------------+-----------
 bgoonz         | Superuser                                                  | {}
 postgres       | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
 test_superuser | Superuser                                                  | {}



                                 List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   
-----------+----------+----------+------------+------------+-----------------------
 ada       | ada      | UTF8     | en_US.utf8 | en_US.utf8 | =T/ada               +
           |          |          |            |            | ada=CTc/ada
 bgoonz    | bgoonz   | UTF8     | en_US.utf8 | en_US.utf8 | 
 hr_data   | bgoonz   | UTF8     | en_US.utf8 | en_US.utf8 | 
 odo       | odo      | UTF8     | en_US.utf8 | en_US.utf8 | =T/odo               +
           |          |          |            |            | odo=CTc/odo
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
(7 rows)

~
~
~
~
~
(END)




 ~ day-work : (master) psql bgoonz
psql (12.4 (Ubuntu 12.4-1.pgdg20.04+1), server 13.0 (Debian 13.0-1.pgdg100+1))
WARNING: psql major version 12, server major version 13.
         Some psql features might not work.
Type "help" for help.

bgoonz=# \d puppies
                                       Table "public.puppies"
    Column    |          Type          | Collation | Nullable |               Default               
--------------+------------------------+-----------+----------+-------------------------------------
 id           | integer                |           | not null | nextval('puppies_id_seq'::regclass)
 name         | character varying(50)  |           | not null | 
 age_yrs      | numeric(3,1)           |           | not null | 
 breed        | character varying(100) |           | not null | 
 weight_lbs   | integer                |           | not null | 
 microchipped | boolean                |           | not null | false
Indexes:
    "puppies_pkey" PRIMARY KEY, btree (id)

bgoonz=#     CREATE TABLE people (
bgoonz(#       id SERIAL,
bgoonz(#       first_name VARCHAR(50) NOT NULL,
bgoonz(#       last_name VARCHAR(50) NOT NULL,
bgoonz(#       email VARCHAR(250) NOT NULL UNIQUE,
bgoonz(#       PRIMARY KEY (id)
bgoonz(#     );
CREATE TABLE
bgoonz=# \d people
                                      Table "public.people"
   Column   |          Type          | Collation | Nullable |              Default               
------------+------------------------+-----------+----------+------------------------------------
 id         | integer                |           | not null | nextval('people_id_seq'::regclass)
 first_name | character varying(50)  |           | not null | 
 last_name  | character varying(50)  |           | not null | 
 email      | character varying(250) |           | not null | 
Indexes:
    "people_pkey" PRIMARY KEY, btree (id)
    "people_email_key" UNIQUE CONSTRAINT, btree (email)

bgoonz=# 




 ~ day-work : (master) psql bgoonz
psql (12.4 (Ubuntu 12.4-1.pgdg20.04+1), server 13.0 (Debian 13.0-1.pgdg100+1))
WARNING: psql major version 12, server major version 13.
         Some psql features might not work.
Type "help" for help.

bgoonz=# \d puppies
                                       Table "public.puppies"
    Column    |          Type          | Collation | Nullable |               Default               
--------------+------------------------+-----------+----------+-------------------------------------
 id           | integer                |           | not null | nextval('puppies_id_seq'::regclass)
 name         | character varying(50)  |           | not null | 
 age_yrs      | numeric(3,1)           |           | not null | 
 breed        | character varying(100) |           | not null | 
 weight_lbs   | integer                |           | not null | 
 microchipped | boolean                |           | not null | false
Indexes:
    "puppies_pkey" PRIMARY KEY, btree (id)

bgoonz=#     CREATE TABLE people (
bgoonz(#       id SERIAL,
bgoonz(#       first_name VARCHAR(50) NOT NULL,
bgoonz(#       last_name VARCHAR(50) NOT NULL,
bgoonz(#       email VARCHAR(250) NOT NULL UNIQUE,
bgoonz(#       PRIMARY KEY (id)
bgoonz(#     );
CREATE TABLE
bgoonz=# \d people
                                      Table "public.people"
   Column   |          Type          | Collation | Nullable |              Default               
------------+------------------------+-----------+----------+------------------------------------
 id         | integer                |           | not null | nextval('people_id_seq'::regclass)
 first_name | character varying(50)  |           | not null | 
 last_name  | character varying(50)  |           | not null | 
 email      | character varying(250) |           | not null | 
Indexes:
    "people_pkey" PRIMARY KEY, btree (id)
    "people_email_key" UNIQUE CONSTRAINT, btree (email)

bgoonz=#     CREATE TABLE breeds (
bgoonz(#       id SERIAL,
bgoonz(#       name VARCHAR(50) NOT NULL,
bgoonz(#       PRIMARY KEY (id)
bgoonz(#     );
CREATE TABLE
bgoonz=# \d puppies
                                       Table "public.puppies"
    Column    |          Type          | Collation | Nullable |               Default               
--------------+------------------------+-----------+----------+-------------------------------------
 id           | integer                |           | not null | nextval('puppies_id_seq'::regclass)
 name         | character varying(50)  |           | not null | 
 age_yrs      | numeric(3,1)           |           | not null | 
 breed        | character varying(100) |           | not null | 
 weight_lbs   | integer                |           | not null | 
 microchipped | boolean                |           | not null | false
Indexes:
    "puppies_pkey" PRIMARY KEY, btree (id)

bgoonz=# DROP TABLE puppies
bgoonz-# psql bgoonz
bgoonz-# DROP TABLE puppies
bgoonz-# drop table people
bgoonz-# ;
ERROR:  syntax error at or near "psql"
LINE 2: psql bgoonz
        ^
bgoonz=# DROP TABLE people;
DROP TABLE
bgoonz=# DROP TABLE puppies;
DROP TABLE
bgoonz=#    CREATE TABLE puppies (
bgoonz(#       id SERIAL,
bgoonz(#       name VARCHAR(50) NOT NULL,
bgoonz(#       age_yrs NUMERIC(3,1) NOT NULL,
bgoonz(#       breed_id INTEGER NOT NULL,
bgoonz(#       weight_lbs INTEGER NOT NULL,
bgoonz(#       microchipped BOOLEAN NOT NULL DEFAULT FALSE,
bgoonz(#       PRIMARY KEY(id),
bgoonz(#       FOREIGN KEY (breed_id) REFERENCES breeds(id)
bgoonz(#     );
CREATE TABLE
bgoonz=# \d puppies
                                      Table "public.puppies"
    Column    |         Type          | Collation | Nullable |               Default               
--------------+-----------------------+-----------+----------+-------------------------------------
 id           | integer               |           | not null | nextval('puppies_id_seq'::regclass)
 name         | character varying(50) |           | not null | 
 age_yrs      | numeric(3,1)          |           | not null | 
 breed_id     | integer               |           | not null | 
 weight_lbs   | integer               |           | not null | 
 microchipped | boolean               |           | not null | false
Indexes:
    "puppies_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "puppies_breed_id_fkey" FOREIGN KEY (breed_id) REFERENCES breeds(id)

bgoonz=# 
