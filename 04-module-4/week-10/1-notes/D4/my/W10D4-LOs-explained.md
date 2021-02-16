## ORM (W10D4) - Learning Objectives

### ORM
1. How to install, configure, and use Sequelize, an ORM for JavaScript
- To start a new project we use our standard npm initialize statement
  - `npm init -y`
- Add in the packages we will need (sequelize, sequelize-cli, and pg)
  - `npm install sequelize@^5.0.0 sequelize-cli@^5.0.0 pg@^8.0.0`
- Initialize sequelize in our project
  - `npx sequelize-cli init`
- Create a database user with credentials we will use for the project
  - `psql`
  - `CREATE USER example_user WITH PASSWORD 'badpassword'`
- Here we can also create databases since we are already in postgres
  - `CREATE DATABASE example_app_development WITH OWNER example_user`
  - `CREATE DATABASE example_app_test WITH OWNER example_user`
  - `CREATE DATABASE example_app_production WITH OWNER example_user`
- If we don't create these databases now, we could also create them after we make our changes to our config file. If we take this approach, we need to make sure our user that we created has the `CREATEDB` option when we make them, since sequelize will attempt to make the databases with this user. This other approach would look like:
  - In psql: `CREATE USER example_user WITH PASSWORD 'badpassword' CREATEDB`
  - In terminal: `npx sequelize-cli db:create`
- Double check that our configuration file matches our username, password, database, dialect, and seederStorage (these will be filled out for you in an assessment scenario):
```json
{
  "development": {
    "username": "sequelize_recipe_box_app",
    "password": "HfKfK79k",
    "database": "recipe_box_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "sequelize_recipe_box_app",
    "password": "HfKfK79k",
    "database": "recipe_box_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "production": {
    "username": "sequelize_recipe_box_app",
    "password": "HfKfK79k",
    "database": "recipe_box_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  }
}
```

2. How to use database migrations to make your database grow with your application in a source-control enabled way
- #### Migrations
  - In order to make new database tables and sequelize models that reflect them, we want to generate a migration file and model file using `model:generate`
    - `npx sequelize-cli model:generate --name Cat --attributes "firstName:string,specialSkill:string"`
    - Here we are creating a migration file and a model file for a Cat. We are specifying that we want this table to have fields for firstName and specialSkill. Sequelize will automatically make fields for an id, createdAt, and updatedAt, as well, so we do not need to specify these.
  - Once our migration file is created, we can go in and edit any details that we need to. Most often we will want to add in database constraints such as `allowNull: false`, adding a uniqueness constraint with `unique: true`, adding in character limits to fields such as `type: Sequelize.STRING(100)`, or specifying a foreign key with references to another table `references: { model: 'Categories' }`.
  - After we make any necessary changes to our migration file, we need to perform the migration, which will run the SQL commands to actually create the table.
    - `npx sequelize-cli db:migrate`
    - This command runs any migration files that have not been previously run, in the order that they were created (this is why the timestamp in the file name is important)
  - If we realize that we made a mistake after migrating, we can undo our previous migration, or all of our migrations. After undoing them, we can make any changes necessary to our migration files (They won't be deleted from the undo, so we don't need to generate anything! Just make the necessary changes to the files that already exist and save the files.). Running the migrations again will make the tables with the updates reflected.
    - `npx sequelize-cli db:migrate:undo`
    - `npx sequelize-cli db:migrate:undo:all`
