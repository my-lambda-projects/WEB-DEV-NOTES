# Recipe Box With Sequelize

In this project, you will build the Data Access Layer to power a Web
application. Unlike previously, you will use the Sequelize library and tools to
do this to build a more maintainable application.

It has more steps than the SQL version, but it's more maintainable in the long
run. Also, the SQL version hid a lot of complexity from you with respect to the
running of the SQL. Go look at the SQL version of the files in the
**controllers** directory to see what we had to do to load the SQL and execute
it.

Now, compare the _simplicity_ of those with the simplicity of the files in the
**controllers** directory for _this_ version of the application. It's easier to
understand _this_ version. You want to know where to add a column to a table?
Go to the migrations. You want to know where to fix a query? Go to the proper
repository file.

It's just _so_ much better organized.

Quite often, you will see that you will have more files and, overall, more lines
of code in well-organized, highly-maintainable software project. Remembering
where code is _is hard_. That's why having clearly-named files and directories
is so very important.

## The data model analysis

This looks no different because it's the same application.

What goes into a recipe box? Why, recipes, of course! Here's an example recipe
card.

![Recipe card]

You can see that a recipe is made up of three basic parts:

* A title,
* A list of ingredients, and
* A list of instructions.

You're going to add a little more to that, too. It will also have

* The date/time that it was entered into the recipe box, and
* The date/time it was last updated in the recipe box.

These are good pieces of data to have so that you can show them "most recent"
for example.

Ingredients themselves are complex data types and need their own structure. They
"belong" to a recipe. That means they'll need to reference that recipe. That
means an ingredient is made up of:

* An amount (optional),
* A unit of measure (optional),
* The actual food stuff, and
* The id of the recipe that it belongs to.

That unit of measure is a good candidate for normalization, don't you think?
It's a predefined list of options that should not change and that you don't want
people just typing whatever they want in there, not if you want to maintain
data integrity. Otherwise, you'll end up with "C", "c", "cup", "CUP", "Cup", and
all the other permutations, each of which is a distinct value but means the same
thing.

Instructions are also complex objects, but not by looking at them. Initially,
one might only see text that comprises an instruction. But, very importantly,
instructions have _order_. They also _belong_ to the recipe. With that in mind,
an instruction is made up of:

* The text of the instruction,
* The order that it appears in the recipe, and
* The id of the recipe that it belongs to.

That is enough to make a good model for the recipe box.

![recipe box data model]

## The application

The application is a standard [express.js] application using the [pug] library
to generate the HTML and the [node-postgres] library to connect to the database.

It already has [sequelize] and [sequelize-cli] installed.

## Getting started

* Download the starter project from
  https://github.com/appacademy-starters/sql-orm-recipe-box
* Run `npm install` to install the packages
* Run `npm run dev` to start the server on port 3000

You'll do all of your work in the **data-access-layer** directory. In there, you
will find a series of JS files. Each of these will hold your JavaScript code
rather than SQL code.

In each, you will find instructions of what to do to make the user interface to
work. They are numbered in an implied order for you to complete them. The only
real requirement is that you finish the SQL for the **00a-database.sql** and
**00b-seed.sql** files first. That way, as you make your way through the rest of
the SQL files, the tables and some of the data will already exist for you. You
can run the command `npm run seed` to run both of those files or pipe each it
into `psql` as you've been doing.

Either way that you decide to seed the database, you'll need to stop your
server. The seed won't correctly run while the application maintains a
connection to the application database. You may also need to exit all of the
active `psql` instances that you have running to close out all of the active
connections. When you run the seed, if it reports that it can't do something
because of active connections, look for a running instance of the server,
Postbird, or `psql` with that connection.

**Warning**: running the seed files will destroy all data that you have in the
database.

## Your code

You're going to be using JavaScript and the tools of Sequelize. Keep the
[Sequelize documentation] open and handy. Even developers that use ORMs every
day will keep the documentation open because there's so much to know about them.

## Phase 1: Initialize the Sequelize project

Because this project already has [sequelize-cli] installed, you can initialize
the project by typing `npx sequelize-cli init`. The `npx` command runs
locally-installed tools. That will create the project structure that Sequelize
expects for us to continue to use its tools.

## Phase 2: Create a database user for the project

Using a PostgreSQL client like `psql` or Postbird, create a new user for this
application named "sequelize_recipe_box_app" with the password "HfKfK79k" _and_
the ability to create a database. Here's the [link to the CREATE USER
documentation] so that you can determine which options to give.

