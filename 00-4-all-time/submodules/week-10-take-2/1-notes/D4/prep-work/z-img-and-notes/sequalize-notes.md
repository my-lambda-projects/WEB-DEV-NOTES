npm install sequelize@^5.0.0
npm install sequelize-cli@^5.0.0  //-command line tool called sequelize-cli that will help us auto-generate and manage JavaScript files which will hold our Sequelize ORM code.
npm install pg@^8.0.0



We can run the command npx sequelize init to automatically setup the following directory structure for our project:

.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── node_modules
├── package-lock.json
├── package.json
└── seeders


Having run npx sequelize init, we must write our database login information into config/config.json.

By default this file contains different sections we call "environments". In a typical company you will have different database servers and configuration depending on where you app is running. 


Since we are doing development, we can just modify the "development" section to look like this:

{
  "development": {
    "username": "catsdbuser",
    "password": "catsdbpassword",
    "database": "catsdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}


By setting host to 127.0.0.1, we are saying that the database will run on the same machine as my JavaScript application. 


At the top level of our project, we should create an index.js file. From this file we will verify that Sequelize can connect to the SQL database. To do this, we use the authenticate method of the sequelize object.

```js
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



We will configure Sequelize to access the Cats table via a JavaScript class called Cat. To do this, we first use our trusty Sequelize CLI:
```
# Oops, forgot age:integer! (Don't worry we'll fix it later)
npx sequelize model:generate --name Cat --attributes "firstName:string,specialSkill:string"
```

This command generates two files: a model file (./models/cat.js) and a migration file (./migrations/20200203211508-Cat.js). We will ignore the migration file for now, and focus on the model file.

When using Sequelize's model:generate command, we specify two things. First: we specify the singular form of the Cats table name (Cat). Second: we list the columns of the Cats table after the --attributes flag: firstName and specialSkill. We tell Sequelize that these are both string columns (Sequelize calls SQL character varying(255) columns strings).

We do not need to list id, createdAt, or updatedAt. Sequelize will always presume those exist. Notice that we have forgotten to list age:integer

# Examining (And Modifying) A Sequelize Model File


Let us examine the generated ./models/cat.js file:

// ./models/cat.js
```js
'use strict';
module.exports = (sequelize, DataTypes) => {// function that defines a cat class
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


Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.

The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. 

Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable.

Model Definition
Models can be defined in two equivalent ways in Sequelize:

Calling sequelize.define(modelName, attributes, options)
Extending Model and calling init(attributes, options)
After a model is defined, it is available within sequelize.models by its model name.

To learn with an example, we will consider that we want to create a model to represent users, which have a firstName and a lastName. We want our model to be called User, and the table it represents is called Users in the database.

Both ways to define this model are shown below. After being defined, we can access our model with sequelize.models.User.

Using sequelize.define:
```js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

```
 You may notice we aren't using the JavaScript's class keyword to define the Cat class. With Sequelize, it is going to do all that for us with the define method. This is because Sequelize was around way before the class keyword was added to JavaScript. It is possible to use the class keyword with Sequelize,



**The first argument of define is the name of the class to define: Cat.** 


Notice how the second argument is an Object of Cats table columns:
```js
{
    firstName: DataTypes.STRING,
    specialSkill: DataTypes.STRING
}
```
**This object tells Sequelize about each of the columns of Cats.**


It maps each column name (firstName, specialSkill) to the type of data stored in the corresponding column of the Cats table. 



It is unnecessary to list id, createdAt, updatedAt, since Sequelize will already assume those exist.

We can correct our earlier mistake of forgetting age. We update the definition as so:


```js
const Cat = sequelize.define('Cat', {
  firstName: DataTypes.STRING,
  specialSkill: DataTypes.STRING,
  age: DataTypes.INTEGER,
}, {});

```


When Sequelize defines the Cat class, it will generate instance and class methods needed to interact with the Cats SQL table.



we don't require our cats.js file directly. Instead we require ./models which loads the file ./models/index.js.



Inside this file it reads through all our models and attaches them to an object that it exports. So we can use destructuring to get a reference to our model class Cat like so:


`const { sequelize, Cat } = require("./models");
`



We use the Cat.findByPk static class method to fetch a single cat: the one with id equal to 1. This static method exists because our Cat model class extends Sequelize.Model.

###  Pk" stands for primary key; 

the id field is the primary key for the Cats table. findByPk returns a Promise, so we must await the result. The result is an instance of the Cat model class