- #### Models - Validations and Associations
  - In addition to the migration files, our `model:generate` command also created a model file for us. This file is what allows sequelize to transform the results of its SQL queries into useful JavaScript objects for us. 
  - The model is where we can specify a validation that we want to perform before trying to run a SQL query. If the validation fails, we can respond with a message instead of running the query, which can be an expensive operation that we know won't work.
    ```javascript
    // Before we make changes, sequelize generates the type that this field represents
    specification: DataTypes.TEXT

    // We can replace the generated format with an object to specify not only the type, but the validations that we want to implement. The validations can also take in messages the respond with on failure and arguments.
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: 'The specification cannot be empty'
        },
        len: {
          args: [10, 100]
          msg: 'The specifcation must be between 10 and 100 characters'
        }
      }
    }
    ```
  - Another key part of the model file is setting up our associations. We can use the `belongsTo`, `hasMany`, and `belongsToMany` methods to set up model-level associations. Doing so is what creates the helpful functionality like `addOwner` that we saw in the pets example, a function that automatically generates the SQL necessary to create a petOwner record and supplies the appropriate petId and ownerId.
    - In a one-to-many association, we need to have a `belongsTo` association on the "many" side, and a `hasMany` association on the "one" side:
      - `Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });`
      - `Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId' });`
    - In a many-to-many association, we need to have a `belongsToMany` on each side of the association. We generally specify a columnMapping object to show the association more clearly:
      ```javascript
      // In our Owner model
      // To connect this Owner to a Pet through the PetOwner
      const columnMapping = {
        through: 'PetOwner', // joins table
        otherKey: 'petId', // key that connects to other table we have a many association with
        foreignKey: 'ownerId' // our foreign key in the joins table
      }
      Owner.belongsToMany(models.Pet, columnMapping);

      // In our Pet model
      // To connect this Pet to an Owner through the PetOwner
      const columnMapping = {
        through: 'PetOwner', // joins table
        otherKey: 'ownerId', // key that connects to other table we have a many association with
        foreignKey: 'petId' // our foreign key in the joins table
      }
      Pet.belongsToMany(models.Owner, columnMapping);
      ```

3. How to perform CRUD operations with Sequelize
- #### Seed Files
  - Seed files can be used to populate our database with starter data.
    - `npx sequelize-cli seed:generate --name add-cats`
    - `up` indicates what to create when we seed our database, `down` indicates what to delete if we want to unseed the database.
    - For our up, we use the `queryInterface.bulkInsert()` method, which takes in the name of the table to seed and an array of objects representing the records we want to create:
      ```javascript
      up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('<<TableName>>', [
          { field1: value1a, field2: value2a },
          { field1: value1b, field2: value2b },
          { field1: value1c, field2: value2c }
        ]);
      }
      ```
    - For our down, we use the `queryInterface.bulkDelete()` method, which takes in the name of the table and an object representing our WHERE clause. Unseeding will delete all records from the specified table that match the WHERE clause.
    ```javascript
    // If we want to specify what to remove:
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('<<TableName>>', {
        field1: [value1a, value1b, value1c] //...etc.
      });
    }
    // If we want to remove everything from the table:
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('<<TableName>>', null, {});
    }
    ```
    - Running `npx sequelize-cli db:seed:all` will run all of our seeder files.
    - `npx sequelize-cli db:seed:undo:all` will undo all of our seeding.
    - If we omit the `:all` we can run specific seed files
- #### Inserting with Build and Create
  - In addition to seed files, which we generally use for starter data, we can create new records in our database by using `build` and `save`, or the combined `create`
    - Use the .build method of the Cat model to create a new Cat instance in index.js
    ```javascript
    // Constructs an instance of the JavaScript `Cat` class. **Does not
    // save anything to the database yet**. Attributes are passed in as a
    // POJO.
    const newCat = Cat.build({
      firstName: 'Markov',
      specialSkill: 'sleeping',
      age: 5
    });

    // This actually creates a new `Cats` record in the database. We must
    // wait for this asynchronous operation to succeed.
    await newCat.save();

    // This builds and saves all in one step. If we don't need to perform any operations on the instance before saving it, this can optimize our code.
    const newerCat = await Cat.create({
      firstName: 'Whiskers',
      specialSkill: 'sleeping',
      age: 2
    })
    ```
