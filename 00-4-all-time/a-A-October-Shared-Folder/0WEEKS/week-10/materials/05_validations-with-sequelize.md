# Model Validations With Sequelize
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Validating That An Attribute Is Not `NULL`](#validating-that-an-attribute-is-not-null)
- [The `notEmpty` Validation](#the-notempty-validation)
- [Forbidding Long String Values](#forbidding-long-string-values)
- [Validating That A Numeric Value Is Within A Specified Range](#validating-that-a-numeric-value-is-within-a-specified-range)
- [Validating That An Attribute Is Among A Finite Set Of Values](#validating-that-an-attribute-is-among-a-finite-set-of-values)
- [Conclusion](#conclusion)

<!-- /code_chunk_output -->
________________________________________________________________________________

It's important to make sure that data stored to a database is not
erroneous or incomplete. Imagine the following forms of "garbage data:"

* A `Cats` record with `firstName` set to `NULL`. All `Cats` ought to
  have a name.
* A `Cats` record with `firstName` set to the empty string: `""`.
* A `Cats` record with an `age` less than `0`. `age` must always be
  non-negative.
* Perhaps the `specialSkill` should come from a pre-defined limited list
  of `["jumping", "sleeping", "purring"]`. A `Cats` record with a
  `specialSkill` of `"pearl diving"` would thus be invalid.

Sequelize lets us write JavaScript code that will check that these data
requirements are satisfied before saving a record to the database. The
JavaScript code that does this is called a _validation_. A validation is
code that makes sure that data is valid.

In this reading you will learn how to:

1. Validate that an attribute is not set to `NULL`.
2. Validate that a string attribute is not set to the empty string `""`.
3. Validate that a string attribute is not too long (has too many
   characters).
3. Validate that a numeric attribute meets minimum or maximum
   thresholds.
4. Validate that an attribute is within a limited set of options.

## Validating That An Attribute Is Not `NULL`

We should not allow a `Cat` to be saved to the database if it lacks

1. a `firstName`,
1. an `age`, or
3. a `specialSkill`.

None of these should be set to `NULL`.

Before adding validations to check these requirements, let's review what
our `Cat` model code currently looks like:

```javascript
// ./models/cat.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    firstName: DataTypes.STRING,
    specialSkill: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```

We will modify our model definition to give more specific instructions
to Sequelize about the `firstName`, `specialSkill`, and `age`
attributes:

```javascript
// ./models/cat.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "firstName must not be null",
        },
      },
    },
    specialSkill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "specialSkill must not be null",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "age must not be null",
        },
      },
    },
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```

What has changed? We now map each attribute name (`firstName`,
`specialSkill`, `age`) to a POJO that tells Sequelize how to configure
that attribute. Here is the POJO for `firstName`:

```javascript
{
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notNull: {
      msg: "firstName must not be null",
    },
  },
}
```

The `type` attribute is of course vital: this used to be the only thing
we specified. We've added two new attributes. The first is `allowNull:
false`. This tells Sequelize not to let us set the `firstName` attribute
to `NULL`.

The second attribute is `validate`. We will spend a lot of time
examining this attribute in this reading. Validation logic for
`firstName` is configured inside the `validate` attribute. Our
`validate` configuration is:

```javascript
{
  notNull: {
    msg: "firstName must not be null",
  },
}
```

This configuration tells Sequelize what error message to give if we try
to set the `firstName` attribute to `NULL`. It's odd that we have to set
both `allowNull: false` and `notNull: { msg:  ... }`. This feels like
unnecessary duplication. Regardless, that's what Sequelize wants us to
do. On the other hand, we do get a chance to specify the error message
to print if the validation fails (`"firstName must not be null"`).

Let's see how the validation logic helps us avoid saving junk data to
our database:

```javascript
// index.js
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = Cat.build({
    // Empty cat. All fields set to `null`.
  });

  try {
    // Try to save cat to the database.
    await cat.save();

    console.log("Save success!");
    console.log(JSON.stringify(cat, null, 2));
  } catch (err) {
    console.log("Save failed!");

    // Print list of errors.
    for (const validationError of err.errors) {
      console.log("*", validationError.message);
    }
  }

  await sequelize.close();
}

main()
```

Running this code prints:

```
Save failed!
* firstName must not be null
* specialSkill must not be null
* age must not be null
```

What happened? When we call the `save` method on a `Cat`, Sequelize will
check that all the specified validations are satisfied. In this case
none of them are! The `save` method will throw an exception, which we
handle using `try { ... } catch (err) { ... }`.

What kind of exception? The thrown error is a
[`ValidationError`][validation-error-docs]. This has an `errors`
attribute, which stores an array of
[`ValidationErrorItem`s][validation-error-item-docs]. We print out the
message for each item error.

Because there were validation failures, Sequelize **will not save** the
invalid `Cats` record to the database. Sequelize thus keeps us from
inserting junk data into the database.

If we want to save our `Cat` object, we would have to change its
attributes to meet the validations (i.e., set them to something other
than `NULL`) and call `save` a second time. For example:

```javascript
// index.js
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = Cat.build({
    // Empty cat. All fields set to `null`.
  });

  try {
    await cat.save();
  } catch (err) {
    // The save will not succeed!
    console.log("We will fix and try again!");
  }

  // Fix the various validation problems.
  cat.firstName = "Markov";
  cat.specialSkill = "sleeping";
  cat.age = 4;

  try {
    // Trying to save a second time!
    await cat.save();

    console.log("Success!");
  } catch (err) {
    // The save *should* succeed!
    console.log(err);
  }

  await sequelize.close();
}

main()
```

[validation-error-docs]: https://sequelize.org/v5/class/lib/errors/validation-error.js~ValidationError.html
[validation-error-item-docs]: https://sequelize.org/v5/class/lib/errors/validation-error.js~ValidationErrorItem.html

## The `notEmpty` Validation

Even though we are not allowed to set `firstName` and `specialSkill` to
`NULL`, we could still set them to the empty string `""`:

```javascript
// index.js
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = Cat.build({
    firstName: "",
    specialSkill: "",
    age: 5,
  });

  try {
    // Try to save cat to the database.
    await cat.save();

    console.log("Save success!");
    console.log(JSON.stringify(cat, null, 2));
  } catch (err) {
    console.log("Save failed!");

    // Print list of errors.
    for (const validationError of err.errors) {
      console.log("*", validationError.message);
    }
  }

  await sequelize.close();
}

main();
```

```
Executing (default): INSERT INTO "Cats" ("id","firstName","specialSkill","age","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING *;
Save success!
{
  "id": 8,
  "firstName": "",
  "specialSkill": "",
  "age": 5,
  "updatedAt": "2020-02-12T21:34:49.250Z",
  "createdAt": "2020-02-12T21:34:49.250Z"
}
```

This is bogus: `Cats` records should have a non-empty `firstName` and
`specialSkill`. We will therefore add a second validation for both
`firstName` and `specialSkill`:

```javascript
// ./models/cat.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "firstName must not be null",
        },
        notEmpty: {
          msg: "firstName must not be empty",
        },
      },
    },
    specialSkill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "specialSkill must not be null",
        },
        notEmpty: {
          msg: "specialSkill must not be empty",
        },
      },
    },
    // ...
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```

When we run the same `index.js` that tries to save the `Cats` record
with the empty `firstName` and `specialSkill`, we now print:

```
Save failed!
* firstName must not be empty
* specialSkill must not be empty
```

Excellent! We've added the new validation by adding a `notEmpty` key to
the `validate` POJO. Just like with `notNull`, we specify a message to
print.

This is the typical story: we add new validations by adding new
key/value pairs to the `validate` POJO. Sequelize provides many
different kinds of validations for us, but we configure all of them in
the same general manner.

## Forbidding Long String Values

We don't want our cats to have names that are too long. We add a `len`
validation like so:

```javascript
// ./models/cat.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "firstName must not be null",
        },
        notEmpty: {
          msg: "firstName must not be empty",
        },
        len: {
          args: [0, 8],
          msg: "firstName must not be more than eight letters long",
        },
      },
    },
    // ...
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```

If we try to run:

```javascript
// index.js
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = Cat.build({
    firstName: "Markov The Magnificent",
    specialSkill: "sleeping",
    age: 5,
  });

  try {
    // Try to save cat to the database.
    await cat.save();

    console.log("Save success!");
    console.log(JSON.stringify(cat, null, 2));
  } catch (err) {
    console.log("Save failed!");

    // Print list of errors.
    for (const validationError of err.errors) {
      console.log("*", validationError.message);
    }
  }

  await sequelize.close();
}

