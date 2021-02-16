# Transactions With Sequelize
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Transactions With Sequelize](#transactions-with-sequelize)
  - [The Problem: Database Updates Can Fail](#the-problem-database-updates-can-fail)
  - [The Solution: Database Transactions](#the-solution-database-transactions)
  - [The `BankAccounts` Schema](#the-bankaccounts-schema)
  - [Example: An Update Fails Because Of Validation Failure](#example-an-update-fails-because-of-validation-failure)
  - [Incorrect Solutions](#incorrect-solutions)
  - [Using A Database Transaction With Sequelize](#using-a-database-transaction-with-sequelize)
  - [Aside: What Is The `Transaction` Object?](#aside-what-is-the-transaction-object)
  - [Transactions Prevent _Race Conditions_](#transactions-prevent-urace-conditionsu)
  - [Conclusion](#conclusion)

<!-- /code_chunk_output -->
________________________________________________________________________________

In this reading, we will learn about database _transactions_ and how we
use them via Sequelize. We will learn how to group multiple update
operations into a single atomic, indivisible unit.

At the end of the reading, you should know:

1. How to write code that is resilient to SQL operation failures,
1. How to group multiple operations into a database transaction using
   Sequelize (the `sequelize.transaction` method),
1. How to prevent "race conditions" using transactions.

## The Problem: Database Updates Can Fail

Imagine a scenario with a banking database. Markov wants to transfer
\$7,500 to Curie. To perform the transfer, we will perform two database
update operations:

1. Reduce Markov's account balance by \$7,500,
2. Increase Curie's account balance by \$7,500.

When transferring money, it's very important that *both* operations be
performed. If we reduce Markov's balance but fail to increase Curie's
balance, the bank effectively steals money from Markov. If we increase
Curie's balance without reducing Markov's balance, the bank effectively
gives away free money to Curie. Neither is acceptable.

We must keep in mind that any attempt to perform a database update can
sometimes _fail_. It can fail for a number of reasons:

1. The command is sent, but the database has previously been shut down
   by the database administrator. Because the database is not running,
   the database is not listening for our update, won't receive it, and
   thus won't process it.
2. A bug in the database or operating system software has caused the
   database or operating system to crash. Again, the database is not
   running, so it can neither receive nor process our update.
3. Power has been lost to the machine running the database. The database
   is not running.
4. The internet connection that connects us to the database machine is
   disrupted. The database may be running and listening for SQL requests
   to process. However, our update request cannot get through to the
   database machine. Because the database cannot receive our request,
   the database cannot process it.
5. The update asks the database to violate a pre-defined constraint. For
   example: the database may have a constraint that an account balance
   must never be less than zero. Any update that asks the database to
   reduce an account balance to less than zero will be rejected and
   therefore fail.

Only this last scenario is "our fault." The fact is that database
updates can fail **through no fault of our own**. With regard to our
example: our first SQL request to reduce Markov's account balance may
succeed, but the database may then crash before we have sent the request
to increase Curie's balance. Through no fault of our own, the bank has
stolen money from Markov without giving it to Curie.

How can we write code that avoids this fundamental problem?

## The Solution: Database Transactions

One way to solve the problem is to "group" or "pair" the two update
operations somehow. We want to tell the database "Reduce Markov's
balance AND increment Curie's balance." We want to tell the database:
"If for any reason you cannot perform **both** operations, make sure not
to perform **either**." We want to tell the database: "If you crash
after reducing Markov's balance, make sure to either (a) increase
Curie's balance when you restart, or (b) undo the increase to Markov's
balance when you restart."

We want to ask the database to treat the pair of updates as one _atomic_
(meaning **indivisible**) unit. SQL lets you do this using a feature
called _transactions_.

You've previously seen how to use SQL transactions:

```sql
START TRANSACTION;
-- Reduce Markov's balance by $7500
UPDATE "BankAccounts" SET balance = balance - 7500 WHERE id = 1;
-- Increment Curie's balance by $7500
UPDATE "BankAccounts" SET balance = balance + 7500 WHERE id = 2;
COMMIT TRANSACTION;
```

SQL guarantees to you that everything between `START TRANSACTION` and
`COMMIT TRANSACTION` will be processed _atomically_. If any update
operation fails, none of the updates will be performed. The transaction
is "all-or-nothing."

In this reading you will learn how to use SQL transactions with the
Sequelize ORM.

## The `BankAccounts` Schema

For our example in this reading, I will use a single table with two
accounts.

```
catsdb=> SELECT * FROM "BankAccounts";
 id | clientName | balance | ...
----+------------+---------+-----
  1 | Markov     |    5000 | ...
  2 | Curie      |   10000 | ...
(2 rows)
```

I have generated a Sequelize model corresponding to the `BankAccounts`
table:

```javascript
// ./models/bank_account.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  // Define BankAccount model.
  const BankAccount = sequelize.define('BankAccount', {
    // Define clientName attribute.
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
      // Define validations on clientName.
      validate: {
        // clientName must not be null.
        notNull: {
          msg: "clientName must not be NULL",
        },
        // clientName must not be empty.
        notEmpty: {
          msg: "clientName must not be empty",
        },
      },
    },

    // Define balance attribute.
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Define validations on balance.
      validate: {
        // balance must not be less than zero.
        min: {
          args: [0],
          msg: "balance must not be less than zero",
        },
      },
    },
  }, {});

  return BankAccount;
};
```

Notice that the `min` validation on `balance` will not allow us to save
an account balance that is below zero.

## Example: An Update Fails Because Of Validation Failure

Let's imagine that Markov wants to transfer \$7,500 to Curie.
Unfortunately, Markov has only \$5,000 in his account! Decrementing
Markov's account balance by \$7,500 would put it in the negative, which
our validation will not allow. Thus the transfer must fail.

Imagine that Markov is unaware that his account balance cannot cover the
transfer. He tries to perform the transfer anyway:

```javascript
// ./index.js
const { sequelize , BankAccount } = require("./models");

// This code will try to transfer $7,500 from Markov to Curie.
async function main() {
  // Fetch Markov and Curie's accounts.
  const markovAccount = await BankAccount.findByPk(1);
  const curieAccount = await BankAccount.findByPk(2);

  try {
    // Increment Curie's balance by $7,500.
    curieAccount.balance += 7500;
    await curieAccount.save();

    // Decrement Markov's balance by $7,500.
    markovAccount.balance -= 7500;
    await markovAccount.save();
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

Running this code prints the following:

```
Executing (default): SELECT "id", "clientName", "balance", "createdAt", "updatedAt" FROM "BankAccounts" AS "BankAccount" WHERE "BankAccount"."id" = 1;
Executing (default): SELECT "id", "clientName", "balance", "createdAt", "updatedAt" FROM "BankAccounts" AS "BankAccount" WHERE "BankAccount"."id" = 2;
Executing (default): UPDATE "BankAccounts" SET "balance"=$1,"updatedAt"=$2 WHERE "id" = $3
Error!
Markov: balance must not be less than zero
```

Everything starts out fine. We fetch Markov and Curie's accounts. We
increase Curie's balance. But then we hit a snag: when we call
`markovAccount.save()`, Sequelize detects that we are trying to set
Markov's balance below zero. Sequelize therefore **does not** send a SQL
request to update Markov's account balance. Instead,
`markovAccount.save()` throws an exception. We print the error: Markov's
balance must not be less than zero.

We thus avoid saving a negative balance for Markov. But other damage has
already been done. If we now check account balances, we will see:

```
catsdb=> SELECT * FROM "BankAccounts";
 id | clientName | balance | ...
----+------------+---------+-----
  1 | Markov     |    5000 | ...
  2 | Curie      |   17500 | ...
(2 rows)
```

The bank has given free money to Curie! We should have "rolledback" the
increase of Curie's balance. We will learn how to do that!

## Incorrect Solutions

One may suggest a fix: make sure to decrement Markov's account balance
before incrementing Curie's balance! If Markov's balance is
insufficient, we can stop the transfer before giving Curie any money.

We *could* swap the order of the updates, and it would indeed fix this
specific problem. But imagine if Markov tries to transfer \$2,500 (an
amount he can afford). We first decrement Markov's account balance and
then -- the operating system crashes before the second update can be
submitted. Curie's balance is not incremented. The bank has stolen
Markov's money!

The problem is fundamental: no matter what order we perform the two
updates in, the database can always fail *after* processing the first,
but *before* processing the second. For our code to be resilient to
unavoidable failures, there is no other choice but to use a database
transaction.

## Using A Database Transaction With Sequelize

Let's return to our previous example of trying to transfer $7,500 from
Markov to Curie. Specifically, we will rewrite this key part:

```javascript
// Increment Curie's balance by $7,500.
curieAccount.balance += 7500;
await curieAccount.save();

// Decrement Markov's balance by $7,500.
markovAccount.balance -= 7500;
await markovAccount.save();
```

To ask Sequelize to perform the two updates in a SQL database
transaction, we use the `sequelize.transaction` method. We will write
this like so, instead:

```javascript
await sequelize.transaction(async (tx) => {
  // Increment Curie's balance by $7,500.
  curieAccount.balance += 7500;
  await curieAccount.save({ transaction: tx });

  // Decrement Markov's balance by $7,500.
  markovAccount.balance -= 7500;
  await markovAccount.save({ transaction: tx });
});
```

Let's go through the transaction code and explain each part:

```javascript
// Start a transaction. Queries run inside the callback can be part of
// the transaction.
await sequelize.transaction(async (tx) => {
  // Increment Curie's balance by $7,500.
  curieAccount.balance += 7500;
  // Pass the `tx` transaction object so that Sequelize knows to
  // update Curie's account as part of this transaction (rather than
  // "on its own" per usual).
  await curieAccount.save({ transaction: tx });

  // Decrement Markov's balance by $7,500.
  markovAccount.balance -= 7500;
  // Again, pass the `tx` transaction object. Thus both updates are part
  // of the same transaction.
  await markovAccount.save({ transaction: tx });

  // If no exceptions have been thrown, `sequelize.transaction` will
  // `COMMIT` the transaction after the end of the callback.
  //
  // If any error gets thrown, `sequelize.transaction` will abort
  // the transaction by issuing a `ROLLBACK`. This will cancel all
  // updates.
});
```

Let's put the transaction code back into our original program:

```javascript
// ./index.js
const { sequelize, BankAccount } = require("./models");

async function main() {
  // Fetch Markov and Curie's accounts.
  const markovAccount = await BankAccount.findByPk(1);
  const curieAccount = await BankAccount.findByPk(2);

  try {
    await sequelize.transaction(async (tx) => {
      // Increment Curie's balance by $7,500.
      curieAccount.balance += 7500;
      await curieAccount.save({ transaction: tx });

      // Decrement Markov's balance by $7,500.
      markovAccount.balance -= 7500;
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

Running this code prints:

```
Executing (default): SELECT "id", "clientName", "balance", "createdAt", "updatedAt" FROM "BankAccounts" AS "BankAccount" WHERE "BankAccount"."id" = 1;
Executing (default): SELECT "id", "clientName", "balance", "createdAt", "updatedAt" FROM "BankAccounts" AS "BankAccount" WHERE "BankAccount"."id" = 2;
Executing (208b3951-9ab9-489b-97f0-afb49aaff807): START TRANSACTION;
Executing (208b3951-9ab9-489b-97f0-afb49aaff807): UPDATE "BankAccounts" SET "balance"=$1,"updatedAt"=$2 WHERE "id" = $3
Executing (208b3951-9ab9-489b-97f0-afb49aaff807): ROLLBACK;
Error!
Markov: balance must not be less than zero
```

Let's review what happened. We again start by fetching both
`BankAccount`s. We next `START TRANSACTION`. We issue the update to
Curie's account.

Then Sequelize detects the validation failure when trying to run
`markovAccount.save({ transaction: tx })`. Markov doesn't have enough
money in his account! Sequelize throws an exception. The
`sequelize.transaction` method *catches the exception* and issues a
`ROLLBACK` for the transaction. This tells the database to undo the
prior increment of Curie's account balance.

Having rolled back the transaction, the `sequelize.transaction`
method *rethrows* the error, so that our logging code gets a chance to
learn about the error and print its details.

## Aside: What Is The `Transaction` Object?

_This is bonus information in case you are troubled by what the `tx`
parameter to `sequelize.transaction` is for. You can use transactions
correctly without knowing this bonus information._

What is the mysterious `tx` that is passed by `sequelize.transaction`
to our callback? It is basically just a unique ID. In this case, the ID
is: `208b3951-9ab9-489b-97f0-afb49aaff807`. You can see this ID in the
logs above.

When we say `curieAccount.save({ transaction: tx })`, we are telling
Sequelize: "update Curie's account as part of transaction number
`208b3951-9ab9-489b-97f0-afb49aaff807`."

Sequelize needs transaction IDs because it can be running many SQL
transactions _concurrently_ (loosely speaking: "in parallel"). One part
of the application could be transferring money from Markov to Curie at
the same time another part of the application is transferring money from
Kate to Ned.

If Sequelize did not keep track of transaction IDs, it would not know
that `curieAccount.save()` should be a part of the Markov/Curie
transaction rather than the Kate/Ned transaction.

## Transactions Prevent _Race Conditions_

There is still a subtle mistake in my bank transfer code. There is a
potential problem if someone modifies Markov's or Curie's account in
between (1) the initial fetch of their accounts, and (2) the transaction
to update the accounts.

```javascript
// ./index.js
async function main() {
  // I will transfer only $5,000 so that Markov's balance can cover the
  // amount. Markov starts out with $5,000.

  // Fetch Markov and Curie's accounts.
  const markovAccount = await BankAccount.findByPk(1);
  const curieAccount = await BankAccount.findByPk(2);

  // ***
  // Imagine that right now some other program transfers the $5,000 out
  // of Markov's account. Markov's true account **in the database** now
  // has a balance of $0. But `markovAccount.balance` is still $5,000,
  // because we fetched Markov's `BankAccount` **before** the transfer
  // was made!
  // ***

  try {
    await sequelize.transaction(async (tx) => {
      // Increment Curie's balance by $5,000 (to $15,000).
      curieAccount.balance += 5000;
      await curieAccount.save({ transaction: tx });

      // Decrement `markovAccount.balance` by $5,000.
      // `markovAccount.balance` is set to zero.
      markovAccount.balance -= 5000;
      // Save and set Markov's balance to zero.
      await markovAccount.save({ transaction: tx });

      // Problem: Markov's balance in the database was *already* zero.
      // Markov had no money to transfer. He should not have been able
      // to transfer the $5,000.
    });
  } catch (err) {
    // ...
  }

  await sequelize.close();
}

main();
```

Because another program can "race in between" (1) the reading of the
account balances and (2) the updating of the balances, we call this
potential problem a _race condition_. The easiest way to fix the race
condition is to prohibit anyone else from modifying Markov's account
balance in between (1) and (2).

Luckily, the solution is simple. Any data used in a transaction will be
_locked_ until the transaction completes. Data that is locked can be
neither read nor written by other transactions. If our transaction reads
(or writes) data, no one else can read or write that data until our
transaction completes. When we `COMMIT` (or `ROLLBACK`) all the locked
data is freed (the locks are _released_).

We don't have to lock the data ourselves. Simply by doing all our
queries inside the same transaction, the database will lock the data for
us. Therefore, to fix the problem, we should move the initial account
fetching by `findByPk` into the transaction (i.e., pass it `{
transaction: tx }`):

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
    // ...
  }

  await sequelize.close();
}

main();
```

This prints:

```
Executing (76321a03-93c5-47c0-861a-cf24c3e6f3bf): START TRANSACTION;
Executing (76321a03-93c5-47c0-861a-cf24c3e6f3bf): SELECT "id", "clientName", "balance", "createdAt", "updatedAt" FROM "BankAccounts" AS "BankAccount" WHERE "BankAccount"."id" = 1;
Executing (76321a03-93c5-47c0-861a-cf24c3e6f3bf): SELECT "id", "clientName", "balance", "createdAt", "updatedAt" FROM "BankAccounts" AS "BankAccount" WHERE "BankAccount"."id" = 2;
Executing (76321a03-93c5-47c0-861a-cf24c3e6f3bf): UPDATE "BankAccounts" SET "balance"=$1,"updatedAt"=$2 WHERE "id" = $3
Executing (76321a03-93c5-47c0-861a-cf24c3e6f3bf): UPDATE "BankAccounts" SET "balance"=$1,"updatedAt"=$2 WHERE "id" = $3
Executing (76321a03-93c5-47c0-861a-cf24c3e6f3bf): COMMIT;
```

Notice that now *everything* is done in the transaction
`76321a03-93c5-47c0-861a-cf24c3e6f3bf`. This includes the initial
fetching of the accounts. Because the fetching is done within the
transaction, other users are not allowed to modify the accounts until
the transaction is finished.

Moving our read operations into the transaction has solved our race
condition problem. Every Sequelize operation - whether reading or
writing - can take a `transaction: tx` option. This includes:

1. `findByPk`
1. `findAll`
1. `save`
1. `create`
1. `destroy`

## Conclusion

Having completed this reading, here are the important things to take
away:

1. You should know that any SQL update operation may fail, often through
   no fault of your own.
1. You should know that you must write code resilient to SQL failures.
1. You should know that when performing multiple update operations as
   part of a group, you must use a transaction.
1. You should know how to use `sequelize.transaction` to run commands
   within a SQL transaction.
1. You should know how to pass a transaction object as the
   `{ transaction: tx }` parameter to a Sequelize command (such as
   `save`).
1. You should know what a _race condition_ is: the possibility that
   someone else modifies previously fetched data before you are finished
   using/updating it.
1. You should know how to use transactions to guard against race
   conditions. That is: you should know that both reading and writing
   operations should be put in the same transaction.