- #### Updating Records
  - When we have a reference to an instance of a model (i.e. after we have queried for it or created it), we can update values by simply reassigning those fields and using the `save` method
  ```javascript
  // Get a reference to the cat record that we want to update (here just the cat with primary key of 1)
  const cat = await Cat.findByPk(1);

  // Change cat's attributes.
  cat.firstName = "Curie";
  cat.specialSkill = "jumping";
  cat.age = 123;

  // Save the new name to the database.
  await cat.save();
  ```
- #### Deleting Records
  - When we have a reference to an instance of a model, we can delete that record by using `destroy`
  ```javascript
  const cat = await Cat.findByPk(1);
  // Remove the Markov record.
  await cat.destroy();
  ```
  - We can also call `destroy` on the model itself. By passing in an object that specifies a where clause, we can destroy all records that match that query
  ```javascript
  await Cat.destroy({ where: { specialSkill: 'jumping' } });
  ```

4. How to query using Sequelize
- #### findAll
  ```javascript
  const cats = await Cat.findAll();
  // Log the fetched cats.
  // The extra arguments to stringify are a replacer and a space respectively
  // Here we're specifying a space of 2 in order to print more legibly
  // We don't want a replacer, so we pass null just so that we can pass a 3rd argument
  console.log(JSON.stringify(cats, null, 2));
  ```
- #### WHERE clause
  - Passing an object to findAll can add on clauses to our query
  - The `where` key takes an object as a value to indicate what we are filtering by
  - { where: { field: value } } => WHERE field = value
  ```javascript
  const cats = await Cat.findAll({
    where: {
      firstName: "Markov"
    }
  });
  console.log(JSON.stringify(cats, null, 2));
  ```