main();
```

We will be told:

```
Save failed!
* firstName must not be more than eight letters long
```

The `len` validation gets a `msg` attribute as usual. We also configure
`args: [0, 8]`. These are the "arguments" to the `len` validation. We
are telling Sequelize to trigger a validation error if the `firstName`
property has a length less than zero (impossible) or greater than eight.

Note that even though the `len` validation is not triggered for a length
of zero, the `notEmpty` validation still will be.

If desired, we could use the `len` validation to set a true minimum
length for a string. If we wanted a minimum length of two letters, we
would just change `args: [2, 8]`. (We ought also update the `msg`
appropriately.)

## Validating That A Numeric Value Is Within A Specified Range

A `Cat` should never have a negative age. Perhaps, also, a `Cat` should
have a theoretical maximum age of 99 years. We can add validations to
enforce these requirements:

```javascript
// ./models/cat.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    // ...
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "age must not be null",
        },
        min: {
          args: [0],
          msg: "age must not be less than zero",
        },
        max: {
          args: [99],
          msg: "age must not be greater than 99",
        },
      },
    },
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```

You can see that the `min` and `max` validations are configured in the
same sort of way that the `len` validation is.

If we try to save a `Cat` with an `age` of `-1`, we are printed:

```
Save failed!
* age must not be less than zero
```

Likewise, if we try to save a `Cat` with an `age` of `123` we are
printed:

```
Save failed!
* age must not be greater than 99
```

*(Note: I've stopped repeating our `index.js` file, since there are only
trivial modifications to a `Cat`'s attributes each time.)*

## Validating That An Attribute Is Among A Finite Set Of Values

Let's say that a `Cat`'s `specialSkill` should be restricted to a
pre-defined list of `["jumping", "sleeping", "purring"]`. That is: a
`Cat` should not be allowed to have just any `specialSkill`. The
`specialSkill` must be on the list.

We can enforce this requirement like so:

```javascript
// ./models/cat.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    // ...
    specialSkill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "specialSkill must not be null",
        },
        notEmpty: {
          msg: "specialSkill must not be empty",
        },
        isIn: {
          args: [["jumping", "sleeping", "purring"]],
          msg: "specialSkill must be either jumping, sleeping, or purring",
        },
      },
    },
    // ...
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};
```

Notice how we **doubly-nest** the list of special skills (`["jumping,
"sleeping", "purring"]`) when specifying the `args` for the `isIn`
validation. This is because we want to pass **one** argument: an array
of three possible special skills.

Now when we try to save a `Cat` with `specialSkill` set to `"pearl
diving"`, our code will print:

```
Save failed!
* specialSkill must be either jumping, sleeping, or purring
```

## Conclusion

There is a very large variety of validations that are provided by
Sequelize. You can find many more in the Sequelize [documentation for
validations][validation-docs].

[validation-docs]: https://sequelize.org/v5/manual/models-definition.html#validations

Having completed this reading, you now know how to:

1. Validate that an attribute is not set to `NULL`.
2. Validate that a string attribute is not set to the empty string `""`.
3. Validate that a string attribute is not too long (has too many
   characters).
3. Validate that a numeric attribute meets minimum or maximum
   thresholds.
4. Validate that an attribute is within a limited set of options.