## Phase 2: Change the connection configuration

The project contains a directory named **config**. Inside there, you will find a
file named **config.json**. You need to make some configuration changes.

* Change all the "user" and "password" values to the information for the user
  that you created in Phase 2.
* Change the "database" values to be "recipe_box_development",
  "recipe_box_test", and "recipe_box_production".
* Change all of the "dialect" values from "mysql" to "postgres".
* Delete all of the "operatorAliases" entries. It's to support earlier versions
  of the Sequelize library. Make sure to remove the comma from the preceding
  line so that it's valid JSON.
* Because you'll be using seed data in this project, add `"seederStorage":
  "sequelize"` to each of the different blocks so that Sequelize CLI won't run
  a seeder more than once causing duplicate entries in the database.

That will configure the application and the Sequelize tools to properly connect
to your development database.

## Phase 3: Create your database

Rather than writing SQL to do this, you will use the tools. Run

```
npx sequelize-cli db:create
```

That runs the Sequelize CLI with the command `db:create`.

When you run this, it will default to the "development" setting and read the
information from the configuration file to create your database for you! It
should print out something like

```
Sequelize CLI [Node: 10.19.0, CLI: 5.5.1, ORM: 5.21.5]

Loaded configuration file "config/config.json".
Using environment "development".
Database recipe_box_development created.
```

You can also drop the database by typing ... you guessed it! The Sequelize CLI
with the command `db:drop`!

```
npx sequelize-cli db:drop
```

If you run that, run the "create" command, again, so the database exists.

## Phase 4: The units of measurement data

Just as a review, here is the specification for the table that holds units of
measurement.

| Column Name | Column Type | Constraints |
|-------------|-------------|-------------|
| id          | SERIAL      | PK          |
| name        | VARCHAR(20) | NOT NULL    |

Luckily, the Sequelize models and migrations take care of the "id" property for
you without you having to do anything. So, you can just focus on that "name"
property.

### Create a migration

It's time to create the first migration, the one that defines the table that
will hold units of measure. You can use the Sequelize CLI to generate the
migration for you. You can _also_ tell it to create a model for you, and it will
create a migration along _with_ the model. You should do that to get the biggest
return on investment for the characters that you will type.

The command is `model:generate` and it takes a couple of arguments, "--name"
which contains the name of the model (as a singular noun) to generate,
and "--attributes" which has a comma-separated list of "property-name:data-type"
pairs.

**Learning Tip**: It is _so very important_ that you don't copy and paste this.
Type these things out so it has a better chance of creating durable knowledge.

```
npx sequelize-cli model:generate \
  --name MeasurementUnit \
  --attributes name:string