- #### OR in the WHERE clause
  - Using an array for the value tells sequelize we want to match any of these values
  - { where: { field: [value1, value2] } => WHERE field IN (value1, value2)
  ```javascript
  const cats = await Cat.findAll({
    where: {
      firstName: ["Markov", "Curie"]
    }
  });
  console.log(JSON.stringify(cats, null, 2));
  ```
- #### AND in the WHERE clause
  - Providing additional key/value pairs to the where object indicates all filters must match
  - { where: { field1: value1, field2: value2 } } => WHERE field1 = value1 AND field2 = value2
  ```javascript
  const cats = await Cat.findAll({
    where: {
      firstName: "Markov",
      age: 4
    }
  });
  console.log(JSON.stringify(cats, null, 2));
  ```
- #### Sequelize Op operator
  - By requiring Op from the sequelize library we can provide more advanced comparison operators
  - `const { Op } = require("sequelize");`
  - Op.ne: Not equal operator
    ```javascript
    const cats = await Cat.findAll({
      where: {
        firstName: {
          // All cats where the name is not equal to "Markov"
          // We use brackets in order to evaluate Op.ne and use the value as the key
          [Op.ne]: "Markov"
        },
      },
    });
    console.log(JSON.stringify(cats, null, 2));
    ```
  - Op.and: and operator
    ```javascript
    const cats = await Cat.findAll({
      where: {
        // The array that Op.and points to must all be true
        // Here, we find cats where the name is not "Markov" and the age is 4
        [Op.and]: [
          { firstName: { [Op.ne]: "Markov" } },
          { age: 4 },
        ],
      },
    });
    console.log(JSON.stringify(cats, null, 2));
    ```
  - Op.or: or operator
    ```javascript
    const cats = await Cat.findAll({
      where: {
        // One condition in the array that Op.or points to must be true
        // Here, we find cats where the name is "Markov" or where the age is 4
        [Op.or]: [
          { firstName: "Markov" },
          { age: 4 },
        ],
      },
    });
    console.log(JSON.stringify(cats, null, 2));
    ```
  - Op.gt and Op.lt: greater than and less than operators
    ```javascript
    const cats = await Cat.findAll({
      where: {
        // Find all cats where the age is greater than 4
        age: { [Op.gt]: 4 },
      }
      },
    });
    console.log(JSON.stringify(cats, null, 2));
    ```
- #### Ordering results
  - Just like the where clause, we can pass an order key to specify we want our results ordered
  - The key `order` points to an array with the fields that we want to order by
  - By default, the order is ascending, just like standard SQL. If we want to specify descending, we can instead use a nested array with the field name as the first element and "DESC" as the second element. (We could also specify "ASC" as a second element in a nested array, but it is unnecessary as it is default)
  ```javascript
  const cats = await Cat.findAll({
    // Order by age descending, then by firstName ascending if cats have the same age
    order: [["age", "DESC"], "firstName"],
  });
  console.log(JSON.stringify(cats, null, 2));
  ```
- #### Limiting results
  - We can provide a `limit` key in order to limit our results to a specified number
  ```javascript
  const cats = await Cat.findAll({
    order: [["age", "DESC"]],
    // Here we are limiting our results to one record. It will still return an array, just with one object inside. We could have said any number here, the result is always an array.
    limit: 1,
  });
  console.log(JSON.stringify(cats, null, 2));
  ```
- #### findOne
  - If we only want one record to be returned we can use findOne instead of findAll
  - If multiple records would have matched our findOne query, it will return the first record
  - Unlike findAll, findOne will return the object directly instead of an array. If no records matched the query it will return null.
  ```javascript
  // finds the oldest cat
  const cat = await Cat.findOne({
    order: [["age", "DESC"]],
  });
  console.log(JSON.stringify(cat, null, 2));
  ```
- #### Querying with Associations
  - We can include associated data by adding an `include` key to our options object
  ```javascript
  const pet = Pet.findByPk(1, { include: [ PetType, Owner ] });
  console.log(
    pet.id,
    pet.name,
    pet.age,
    pet.petTypeId,
    pet.PetType.type,
    pet.Owners
  )
  ```
  - We can get nested associations by having `include` point to an object that specifies which `model` we have an association with, then chaining an association on with another `include`
  ```javascript
  const owner = Owner.findByPk(1, { include: { model: Pet, include: PetType } });
  console.log(
    pet.id,
    pet.name,
    pet.age,
    pet.petTypeId,
    pet.PetType.type,
    pet.Owners
  )
  ```

5. How to perform data validations with Sequelize
- See the database migrations section above.
- In general, we add in a validate key to each field that we want validations for. This key points to an object that specifies all of the validations we want to make on that field, such as `notEmpty`, `notNull`, `len`, `isIn`, etc.
```javascript
specification: {
  type: DataTypes.TEXT,
  validate: {
    notEmpty: {
      msg: 'The specification cannot be empty'
    },
    len: {
      args: [10, 100]
      msg: 'The specifcation must be between 10 and 100 characters'
    }
  }
}
```

6. How to use transactions with Sequelize
- We can create a transaction block in order to make sure either all operations are performed or none of them are
- We use the `.transaction` method in order to create our block. The method takes in a callback with an argument to track our transaction id (typically just a simple `tx` variable).
- All of our sequelize operations can be passed a `transaction` key on their options argument which points to our transaction id. This indicates that this operation is part of the transaction block and should only be executed in the database when the whole block executes without error.
```javascript
async function main() {
  try {
    // Do all database access within the transaction.
    await sequelize.transaction(async (tx) => {
      // Fetch Markov and Curie's accounts.
      const markovAccount = await BankAccount.findByPk(
        1, { transaction: tx },
      );
      const curieAccount = await BankAccount.findByPk(
        2, { transaction: tx }
      );

      // No one can mess with Markov or Curie's accounts until the
      // transaction completes! The account data has been locked!

      // Increment Curie's balance by $5,000.
      curieAccount.balance += 5000;
      await curieAccount.save({ transaction: tx });

      // Decrement Markov's balance by $5,000.
      markovAccount.balance -= 5000;
      await markovAccount.save({ transaction: tx });
    });
  } catch (err) {
    // Report if anything goes wrong.
    console.log("Error!");

    for (const e of err.errors) {
      console.log(
        `${e.instance.clientName}: ${e.message}`
      );
    }
  }

  await sequelize.close();
}

main();
```
