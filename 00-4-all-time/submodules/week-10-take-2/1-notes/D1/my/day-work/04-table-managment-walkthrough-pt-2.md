
**This is a walk-through**: Please type along as you read what's going on in this article.

In this walk-through, you will

*   Learn about nullable columns,
*   Learn about default values for columns,
*   Learn how to make columns have unique values,
*   Learn about primary keys, and,
*   Learn about relating tables through foreign keys to maintain data and referential integrity.

Here is the "puppies" spreadsheet, table definition, and the SQL to create it from the last article.

![Puppies spreadsheet](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/tables-puppies-spreadsheet.png)

| Column       | JavaScript data type | Max length | ANSI SQL data type |
| ------------ | -------------------- | ---------- | ------------------ |
| name         | string               | 50         | VARCHAR(50)        |
| age\_yrs     | number               |            | NUMERIC(3,1)       |
| breed        | string               | 100        | VARCHAR(100)       |
| weight\_lbs  | number               |            | INTEGER            |
| microchipped | Boolean              |            | BOOLEAN            |
```sql
    CREATE TABLE puppies (
      name VARCHAR(50),
      age_yrs NUMERIC(3,1),
      breed VARCHAR(100),
      weight_lbs INTEGER,
      microchipped BOOLEAN
    );
```
In this article, you will add more specifications to this table so that you can properly use it. Then, you will refactor it into two tables that relate to one another.

Nullable columns
----------------

By default, when you define a table, 
- **each column does not require a value when you create a _record (row)_**. 


Look at the spreadsheet. You can see all of the rows in it have data in every column. 

* The SQL that you wrote does not enforce that.

### The value `NULL` is a strange value because it means _the absence of a value_.


 When a value in a row is `NULL`, that means that it didn't get entered.
 
Many database administrators, experts in databases and the models of data in them, detest the value `NULL` for one reason: it adds a weird state.

Think about a Boolean value in JavaScript. It can one of two values: `true` or `false`.

In databases, a "nullable" `BOOLEAN` column, that is a `BOOLEAN` column that can hold `NULL` values, can have _three_ values in it: `TRUE`, `FALSE`, and `NULL`. 



What does that mean to you as a software developer? 


