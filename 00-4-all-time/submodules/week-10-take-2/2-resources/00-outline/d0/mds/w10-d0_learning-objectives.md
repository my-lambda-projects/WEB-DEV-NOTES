# WEEK-10 <br>*Learning Objectives* {ignore=true}
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=2 orderedList=false} -->

<!-- code_chunk_output -->

- [Make It Pretty Learning Objectives](#make-it-pretty-learning-objectives)
  - [Portfolio Quality](#portfolio-quality)
- [RDBMS And Database Entity Learning Objectives](#rdbms-and-database-entity-learning-objectives)
- [SQL Learning Objectives](#sql-learning-objectives)
- [ORM Learning Objectives](#orm-learning-objectives)

<!-- /code_chunk_output -->
________________________________________________________________________________
________________________________________________________________________________
# Make It Pretty Learning Objectives
## Portfolio Quality

It is really important that you make the best impression that you can with the
projects that you will soon start. To that end, the objectives for your learning
with this section should allow you to

* Recall the items recruiters are most interested
* Explain the aspects of good looking Web application
* Identify App Academy's expectations of your projects for after you graduate
* Practice good code hygiene when making projects live

________________________________________________________________________________
# RDBMS And Database Entity Learning Objectives

Databases are an essential part of many Web applications. There are lots of
things we could store in a database and use in a Web app, including user
information, product information, review information, and more. Learning how to
create databases and retrieve information stored in a database to display in a
Web app is a foundational development skill.

In this section, you will be able to:

* Define what a relational database management system is
* Describe what relational data is
* Define what a database is
* Define what a database table is
* Describe the purpose of a primary key
* Describe the purpose of a foreign key
* Describe how to properly name things in PostgreSQL
* Install and configure PostgreSQL 12, its client tools, and a GUI client for it
  named Postbird
* Connect to an instance of PostgreSQL with the command line tool `psql`
* Identify whether a user is a normal user or a superuser by the prompt in the
  `psql` shell
* Create a user for the relational database management system
* Create a database in the database management system
* Configure a database so that only the owner (and superusers) can connect to
  it
* View a list of databases in an installation of PostgreSQL
* Create tables in a database
* View a list of tables in a database
* Identify and describe the common data types used in PostgreSQL
* Describe the purpose of the UNIQUE and NOT NULL constraints, and create
  columns in database tables that have them
* Create a primary key for a table
* Create foreign key constraints to relate tables
* Explain that SQL is not case sensitive for its keywords but is for its entity
  names

________________________________________________________________________________
# SQL Learning Objectives

SQL is the language of relational data. It is one of the core languages that
most software developers know because of its prevalence in the industry due to
the common use of RDBMSes. The objectives for your SQL learning journey cover:

* How to use the `SELECT ... FROM ...` statement to select data from a single
  table
* How to use the `WHERE` clause on `SELECT`, `UPDATE`, and `DELETE` statements
  to narrow the scope of the command
* How to use the `JOIN` keyword to join two (or more) tables together into a
  single virtual table
* How to use the `INSERT` statement to insert data into a table
* How to use an `UPDATE` statement to update data in a table
* How to use a `DELETE` statement to remove data from a table
* How to use a seed file to populate data in a database
* How to perform relational database design
* How to use transactions to group multiple SQL commands into one succeed or
  fail operation
* How to apply indexes to tables to improve performance
* Explain what and why someone would use `EXPLAIN`
* Demonstrate how to install and use the **node-postgres** library and its
  `Pool` class to query a PostgreSQL-managed database
* Explain how to write prepared statements with placeholders for parameters
  of the form "$1", "$2", and so on

________________________________________________________________________________
# ORM Learning Objectives

To ease the use of SQL, the object-relational mapping tool was invented. This
allows developers to focus on their application code and let a library generate
all of the SQL for them. Depending on which developer you ask, this is a miracle
or a travesty. Either way, those developers use them because writing all of the
SQL by hand is a chore that most software developers just don't want to do.

In this section, you will learn:

* How to install, configure, and use Sequelize, an ORM for JavaScript
* How to use database migrations to make your database grow with your
  application in a source-control enabled way
* How to perform CRUD operations with Sequelize
* How to query using Sequelize
* How to perform data validations with Sequelize
* How to use transactions with Sequelize
