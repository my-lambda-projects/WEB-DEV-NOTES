q# Node-Postgres And Prepared Statements
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Connecting](#connecting)
- [Prepared Statement](#prepared-statement)
- [Try it out for yourself](#try-it-out-for-yourself)
- [What you've learned](#what-youve-learned)

<!-- /code_chunk_output -->
________________________________________________________________________________

The library [node-postgres] is, not too surprisingly, the library that Node.js
applications use to connect to a database managed by a PostgreSQL RDBMS. The
applications that you deal with will use this library to make connections to the
database and get rows returned from your SQL `SELECT` statements.

## Connecting

The **node-postgres** library provides two ways to connect to it. You can use a
single `Client` object, or you can use a `Pool` of `Client` objects. Normally,
you want to use a `Pool` because creating and opening single connections to any
database server is a "costly" operation in terms of CPU and network resources.
A `Pool` creates a group of those `Client` connections and lets your code use
them whenever it needs to.

To use a `Pool`, you specify any specific portions of the following connection
parameters that you need. The default values for each parameter is listed with
each parameter.

| Connection parameter | What it indicates                           | Default value                           |
| -------------------- | ------------------------------------------- | --------------------------------------- |
| user                 | The name of the user you want to connect as | The user name that runs the application |
| password             | The password to use                         | The password set in your configuration  |
| database             | The name of the database to connect to      | The user's database                     |
| port                 | The port over which to connect              | 5432                                    |
| host                 | The name of the server to connect to        | localhost                               |

Normally, you will only override the user and password fields, and sometimes the
database if it doesn't match the user's name. You do that by instantiating a
new `Pool` object and passing in an object with those key/value pairs.

```js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'application_user',
  password: 'iy7qTEcZ',
});
```

Once you have an instance of the `Pool` class, you can use the `query` method on
it to run queries. (The `query` method returns a Promise, so it's nice to just
use `await` for it to finish.)

```js
const results = await pool.query(`
  SELECT id, name, age_yrs
  FROM puppies;
`);

console.log(results);
```

When this runs, you will get an object that contains a property named "rows".
The value of "rows" will be an array of the rows that match the statement.
Here's an example output from the code above.

```
{
  rows:
    [ { id: 1, name: 'Cooper', age_yrs: '1.0' },
      { id: 2, name: 'Indie', age_yrs: '0.5' },
      { id: 3, name: 'Kota', age_yrs: '0.7' },
      { id: 4, name: 'Zoe', age_yrs: '0.8' },
      { id: 5, name: 'Charley', age_yrs: '1.5' },
      { id: 6, name: 'Ladybird', age_yrs: '0.6' },
      { id: 7, name: 'Callie', age_yrs: '0.9' },
      { id: 8, name: 'Jaxson', age_yrs: '0.4' },
      { id: 9, name: 'Leinni', age_yrs: '1.0' },
      { id: 10, name: 'Max', age_yrs: '1.6' } ],
}
```

You can see that the "rows" property contains an array of objects. Each object
represents a row in the "puppies" table that matches the query. Each object has
a property named after the column selected in the `SELECT` statement. The query
read `SELECT id, name, age_yrs` and each object has an "id", "name", and an
"age_yrs" property.

You can then use that array to loop over and do things with it. For example,
you could print them to the console like this:

```js
for (let row of results.rows) {
  console.log(`${row.id}. ${row.name} is ${row.age_yrs} old</li>`);
}
```

Which would show

```
1. Cooper is 1.0 years old
2. Indie is 0.5 years old
3. Kots is 0.7 years old
...
```

## Prepared Statement

Prepared statements are SQL statements that have parameters in them that you can
use to substitute values. The parameters are normally part of the `WHERE` clause
in all statements. You will also use them in the `SET` portion of `UPDATE`
statements and the `VALUES` portion of `INSERT` statements.

For example, say your application collected the information to create a new row
in the puppy table by asking for the puppy's name, age, breed, weight, and if
it was microchipped. You'd have those values stored in variables somewhere.
You'd want to create an `INSERT` statement that inserts the data from those
variables into a SQL statement that the RDBMS could then execute to insert a
new row.

Think about what a generic `INSERT` statement would look like. It would have to
have the

```sql
INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
```

portion of the statement. The part that would change with each time you inserted
would be the specific values that would go into the `VALUES` section of the
`INSERT` statement. With prepared statements, you use _positional parameters_
to act as placeholders for the actual values that you will provide the query.

For example, the generic `INSERT` statement from above would look like this.

```sql
INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
VALUES ($1, $2, $3, $4, $5);
```

Each of the "\$" placeholders is a positional argument for the parameters that
you pass in. That means, the value that you pass in for the first parameter will be
put where the "\$1" placeholder is, which is the value for the "name" of the
puppy. The "\$2" corresponds to the "age_yrs" column, so it should contain the
age of the puppy. This continues for the third, fourth, and fifth parameters,
as well.

Assume that in your code, you have the variables `name`, `age`, `breedName`,
`weight`, and `isMicrochipped` containing the values that the user provided for
the new puppy. Then, your use of the `query` method will now include another
argument, the values that you want to pass in inside an array.

```js
await pool.query(`
  INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
  VALUES ($1, $2, $3, $4, $5);
`, [name, age, breedName, weight, isMicrochipped]);
```

You can see that the variable `name` is in the first position of the array, so
it will be substituted into the placeholder "\$1". The `age` variable is in the
second position of the array, so it will be substituted into the "$2"
placeholder.

The full documentation for how to use queries with **node-postgres** can be
found on the [Queries] documentation page on their Web site.

## Try it out for yourself

Make sure you have a database with a table that has data in it. If you don't,
create a new database and run the following SQL.

```sql
CREATE TABLE puppies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age_yrs NUMERIC(3,1) NOT NULL,
  breed VARCHAR(100) NOT NULL,
  weight_lbs INTEGER NOT NULL,
  microchipped BOOLEAN NOT NULL DEFAULT FALSE
);

insert into puppies(name, age_yrs, breed, weight_lbs, microchipped)
values
('Cooper', 1, 'Miniature Schnauzer', 18, 'yes'),
('Indie', 0.5, 'Yorkshire Terrier', 13, 'yes'),
('Kota', 0.7, 'Australian Shepherd', 26, 'no'),
('Zoe', 0.8, 'Korean Jindo', 32, 'yes'),
('Charley', 1.5, 'Basset Hound', 25, 'no'),
('Ladybird', 0.6, 'Labradoodle', 20, 'yes'),
('Callie', 0.9, 'Corgi', 16, 'no'),
('Jaxson', 0.4, 'Beagle', 19, 'yes'),
('Leinni', 1, 'Miniature Schnauzer', 25, 'yes' ),
('Max', 1.6, 'German Shepherd', 65, 'no');
```

Now that you have ten rows in the "puppies" table of a database, you can create
a simple Node.js project to access it.

Create a new directory somewhere that's not part of an existing project. Run
`npm init -y` to initialize the **package.json** file. Then, run `npm install pg`
to install the library from this section. (Why is the name of the library
"node-postgres" but you install "pg"? Dunno.) Finally, open Visual Studio Code
for the current directory with `code .`.

Create a new file named **sql-test.js**.

The first thing you need to do is import the `Pool` class from the
**node-postgres** library. The name of the library in the **node_modules**
directory is "pg". That line of code looks like this and can be found all over the
[node-postgres] documentation.

```js
const { Pool } = require('pg');
```

Now, write some SQL that will select all of the records from the "puppies"
table. (This is assuming you want to select puppies. If you're using a different
table with different data, write the appropriate SQL here.)

```js
const { Pool } = require('pg');

const allPuppies = `
  SELECT id, name, age_yrs, breed, weight_lbs, microchipped
  FROM puppies;
`;
```

You will now use that with a new `Pool` object. You will need to know the name
of the database that the "puppies" table is in (or whatever database you want
to connect to).

```js
const { Pool } = require('pg');

const allPuppies = `
  SELECT id, name, age_yrs, breed, weight_lbs, microchipped
  FROM puppies;
`;

const pool = new Pool({
  database: '«database name»'
});
```

Of course, replace "«database name»" with the name of your database. Otherwise,
when you run it, you will see this error message.

```
UnhandledPromiseRejectionWarning: error: database "«database name»" does not exist
```

This will, by default, connect to "localhost" on port "5432" with your user
credentials because you did not specify any other parameters.

Once you have the pool, you can execute the query that you have in `allPuppies`.
Remember that the `query` method returns a Promise. This code wraps the call to
`query` in an `async function` so that it can use the `await` keyword for
simplicity's sake. Then, it prints out the rows that it fetched to the console.
Finally, it calls `end` on the connection pool object to tell **node-postgres**
to close all the connections and quit. Otherwise, your application will just
hang and you'll have to close it with Control+C.

```js
const { Pool } = require('pg');

const allPuppiesSql = `
  SELECT id, name, age_yrs, breed, weight_lbs, microchipped
  FROM puppies;
`;

const pool = new Pool({
  database: '«database name»'
});

async function selectAllPuppies() {
  const results = await pool.query(allPuppiesSql);
  console.log(results.rows);
  pool.end();
}

selectAllPuppies();
```

When you run this with `node sql-test.js`, you should see some output like this
although likely in a nicer format.

```
[ { id: 1, name: 'Cooper', age_yrs: '1.0', breed: 'Miniature Schnauzer', weight_lbs: 18, microchipped: true },
  { id: 2, name: 'Indie', age_yrs: '0.5', breed: 'Yorkshire Terrier', weight_lbs: 13, microchipped: true },
  { id: 3, name: 'Kota', age_yrs: '0.7', breed: 'Australian Shepherd', weight_lbs: 26, microchipped: false },
  { id: 4, name: 'Zoe', age_yrs: '0.8', breed: 'Korean Jindo', weight_lbs: 32, microchipped: true },
  { id: 5, name: 'Charley', age_yrs: '1.5', breed: 'Basset Hound', weight_lbs: 25, microchipped: false },
  { id: 6, name: 'Ladybird', age_yrs: '0.6', breed: 'Labradoodle', weight_lbs: 20, microchipped: true },
  { id: 7, name: 'Callie', age_yrs: '0.9', breed: 'Corgi', weight_lbs: 16, microchipped: false },
  { id: 8, name: 'Jaxson', age_yrs: '0.4', breed: 'Beagle', weight_lbs: 19, microchipped: true },
  { id: 9, name: 'Leinni', age_yrs: '1.0', breed: 'Miniature Schnauzer', weight_lbs: 25, microchipped: true },
  { id: 10, name: 'Max', age_yrs: '1.6', breed: 'German Shepherd', weight_lbs: 65, microchipped: false } ]
```

Now, try one of those parameterized queries. Comment out the `selectAllPuppies`
function and invocation.

```js
// async function selectAllPuppies() {
//   const results = await pool.query(allPuppiesSql);
//   console.log(results.rows);
//   pool.end();
// }

// selectAllPuppies();
```

Add the following content to the bottom of the file.

```js
// Define the parameterized query where it will select a puppy
// based on an id
const singlePuppySql = `
  SELECT id, name, age_yrs, breed, weight_lbs, microchipped
  FROM puppies
  WHERE ID = $1;
`;

// Run the parameterized SQL by passing in an array that contains
// the puppyId to the query method. Then, print the results and
// end the pool.
async function selectOnePuppy(puppyId) {
  const results = await pool.query(singlePuppySql, [puppyId]);
  console.log(results.rows);
  pool.end();
}

// Get the id from the command line and store it
// in the variable "id". Pass that value to the
// selectOnePuppy function.
const id = Number.parseInt(process.argv[2]);
selectOnePuppy(id);
```

Now, when you run the program, include a number after the command. For example,
if you run `node sql-test.js 1`, it will print out

```
[ { id: 1,
    name: 'Cooper',
    age_yrs: '1.0',
    breed: 'Miniature Schnauzer',
    weight_lbs: 18,
    microchipped: true } ]
```

If you run `node sql-test.js 4`, it will print out

```
[ { id: 4,
    name: 'Zoe',
    age_yrs: '0.8',
    breed: 'Korean Jindo',
    weight_lbs: 32,
    microchipped: true } ]
```

That's because the number that you type on the command line is being substituted
in for the "$1" in the parameterized query. That means, when you pass in "4",
It's like the RDMBS takes the parameterized query

```sql
SELECT id, name, age_yrs, breed, weight_lbs, microchipped
FROM puppies
WHERE ID = $1;
```

and your value "4"

and mushes them together to make

```sql
SELECT id, name, age_yrs, breed, weight_lbs, microchipped
FROM puppies
WHERE ID = 4; -- Value substituted here by PostgreSQL.
```

That happens because when you run the query, you call the `query` method like
this.

```js
await pool.query(singlePuppySql, [puppyId]);
```

which passes along the sql stored in `singlePuppySql` and the value stored in
`puppyId` (as the first parameter) to PostgreSQL.

What do you think will happen if you change `singlePuppySql` to have _two_
parameters instead of one, but only pass in one parameter through the `query`
method?

```js
const singlePuppySql = `
  SELECT id, name, age_yrs, breed, weight_lbs, microchipped
  FROM puppies
  WHERE ID = $1
  AND age_yrs > $2;
`;
```

PostgreSQL is smart enough to see that you've only provided one parameter value
but it needs _two_ positional parameters. It gives you the error message

```
error: bind message supplies 1 parameters, but prepared statement "" requires 2
```

In this error message, the term "bind message" is the kind of message that the
`query` method sends to PostgreSQL when you provide parameters to it.

Change the query back to how it was. Now, add an extra parameter to the
invocation of the `query` method. What do you think will happen?

```js
await pool.query(singlePuppySql, [puppyId, 'extra parameter']);
```

Again, PostgreSQL gives you an error message about a mismatch in the number of
placeholders in the SQL and the number of values you passed to it.

```
error: bind message supplies 2 parameters, but prepared statement "" requires 1
```

## What you've learned

Here, you've seen how to connect to a PostgreSQL database using the
**node-postgres** library named "pg". You saw how to run simple SQL statements
against it and handle the results. You also saw how to create parameterized
queries so that you can pass in values to be substituted.

If you are using the **node-postgres** library and running your own handcrafted
SQL, you will most often use parameterized queries. It's good to get familiar
with them.

[node-postgres]: https://www.node-postgres.com
[Queries]: https://node-postgres.com/features/queries
