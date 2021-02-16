# Practice for Sequelize

This is a practice assessment for using Sequelize.

There is a picture of the data model in the images directory that you can use
to refer to.


![](/starter/images/class-enrollment-data-model.png)


The tests will check that models are correctly named by making assumptions about
how they're used. Remember:

* Models are capitalized singular nouns
* Tables are capitalized plural nouns

After each of the "modify migration file" or "modify seed data file" steps, you
may want to run the associated Sequelize CLI commands, if applicable, to make
sure that tables and data are what you expect them to be. When you type your
commands on the command line, it should use the "development" database that
you'll create.

The tests will expect that you have created seeder files to insert the provided
data. Before tests, it will run the equivalence of, in order:

* db:seed:undo:all
* db:migrate:undo:all
* db:migrate
* db:seed:all

You must run the tests with "npm test". It sets the proper environment variable
for using the test database environment. The tests will use the "test" database
that you will create.


# Step 1: Set-up

Using npm, install

* sequelize
* sequelize-cli
* pg

Create a database user named "enrollment_app" with password "86kRVBVnx92Fn5wG".
-config.json is already filled in so we create user to match config.json
![](create-user.png)
Create a database named "enrollment_development" with the owner
"enrollment_app". You can use this app during development to mess around with
your model.
![](npx.png)
Create a database named "enrollment_test" with the owner "enrollment_app". This
is the database that the mocha tests will use.

***
---------------------


A model is an abstraction that**represents a table in your database.** _In Sequelize, it is a class that extends Model_.

The model tells Sequelize several things about the entity it represents, such as the **name of the table** in the database and which** columns it has (and their data types**).

A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.


**Model Definition**

1. **Calling sequelize.define(modelName, attributes, options)**
2.**Extending Model and calling init(attributes, options)**


After a model is defined, it is available within sequelize.models by its model name.

To learn with an example, we will consider that we want to create a model to represent users, which have a firstName and a lastName. We want our model to be called User, and the table it represents is called Users in the database.

Both ways to define this model are shown below. After being defined, we can access our model with sequelize.models.User.

C:\Users\15512\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code - Insiders
sudo ln -s /C:\Users\15512\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code - Insiders /usr/local/bin/code
-----------------------
***
# Step 2: Person Model
- A model is almost always connected to a single table.
- In sequelize you create your tables in your database by migration.

Use the Sequelize CLI to initialize your project. Begin by generating a**`Person`**
model that has:

* a `firstName` attribute that contains a string up to 50 characters long
* a `lastName` attribute that contains a string up to 50 characters long
* an `email` attribute that contains a string up to 255 characters long

Update the migration file to make the associated columns for those properties
non-nullable.

Update the migration file to make the `email` column have only unique values.


# Step 3: Campus Model

Use the Sequelize CLI to generate a `Campus` model that has

* a `name` attribute that contains a string up to 255 characters long

Update the migration file to make the associated columns for those properties
non-nullable.

Update the migration file to make the `name` column have only unique values.


# Step 4: Department Model

Use the Sequelize CLI to generate a `Department` model that has

* a `name` attribute that contains a string up to 50 characters long

Update the migration file to make the associated columns for those properties
non-nullable.

Update the migration file to make the `name` column have only unique values.


# Step 5: Course Model

Use the Sequelize CLI to generate a `Course` model that has

* a `name` attribute that contains a string up to 50 characters long
* a `level` attribute that contains an integer
* a `campusId` attribute that contains an integer
* a `departmentId` attribute that contains an integer

Update the migration file to make the associated columns for those properties
non-nullable.

Update the migration file so that `campusId` references the Campuses model.

Update the migration file so that the `departmentId` references the Departments
model.


# Step 6: Enrollment Model

Use the Sequelize CLI to generate an `Enrollment` model that has

* a `personId` attribute that contains an integer
* a `courseId` attribute that contains an integer

Update the migration file so that `personId` references the People model.

Update the migration file so that the `courseId` references the Courses model.


# Step 7: Seeding Data

