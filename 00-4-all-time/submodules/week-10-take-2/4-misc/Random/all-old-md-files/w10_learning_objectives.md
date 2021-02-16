# Week 10 Learning Objectives


## RDBMS And Database Entity Objectives
### Define what a relational database management system is
- software that manages a database
### Describe what relational data is
- relational data is structured information with defined relationships between items
- data is stored in tables, and tables can be linked together
### Define what a database is
- a database is a collection of structured data that the RDBMS manages for you
### Define what a database table is
- the entities that actually hold the data—consists of columns and rows
### Describe the purpose of a primary key
- a primary key is the unique identifier for each row in a table
### Describe the purpose of a foreign key
- a foreign key links two tables together—it identifies the corresponding uniquely identified row in a different table
### Describe how to properly name things in PostgreSQL
-  names should consist of lowercase letters, numbers, and underscores
### Install and configure PostgreSQL 12, its client tools, and a GUI client for it named Postbird
### Connect to an instance of PostgreSQL with the command line tool `psql`
```
psql -U <username> postgres
```
### Identify whether a user is a normal user or a superuser by the prompt in the `psql` shell
- prompt for a superuser ends with`#`
- prompt for a regular user ends with `>`
### Create a user for the relational database management system
```sql
create user <username> with password 'password';
create user <username> with superuser password 'password';
```
### Create a database in the database management system
```sql
create database <databasename> with owner <owner>
```
### Configure a database so that only the owner (and superusers) can connect to it
```sql
revoke connect on database <databasename> from public;
```
### View a list of databases in an installation of PostgreSQL
- `\list`
### Create tables in a database
```sql
create table <tablename> (
    id serial primary key,
    string_data varchar(50) not null,
    integer_data integer not null,
    decimal_data numeric(2, 1) not null
)
```
### View a list of tables in a database
- `\dt`
### Identify and describe the common data types used in PostgreSQL
- `varchar(<max number of characters>)`: a string with a character limit
- `text`: a string with no character limit (but will behave more slowly—only use if necessary)
- `integer`: an integer
- `numeric(<total digits>, <digits after decimal>)`
### Describe the purpose of the `UNIQUE` and `NOT NULL` constraints, and create columns in database tables that have them
- unique: no repeated values
- not null: cannot be left blank
### Create a primary key for a table
```sql
id serial
primary key (id)
```
### Create foreign key constraints to relate tables
```sql
foreign key (person_id) references people (id)
```
### Explain that SQL is not case sensitive for its keywords but is for its entity names
- sql is not case sensitive for its keywords (but be consistent in your own code). (e.g.`select` is interchangeable with `SELECT`), however, labels, id, etc will all be case-sensitive

## SQL objectives
### How to use the `SELECT ... FROM ...` statement to select data from a single table
```sql
select *
from puppies;
```
### How to use the `WHERE` clause on `SELECT`, `UPDATE`, and `DELETE` statements to narrow the scope of the command
```sql
select dog_name, breed
from puppies
where microchipped = true;

select dog_name, age_yrs
from puppies
where age_yrs between 0 and 0.6;

select dog_name, age_yrs
from puppies
order by age_yrs desc;

select *
from puppies
where breed in ('Corgi', 'Beagle');
```
### How to use the `JOIN` keyword to join two (or more) tables together into a single virtual table
- types of joins:
    - `INNER JOIN`: returns results for rows that are present in both tables
    - `LEFT JOIN` or `LEFT OUTER JOIN`: returns results for every row in the left table, along with the corresponding values from the right table, with null values if there is no matching row in the right table
    - `RIGHT JOIN` or `RIGHT OUTER JOIN`: returns results for every row in the right table, along with the corresponding values from the left table, with null values if there is no matching row in the left table
    - `FULL JOIN` or `FULL OUTER JOIN`: returns results for every record in either table. null values will appear for any record with no corresponding record in the other table
    - self join is not a command in itself (i think?)—it just refers to using a join statement to join a table to itself. it can be useful when a relationship exists between rows in a single table—when the table references itself—and you want to collect that data into a single row