```

That will create two files, if everything works well. (The name of your
migration file will be different because it's time-based.)

```
New model was created at models/measurementunit.js
New migration was created at migrations/20200101012349-MeasurementUnit.js
```

The **model** file will be used by the application to query the database. It
will be used by the express.js application. It is part of the running software.

The **migration** file is used to construct the database. It is only used by the
Sequelize CLI tool to build the database. Unlike those schema and seed files
that you had in the SQL version of this project which destroyed _everything_
when run, migrations are designed to change your database as your application
grows. This is a much better strategy so that existing data in the databases
that other people use aren't damaged.

Because the data model requires the "name" column to be both non-null _and_
unique, you have to add some information to the migration file. Open it and, for
the "name" property, make non-nullable by looking at how the other properties
are configured. Then, add the "unique" property set to `true` to the "name"
configuration, as well. That should be enough for Sequelize to create the table
for you.

The last thing to do is to change the length of the "name" property. By default,
Sequelize will make it 255 characters long. The specification for the table
says it should really only be 20 characters. To tell the migration that, change
the type for "name" from `Sequelize.STRING` to `Sequelize.STRING(20)`.

## Run your migration

If you now run your migration with the Sequelize CLI, it will create the table
for you.

```
npx sequelize-cli db:migrate
```

That should give you some output that looks similar to this.

```
Loaded configuration file "config/config.json".
Using environment "development".
== 20200101012349-create-measurement-unit: migrating =======
== 20200101012349-create-measurement-unit: migrated (0.021s)
```

You can confirm that the table "MeasurementUnits" is created by using your
PostgreSQL client. You'll also see that another table is created,
"SequelizeMeta", which contains information about which migration has most
recently been run. It contains a single column, "name". Each row contains an
entry of which migration file has run. Now that you've run your migration file,
the table contains one entry, the name of your migration file. When you run
more migrations, you will see more rows, each containing the name of the file
that you've run.

**psql Note**: If you are using `psql` as you PostgreSQL command, be aware that
it will lowercase any entity and column names you type in there. If you type
`SELECT * FROM MeasurementUnits`, it converts that to `SELECT * FROM
measurementunits` before running it. To prevent that from happening, use
quotation marks around the table name. `SELECT * FROM "MeasurementUnits"` will
do the trick.

It's important that you _never_ change the name of a migration file after it's
been run.

In the real world, you should _never_ change the content of a migration file
after it's been committed and shared in your Git repository. Asking others to
rollback their migrations just because you changed one of yours is bad manners.
Instead, you should add a new migration that makes the change that you want.

## Create the seed data

You can create the seed data for the unit of measurements by creating a
**seeder** as the Sequelize CLI calls them. You can create one using the
Sequelize CLI tool. Run the following and make sure you don't get any errors.

```
npx sequelize-cli seed:generate --name default-measurement-units
```

Now, you want to insert the seed data. You will do this by using the
`bulkInsert` method of the object passed in through the `queryInterface`
parameter of the `up` method. Feel free to delete the comment in the `up` method
and replace it with this.

```js
return queryInterface.bulkInsert('MeasurementUnits', [
  { name: 'cups', createdAt: new Date(), updatedAt: new Date() },
]);
```

The `bulkInsert` method takes two parameters:

* The name of the table to insert into, and
* An array of objects that have property names that match the column names in
  the table.

You can see that the first object has been provided by the example. Now, create
objects for all of these values, as well. (The empty item in the list is an
empty string and is intentional) Make sure you do them **in this order,** or
when we get to the seed data for the other tables it won't work. (We've supplied
you with files for the seed data for the other tables because there is a lot of
it)

* "fluid ounces"
* "gallons"
* "grams"
* "liters"
* "milliliters"
* "ounces"
* "pinch"
* "pints"
* "pounds"
* "quarts"
* "tablespoons"
* "teaspoons"
* ""
* "cans"
* "slices"
* "splash"

Now, run the Sequelize CLI with the command `db:seed:all`.

After you get that done, you can confirm that all of the records (rows) were
created in the "MeasurementUnits" table.

## Phase 5: The recipe table model

This will go much like the last one, except there's no seed data. Just to
refresh your memory, here's the specification for the "recipes" table.

| Column Name | Column Type  | Constraints                         |
|-------------|--------------|-------------------------------------|
| id          | SERIAL       | PK                                  |
| title       | VARCHAR(200) | NOT NULL                            |
| created     | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP |
| updated     | TIMESTAMP    | NOT NULL, DEFAULT CURRENT_TIMESTAMP |

As you've discovered, Sequelize takes care of the "id" for you _and_ the columns
to track when the recipe has been created and updated! Your job is to

* Generate a model for the "recipe"
* Customize the migration so the "title" column is not nullable

Run your migration and confirm that you defined it correctly by checking the
attributes in the description of the table. The important parts to check are
that the "title" column is a VARCHAR(200) and is non-nullable. (The "Collation"
column has been removed for brevity.)

```
                  Table "public.Recipes"
  Column   |           Type           | Nullable |  Default
