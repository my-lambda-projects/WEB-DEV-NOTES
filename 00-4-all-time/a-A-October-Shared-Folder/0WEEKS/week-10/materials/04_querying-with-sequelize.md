# Querying Using Sequelize
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Basic Usage Of `findAll` To Retrieve Multiple Records](#basic-usage-of-findall-to-retrieve-multiple-records)
- [Using `findAll` To Find Objects Not Matching A Criterion](#using-findall-to-find-objects-not-matching-a-criterion)
- [Combining Criteria with `Op.and`](#combining-criteria-with-opand)
- [Combining Criteria with `Op.or`](#combining-criteria-with-opor)
- [Querying With Comparisons](#querying-with-comparisons)
- [Ordering Results](#ordering-results)
- [Limiting Results and `findOne`](#limiting-results-and-findone)
- [Conclusion](#conclusion)

<!-- /code_chunk_output -->
________________________________________________________________________________

We have already seen how to find a single record by primary key:
`findByPk`. In this reading we will learn about more advanced ways to
query a table. We will learn how to:

* Fetch all `Cats` whose name is `"Markov"`,
* Fetch all `Cats` whose name is `"Markov"` **OR** `"Curie"`,
* Fetch all `Cats` whose age is **not** 5,
* Fetch all `Cats` whose name is `"Markov"` **AND** whose age is 5,
* Fetch all `Cats` whose age is **less than** 5,

We will also learn how to:

* Order `Cats` results by age (descending or ascending),
* Limit `Cats` results to a finite number.

## Basic Usage Of `findAll` To Retrieve Multiple Records

Let's consider a simple example where we want to retrieve all the `Cats`
in the database:

```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  // `findAll` asks to retrieve _ALL_ THE CATS!!  An array of `Cat`
  // objects will be returned.
  const cats = await Cat.findAll();

  // Log the fetched cats.
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

Since this is an array we can't use that `.toJSON()` method we learned earlier,
so we can instead use `JSON.stringify` on the Array.

Pro tip: giving a 3rd argument to `JSON.stringify` will pretty-print the
result with the specified spacing. (We pass `null` as the 2nd argument
to skip it.) You can read more at the [`JSON.stringify`
docs][stringify-docs].

[stringify-docs]:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

Running this code prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat";
[
  {
    "id": 4,
    "firstName": "Markov",
    "specialSkill": "sleeping",
    "age": 5,
    "createdAt": "2020-02-11T23:03:25.388Z",
    "updatedAt": "2020-02-11T23:03:25.388Z"
  },
  {
    "id": 5,
    "firstName": "Curie",
    "specialSkill": "jumping",
    "age": 4,
    "createdAt": "2020-02-11T23:03:25.398Z",
    "updatedAt": "2020-02-11T23:03:25.398Z"
  }
]
```

It isn't typical to want to fetch *every* record. We typically want to
get only those records that match some criterion. In SQL, we use a
`WHERE` clause to do this. With Sequelize, we issue a `WHERE` query like
so:

```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch all cats named Markov.
  const cats = await Cat.findAll({
    where: {
      firstName: "Markov",
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

Which prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."firstName" = 'Markov';
[
  {
    "id": 4,
    "firstName": "Markov",
    "specialSkill": "sleeping",
    "age": 5,
    "createdAt": "2020-02-11T23:03:25.388Z",
    "updatedAt": "2020-02-11T23:03:25.388Z"
  }
]
```

We've passed the `findAll` class method the `where` option. The `where`
option tells Sequelize to use a `WHERE` clause. The option value passed
is `{ firstName: "Markov" }`. This tells Sequelize to only return those
`Cats` where `firstName` is equal to `"Markov"`.

If we wanted to select those `Cats` named Markov **OR** Curie, we can
map `firstName` to an array of `["Markov", "Curie"]`. For example:

```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch all cats named either Markov or Curie.
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

This prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."firstName" IN ('Markov', 'Curie');
[
  {
    "id": 4,
    "firstName": "Markov",
    "specialSkill": "sleeping",
    "age": 5,
    "createdAt": "2020-02-11T23:03:25.388Z",
    "updatedAt": "2020-02-11T23:03:25.388Z"
  },
  {
    "id": 5,
    "firstName": "Curie",
    "specialSkill": "jumping",
    "age": 4,
    "createdAt": "2020-02-11T23:03:25.398Z",
    "updatedAt": "2020-02-11T23:03:25.398Z"
  }
]
```

The difference is that we've passed `{ firstName: ["Markov", "Curie"
]}`. Sequelize will return all `Cats` whose `firstName` matches either
`"Markov"` or `"Curie"`.

## Using `findAll` To Find Objects Not Matching A Criterion

We can also find all the `Cats` whose names are **NOT** Markov, but we will
need to require in the `Op` object from Sequelize so we can use the "not equal" operator from it:

```javascript
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./db/models");

async function main() {
  const cats = await Cat.findAll({
    where: {
      firstName: {
        // Op.ne means the "not equal" operator.
        [Op.ne]: "Markov",
      },
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

Prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."firstName" != 'Markov';
[
  {
    "id": 5,
    "firstName": "Curie",
    "specialSkill": "jumping",
    "age": 4,
    "createdAt": "2020-02-11T23:03:25.398Z",
    "updatedAt": "2020-02-11T23:03:25.398Z"
  }
]
```

This is our first example of a Sequelize
[_operator_][sequelize-operator-docs]: `Op.ne`. `ne` stands for "not
equal." Instead of mapping `firstName` to a single value like `"Markov"`
or an array of values like `["Markov", "Curie"]`, we have mapped it to:

```javascript
{ [Op.ne]: "Markov" }
```

How does this work? `Op.ne` is a JavaScript _symbol_: `Op.ne ===
Symbol.for('ne')`. To simplify, let's just imagine that `Op.ne ===
"ne"`.

When we write `{ [Op.ne]: "Markov" }`, the `[]` brackets perform key
interpolation. So this is equal to `{ "ne": "Markov" }`. So overall, we
are effectively writing:

```javascript
db.Cat.findAll({
  where: {
    // Won't exactly work (you need to use `[Op.ne]` after all). Does
    // illustrate the concept though.
    firstName: { "ne": "Markov" },
  },
})
```

This perhaps makes it clearer how Sequelize understands what we want.
Sequelize is being passed an *object* as the `firstName` value. The
object is specifying that we want to do a `!=` SQL operation by using
the `"ne"` ("not equal") key. The value to "not equal" is specified as
`"Markov"`.

## Combining Criteria with `Op.and`

We've seen one way to do an `OR` operation above (by mapping a column
name to an array of values). Let's see how to do an `AND` operation:

```javascript
const { Op } = require("sequelize");
const { sequelize , Cat } = require("./models");

async function main() {
  // fetch cats with name != Markov AND age = 4.
  const cats = await Cat.findAll({
    where: {
      firstName: {
        [Op.ne]: "Markov",
      },
      age: 4,
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

This prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."firstName" != 'Markov' AND "Cat"."age" = 4;
[
  {
    "id": 5,
    "firstName": "Curie",
    "specialSkill": "jumping",
    "age": 4,
    "createdAt": "2020-02-11T23:03:25.398Z",
    "updatedAt": "2020-02-11T23:03:25.398Z"
  }
]
```

Simply by listing more key/value pairs in the `where` object, we ask
Sequelize to "AND" together multiple criteria.

Another way to do the same thing is like so:

```javascript
const { Op } = require("sequelize");
const { sequelize , Cat } = require("./models");

async function main() {
  const cats = await db.Cat.findAll({
    where: {
      [Op.and]: [
        { firstName: { [Op.ne]: "Markov" } },
        { age: 4 },
      ],
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

The use of the `Op.and` operator is somewhat similar to `Op.ne`. This
time we map `Op.and` to an *array* of criteria. Returned records must
match all the criteria.

## Combining Criteria with `Op.or`

We've already seen how to do an `OR` to match a *single column* against
*multiple values*. You can use `Op.or` for even greater flexibility:

```javascript
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./models");

async function main() {
  // fetch cats with name == Markov OR age = 4.
  const cats = await Cat.findAll({
    where: {
      [Op.or]: [
        { firstName: "Markov" },
        { age: 4 },
      ],
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

This prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE ("Cat"."firstName" = 'Markov' OR "Cat"."age" = 4);
[
  {
    "id": 4,
    "firstName": "Markov",
    "specialSkill": "sleeping",
    "age": 5,
    "createdAt": "2020-02-11T23:03:25.388Z",
    "updatedAt": "2020-02-11T23:03:25.388Z"
  },
  {
    "id": 5,
    "firstName": "Curie",
    "specialSkill": "jumping",
    "age": 4,
    "createdAt": "2020-02-11T23:03:25.398Z",
    "updatedAt": "2020-02-11T23:03:25.398Z"
  }
]
```

Our query is to find all cats whose names are "Markov" and whose age is
4. Therefore both cats are returned: Markov and Curie (whose age is 4).

## Querying With Comparisons

We can use operators like `Op.gt` (greater than) and `Op.lt` (less than)
to select by comparing values. We use these just like `Op.ne`:

```javascript
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch all cats whose age is > 4.
  const cats = await Cat.findAll({
    where: {
      age: { [Op.gt]: 4 },
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

This prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."age" > 4;
[
  {
    "id": 4,
    "firstName": "Markov",
    "specialSkill": "sleeping",
    "age": 5,
    "createdAt": "2020-02-11T23:03:25.388Z",
    "updatedAt": "2020-02-11T23:03:25.388Z"
  }
]
```

## Ordering Results

We've seen how to use a `where` query option to filter results with a
SQL `WHERE` clause. We can use the `order` query option to perform a SQL
`ORDER BY`:

```javascript
const { sequelize, Cat } db = require("./models");

async function main() {
  const cats = await Cat.findAll({
    order: [["age", "DESC"]],
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

This prints:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" ORDER BY "Cat"."age" DESC;
[
  {
    "id": 4,
    "firstName": "Markov",
    "specialSkill": "sleeping",
    "age": 5,
    "createdAt": "2020-02-11T23:03:25.388Z",
    "updatedAt": "2020-02-11T23:03:25.388Z"
  },
  {
    "id": 5,
    "firstName": "Curie",
    "specialSkill": "jumping",
    "age": 4,
    "createdAt": "2020-02-11T23:03:25.398Z",
    "updatedAt": "2020-02-11T23:03:25.398Z"
  }
]
```

We've specified `{ order: [["age", "DESC"]] }`. Notice how we specify
the sort order with a doubly-nested array. If we wanted to sort
ascending we could more simply write: `{ order: ["age"] }`.

What if we wanted to sort by *two* columns? For instance, say we wanted
to `SORT BY age DESC, firstName`. We would write: `{ order: [["age",
"DESC"], "firstName"] }`. That would sort descending by `age`, and then
ascending by `firstName` for cats with the same age.

## Limiting Results and `findOne`

If we want only the oldest cat we can use the `limit` query option:

```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  const cats = await Cat.findAll({
    order: [["age", "DESC"]],
    limit: 1,
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

This selects only one (the oldest) cat:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" ORDER BY "Cat"."age" DESC LIMIT 1;
[
  {
    "id": 4,
    "firstName": "Markov",
    "specialSkill": "sleeping",
    "age": 5,
    "createdAt": "2020-02-11T23:03:25.388Z",
    "updatedAt": "2020-02-11T23:03:25.388Z"
  }
]
```

Since we know that there will be only one result, it is pointless to
return an array. In cases when we want a maximum of one result, we can
use `findOne`:

```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = await Cat.findOne({
    order: [["age", "DESC"]],
  });
  console.log(JSON.stringify(cat, null, 2));

  await sequelize.close();
}

main();
```

Which prints:

```
>> node index.js
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" ORDER BY "Cat"."age" DESC LIMIT 1;
{
  "id": 4,
  "firstName": "Markov",
  "specialSkill": "sleeping",
  "age": 5,
  "createdAt": "2020-02-11T23:03:25.388Z",
  "updatedAt": "2020-02-11T23:03:25.388Z"
}
```

This returned the `Cat` object directly, not wrapped in an array.

If there is no record matching the criteria passed to `findOne`, it will
return `null` (rather than an empty array):

```javascript
const { sequelize, Cat } = require("./models");

async function main() {
  // Try to find a non-existant cat.
  const cat = await Cat.findOne({
    where: {
      firstName: "Franklin Delano Catsevelt",
    },
  });
  console.log(JSON.stringify(cat, null, 2));

  await sequelize.close();
}

main();
```

No such cat exists:

```
Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."firstName" = 'Franklin Delano Catsevelt' LIMIT 1;
null
```

## Conclusion

We've scratched the surface of the many query options supported by
Sequelize. You may find more information as necessary by reading the
[Sequelize querying documentation][querying-documentation]. You can in
particular review the [list of Sequelize query
operators][sequelize-operator-docs].

Now that you've completed this reading you should know how to:

* Use the `where` query option,
* Use the `Op.and` operator to match **all** of multiple criteria,
* Use the `Op.or` operator to match **any** of multiple criteria,
* Use the `Op.ne` to match rows where the value **does not equal** the
  specified value,
* Use the `Op.gt`, `Op.lt` operators to **compare** values,
* Use the `order` query option to **order** results,
* Use the `limit` query option to **limit** the number of returned
  results,
* Use `findOne` when only one result is expected or desired.

[querying-documentation]: https://sequelize.org/v5/manual/querying.html
[sequelize-operator-docs]: https://sequelize.org/v5/manual/querying.html#operators