```sql
select *
from puppies
inner join breeds
on (puppies.breed_id = breeds.id)
```
### How to use the `INSERT` statement to insert data into a table
```sql
insert into table_name
values (column1_value, colum2_value, column3_value);

insert into table_name (col4, col5)
values
('col4_val', 'col5_val'),
('col4_val', 'col5_val');

-- if you use SERIAL pseudo-type to auto-increment the ID values
-- simply write DEFAULT for the ID values when inserting new table rows.
```
### How to use an `UPDATE` statement to update data in a table
```sql
update owners
set first_name = 'grady',
    last_name = 'booch'
where id = 3;

-- double pipes does string concatenation!
update pets
set name = name || ' (old timer)'
where age > 10;
```
### How to use a `DELETE` statement to remove data from a table
```sql
-- doesn't throw an error if there's no animal
delete from pets
where id = 9;

-- you can't delete records if there is some other foreign key relationship
-- that depends on it
```
### How to use a seed file to populate data in a database
```
psql -d [database] < [path_to_file/file.sql]
cat [path_to_file/file.sql] | psql -d [database]
```
### How to perform relational database design
- schemas let us easily visualize database tables and their relationship to each other
- four major steps:
    1. Define the purpose/entities of the relational DB.
        - establish purpose, entities (tables), and attributes (i.e. columns and rows)
    1. Identify primary keys.
        - select columns to contain the unique values that will serve as primary keys for each table
    1. Establish table relationships.
        - one-to-one: one record in table A will be associated with a single record in table B (e.g. associating each product in a products table with a description in a product_descriptions table)
        - one-to-many: one record in table A will be associated with multiple records in table B (e.g associating a user in a users table with multiple orders in an orders table)
        - many-to-many: multiple records in table A could be associated with multiple records in table b (e.g. a products table and an orders table—a single order may contain multiple products, and a single product may be ordered multiple times). a join table which contains primary keys from both tables will typically be used to organize these relationships
    1. Apply normalization rules.
        - first normal form rules:
            - eliminate repeating groups in individual tables.
            - create a separate table for each set of related data.
            - identify each set of related data with a primary key.
        - second normal form rules:
            - create separate tables for sets of values that apply to multiple records.
            - relate these tables with a foreign key.
        - third normal form rules:
            - eliminate fields that do not depend on the table’s key.
### How to use transactions to group multiple SQL commands into one succeed or fail operation
- a transaction bundles multiple steps into a single, all-or-nothing operation
    - `BEGIN`: initiates a transaction block
    - `COMMIT`: commits the current transaction
    - `ROLLBACK`: causes all the updates made by the current transaction to be discarded (since the last `COMMIT` or `ROLLBACK`)
    - `SAVEPOINT` establishes a new save point within current transaction
    - `SET TRANSACTION`: sets characteristics of current transaction (e.g. `READ ONLY`)
- transactions are useful when altering the contents of a database (insertions, updates, deletions), but not for simple `SELECT` queries
- transactions are "**ACID**"
    - **A**tomicity: changes are performed all-or-none
    - **C**onsistency: data is in an internally consistent state at start and end
    - **I**solation: intermediate state is invisible to other transactions
    - **D**urability: after successful transaction, any changes persist even in the event of a system failure
```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100.00
      WHERE name = 'Alice';
  UPDATE branches SET balance = balance - 100.00
      WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Alice');
  UPDATE accounts SET balance = balance + 100.00
      WHERE name = 'Bob';
  UPDATE branches SET balance = balance + 100.00
      WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Bob');
COMMIT;
```
### How to apply indexes to tables to improve performance
- indexes can improve database performance (in some cases) by changing the organization of the data on the disk. this can allow faster read times, although it can also slow down insertion and updates
    - bad for small tables, tables with frequent/large updates, many null values, frequently manipulated columns