-----------+--------------------------+----------+------------
 id        | integer                  | not null | nextval(...
 title     | character varying(200)   | not null |
 createdAt | timestamp with time zone | not null |
 updatedAt | timestamp with time zone | not null |
Indexes:
    "Recipes_pkey" PRIMARY KEY, btree (id)
```

## Phase 6: The instruction table model

Now, things get a little trickier because this model will reference the recipe
model. Here's the specification for the "instructions" table.

| Column Name   | Column Type | Constraints  |
|---------------|-------------|--------------|
| id            | SERIAL      | PK           |
| specification | TEXT        | NOT NULL     |
| listOrder     | INTEGER     | NOT NULL     |
| recipeId      | INTEGER     | FK, NOT NULL |

When you type out your migration generation command, the "--attributes"
parameter will look like this:

```
--attributes column1:type1,column2:type2,column3:type3
```

Instead of using "string" for the "specification" column of the table, use
"text" to generate a TEXT column.

After it generates the migration file, modify each of the column descriptors in
the migration so that the columns are not nullable. Then, add a new property
to the one for "recipeId" called "references" that is an object that contains
a "model" property set to "Recipes". It should look like this.

```js
recipeId: {
  allowNull: false,
  references: { model: "Recipes" },
  type: Sequelize.INTEGER,
},
```

With that in place, run the migration. Then, check the table definition in your
PostgreSQL client.

```
                   Table "public.Instructions"
    Column     |           Type           | Nullable |     Default
---------------+--------------------------+----------+-----------------
 id            | integer                  | not null | nextval('"Ins...
 specification | text                     | not null |
 listOrder     | integer                  | not null |
 recipeId      | integer                  | not null |
 createdAt     | timestamp with time zone | not null |
 updatedAt     | timestamp with time zone | not null |
Indexes:
    "Instructions_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "Instructions_recipeId_fkey" FOREIGN KEY ("recipeId")
                                 REFERENCES "Recipes"(id)
```

You should see all non-null columns and a foreign key between the "Instructions"
table and the "Recipes" table.

## Phase 7: The ingredients model

The model for ingredients has _two_ foreign keys. Create the model and migration
for it. Here's the table specification.

| Column Name       | Column Type   | Constraints  |
|-------------------|---------------|--------------|
| id                | SERIAL        | PK           |
| amount            | NUMERIC(5, 2) | NOT NULL     |
| measurementUnitId | INTEGER       | FK, NOT NULL |
| foodStuff         | VARCHAR(500)  | NOT NULL     |
| recipeId          | INTEGER       | FK, NOT NULL |

After you modify and run your migration, you should have a table in your
database that looks like this, with two foreign keys, one to the "Recipes"
table and the other to the "MeasurementUnits" table.

```
                       Table "public.Ingredients"
      Column       |           Type           | Nullable |      Default
-------------------+--------------------------+----------+-----------------
 id                | integer                  | not null | nextval('"Ing...
 amount            | numeric(5,2)             | not null |
 measurementUnitId | integer                  | not null |
 foodStuff         | character varying(500)   | not null |
 recipeId          | integer                  | not null |
 createdAt         | timestamp with time zone | not null |
 updatedAt         | timestamp with time zone | not null |
Indexes:
    "Ingredients_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "Ingredients_measurementUnitId_fkey"
        FOREIGN KEY ("measurementUnitId")
        REFERENCES "MeasurementUnits"(id)
    "Ingredients_recipeId_fkey"
        FOREIGN KEY ("recipeId")
        REFERENCES "Recipes"(id)
```

## Phase 8: Seed data for all of the tables

Now that you have tables in the database, it's time to create some seed data for
all of them. In the **data-access-layer** directory, you will find three text
files each containing JavaScript objects on each row that match the tables
in the previous three sections.

If you didn't seed the MeasurementUnits data in the correct order listed in the
section above, you may have to redo that seed file, because the data from the
text files depends on the ids of the data in the `MeasurementUnits` table being
correct.

There are three tables to seed: Ingredients, Instructions, and Recipes. It is
important to note that you will need to seed them in the correct order due to
foreign key dependencies.

Look at the data model for the application, again.

![recipe box data model]

You can see that the Instructions depends on Recipes because it has the foreign
key "recipeId" to the Recipes table. You can also see that the Ingredients table
has dependencies on the Recipes and MeasurementUnits tables because of its
foreign keys "measurementUnitId" and "recipeId". (You've already seeded the
MeasurementUnits table in Phase 4, so that data exists for use by the
Ingredients table.) Recipes does not have any foreign keys. You need to seed
Recipes, first, because it does not have any foreign keys and, therefore, does
not have any data dependencies. Then, you can seed the Instructions and
Ingredients tables in either order because their data dependencies will have
been met.

Create seeder files for them in that order: Recipes, first, then Ingredients and
Instructions. Use the contents of each of the text files in
**data-access-layer** to do bulk inserts.

After you create each seed file, run

```
npx sequelize-cli db:seed:all
```

to make sure you don't have any errors. If you do, fix them before moving onto
the next seed file.

If you end up seeding the data in the wrong order and getting a foreign key
constraint error, just use the CLI to drop the database, create the database,
migrate the database, and then you can try running your seeders, again. You may
need to rename your migration filenames to get your seeds running in the
correct order.

## Phase 9: Updating models with references

Now that you have all of the migrations set up correctly and a database defined,
it is time for you to turn your attention to the model files that were
generated in the previous phases.

Consider the relationship between an Instruction and a Recipe. A Recipe _has
many_ Instructions. In the other direction, you would say that an Instruction
_has one_ Recipe, or that Instruction _belongs to_ the Recipe. To set that up in
your model, open the file **models/recipe.js**. In there, you will see the
following.

```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
```

In the `associate` function is where you can define the association between the
Recipe and the Instruction. Replace the comment with the following statement.

```js
Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId' });
```

This instructs Sequelize that Recipe should have a collection of Instruction
objects associated with it. To insure that Sequelize uses the foreign key column
that you created on the "Instructions" table in your migration, you must specify
it as part of the collection definition.

In the file **models/instruction.js**, replace the comment with the following to
define the other side of the relationship.

```js
Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
```

This instructs Sequelize that Instruction has a single Recipe object associated
with it. Again, because of inconsistent naming conventions used by Sequelize,
you must specify the foreign key column name in the "Instructions" table.

Think about the many-to-one and one-to-many relationships between Ingredient,
MeasurementUnit, and Recipe. Then, modify those model files accordingly with
the `hasMany` and `belongsTo` associations, always specifying the name of the
foreign key column that binds the two tables together.

## Phase 10: Updating models with validations

Now that you have seed data created, it will be important to prevent users from
entering data that does not meet the expectations of the data model.

Consider the content of **models/instruction.js**

```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
  };
  return Instruction;
};
```

It would be nice if the model could validate each of those properties to make
sure that no one sets them to null and that `listOrder` is greater than 0, for
example. You can do that with [per-attribute validations].

For example, you can change the above code to the following to make sure that
the "specification" property won't get set to an empty string when someone tries
to save the object.

```js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
  };
  return Instruction;
};
```

Make sure all of the other string properties in the models won't allow the empty
string to be set on them.

## Phase 11: Cascade delete for recipes

The Recipe model has dependencies: the Instruction and the Ingredient both have
_belongs to_ relationships. This means that the row in the "Recipes" table must
exist to have records in the "Ingredients" and "Instructions" table. If you try
to delete a Recipe row from the database that has either Instructions or
Ingredients, it won't work due to referential integrity. You would have to
delete all of the Ingredients and Instructions _before_ being able to delete the
Recipe.

Sequelize provides a handy shortcut for that and will manage deleting the
associated records for you when you delete a row from the Recipes table. It's
called a _cascading delete_. Open the **models/recipe.js** file. In there,
modify the second argument of each of the `hasMany` calls to include two new
property/value pairs:

* `onDelete: 'CASCADE'`
* `hooks: true`

Refer to the documentation on [Associations] to see an example. But, don't
delete the `foreignKey` property that you put there in Phase 9.

## Phase 12: Building the repositories

Now that you have the seeds, models, and migrations out of the way, you can
build the data access layer with a lot of speed. Sequelize will now handle all
of the SQL generation for you. You can just use the models that you've
painstakingly crafted.

Because you are writing JavaScript files, you want the server to restart because
it won't automatically reload the changed JavaScript that you're writing. To
that end, you will use a different command while developing.

```
npm run dev
```

This runs a special script that will reload the JavaScript in the data access
layer every time you make a change. You can see what's run in the
**package.json** file in this project in the "scripts" section for the "dev"
property.

You will work in the three files named

* **recipes-repository.js**: The collection of functions needed to interact with
  recipes for the application
* **instructions-repository.js**: The collection of functions needed to interact
  with the instructions for the application
* **ingredients-repository.js**: The collection of functions needed to interact
  with the ingredients for the application

Each of the files imports your models and makes them available to you. Then,
you can use them in your querying. Follow the hints in each of the repository
functions.



[Recipe card]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/sql-recipe-card.jpeg
[express.js]: https://www.expressjs.com
[pug]: https://pugjs.org
[node-postgres]: https://node-postgres.com
[Parameterized query]: https://node-postgres.com/features/queries#Parameterized%20query
[Sequelize documentation]: https://sequelize.org/v5/
[sequelize]: https://www.npmjs.com/package/sequelize
[sequelize-cli]: https://www.npmjs.com/package/sequelize-cli
[link to the CREATE USER documentation]: https://www.postgresql.org/docs/current/sql-createuser.html
[per-attribute validations]: https://sequelize.org/master/manual/validations-and-constraints.html#per-attribute-validations
[Associations]: https://sequelize.org/master/manual/hooks.html#associations
[recipe box data model]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/sql-recipe-box-data-model.png
