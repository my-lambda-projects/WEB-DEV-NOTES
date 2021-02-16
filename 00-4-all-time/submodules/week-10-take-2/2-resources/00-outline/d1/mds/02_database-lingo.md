# Database Lingo<br>*The Relational Database Management System*
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [RDBMS](#rdbms)
- [What is PostgreSQL?](#what-is-postgresql)
- [What is SQL?](#what-is-sql)
- [What we learned:](#what-we-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

Databases are an essential part of many Web applications. There are lots of
things we could store in a database and use in a Web app, including user
information, product information, review information, and more. Learning how to
create databases and retrieve information stored in a database to display in a
Web app is a foundational development skill.

The most popular kind of database is called a _relational database_. That's what
you'll primarily use in this course. There are other databases called "document
databases", "non-relational databases", or "NoSQL databases" that have become
popular since the mid-2000s. They serve a different purpose than relational
databases by storing data in ways that are different than the way relational
databases store their data.

In this reading, you will learn about **relational database management
systems**. Then, you will install one. Then, you will start using it!

## RDBMS

That's quite an ugly acronym, but it's what developers have when referring to
the software application that manages databases for us. Here's an important
difference for you to understand.

The **RDBMS** is a software application that you run that your programs can
connect to, and allows them to store, modify, and retrieve data. The RDBS that
you will use in this course is called [PostgreSQL], often shortened to just
"postgres", pronounced like it's spelled. It is an "open-source" RDBMS which
means that you can go read the source code for it, copy it, modify it, and make
your own specialized version of an RDBMS. Often, developers will talk about the
"database server". That is the computer on which the RDBMS is running.

A **database** (or more properly **relational database**) is a collection of
structured data that the RDBMS manages for you. A single running RDBMS can have
hundreds of databases in it that it manages.

Software developers will often use the term "database" to refer to the RDBMS.
They will also say that "the data is in postgres" or "the data is in Oracle"
which is terribly ambiguous because those are the names of the RDBMSes, not a
database where the data is stored. That'd be like asking someone their address
and them replying "Chicago".

Just be aware that the language around these terms is loose.

## What is PostgreSQL?

Again, PostgreSQL is software. Specifically, it is an open-source, relational
database management system. It is derived from the POSTGRES package written at
UC Berkeley. The specific name “PostgreSQL” was coined in 1996, after SQL was
implemented as its core query language. PostgreSQL provided a new program (new
for 1996) for interactive SQL queries called `[psql]`, which is terminal-based
front-end to PostgreSQL that lets you to type in queries interactively, issue
them to PostgreSQL, and see the query results.

You install PostgreSQL onto a computer. It then runs as a "service", that is, a
program that runs in the background that should not stop until the machine does.
You will install it on your computer. It will quietly run in the background,
eagerly awaiting for you to connect to it and interact with it from the command
line, from a GUI tool, or from your application.

When you do connect with it, you will interact with it through a small set of
its own commands and SQL.

## What is SQL?

SQL (pronounced "sequel" or "s-q-l") stands for "Structured Query Language". It
is not a programming language like JavaScript. JavaScript, as you well know, has
_control flow_, with `for` loops and `if` statements. Most SQL that you write
doesn't have all that. Instead, it is a _declarative_ programming language. You
tell the database what computation you want it to do, and it does it. In that
way, SQL is more like CSS than JavaScript.

Whereas JavaScript works on variables and arrays of single values, most SQL
works on _sets_ of records. You'll see more what that means later, but just know
that in the SQL that you learn, you won't declare a single variable in that SQL.

SQL, the language, is the primary way that you will interact with the RDBMS to
affect the data in a single database or the structure of the database itself.
The process of using SQL takes two steps:

1. Connect to an RDBMS specifying
   * credentials, user name and password
   * the name of the database that you want to use
2. Issue one or more SQL statements to interact with
   * the structure of the database
   * the data in the database

Some vendor-specific variants of SQL _do_ have loops and if-statements. However,
you will be learning the general kind of SQL, the one managed by the American
National Standards Institute, called ANSI SQL which defines the way that we get
data out of, put data into, modify data in, and remove data from a database.
This type of SQL is _portable_ between different types of database management
systems. That means most of what you learn in this course, you will be able to
use on _any_ relational database management system that supports ANSI SQL,
RDBMSes such as

* **Informix**, a commercial RDBMS from IBM intended to run on servers and
  mainframes
* **Microsoft Access**, a commercial RDBMS from Microsoft intended for personal
  use
* **Microsoft SQL Server**, a commercial RDBMS from Microsoft intended to run on
  servers
* **MySQL**, an open-source RDBMS comparable to PostgreSQL
* **Oracle DB**, a commercial RDBMS from Microsoft intended to run on servers
* **SQLite**, an open-source RDBMS that many applications _embed_ into the
  program to efficiently store the application's data relational data

Now that this preamble is out of the way, the next step is to install
PostgreSQL!

## What we learned:

In this article you learned that

* A _relational database management_ system is software that usually runs as a
  service that manages collections of structured data called databases.
* PostgreSQL is one of many relational database management systems and the one
  that you will mostly use in this course
* A _database_ is a collection of structured data that an RDBMS manages for you.
* The Structured Query Language (SQL) is a programming language that allows you
  to interact with the structure of the database and the actual data that's
  stored in it.

[PostgreSQL]: https://www.postgresql.org/
[psql]: https://www.postgresql.org/docs/9.2/app-psql.html
