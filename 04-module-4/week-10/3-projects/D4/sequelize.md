# SEQUELIZE
For this guide, we will be using the Recipe Box App data model that we used in week 10 of App Academy. Here is what it looks like:
![Recipe Box App Database - Used for this guide](sequelizeTables.png)
## Initial Setup
First, we need to install pg (for postgres), sequelize, and sequelize-cli (be sure to include the @^ versions because I tried this without that, and it looks different with newer versions).
```bash
npm install sequelize@^5.0.0 pg@^8.0.0
npm install sequelize-cli@^5.0.0 --save-dev
```
**Next**, create the user that you want to access your database, so log into psql.
```bash
psql
```
You know you were successful when you see ```=#``` in your terminal after the user name.
Go ahead and create the user you want to access your database.
```bash
create user recipe_box_app with createdb password 'password';
```
Press enter and you should see:
```bash
CREATE ROLE
```
**_NOW_**, let's initialize this project for sequelize.[^1]
Quit psql:
```bash
\q
```
Initialize your project for sequelize.
```bash
npx sequelize-cli init
```
Some directories and a file should have been generated automatically into your project:
1. config directory
	* config.json file
2. migrations directory
3. models directory
	* index.js file
4. seeders directory

**Open** your config/config.json file and you should see:
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```
1. Change all of the usernames to the username from "root" to the username that you created before: ```"username": "recipe_box_app"```
2. Change the password line to provide the password for the user you created for this app: ```"password": "password"```
3. Change the database line for all three environments (development, test, and production) to ```"database": "recipe_box_development"```, ``` "database": "recipe_box_test" ```, and ``` "database": "recipe_box_production" ```.
4. Change the dialect line to ```"dialect": "postgres"```
5. Remove the ```"operatorsAliases"``` line
6. Add the line: ```"seederStorage": "sequelize"``` 

Your ```config/config.json``` file should now look like this:
```json
{
  "development": {
    "username": "recipe_box_app",
    "password": "password",
    "database": "recipe_box_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "recipe_box_app",
    "password": "password",
    "database": "recipe_box_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "production": {
    "username": "recipe_box_app",
    "password": "password",
    "database": "recipe_box_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  }
}
```
**After updating your config file**, *make sure postbird is not logged in, and you are not logged into psql anywhere else* and generate the database by running the command:
```bash
npx sequelize-cli db:create
```
This will create your recipe_box_development database.
## Models and Migrations
Make sure that you start by generating the table that does not depend on anything else, meaning it does not contain any foreign keys.

**NOTE:** _As you continue creating tables, make sure you generate models and migrations for tables that only contain foreign keys to models that have already been generated._

We will generate all the models and migrations before moving actually migrating, because with the timestamps on the migration files, they will be created in the right order as long as we do this right.

Our Recipes table does not depend on anything, it contains no foreign keys, so we will make it first.[^2]

**NOTE:** _You **do not** want to create the Ingredients or Instructions table before the Recipes and MeasurementUnits tables_

For each model you generate, a new file will appear in your models and migrations folders.

To generate the Recipes model:[^3]
```bash
npx sequelize-cli model:generate \
  --name Recipe \
  --attributes title:string
```
To generate the MeasurementUnits model:[^4]
```bash
npx sequelize-cli model:generate \
  --name MeasurementUnit \
  --attributes name:string
```
**After** creating the tables with no dependencies, we can create the tables that depend on them.

To generate the Instructions model:[^5]
```bash
npx sequelize-cli model:generate \
  --name Instruction \
  --attributes specification:text,listOrder:integer,recipeId:integer
```
To generate the Ingredients model:
```bash
npx sequelize-cli model:generate \
  --name Ingredients \
  --attributes amount:numeric,measurementUnitId:integer,foodStuff:string,recipeId:integer
```
## Migrations
In the migrations files, you want to make sure that you put in any constraints on the datatypes like string and numeric, by going to the ```type: Sequelize.STRING``` or ```type: Sequelize.NUMERIC``` line and adding parentheses, specifying the limits like this:
```json
type: Sequelize.STRING(100)
```
```json
type: Sequelize.NUMERIC(5,3)
```
You may be asked to make sure null values are not allowed for that column, you would add the line:
```json
allowNull: false
```
To make sure that all values in the column are unique, add the line:
```json
unique: true
```
To specify the column as a foreign key (This is an example from the Ingredients table)[^6]:
```json
references: { model: "Recipe" }
```
## Migrate
Once you have your Migration files fixed the way you need them, you will migrate by running:
```bash
npx sequelize-cli db:migrate
```
If you end up forgetting something or put in a wrong value, you can undo your most recent migration OR all migrations by running:
```bash
npx sequelize-cli db:migrate:undo
```
OR
```bash
npx sequelize-cli db:migrate:undo:all
```
## Models and Associations
In your models files, you will specify the associations. You can have one-to-one, one-to-many, or many-to-many.

For our example, the Recipes and Instructions table have a one-to-many association, the Recipes and Instructions table have a one-to-many association, and the MeasurementUnits and Ingredients have a on-to-many relationship.

Let's associate the Recipes and Instructions first. We will go into the Recipes model file at ```models/recipe.js``` and in the ```Recipe.associate``` file. Since the Recipes table does not contain a foreign key, but is referenced by the Instructions table, we will call the ```hasMany``` function here:
```javascript
Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId' });
```
In plain English, you can read the above code as: "Each recipe has many instructions, and each instruction references the recipe with the foreign key 'recipeId'."

Since the Instruction model contains a foreign key referencing the Recipe model, it _belongs to_ the Recipe model. So, in the ```models/instruction.js``` we will associate the Instruction model to the Recipe model using the ```belongsTo``` function:
```javascript
Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
```
In plain English, you can read the above code as: "Each Instruction belongs to a recipe that is referenced by the foreign key 'recipeId'."

To set up the Recipes to Ingredients association, 
In the ```models/recipe.js``` file, define the association as:
```javascript
Recipe.hasMany(models.Ingredient, { foreignKey: 'recipeId' });
```
and in the ```models/ingredient.js``` file, define the association as:
```javascript
Ingredient.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
```
Finally, for the Ingredients to MeasurementUnits associations,
In the ```models/ingredient.js``` file, define the association as:
```javascript
Ingredient.belongsTo(models.MeasurementUnit, { foreignKey: 'measurementUnitId' });
```
and in the ```models/measurementunit.js``` file, define the association as:
```javascript
MeasurementUnit.hasMany(models.Ingredient, { foreignKey: 'measurementUnitId' });
```
The many to many relationship is the only one that is **_really_** different, which I can make a file about later upon request.
## Seeding Tables
Now we need to seed the tables, so we will go back to the terminal and generate the seed files. You will run:
```bash
npx sequelize-cli seed:generate --name recipe-seeder
```
You can name the seeder file anything you would like. The file with the name you gave it will appear in your ```seeders/``` folder. We need to open it up and put in information for each item that we want to seed into the table. **NOTE:** _Make sure you provide the createdAt and updatedAt values, otherwise they will be considered null, which is not allowed._

When you open the ```seeders/recipe-seeder``` file, you will see this:
```javascript
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
        return queryInterface.bulkDelete('People', null, {});
    */
  }
};
```
Inside of the up and down methods here, you see a comment with an "Example" in it. These are extremely helpful so you don't have to memorize exactly what to do here. You can take these out of the comments and use them, but make sure you change 'People' to the table name, which should be _plural_ here.

You will place your seed data as an array of POJOs in the bulkInsert method in the up section. The up method of the Recipes seeder will look a little like this:
```javascript
return queryInterface.bulkInsert('Recipes', [
  { title: 'Vegetable Soup', createdAt: new Date(), updatedAt: new Date() },
  { title: 'Pot Roast', createdAt: new Date(), updatedAt: new Date() },
  { title: 'Macaroni and Cheese', createdAt: new Date(), updatedAt: new Date() },
  { title: 'Lasagna', createdAt: new Date(), updatedAt: new Date() }
], {});
```
This will translate into SQL as:
```SQL
INSERT INTO Recipes (title)
VALUES
('Vegetable Soup'),
('Pot Roast'),
('Macaroni and Cheese'),
('Lasagna');
```
If you need to undo the most recent seed you can run:
```bash
npx sequelize-cli db:seed:undo
```
Or you can undo all seeds by running:
```bash
npx sequelize-cli db:seed:undo:all
```
## Accessing the Data
You can access and query the data using the ```findByPk```, ```findOne```, and ```findAll``` methods. First, make sure you import the models in your JavaScript file. In this case, we are assuming your JavaScript file is in the root of your project and so is the models folder.
```javascript
const { Recipe, Ingredient, Instruction, MeasurementUnit } = require('./models');
```
The models folder exports each of the models that you have created. We have these four in our data model, so we will destructure the models to access each table individually. The associations that you have defined in each of your models will allow you to access data of related tables when you query your database using the ```include``` option.

If you want to find all recipes, for the recipe list, you would use the ```findAll``` method. You need to await this, so make sure your function is async.
```javascript
async function findAllRecipes() {
  return await Recipe.findAll();
}
```
If you would like to include all the ingredients so you can create a shopping list for all the recipes, you would use ```include```. This is possible because of the association you have defined in your Recipe and Ingredient models.
```javascript
async function getShoppingList() {
  return await Recipe.findAll({ include: [ Ingredient ] });
}
```
If you only want to find one where there is chicken in the ingredients list, you would use ```findOne``` and ```findByPk```.
```javascript
async function findAChickenRecipe() {
  const chickenRecipe = await Ingredient.findOne({
    where: {
      foodStuff: 'chicken'
    }
  });
  return await Recipe.findByPk(chickenRecipe.recipeId);
}
```
## Data Access to Create/Update/Delete Rows
You have two options when you want to create a row in a table (where you are saving one record into the table). You can either ```.build``` the row and then ```.save``` it, or you can ```.create``` it. Either way it does the same thing. Here are some examples:

Let's say we have a form that accepts the name of the recipe (for simplicity). When we get the results of the form, we can:
```javascript
const newRecipe = await Recipe.build({ title: 'Chicken Noodle Soup' });
await newRecipe.save();
```
This just created our new recipe and added it to our Recipes table. You can do the same thing like this:
```javascript
await Recipe.create({ title: 'Chicken Noodle Soup' });
```
If you want to modify an item in your table, you can use ```update```. Let's say we want to change the chicken noodle soup to chicken noodle soup with extra veggies, first we need to get the recipe, then we can update it.
```javascript
const modRecipe = await Recipe.findOne({ where: { title: 'Chicken Noodle Soup' } });
await modRecipe.update({ title: 'Chicken Noodle Soup with Extra Veggies' });
```
To delete an item from your table, you will do the same kind of process. Find the recipe you want to delete and ```destroy``` it, like this:
```javascript
const deleteThis = await Recipe.findOne({ where: { title: 'Chicken Noodle Soup with Extra Veggies' } });
await deleteThis.destroy();
```
**NOTE:** If you do not await these, you will receive a promise, so you will need to use ```.then``` and ```.catch``` to do more with the items you are accessing and modifying.

## Documentation
For the data types and validations in your models, here are the official docs. The sequelize docs are hard to look at, so these are the specific sections with just the lists:
**Sequelize Data Types:** _https://sequelize.org/v5/manual/data-types.html_
**Validations:** _https://sequelize.org/v5/manual/models-definition.html#validations_
When you access the data in your queries, here are the operators available, again because the docs are hard to navigate, this is the specific section with the list of operators.
**Operators:** _https://sequelize.org/v5/manual/querying.html#operators_
The documentation for building, saving, creating, updating and destroying is linked here, it does a pretty good job of explaining in my opinion, it just has a title that we have not been using in this course. When they talk about an instance, they mean an item stored in your table.
**Create/Update/Destroy:** _https://sequelize.org/v5/manual/instances.html_

[^1]: If you want to create the database before you initialize sequelize for your project, you can log into psql in your terminal and run 
``` create database recipe_box_developement with owner recipe_box_app; ```
[^2]: Our MeasurementUnits table aslo does not depend on anything, so you can create this one first if you would like. 
[^3]: You don't need to include the id, createdAt, or updatedAt attributes in when you generate your models, because they are automatically created every time.
[^4]: For the name, use a singular version of the table name and capitalize it.
[^5]: If you put spaces between the column:type pairs in the attributes list, you need to put them in a string, and still separate them with a comma, but leaving off the quotes is perfectly fine without spaces.
[^6]: The value for the model that you reference needs to be in quotes and should be singular, _or_ however the referenced model is named in its model file if the model was not generated as specified here.
