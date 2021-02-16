# Using Database Migrations
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Using Database Migrations](#using-database-migrations)
  - [Sequelize Migration Files](#sequelize-migration-files)
  - [Running A Migration](#running-a-migration)
  - [Rolling Back A Migration](#rolling-back-a-migration)
  - [Editing A Migration File](#editing-a-migration-file)
  - [`up` And `down` are Asynchronous](#up-and-down-are-asynchronous)
  - [Writing A `down` Method](#writing-a-down-method)
  - [Advantages Of Migrations](#advantages-of-migrations)
  - [Conclusion](#conclusion)

<!-- /code_chunk_output -->
________________________________________________________________________________

We've seen how to use an ORM like Sequelize to fetch and store data in a
SQL database using JavaScript classes and methods. Sequelize also lets
you write JavaScript code that creates, modifies, or drops SQL tables.
The JavaScript code that does this is called a _migration_. A migration
"moves" the database from an old schema to a new schema.

When you finish this reading you will be able to:

* Describe advantages to using migrations over raw SQL commands to
  create and drop tables.
* Write migrations that create and drop tables.
* Undo incorrect migrations, fix them, and rerun them.

## Sequelize Migration Files

In the prior reading we assumed that a `Cats` table already existed in
our `catsdb` database. In this reading, we will presume that the `Cats`
table does not exist, and that we have to create the table ourselves.
This is the typical case when you aren't merely interacting with a
preexisting database. When you develop your own application, the
database will start out empty and with a blank schema.

We previously used the Sequelize CLI tool to autogenerate a `Cat` model
file like so:

```bash
# Oops, forgot age:integer!
npx sequelize model:generate --name Cat --attributes "firstName:string,specialSkill:string"
```

We noted that this creates _two_ files. We've already examined the model
file `./models/cat.js`. We will now look at the auto-generated
_migration_ file `./migrations/20200203211508-create-cat.js`.

```javascript
// ./migrations/20200203211508-create-cat.js

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      specialSkill: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cats');
  }
};
```

The migration file exports two functions: `up` and `down`. The `up`
function tells Sequelize how to create a `Cats` table. The `down`
function tells Sequelize how to "undo" the `up` function. The `down`
function drops the `Cats` table.

We will examine these functions more closely, but let's first see how to
use a migration.

>Note: The timestamp `20200203211508` preceding `-create-cat.js`
>represents February 2, 2020. It gives the time and day that the
>migration was generated. (Your date should be when you generated your migration)
>By using the date and time as part of the filename, all migration files will
>have unique names. Also, alphabetical sorting will order the files from oldest
>to most recent migration.

## Running A Migration

To create the `Cats` table, we must run our migration code. Having
generated the `20200203211508-create-cat.js` migration file, we will use
the Sequelize CLI tool to run the migration. We may do this like so:

```bash
# Run the migration's `up` method.
npx sequelize db:migrate
```

By giving Sequelize the `db:migrate` subcommand, it will know that we
are asking it to run any new migrations. To run a migration, Sequelize
will call the `up` method defined in the migration file. The `up` method
will run the necessary `CREATE TABLE ...` SQL command for us. Sequelize
will record (in a special `catsdb` table called `SequelizeMeta`) that
the migration has been run. The next time we call `npx sequelize
db:migrate`, Sequelize will not try to "redo" this already performed
migration. It will do nothing the second time.

Having run the migration, we can verify that the `Cats` table looks like
it should (with the exception of the `age` column):

Note that we we are using the table name in quotes here in `psql`.

```
catsdb=> \d "Cats";
                                         Table "public.Cats"
    Column    |           Type           | Collation | Nullable
--------------+--------------------------+-----------+----------
 id           | integer                  |           | not null
 firstName    | character varying(255)   |           |
 specialSkill | character varying(255)   |           |
 createdAt    | timestamp with time zone |           | not null
 updatedAt    | timestamp with time zone |           | not null
Indexes:
    "Cats_pkey" PRIMARY KEY, btree (id)
```

## Rolling Back A Migration

We made a mistake when generating our `Cat` migration. We forgot to
include the `age` column.

One way to fix this is to generate a *second* migration that adds the
forgotten `age` column. If we have already pushed our migration code to
a remote git server, we should opt for this option.

If the migration has not yet been pushed, we can fix the migration
directly. We will "undo" (AKA _rollback_) the migration that created the
`Cats` table (dropping the table), fix the `up` method so that the `age`
column is included, and finally rerun the migration.

> Note: this is not the same as the SQL command ROLLBACK.

To undo the migration, we run:

```bash
npx sequelize db:migrate:undo
```

Sequelize will call the `down` method for us, and the `Cats` table is
dropped.

Why should you not use the `db:migrate:undo` way when the migration file
has already been pushed to a remote git server? The reason is this: you
can easily tell other developers to fix a broken migration by writing a
second fixup migration (for instance, that adds the `age` column). All
you need to do is check this new migration file into source control and
push it. When another developer pulls your new migration code, the next
time they run `npx sequelize db:migrate`, your fixup migration will be
run on their local machine.

When rolling back already-checked-in migrations, there is no way to
easily communicate to other developers that they should (1) rollback
your migration and (2) rerun the newly corrected version of this
migration. To avoid this communication problem, you should only rollback
commits if you haven't already pushed them to a remote git server.

## Editing A Migration File

Let's examine the `up` and `down` methods more closely. Let's start with
the `up` method:

```javascript
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      specialSkill: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // ...
};
```

The `up` method will be passed a QueryInterface
([documentation][query-interface-docs]) object. This object provides a
number of commands for modifying the SQL database schema. The
`createTable` method is amongst the most important.

[query-interface-docs]: https://sequelize.org/master/class/lib/query-interface.js~QueryInterface.html

We pass the table name (`'Cats'`) along with an object mapping column
names to column attributes. Every column must have a specified `type`.
This is similar to what we saw when we generated a model file. Note that
we **do not** take `id`, `createdAt`, or `updatedAt` for granted. We
need to include those columns. Luckily, everything has been
auto-generated for us!

We will talk about `allowNull` and `primaryKey` in a later reading.
These attributes ask Sequelize to add database constraints to a column.
Likewise we will ignore `autoIncrement` for the moment (this allows a
unique `id` to be auto-generated by the database for each saved row in
the `Cats` table).

We fix the `up` method like so:

```javascript
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cats', {
      // ...
      firstName: {
        type: Sequelize.STRING
      },
      specialSkill: {
        type: Sequelize.STRING
      },
      // Here we add the `age` column.
      age: {
        type: Sequelize.INTEGER,
      },
      // ...
    });
  },
  // ...
};
```

Adding the `age` column to the migration is a lot like how we added
`age` to our model file.

Having fixed our migration, we may now "rerun" it the same way we ran it
the first time:

```bash
npx sequelize db:migrate
```

We may now behold the fixed table:

```
catsdb=> \d "Cats"
                                         Table "public.Cats"
    Column    |           Type           | Collation | Nullable
--------------+--------------------------+-----------+----------
 id           | integer                  |           | not null
 firstName    | character varying(255)   |           |
 specialSkill | character varying(255)   |           |
 age          | integer                  |           |
 createdAt    | timestamp with time zone |           | not null
 updatedAt    | timestamp with time zone |           | not null
Indexes:
    "Cats_pkey" PRIMARY KEY, btree (id)
```

## `up` And `down` are Asynchronous

A final note about `up` (and also `down`). Sequelize expects `up` to be
*asynchronous*. That is, Sequelize expects `up` to return a `Promise`
object. Sequelize will wait for the `Promise` to be resolved. When the
`Promise` is resolved, Sequelize will know the work of the `up` method
is complete.

The `createTable` method is also asynchronous (returns a `Promise`). The
promise resolves when `createTable` is done creating the table. This is
why `up` is written as:

```javascript
module.exports = {
  up: (queryInterface, Sequelize) => {
    // up returns Promise returned by `createTable`.
    return queryInterface.createTable('Cats', {
      // ...
    });
  },
  // ...
};
```

Sequelize is able to autogenerate a migration to create a `Cats` table,
but many other migrations (for instance, to add an `age` column to our
`Cats` table) must be written by hand. When writing your own migrations,
you may prefer using `async`/`await`, which is clearer:

```javascript
module.exports = {
  // Note the addition of the `async` keyword
  up: async (queryInterface, Sequelize) => {
    // await `createTable` to finish its work.
    await queryInterface.createTable('Cats', {
      // ...
    });

    // No need to return anything. An `async` method always returns a
    // Promise that waits for all `await`ed work to be performed.
  },
  // ...
};
```

## Writing A `down` Method

A `down` method is written just like an `up` method. In the `down`
method we "undo" what has been performed by the `up` method. We call
`QueryInterface`'s `dropTable` method to drop the `Cats` table we
created in `up`:

```javascript
module.exports = {
  // ...
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cats');
  }
};

// OR, async/await way:
module.exports = {
  // ...
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cats');
  }
};
```

**Imagine we had forgotten to drop the `Cats` table in the `down`
method.** That is: imagine the `down` method was somehow left empty. If
we rollback the migration nothing will be done by the empty `down`
method. Thus the incorrect `Cats` table we created will not have been
dropped. The wrong `Cats` table would still exist.

Imagine we next fix the migration's `up` method. We want to rerun the
migration now and create the corrected `Cats` table. But when try to do
this, Sequelize will hit an error! Rerunning the migration will try to
`CREATE TABLE "Cats"` again, but SQL will complain because a `Cats`
table already exists. It was created the first time we ran the
migration, but never dropped when we tried to rollback the migration!

Inevitably all programmers will sometimes make mistakes like this. In
these circumstances, you will probably have to open `psql` and write a
SQL `DROP TABLE` command to fix things. Having manually corrected
things, you can finally rerun the corrected migration.

You should **never** manually drop a table on a production database.
That is incredibly dangerous, and typically cannot be undone. Even if
database backups do not exist, recently inserted data will be lost
forever. This is yet another reason why you ought not rollback
migrations that have been pushed from your local development
environment!

## Advantages Of Migrations

Having seen how to _use_ Sequelize migrations, we can discuss their
benefits versus writing SQL commands like `CREATE TABLE ...` yourself.

The first advantage is that Sequelize migration code is written in
JavaScript, which you may find simpler to write/read than the
corresponding SQL code. Most programmers write more JavaScript than SQL,
so they are typically better at remembering how to do things in
JavaScript than in SQL.

A second advantage is that migration files store SQL schema change code
permanently. The migration files can be checked into git, so that you
don't ever forget how your database was configured.

A third (related) advantage comes when another developer wants to
collaborate on your JavaScript program. By cloning your git repository,
they get all the migration files, too. To setup their own copy of your
database, a collaborator can run the migration files on their own
computer, playing back the schema changes one-by-one. Because they apply
the same migrations as you, they end up with the same schema as you.

Last, by using migrations you are able to rollback database changes to
fix bugs. This can be helpful in a local development environment where
it is typical to make mistakes. Remember though: you should **never**
rollback migrations that have been run on a production server.

## Conclusion

Having completed this reading, you now are able to:

* Describe advantages to using migrations over raw SQL commands to
  create, modify, and drop tables.
* Generate (and modify as needed)) migrations that create and drop
  tables.
* Run migrations to change the database schema.
* Undo incorrect migrations, fix them, and rerun them.