It is this weird third state that leads to a strange offshoot of mathematics named [three-valued logic](https://en.wikipedia.org/wiki/Three-valued_logic).

*  To prevent that, you should (nearly) always put the `NOT NULL` constraint on each of your column definitions. That will make your previous SQL statement look like this.
```sql
    CREATE TABLE puppies (
      name VARCHAR(50) NOT NULL,
      age_yrs NUMERIC(3,1) NOT NULL,
      breed VARCHAR(100) NOT NULL,
      weight_lbs INTEGER NOT NULL,
      microchipped BOOLEAN NOT NULL
    );
```

## ? WHY IS age_yrs (3,1)?

Type that SQL into your `psql` shell and execute it. (If you already have a "puppies" table, drop the existing one first.) Then, run `\d puppies`. You will see, now, that the column "Nullable" reads "not null" for every single one.

                             Table "public.puppies"
        Column    |          Type          | Collation | Nullable | Default
    --------------+------------------------+-----------+----------+---------
     name         | character varying(50)  |           | not null |
     age_yrs      | numeric(3,1)           |           | not null |
     breed        | character varying(100) |           | not null |
     weight_lbs   | integer                |           | not null |
     microchipped | boolean                |           | not null |

Now, when someone tries to add data to the table, they must provide a value for every single column.

**Note**: An empty string is _not_ a `NULL` value. 

It is still possible for someone to insert the string "" into the "name" column, .

 There are ways to prevent that, but you should check it in your JavaScript code before actually inserting the data.

Default values
--------------

Sometimes, you just want a column to have a default value. When there is a default value, the applications that insert data into the table can just rely on the default value and not have to specify it.

For the "puppies" table, a reasonable default value for the "microchipped" column would be `FALSE`. You can add that to your **SQL using the `DEFAULT` keyword**.
```sql
    CREATE TABLE puppies (
      name VARCHAR(50) NOT NULL,
      age_yrs NUMERIC(3,1) NOT NULL,
      breed VARCHAR(100) NOT NULL,
      weight_lbs INTEGER NOT NULL,
      microchipped BOOLEAN NOT NULL DEFAULT FALSE
    );
```
Drop the existing "puppies" table and type in that SQL.


 Then, run `\d puppies` to see how it shows up in the table definition.

Primary keys
------------

Being able to identify a single row in a table is _very_ important.

![Puppies spreadsheet](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/tables-puppies-spreadsheet.png)

Let's say that the puppy named "Max" gains a couple of pounds. You want to update the spreadsheet. You scan through the list of names and find it on row 11. Then, you update the weight to be 69 pounds.


Now, what happens when you are tracking 300 dogs in the spreadsheet? What happens when your spreadsheet has 17 dogs named "Max"?

**It is helpful to have some way to uniquely identify a row in the spreadsheet. This is the idea behind a _primary key_**
 
 
 You can **specify a column to be the primary key with the keywords `PRIMARY KEY`**.
 
  A column that acts as a primary key cannot be `NULL`, so that is implied.

Here's the spreadsheet with a new column in it named "id" that just contains numbers to uniquely identify each row.

![Puppies spreadsheet with primary key](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/spreadsheet-puppies-with-primary-key.png)

```
 "Why can't I just use the row number as each row's identifier?" That's a very valid question! Here is the reason why.
 You can see that "Max" has an "id" of 10 on row 11. 
 What happens if you wanted to look at the data differently, say sorted by name? Here's what that spreadsheet looks like.

```
![Puppies spreadsheet with primary key sorted by name](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/spreadsheet-puppies-with-primary-key-sorted-by-name.png)

You can see that when you sort them by name, if you relied on row number, "Max" now lives on row 10 rather than row 11. That changes the unique identifer of "Max" based on the way that you view the data. 


**You want the unique identifier to _be part of the row definition_** so that the number always stays with the row no matter how you've sorted the data. 

**You will always know that the row with "id" value of 10 is "Max".**

Keeping track of what the next number would be in that column could cause you a lot or headaches. What if two people (or applications) were entering data at the same time? Who would get the correct "next id" and still have it be unique? The answer to that is to let the database handle it.

* All databases have some way of specifying that you want to set the column to a special data type that will auto-assign and auto-increment an integer value for the column. 
  
  
* In **PostgreSQL, that special data type is called `SERIAL`**.

Putting that all together, **you would add a new column definition to your table with the name of "id" and the type `SERIAL`.**

Then, to specify that it is the primary key, you can do it one of two ways. 

- The following example shows it as part of the column definition.

```sql

    CREATE TABLE puppies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      age_yrs NUMERIC(3,1) NOT NULL,
      breed VARCHAR(100) NOT NULL,
      weight_lbs INTEGER NOT NULL,
      microchipped BOOLEAN NOT NULL DEFAULT FALSE
    );
```
Or, you can put it in what is known as **constraint syntax** after the columns specifications but before the close parenthesis.
```sql
    CREATE TABLE puppies (
      id SERIAL,
      name VARCHAR(50) NOT NULL,
      age_yrs NUMERIC(3,1) NOT NULL,
      breed VARCHAR(100) NOT NULL,
      weight_lbs INTEGER NOT NULL,
      microchipped BOOLEAN NOT NULL DEFAULT FALSE,
      PRIMARY KEY(id)
    );
```
Either way you do it, when you view the output of `\d puppies`, you see some new things in the output.

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

First, you'll notice that there is a weird default value for the "id" column. 

**That's the way that PostgreSQL populates it with a new integer value every time you add a new row.**

You will also see that that there is a section named 

- This shows that there is a **thing named "puppies\_pkey" which is the primary key on the column "id".**

Unique values
-------------

Sometimes, you want all of the data in a column to be unique.

 * For example, if you a table of people records.
 
 
  * You want to collect their email address for them to sign up for your Web site. 
  
  * In general, people don't share email addresses (although it has been known to happen).
  
   * You can put a constraint on a column by putting `UNIQUE` in the column's definition.
   
    For example, here's a sample "people" table with a unique constraint on the email column.
    
    
```sql
    CREATE TABLE people (
      id SERIAL,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL,
      email VARCHAR(250) NOT NULL UNIQUE,
      PRIMARY KEY (id)
    );
```
When you use the `\d people` command to view the definition of the table, you will see this.

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

Down there at the bottom, you see that PostgreSQL has added a `UNIQUE CONSTRAINT` to the list of indexes for the "email" field. 



Now, **if someone tried to put an email address into the table that someone had previously used, then the database would return an error.**

    ERROR:  duplicate key value violates unique constraint "people_email_key"
    DETAIL:  Key (email)=(a) already exists.

Refactor for data integrity
---------------------------

**One of the first questions that you should ask yourself is, "Do any of the columns have values that come from a list?"**
 
 
 * Or, another way to ask that is, "Do any of the columns come from a set of predefined values?"
 
  * If you look at this data, does anything seem like it comes from a list, or that the data could repeat itself?

Take a look, again, at the spreadsheet. Does anything jump out at you?

![Puppies spreadsheet with primary key sorted by name](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/spreadsheet-puppies-with-primary-key-sorted-by-name.png)

If you looked at it and answered "the breed column", that's the ticket! 

The values that go into the breed column is finite. 


You don't want one person typing "Corgi" and another person typing "CORGI" and another "corgi" because, as you know, those are _three different values_! 


You want them all to be the same value! Supporting this is the primary reason that relational databases exist.

**Instead of having just one table, you could have two tables. One that contains the puppy information and another that contains the breed information.** T


- **Then, using the magic of relational databases, you can create a relation between the two tables so that the "puppies" table will reference entries in the "breeds" table**.

# This process is called **normalization**. 


It's a _really big deal_ in database communities. And, it's a really big deal for application developers to maintain the integrity of the data. Bad data leads to bad applications.

To do this follows a fairly simple set of steps.

## 1.  Figure out what related data repeats itself. 
- In this case, it is only the single column that contains the **breed** names.

## 2.  Create a new table to hold that data. Make sure it has a primary key.
- In this case, you can create a "breeds" table that contains an "id" the name of the breed.

## 3.  Replace all of the columns in the original table that you extracted with a single value that will contain the corresponding "id" value from the new table.
   
   
   
   -  In this case, you will replace the "breed" column with a column named "breed\_id" because it will have the id of the specific breed from the "breeds" table.

Here's what that would look like with two spreadsheets.

![Puppies and breed spreadsheets normalized](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/spreadsheet-puppies-and-breeds-normalized.png)

You might think to yourself, "That's not simpler! That's ... that's harder!" 


From a human perspective looking at the two separate tables and associating the id in the "breed_id" column with the value in the "id" column of the "breeds" table to lookup the name of the breed \_is_ harder. 


But, SQL provides tools to make this _very easy_.


To represent this in SQL, you will need two SQL statements. 

The first one, the one for the "breeds" table, you should be able to construct that already with the knowledge that you have.

 It would look like this. Type this into your `plsql` shell.
```sql
    CREATE TABLE breeds (
      id SERIAL,
      name VARCHAR(50) NOT NULL,
      PRIMARY KEY (id)
    );
```
**Now, here's the new thing. You want the database to make sure that the value in the "breed_id" column of the "puppies" table references the value in the "id" table of the "breeds" table.**


This reference is called a **foreign key**. 

That means that the value in the column \_must exist_ as the value of a primary key in the table that it references. 

This **referential integrity** is the backbone of relational databases. 


It prevents bad data from getting put into those foreign key columns.

Here's what the new "puppies" SQL looks like. 

Drop the old "puppies" table and type this SQL in there.
```sql
    CREATE TABLE puppies (
      id SERIAL,
      name VARCHAR(50) NOT NULL,
      age_yrs NUMERIC(3,1) NOT NULL,
      breed_id INTEGER NOT NULL,
      weight_lbs INTEGER NOT NULL,
      microchipped BOOLEAN NOT NULL DEFAULT FALSE,
      PRIMARY KEY(id),
      FOREIGN KEY (breed_id) REFERENCES breeds(id)
    );
```
That new thing at the bottom of the definition, that's how you relate one table to another. If follows the syntax

    FOREIGN KEY («column name in this table»)
      REFERENCES «other table name»(«primary key column in other table»)

Looking at the spreadsheets, again, the presence of the foreign key would make it _impossible_ for someone to enter a value in the "breed\_id" column that did not exist in the "id" column of the "breeds" table.

![Puppies and breed spreadsheets normalized](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/spreadsheet-puppies-and-breeds-normalized.png)

You can see that the puppies with ids of 1 and 9, "Cooper" and "Leinni", both have the "breed_id" of 8. That means they're both "Miniature Schnauzers". What if, originally, someone had misspelled "Schnauzers"? If it was still just a text column in the "puppies" sheet, you'd have to go find and replace every single instance of the misspelling. Now, because it's only spelled once and then \_referenced_, you would only need to update the misspelling in one place!

Order of table declarations
---------------------------

The order of running these table definitions is important. Because "puppies" now relies on "breeds" to exist for that foreign key relationship, you _must_ create the "breeds" table first. If you had tried to create the "puppies" table first, you would see the following error message.

    ERROR: relation "breeds" does not exist

Now that you have both of those tables in your database, what do you think would happen if you tried to drop the "breeds" table? Another table depends on it. When you tried to drop a user that owned a database, you got an error because that database object depended on that user existing, the same things happens now.

Type the SQL to drop the "breeds" table from the database. You should see the following error message.

    ERROR:  cannot drop table breeds because other objects depend on it
    DETAIL:  constraint puppies_breed_id_fkey on table puppies depends on table breeds
    HINT:  Use DROP ... CASCADE to drop the dependent objects too.

You can see that PostgreSQL has told you that other things depend on the "breeds" table and, specifically, a thing called "puppies\_breed\_id\_fkey" depends on it. That is the auto-generated name for the foreign key that you created in the "puppies" table. It took the name of the table, the name of the column, and the string "fkey" and joined them all together with underscores.

In the homework for tomorrow, you will see how to _join_ together two tables into one virtual table so that the breed names are right there along with the puppies data.

What you've done
----------------

In this walk-through, you

*   Learned about nullable columns and how to control that behavior by writing `NOT NULL` in your column specifications
*   Learned that `NULL` means an "absence of a value" which makes database administrators groan with displeasure
*   Learned about how to specify default values for a column
*   Learned the purpose of and how to declare integer-valued primary keys for a table using the `PRIMARY KEY` constraint and `SERIAL` data type
*   Learned about _normalization_ and the steps to refactor a table to remove duplicated data
*   Learned the purpose of and how to declare foreign keys to relate the column of one table to the primary key of another table



