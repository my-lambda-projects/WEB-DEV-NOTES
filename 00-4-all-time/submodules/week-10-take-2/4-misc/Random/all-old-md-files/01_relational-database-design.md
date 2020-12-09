# Creating A Schema For Relational Database Design
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Creating A Schema For Relational Database Design](#creating-a-schema-for-relational-database-design)
  - [What is Relational Database Design?](#what-is-relational-database-design)
  - [Stages of Relational Database Design](#stages-of-relational-database-design)
    - [1. Define database purpose and entities](#1-define-database-purpose-and-entities)
    - [2. Identify primary keys](#2-identify-primary-keys)
    - [3. Establish table relationships](#3-establish-table-relationships)
    - [4. Apply normalization rules](#4-apply-normalization-rules)
  - [Schema design tools](#schema-design-tools)
  - [What we learned:](#what-we-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

Schemas allow us to easily visualize database tables and their relationships to
one another, so that we can identify areas that need clarity, refinement, or
redesign.

In this reading, we’re going to cover the stages of relational database design
and how to create schema that depicts database table relationships.

## What is Relational Database Design?

According to Technopedia, [Relational Database Design][1] (or RDD) differs from
other databases in terms of data organization and transactions: “In an RDD, the
data are organized into tables and all types of data access are carried out via
controlled transactions.”

In previous readings, we created relational database tables and accessed data
from these tables through PostgreSQL queries. These tables (a.k.a. _entities_)
contain rows (a.k.a. _records_) and columns (a.k.a. _fields_). We also learned
how to uniquely identify table records by adding a `PRIMARY KEY` and how to
create a table association by adding a `FOREIGN KEY`.

A relational database usually contains multiple tables. It’s useful to create
schema to help us visualize these tables, keep track of primary keys and foreign
keys, and create relationships among tables. This is a key part of the RDD
process defined below.

## Stages of Relational Database Design

There are four generally-agreed-upon stages of Relational Database Design:

1. Define the purpose/entities of the relational DB.
2. Identify primary keys.
3. Establish table relationships.
4. Apply normalization rules.

### 1. Define database purpose and entities

The first stage is identifying the purpose of the database (_Why is the database
being created? What problem is it solving? What is the data used for?_), as well
as identifying the main entities, or _tables_, that need to be created. It also
typically involves identifying the table’s attributes (i.e. _columns_ and
_rows_).

For example, if we were creating a database for order processing on an
e-commerce application, we would need a database with at least three tables: a
`products` table, an `orders` tables, and a `users` (i.e. customers) table. We
know that a product will probably have an ID, name, and price, and an order will
contain one or more product IDs. We also know that users can create multiple
orders.

![Orders ERD entities]

### 2. Identify primary keys

The second stage is to identify the primary key (_PK_) of each table. As we
previously learned, a table’s primary key contains a unique value, or values,
that identify each distinct record. For our above example of online orders, we
would probably create IDs to serve as the primary key for each table: a product
ID, an order ID, and a user ID.

![orders-erd-primary-keys.svg]

### 3. Establish table relationships

The third stage is to establish the relationships among the tables in the
database. There are three types of relational database table relationships:

- One-to-one
- One-to-many
- Many-to-many

**One-to-one relationship**

In a one-to-one relationship, one record in a table is associated with only one
record in another table. We could say that only one record in Table B belongs to
only one record in Table A.

A one-to-one relationship is the least common type of table relationship. While
the two tables above could be combined into a single table, we may want to keep
some less-used data separate from the main `products` table.

![products-erd-one-to-one.svg]

The above schema depicts two tables: a “products” table and a “product_details”
table. A `product_details` record belongs to only one product record. We've used
an arrow to indicate the one-to-one relationship between the tables. Both tables
have the same primary key -- `product_id` -- which we can use in a [`JOIN`][2]
operation to get data from both tables.

This table relationship would produce the following example data (note that not
all columns are shown below):

**Products**

| id   | name                |
| ---- | ------------------- |
| 1597 | Glass Coffee Mug    |
| 1598 | Metallic Coffee Mug |
| 1599 | Smart Coffee Mug    |

**Product Details**

| id  | product_id | full_description                                                                                                                                                                                         |
| --- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 1597       | Sturdy tempered glass coffee mug with natural cork band and silicone lid. Barista standard - fits under commercial coffee machine heads and most cup-holders.                                            |
| 2   | 1598       | Fun coffee mug that comes in various metallic colors. Sleek, stylish, and easy to wash. Makes a great addition to your kitchen. Take it on the go by attaching the secure lid.                           |
| 3   | 1599       | This smart mug goes beyond being a simple coffee receptacle. Its smart features let you set and maintain an exact drinking temperature for up to 1.5 hours, so your coffee is never too hot or too cold. |

Take a moment to analyze the data above. Using the foreign keys, you should be
able to reason out that the "Metallic Coffee Mug" is a "Fun coffee mug that
comes in various metallic colors."

**One-to-many relationship**

In a one-to-many relationship, each record in Table A is associated with
multiple records in Table B. Each record in Table B is associated with only one
record in Table A.

![orders-erd-one-to-many.svg]

The above schema depicts a one-to-many relationship between the “users” table
and the `orders` table: One user can create multiple orders. The primary key of
the “orders” table (`id`) is a foreign key in the “users” table (`order_id`). We
can use this foreign key in a `JOIN` operation to get data from both tables.

This table relationship would produce the following example data (note that not
all columns are shown below):

**Users**

| id  | name  |
| --- | ----- |
| 1   | Alice |
| 2   | Bob   |

**Orders**

| id  | purchaser_id |
| --- | ------------ |
| 10  | 1            |
| 11  | 1            |
| 12  | 2            |

Take a moment to analyze the data above. Using the foreign keys, you should be
able to reason out that "Alice" has made two orders and "Bob" has made one
order.

**Many-to-many relationship**

In a many-to-many relationship, multiple records in Table A are associated with
multiple records in Table B. You would normally create a third table for this
relationship called a _**join table**_, which contains the primary keys from
both tables.

![orders-erd-many-to-many.svg]

The above schema depicts a many-to-many relationship between the `products`
table and the `orders` table. A single order can have multiple products, and a
single product can belong to multiple orders. We created a third join table
called `order_details`, which contains both the`order_id` and `product_id`
fields as foreign keys.

This table relationship would produce the following example data(note that not
all columns are shown below):

**Products**

| id   | name                |
| ---- | ------------------- |
| 1597 | Glass Coffee Mug    |
| 1598 | Metallic Coffee Mug |
| 1599 | Smart Coffee Mug    |

**Users**

| id  | name  |
| --- | ----- |
| 1   | Alice |
| 2   | Bob   |

**Orders**

| id  | purchaser_id |
| --- | ------------ |
| 10  | 1            |
| 11  | 1            |
| 12  | 2            |

**Order Details**

| id  | order_id | product_id |
| --- | -------- | ---------- |
| 1   | 10       | 1599       |
| 2   | 11       | 1597       |
| 3   | 11       | 1598       |
| 4   | 12       | 1597       |
| 5   | 12       | 1598       |
| 6   | 12       | 1599       |

Take a moment to analyze the data above. Using the foreign keys, you should be
able to reason out that "Alice" has two orders. One order containing a "Smart
Coffee Mug" and another order containing both a "Glass Coffee Mug" and "Metallic
Coffee Mug".

### 4. Apply normalization rules

The fourth stage in RDD is _**normalization**_. Normalization is the process of
optimizing the database structure so that redundancy and confusion are
eliminated.

The rules of normalization are called “normal forms” and are as follows:

1. First normal form
2. Second normal form
3. Third normal form
4. Boyce-Codd normal form
5. Fifth normal form

The first three forms are widely used in practice, while the fourth and fifth
are less often used.

**First normal form rules:**

- Eliminate repeating groups in individual tables.
- Create a separate table for each set of related data.
- Identify each set of related data with a primary key.

**Second normal form rules:**

- Create separate tables for sets of values that apply to multiple records.
- Relate these tables with a foreign key.

**Third normal form rules:**

- Eliminate fields that do not depend on the table’s key.

_Note: For examples of how to apply these forms, read [“Description of the
database normalization basics”][3] from Microsoft._

## Schema design tools

Many people draw their relational database design schema with good ol’ pen and
paper, or on a whiteboard. However, there are also lots of online tools created
for this purpose if you’d like to use something easily exportable/shareable.
Feel free to check out the ERD (short for “Entity Relationship Diagram”) tools
below.

Free Database Diagram (ERD) Design Tools:

- [Lucidchart][4]
- [draw.io][5]
- [dbdiagram.io][6]
- [QuickDBD][7]

## What we learned:

- Stages of Relational Database Design (RDD)
- Examples of schema depicting table relationships
- Normalization rules
- Schema drawing tools

[1]: https://www.techopedia.com/definition/25113/relational-database-design-rdd
[2]: https://www.postgresql.org/docs/8.3/tutorial-join.html
[3]:
  https://support.microsoft.com/en-us/help/283878/description-of-the-database-normalization-basics
[4]: https://www.lucidchart.com/
[5]: https://www.draw.io/
[6]: https://dbdiagram.io/home?utm_source=holistics&utm_medium=top_5_tools_blog
[7]: https://www.quickdatabasediagrams.com/

[Orders ERD entities]: images/orders-erd-entities.svg
[orders-erd-primary-keys.svg]: images/orders-erd-primary-keys.svg
[products-erd-one-to-one.svg]: images/products-erd-one-to-one.svg
[orders-erd-one-to-many.svg]: images/orders-erd-one-to-many.svg
[orders-erd-many-to-many.svg]: images/orders-erd-many-to-many.svg
