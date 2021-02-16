## SQL (W10D2) - Learning Objectives

### SQL
1. How to use the `SELECT ... FROM ...` statement to select data from a single table
- Supply the column names in the `SELECT` clause. If we want all columns, we can also use `*`
- Supply the table names in the `FROM` clause
```sql
-- Selects all columns from the friends table
SELECT
  * 
FROM
  friends;

-- Selects the first_name column from the friends table (remember whitespace is ignored)
SELECT name
FROM friends;
```
- Sometimes we may need to specify what table we are selecting a column from, particulurly if we had joined multiple tables together.
```sql
-- Notice here we are indicating that we want the "name" field from the "friends" table as well as the "name" field from the "puppies" table. We indicate the table name by table.column
-- We are also aliasing these fields with the AS keyword so that our returned results have friend_name and puppy_name as field headers
SELECT
  friends.name AS friend_name , puppies.name AS puppy_name
FROM
  friends
JOIN 
  puppies ON friends.puppy_id = puppies.id
```

2. How to use the `WHERE` clause on `SELECT`, `UPDATE`, and `DELETE` statements to narrow the scope of the command
- The `WHERE` clause allows us to select or apply actions to records that match specific criteria instead of to a whole table.
- We can use `WHERE` with a couple of different operators when making our comparison
  - `WHERE {column} = {value}` provides an exact comparison
  - `WHERE {column} IN ({value1}, {value2}, {value3}, etc.)` matches any provided value in the `IN` statement. We can make this more complex by having a subquery inside of the parentheses, having our column match any values within the returned results.
  - `WHERE {column} BETWEEN {value1} AND {value2}` can check for matches between two values (numeric ranges)
  - `WHERE {column} LIKE {pattern}` can check for matches to a string. This is most useful when we use the wildcard `%`, such as `WHERE breed LIKE '%Shepherd'`, which will match any breed that ends in "Shepherd"
  - The `NOT` operator can also be used for negation in the checks.
  - Mathematical operators can be used when performing calculations or comparisons within a query as well, such as
  ```sql
  SELECT name, breed, weight_lbs FROM puppies
  WHERE weight_lbs > 50;

  -- OR

  SELECT name, breed, age_yrs FROM puppies
  WHERE age_yrs * 10 = 5;
  ```


3. How to use the `JOIN` keyword to join two (or more) tables together into a single virtual table
- When we want to get information from a related table or do querying based on related table values, we can join the connected table by comparing the foreign key to where it lines up on the other table:
```sql
-- Here we are joining the puppies table on to the friends table. We are specifying that the comparison we should make is the foreign key puppy_id on the friends table should line up with the primary key id on the puppies table.
SELECT
  *
FROM
  friends
JOIN 
  puppies ON friends.puppy_id = puppies.id
```

4. How to use the `INSERT` statement to insert data into a table
- When a table is already created we can then insert records into it using the `INSERT INTO` keywords.
- We provide the name of the table that we would like to add records to, followed by the `VALUES` keyword and each record we are adding. Here's an example:
```sql
-- We are providing the table name, then multiple records to insert
-- The values are listed in the order that they are defined on the table
INSERT INTO table_name
VALUES
  (column1_value, colum2_value, column3_value),
  (column1_value, colum2_value, column3_value),
  (column1_value, colum2_value, column3_value);
```
- We can also specify columns when we are inserting data. This makes it clear which fields we are providing data for and allows us to provide them out of order, skip null or default values, etc.
```sql
-- In this example, we want to use the default value for id since it is autoincremented, so we provide DEFAULT for this field
INSERT INTO friends (id, first_name, last_name)
VALUES
  (DEFAULT, 'Amy', 'Pond');

-- Alternatively, we can leave it out completely, since the default value will be used if none is provided
INSERT INTO friends (first_name, last_name)
VALUES
  ('Rose', 'Tyler'),
  ('Martha', 'Jones'),
  ('Donna', 'Noble'),
  ('River', 'Song');
```

5. How to use an `UPDATE` statement to update data in a table
- The `UPDATE` keyword can be used to find records and change their values in our database.
- We generally follow the pattern of `UPDATE {table} SET {column} = {new value} WHERE {match condition};`.
- Without a condition to narrow our records down, we will update every record in the table, so this is an important thing to double check!
- We can update multiple fields as well by specifying each column in parentheses and their associated new values: `UPDATE {table} SET ({column1}, {column2}) = ({value1}, {value2}) WHERE {match condition};`
```sql
-- Updates the pet with id of 4 to change their name and breed
UPDATE
  pets
SET
  (name, breed) = ('Floofy', 'Fluffy Dog Breed') WHERE id = 4;
```

6. How to use a `DELETE` statement to remove data from a table
- Similar to selecting records, we can delete records from a table by specifying what table we are deleting from and what criteria we would like to match in order to delete.
- We follow the general structure `DELETE FROM {table} WHERE {condition};`
- The condition here is also very important! Without a condition, all records match and will be deleted.
```sql
-- Deletes from the pets table any record that either has a name Floofy, a name Doggo, or an id of 3.
DELETE FROM
  pets
WHERE
  name IN ('Floofy', 'Doggo') OR id = 3;
```

7. How to use a seed file to populate data in a database
- Seed files are a great way for us to create records that we want to start our database out with.
- Instead of having to individually add records to our tables or manually entering them in psql or postbird, we can create a file that has all of these records and then just pass this file to psql to run.
- Seed files are also great if we ever need to reset our database. We can clear out any records that we have by dropping all of our tables, then just run our seed files to get it into a predetermined starting point. This is great for our personal projects, testing environments, starting values for new tables we create, etc.
- There are two main ways we can use a seed file with psql, the `<` and the `|` operators. They perform the same function for us, just in slightly different orders, taking the content of a .sql file and executing in within the psql environment:
  - `psql -d {database} < {sql filepath}`
  - `cat {sql filepath} | psql -d {database}`
