# Installing And Using Sequelize
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [What Is An ORM?](#what-is-an-orm)
- [How To Install Sequelize](#how-to-install-sequelize)
- [How To Initialize Sequelize](#how-to-initialize-sequelize)
- [Verifying That Sequelize Can Connect To The Database](#verifying-that-sequelize-can-connect-to-the-database)
- [Our Preexisting Database Schema](#our-preexisting-database-schema)
- [Using Sequelize To Generate The Model File](#using-sequelize-to-generate-the-model-file)
- [Examining (And Modifying) A Sequelize Model File](#examining-and-modifying-a-sequelize-model-file)
- [Using The `Cat` Model To Fetch And Update SQL Data](#using-the-cat-model-to-fetch-and-update-sql-data)
- [Reading And Changing Record Attributes](#reading-and-changing-record-attributes)
- [Conclusion](#conclusion)

<!-- /code_chunk_output -->
________________________________________________________________________________

Now that you have gained experience with SQL, it is time to learn how to
access data stored in a SQL database using a JavaScript program. You
will use a JavaScript library called Sequelize to do this. Sequelize is
an example of an _Object Relational Mapping_ (commonly abbreviated
_ORM_). An ORM allows a JavaScript programmer to fetch and store data in
a SQL database using JavaScript functions instead of writing SQL code.

When you finish this reading you will be able to:

* Describe what an Object Relational Mapping is and what it is used for.
* Install and configure the packages needed to use Sequelize.
* Use Sequelize to generate JavaScript code that fetches and stores data
  in a SQL database.
* Use those auto-generated methods to fetch and store data in a SQL
  database.

## What Is An ORM?

An _Object Relational Mapping_ is a library that allows you to access
data stored in a SQL database through object-oriented, non-SQL code
(such as JavaScript). You will write _object-oriented_ code that
accesses data stored in a _relational_ SQL database like Postgres. The
ORM is the _mapping_ that will "translate" your object-oriented code
into SQL code that the database can run. The ORM will automatically
generate SQL code for common tasks like fetching and storing data.

You will learn how to use the [Sequelize ORM][sequelize-documentation].
Sequelize is the most widely used JavaScript ORM library.

[sequelize-documentation]: https://sequelize.org/v5/

## How To Install Sequelize

After creating a new node project with `npm init` we are ready to install the
Sequelize library.

```sh
npm install sequelize@^5.0.0
npm install sequelize-cli@^5.0.0
npm install pg@^8.0.0
```

We have installed not only the Sequelize library, but also a command
line tool called `sequelize-cli` that will help us auto-generate and
manage JavaScript files which will hold our Sequelize ORM code.

Last, we have also installed the pg library. This library allows
Sequelize to access a Postgres database. If you were using a different
database software (such as MySQL), you would need to install a different
library.

## How To Initialize Sequelize

We can run the command `npx sequelize init` to automatically setup the following directory structure for our project:

```
.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── node_modules
├── package-lock.json
├── package.json
└── seeders
```

>Aside: the `npx` tool allows you to easily run scripts provided by
>packages like `sequelize-cli`. If you don't already have `npx`, you can
>install it with `npm install npx --global`. Without `npx` you would have
>to run the bash command: `./node_modules/.bin/sequelize init`. This
>directly runs the `sequelize` script provided by the installed
>`sequelize-cli` package.

Having run `npx sequelize init`, we must write our database login
information into `config/config.json`.

By default this file contains different sections we call "environments". In a
typical company you will have different database servers and configuration
depending on where you app is running. Development is usually where you do
your development work. In our case this is our local computer. But test might be
and environment where you run tests, and production is the environment where
real users are interacting with your application.

Since we are doing development, we can just modify the "development" section to look
like this:

```json
{
  "development": {
    "username": "catsdbuser",
    "password": "catsdbpassword",
    "database": "catsdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}...
```

Here we are supposing that we have already created a `catsdb` database
owned by the user `catsdbuser`, with password `catsdbpassword`. By
setting `host` to `127.0.0.1`, we are saying that the database will run
on the same machine as my JavaScript application. Last, we specify that
we are using a `postgres` database.

## Verifying That Sequelize Can Connect To The Database

At the top level of our project, we should create an `index.js` file.
From this file we will verify that Sequelize can connect to the SQL
database. To do this, we use the `authenticate` method of the sequelize object.

```javascript
// ./index.js

const { sequelize } = require("./models");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");

  // Close database connection when done with it.
  await sequelize.close();
}

main();

// Prints:
//
// Executing (default): SELECT 1+1 AS result
// Database connection success!
// Sequelize is ready to use!
```

You may observe that the `authenticate` method returns a JavaScript
`Promise` object. We use `await` to wait for the database connection to
be established. If `authenticate` fails to connect, the `Promise` will
be rejected. Since we use `await`, an exception will be thrown.

Many Sequelize methods return `Promise`s. Using `async` and `await` lets
us use Sequelize methods as if they were synchronous. This helps reduce
code complexity significantly.

Note that I call `sequelize.close()`. This closes the connection to
the database. A Node.js JavaScript program will not terminate until all
open files and database connections are closed. Thus, to make sure the
Node.js program doesn't "hang" at the end, we close the database
connection. Otherwise we will be forced to kill the Node.js program with
`CTRL-C`, which is somewhat annoying.

## Our Preexisting Database Schema

We are assuming that we are working with a preexisting SQL database. Our
`catsdb` has a single table: `Cats`. Using the `psql` command-line
program, we can describe the pre-existing `Cats` table below.

```
catsdb=> \d "Cats"
                                         Table "public.Cats"
    Column    |           Type           | Collation | Nullable |              Default
--------------+--------------------------+-----------+----------+------------------------------------
 id           | integer                  |           | not null | nextval('"Cats_id_seq"'::regclass)
 firstName    | character varying(255)   |           |          |
 specialSkill | character varying(255)   |           |          |
 age          | integer                  |           |          |
 createdAt    | timestamp with time zone |           | not null |
 updatedAt    | timestamp with time zone |           | not null |
Indexes:
    "Cats_pkey" PRIMARY KEY, btree (id)
```

Besides a primary key `id`, each `Cats` record has a `firstName`, a
`specialSkill`, and an `age`. Each record also keeps track of two
timestamps: the time when the cat was created (`createdAt`), and the
most recent time when a column of the cat has been updated
(`updatedAt`).

## Using Sequelize To Generate The Model File

We will configure Sequelize to access the `Cats` table via a JavaScript
class called `Cat`. To do this, we first use our trusty Sequelize CLI:

```bash
# Oops, forgot age:integer! (Don't worry we'll fix it later)
npx sequelize model:generate --name Cat --attributes "firstName:string,specialSkill:string"
```

This command generates two files: a _model_ file (`./models/cat.js`)
and a _migration_ file (`./migrations/20200203211508-Cat.js`). We will
ignore the migration file for now, and focus on the model file.

When using Sequelize's `model:generate` command, we specify two things.
First: we specify the _singular_ form of the `Cats` table name (`Cat`).
Second: we list the columns of the `Cats` table after the `--attributes`
flag: `firstName` and `specialSkill`. We tell Sequelize that these are
both `string` columns (Sequelize calls SQL `character varying(255)`
columns `string`s).

We do not need to list `id`, `createdAt`, or `updatedAt`. Sequelize will
always presume those exist. Notice that we have **forgotten** to list
`age:integer` -- we will fix that soon!

## Examining (And Modifying) A Sequelize Model File

Let us examine the generated `./models/cat.js` file:

```javascript
// ./models/cat.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    firstName: DataTypes.STRING,
    specialSkill: DataTypes.STRING
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```

This file exports a function that defines a `Cat` class. When you use
`Sequelize` to query the `Cats` table, each row retrieved will be
transformed by Sequelize into an instance of the `Cat` class. A
JavaScript class like `Cat` that corresponds to a SQL table is called a
_model_ class.

The `./models/cat.js` will not be loaded by us directly. Sequelize will
load this file and call the exported function to define the `Cat` class.
The exported function uses Sequelize's `define` method to auto-generate
a new class (called `Cat`).

> Note: You may notice we aren't using the JavaScript's `class` keyword
> to define the Cat class. With Sequelize, it is going to do all that for us
> with the `define` method. This is because Sequelize was around way before
> the `class` keyword was added to JavaScript. It is possible to use the class
> keyword with Sequelize, but it's [undocumented].

The first argument of `define` is the name of the class to define:
`Cat`. Notice how the second argument is an `Object` of `Cats` table
columns:

```javascript
{
    firstName: DataTypes.STRING,
    specialSkill: DataTypes.STRING
}
```

This object tells Sequelize about each of the columns of `Cats`. It maps
each column name (`firstName`, `specialSkill`) to the type of data
stored in the corresponding column of the `Cats` table. It is
unnecessary to list `id`, `createdAt`, `updatedAt`, since Sequelize will
already assume those exist.

We can correct our earlier mistake of forgetting `age`. We update the
definition as so:

```javascript
const Cat = sequelize.define('Cat', {
  firstName: DataTypes.STRING,
  specialSkill: DataTypes.STRING,
  age: DataTypes.INTEGER,
}, {});
```

A complete list of Sequelize datatypes can be found in the
[documentation][sequelize-datatypes].

[sequelize-datatypes]: https://sequelize.org/v5/manual/data-types.html

## Using The `Cat` Model To Fetch And Update SQL Data

We are now ready to use our `Cat` model class. When Sequelize defines
the `Cat` class, it will generate instance and class methods needed to
interact with the `Cats` SQL table.

As we mentioned before we don't require our `cats.js` file directly.
Instead we require `./models` which loads the file `./models/index.js`.

Inside this file it reads through all our models and attaches them to an object
that it exports. So we can use destructuring to get a reference to our model
class `Cat` like so:

```javascript
const { sequelize, Cat } = require("./models");
```

Now let's update _our_ `index.js` file to fetch a `Cat` from the `Cats`
table:

```javascript
const { sequelize , Cat } = require("./models");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");

  const cat = await Cat.findByPk(1);
  console.log(cat.toJSON());

  await sequelize.close();
}

main();

// This code prints:
//
// Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."id" = 1;
// {
//   id: 1,
//   firstName: 'Markov',
//   specialSkill: 'sleeping',
//   age: 5,
//   createdAt: 2020-02-03T21:32:28.960Z,
//   updatedAt: 2020-02-03T21:32:28.960Z
// }
```

We use the `Cat.findByPk` static class method to fetch a single cat: the one
with `id` equal to 1. This static method exists because our `Cat` model class
_extends_ `Sequelize.Model`.

"Pk" stands for _primary key_; the `id` field is the primary key for the
`Cats` table. `findByPk` returns a `Promise`, so we must `await` the
result. The result is an instance of the `Cat` model class.

The cleanest way to log a fetched database record is to first call the
`toJSON` method. `toJSON` converts a `Cat` object to a _Plain Old
JavaScript Object_ (POJO). `Cat` instances have many private variables
and methods that can be distracting when printed. When you call
`toJSON`, only the public data fields are copied into a JavaScript
`Object`. Printing this raw JavaScript `Object` is thus much cleaner.

> The author has a pet-peeve about the `.toJSON()` method of Sequelize,
> it does not return JSON. It instead returns a POJO. If you needed it to be
> JSON you would still need to call `JSON.stringify(cat.toJSON())`. Perhaps
> they should have called it `.toObject` or `.toPOJO` instead.

Note that Sequelize has logged the SQL query it ran to fetch Markov's
information. This logging information is often helpful when trying to
figure out what Sequelize is doing.

You'll also notice that Sequelize puts double quotes around the table and field
names.  So if you are trying to look at your "Cats" table from the `psql`
command you will need to quote them there as well. This is because PostgreSQL
lowercases all identifiers like table and fields names before the query is run
if they aren't quoted.

## Reading And Changing Record Attributes

While `toJSON` is useful for logging a `Cat` object, it is not the
simplest way to access individual column values. To read the `id`,
`firstName`, etc of a `Cat`, you can directly access those attributes on
the `Cat` instance itself:

```javascript
async function main() {
  // Sequelize authentication code from above...

  const cat = await Cat.findByPk(1);
  console.log(`${cat.firstName} has been assigned id #${cat.id}.`);
  console.log(`They are ${cat.age} years old.`)
  console.log(`Their special skill is ${cat.specialSkill}.`);

  await sequelize.close();
}

main();

// This code prints:
//
// Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."id" = 1;
// Markov has been assigned id #1.
// They are 5 years old.
// Their special skill is sleeping.
```

Accessing data directly through the `Cat` object is just like reading an
attribute on any other JavaScript class. You may likewise _change_
values in the database:

```javascript
async function main() {
  // Sequelize authentication code from above...

  // Fetch existing cat from database.
  const cat = await Cat.findByPk(1);
  // Change cat's attributes.
  cat.firstName = "Curie";
  cat.specialSkill = "jumping";
  cat.age = 123;

  // Save the new name to the database.
  await cat.save();

  await sequelize.close();
}

// Prints:
//
// Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."id" = 1;
// Executing (default): UPDATE "Cats" SET "firstName"=$1,"specialSkill"=$2,"age"=$3,"updatedAt"=$4 WHERE "id" = $5

main();
```

Note that changing the `firstName` attribute value does not immediately
change the stored value in the SQL database. Changing the `firstName`
without calling `save` **has no effect** on the database. Only when we
call `cat.save()` (and `await` the promise to resolve) will the changes
to `firstName`, `specialSkill`, and `age` be saved to the SQL database.
All these values are updated simultaneously.

## Conclusion

Having completed this reading, you should be able to:

* Describe what an Object Relational Mapping is and what it is used for.
* Install the `sequelize`, `sequelize-cli`, `pg` packages.
* Configure Sequelize via the `config/config.json` file.
* Use Sequelize's `authenticate` method to verify that Sequelize can
  connect to the database.
* Use the Sequelize CLI `model:generate` command to generate a model
  file.
* Configure a model file to tell Sequelize about each database column.
* Use the `findByPk` class method to fetch data from a SQL table.
* Read data attributes from a model instance.
* Modify a model instance's attributes and save the changes back to the
  SQL database using the `save` method.

[undocumented]: https://codewithhugo.com/using-es6-classes-for-sequelize-4-models/