```sql
CREATE INDEX index_name ON table_name (column_name);

--  multicolumn index
CREATE INDEX index_name ON table_name (col1_name, col2_name);

-- partial index
CREATE INDEX index_name ON table_name WHERE (conditional_expression);
```
### Explain what and why someone would use `EXPLAIN`
- `EXPLAIN` can be used to analyze performance and debug slow queries
### Demonstrate how to install and use the node-postgres library and its `Pool` class to query a PostgreSQL-managed database
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user: 'application_user',
  password: 'iy7qTEcZ',
});

const results = await pool.query(`
  SELECT id, name, age_yrs
  FROM puppies;
`);

console.log(results);
```
### Explain how to write prepared statements with placeholders for parameters of the form "$1", "$2", and so on
- each of the `$` placeholders is a positional argument for the parameters you pass in
```sql
INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
VALUES ($1, $2, $3, $4, $5);
```
```javascript
await pool.query(`
  INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
  VALUES ($1, $2, $3, $4, $5);
`, [name, age, breedName, weight, isMicrochipped]);
```

## ORM Objectives

### How to install, configure, and use Sequelize, an ORM for JavaScript
- important functions:
    - `.save`
    - `.associate`
    - `.findByPk`
- WALKTHROUGH:
- specify tables without dependencies first, then specify tables whose dependendencies are met, continue until all tables are specified
- create user first in postgres `create user username with createdb password 'password';`
```zsh
# install sequelize
npm install sequelize@^5.0.0
# install sequelize-cli, which auto-generates and manages js files
# to hold sequelize ORM code
npm install sequelize-cli@^5.0.0
# pg library allows sequelize to access postgres database
npm install pg@^8.0.0
# setup with script from sequelize-cli
npx sequelize init
# which creates this structure:
# .
# ├── config
# │   └── config.json
# ├── migrations
# ├── models
# │   └── index.js
# ├── node_modules
# ├── package-lock.json
# ├── package.json
# └── seeders
```
- in **config.json** file
    - change all usernames & passwords to the one created earlier, and databases to intended database name
    - remove `"operatorsAliases": false` it's outdated, and replace it with `"seederStorage": "sequelize"` which keeps track of seed files as they run
    - set `"dialect": "postgres"`
```zsh
# create empty database
npx sequelize-cli db:create
# generate a model—creates a model file and a migration file
# the `type:string` refers to the type of PetType, not the type of data?
npx sequelize-cli model:generate --name PetType --attributes type:string
```
```javascript
// migrations/#-create-pet-type.js
'use strict';
module.exports = {
up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PetTypes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstName: {
            allowNull: false,
            type: Sequelize.STRING(50)
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
      return queryInterface.dropTable('PetTypes');
  }
};
```

```zsh
npx sequelize-cli db:migrate
```
- the pettype.js file in the models folder is the one we'll use when running javascript
    - add a validation to the models file—if you have a column that in sql is "not null" add `validate: { notEmpty: true}`
```javascript
// models/pettype.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetType = sequelize.define('Cat', {
    type: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    }
  }, {});
  PetType.associate = function(models) {
    // associations can be defined here
  };
  return PetType;
};
```
```zsh
npx sequelize-cli model:generate \
--name Owner \
--attributes firstName:string,lastName:string
```

```javascript
// migrations/#-create-owner.js
'use strict';
module.exports = {
up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Owners', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        firstName: {
            allowNull: false,
            type: Sequelize.STRING(50)
        },
        lastName: {
            allowNull: false,
            type: Sequelize.STRING(50)
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
      return queryInterface.dropTable('Owners');
  }
};
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
}