Use the Sequelize CLI to generate seeder files to seed the database with the
following data. All `createdAt` and `updatedAt` values can just be `new Date()`.

In each of the seeder files, include this code snippet in the `down` method to
delete all records replacing `TABLE_NAME` with the name of the table for the
seeder file:

```js
return queryInterface.bulkDelete('TABLE_NAME', {
  id: { [Sequelize.Op.gt]: 0 }
});
```

Then, use the following data to generate seed data for each seeder file:
![](-for-course.js.png)
* People data
  ```js
  { firstName: 'Daniel', lastName: 'Hays', email: 'Cras.sed.leo@Vivamusmolestie.co.uk', createdAt: new Date(), updatedAt: new Date() },
  { firstName: 'Wade', lastName: 'Woodard', email: 'massa.Integer@lectus.ca', createdAt: new Date(), updatedAt: new Date() },
  { firstName: 'Frances', lastName: 'Rosales', email: 'ligula@velitduisemper.ca', createdAt: new Date(), updatedAt: new Date() },
  ```

* Campuses data
  ```js
  { name: 'Valdivia', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Bangor', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Chatillon', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Filacciano', createdAt: new Date(), updatedAt: new Date() },
  ```

* Departments data
  ```js
  { name: 'Economics', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Mathematics', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Music', createdAt: new Date(), updatedAt: new Date() },
  ```

* Courses data
  ```js
  { name: 'Macro', level: 860, campusId: 2, departmentId: 1, createdAt: new Date(), updatedAt: new Date() },
  { name: 'Calculus', level: 830, campusId: 2, departmentId: 2, createdAt: new Date(), updatedAt: new Date() },
  { name: 'Discrete', level: 690, campusId: 4, departmentId: 2, createdAt: new Date(), updatedAt: new Date() },
  { name: 'Orchestra', level: 280, campusId: 1, departmentId: 3, createdAt: new Date(), updatedAt: new Date() },
  { name: 'Appreciation', level: 650, campusId: 1, departmentId: 3, createdAt: new Date(), updatedAt: new Date() },
  { name: 'Supply Chain', level: 790, campusId: 2, departmentId: 1, createdAt: new Date(), updatedAt: new Date() },
  { name: 'Algebra', level: 300, campusId: 2, departmentId: 2, createdAt: new Date(), updatedAt: new Date() },
  ```

* Enrollments data
  ```js
  { personId: 3, courseId: 7, createdAt: new Date(), updatedAt: new Date() },
  { personId: 3, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
  { personId: 3, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
  { personId: 2, courseId: 4, createdAt: new Date(), updatedAt: new Date() },
  { personId: 2, courseId: 6, createdAt: new Date(), updatedAt: new Date() },
  { personId: 2, courseId: 1, createdAt: new Date(), updatedAt: new Date() },
  { personId: 3, courseId: 5, createdAt: new Date(), updatedAt: new Date() },
  { personId: 2, courseId: 5, createdAt: new Date(), updatedAt: new Date() },
  ```


# Step 8: Associations

Modify the models so that they have the correct relationships.

**The Person model:**

A person has many courses and a course has many people. This is a many-to-many
relationship. Configure the `Person` model's side of having a **many-to-many
relationship** with the `Course` model.

**The Campus model:**

A campus can have many courses. Configure the `Campus` model to have many
`Course` models.

**The Department model:**

A department has many courses. Configure the `Department` model to have many
`Course` models.

**The Course model:**

A person has many courses and a course has many people. This is a many-to-many
relationship. Configure the `Course` model's side of having a many-to-many
relationship with the `Person` model.

A course belongs to a campus. Configure the `Course` model to belong to a
`Campus`.

A course belongs to a department. Configure the `Course` model to belong to a
`Department`.

## Step 9: Queries

Time to write some queries! Inside the "queries" directory, you will find a file
called `personLookup.js`.

Inside this file are three query functions, that will fetch a person (or people)
in a variety of ways. Complete each query in order to get the final tests to
pass.

## Step 10: Practice again!

The tests should fully pass, now. Take a break and do another round of the
practice assessment.