```
```zsh
# you can run this to undo a migration
db:migrate:undo
```
- do the same with the **owners.js** file in models
- next generate model for pet table
    - that is pretty similar to creating others, but you also need to modify the migration file **create-pet.js** so that it has the relationship to PetTypes for it's petTypeID column. add `references: { model: PetTypes}`
    - you also need to modify the model files for both pet and pettype to include the association. in **pet.js**, in the `Pet.associate` function `Pet.belongsTo(models.PetType, {foreignKey: 'petTypeId'});`. in **pettype.js**, in `PetType.associate` `PetType.hasMany(models.Pet, { foreignKey: 'petTypeId'});`
- if you want to set up a many-to-many relationship, it's a little more complicated. still in the associate function, you use the `belongsToMany` with two parameters. first parameter is the `models.Table` (for the actual table you're connecting to, not the intermediate join table), the second parameter is a column mapping (which you get from the join table)
    - the column mapping object in the `associate` function for the other table will be the opposite
```javascript
Pet.associate = function(models) {
    // simple one-to-many relationship only requires a foreign key in the column mapping object
    Pet.belongsTo(models.PetType, {foreignKey: 'petTypeId'});

    // this columnMapping object defines the many-to-many relationship
    const columnMapping = {
        through: 'petOwner', // join table
        otherKey: 'ownerId', // key from join table that points to the other entity
        foreignKey: 'petId' // key from join table that points to this entity
    }

    // actually set the association
    Pet.belongsToMany(models.Owner, columnMapping)
  };
```
### How to use database migrations to make your database grow with your application in a source-control enabled way
- migration files store sql schema change code permanently
- relatedly this helps with collaberation: a coworker can setup their own copy of the database by running the migration files, so they wind up with the same schema
-  **never rollback migrations that have been run on a production server.**
### How to perform CRUD operations with Sequelize
- **C**reate, **R**ead, **U**pdate, **D**estroy
- create: use `build` method to add a row to database, then `save` to actually create the new record
    - or alternatively, call the `.create`
```javascript
const { sequelize, Cat } = require("./models");

async function main() {
    const cat = Cat.build({
        firstName: "Markov",
        specialSkill: "sleeping",
        age: 5,
    });
    // This actually creates a new `Cats` record in the database. We must
    // wait for this asynchronous operation to succeed.
    await cat.save();

    console.log(cat.toJSON());

    await sequelize.close();
}

main();


// alternatively, worth noting you can also put a file into the seeders
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
```
- read: get a record using, for example `findByPk` if you have primary key
```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch the cat with id #1.
  const cat = await Cat.findByPk(1);
  console.log(cat.toJSON());

  await sequelize.close();
}

main();
```
- update: fetch the record as you would for reading, then make changes to the javascript object, then use `save` to commit those changes to the database (don't forget `save` is asynchronous, so you have to `await` it before you close)
```javascript
const { sequelize, Cat }  = require("./models");

async function main() {
  const cat = await Cat.findByPk(1);

  console.log("Old Markov: ");
  console.log(cat.toJSON());

  // The Cat object is modified, but the corresponding record in the
  // database is *not* yet changed at all.
  cat.specialSkill = "super deep sleeping";
  // Only by calling `save` will the data be saved.
  await cat.save();

  console.log("New Markov: ");
  console.log(cat.toJSON());

  await sequelize.close();
}

main();
```
- destroy: use the `destroy` function
```javascript
const process = require("process");

const { sequelize , Cat } = require("./models");

async function main() {
  // get cat
  const cat = await Cat.findByPk(1);
  // destroy it
  await cat.destroy();

  // alternatively, `await Cat.destroy({ where: { id: [3,4,5] } });`

  await sequelize.close();
}

main();
```
### How to query using Sequelize
- use `findAll` to get all records
    - use with parameter `{where: {attribute: "Value"}}` to filter results
    - use with `Op` object to get not equal `[Op.ne]`, greater than `[Op.gt]`, many other things (like etc)
- `findOne` will limit query to 1
- `findCreateFind
```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch all cats named Markov.
  const cats = await Cat.findAll({
    where: {
      firstName: ["Markov", "Curie"],
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

### How to perform data validations with Sequelize
### How to use transactions with Sequelize

## Professional Development: Portfolio Quality
### Recall the items recruiters are most interested
### Explain the aspects of good looking Web application
### Identify App Academy's expectations of your projects for after you graduate
### Practice good code hygiene when making projects live
