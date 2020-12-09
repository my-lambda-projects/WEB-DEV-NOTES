# Using SQL Transactions
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Using SQL Transactions](#using-sql-transactions)
  - [What is a transaction?](#what-is-a-transaction)
  - [Implicit vs. explicit transactions](#implicit-vs-explicit-transactions)
    - [PostgreSQL transactional commands](#postgresql-transactional-commands)
  - [When to use transactions and why](#when-to-use-transactions-and-why)
  - [Transaction properties: ACID](#transaction-properties-acid)
    - [Banking transaction example](#banking-transaction-example)
  - [Helpful links:](#helpful-links)

<!-- /code_chunk_output -->
________________________________________________________________________________

Transactions allow us to make changes to a SQL database in a consistent and
durable way, and it’s a best practice to use them regularly.

In this reading, we’ll cover what a transaction is and why we want to use it, as
well as how to write explicit transactions.

## What is a transaction?

A transaction is a single unit of work, which can contain multiple operations,
performed on a database. According to the [PostgreSQL docs][1], the important
thing to note about a transaction is that “it bundles multiple steps into a
single, all-or-nothing operation”. If any operation within the transaction
fails, then the entire transaction fails. If all the operations succeed, then
the entire transaction succeeds.

## Implicit vs. explicit transactions

Every SQL statement is effectively a transaction. When you insert a new table
row into a database table, for example, you are creating a transaction. The
following `INSERT` statement is a transaction:

```sql
INSERT INTO hobbits(name,purpose)
  VALUES('Frodo','Destroy the One Ring of power.');
```

The above code is known as an  _implicit_ transaction. With an implicit
transaction, changes to the database happen immediately, and we have no way to
undo or roll back these changes. We can only make subsequent changes/
transactions.

An _explicit_ transaction, however, allows us to create save points and roll
back to whatever point in time we choose. An explicit transaction begins with
the command `BEGIN`, followed by the SQL statement, and then ends with either a
`COMMIT` or `ROLLBACK`.

### PostgreSQL transactional commands

**[BEGIN][3]**
-- Initiates a transaction block. All statements after a BEGIN command will be
executed in a single transaction until an explicit COMMIT or ROLLBACK is given.

Starting a transaction:

```sql
BEGIN;
  INSERT INTO hobbits(name,purpose)
    VALUES('Frodo','Destroy the One Ring of power.');
```

**[COMMIT][4]**
 -- Commits the current transaction. All changes made by the transaction become
 visible to others and are guaranteed to be durable if a crash occurs.

Committing a transaction:

```sql
BEGIN;
  INSERT INTO hobbits(name,purpose)
    VALUES('Frodo','Destroy the One Ring of power.');
COMMIT;
```

**[ROLLBACK][5]**
-- Rolls back the current transaction and causes all the updates made by the
transaction to be discarded. Can only undo transactions since the last COMMIT or
ROLLBACK command was issued.

Rolling back a transaction (i.e. abort all changes):

```sql
BEGIN;
  INSERT INTO hobbits(name,purpose)
    VALUES('Frodo','Destroy the One Ring of power.');
ROLLBACK;
```

**[SAVEPOINT][6]**
-- Establishes a new save point within the current transaction. Allows all
commands executed after the save point to be rolled back, restoring the
transaction state to what it was at the time of the save point.

Syntax to create save point: `SAVEPOINT savepoint_name;`
Syntax to delete a save point: `RELEASE SAVEPOINT savepoint_name;`

Let’s say we had the following table called `fellowship`:

| name    | age  |
| ------- | ---- |
| Frodo   | 50   |
| Samwise | 38   |
| Merry   | 36   |
| Pippin  | 28   |
| Aragorn | 87   |
| Boromir | 40   |
| Legolas | 2000 |
| Gandalf | 2000 |

We'll create a transaction on this table containing a few operations. Inside
the transaction, we’ll establish a save point that we’ll roll back to before
committing.

```sql
BEGIN;
  DELETE FROM fellowship
    WHERE age > 100;
  SAVEPOINT first_savepoint;
  DELETE FROM fellowship
    WHERE age > 80;
  DELETE FROM fellowship
    WHERE age >= 40;
  ROLLBACK TO first_savepoint;
COMMIT;
```

Once our transaction is committed, our table would look like this:

| name    | age |
| ------- | --- |
| Frodo   | 50  |
| Samwise | 38  |
| Merry   | 36  |
| Pippin  | 28  |
| Aragorn | 87  |
| Boromir | 40  |

We can see that the deletion that happened just prior to the savepoint creation
was preserved.

**[SET TRANSACTION][7]**
  -- Sets the characteristics of the current transaction. (_Note: To set
  characteristics for subsequent transactions in a session, use `SET SESSION
  CHARACTERISTICS`.) The available transaction characteristics are the
  transaction isolation level, the transaction access mode (read/write or
  read-only), and the deferrable mode. (_Read more about these characteristics
  in the [PostgreSQL docs][7]._)

Example of setting transaction characteristics:

```sql
BEGIN;
  SET TRANSACTION READ ONLY;
  ...
COMMIT;
```

## When to use transactions and why

It is generally a good idea to use explicit SQL transactions when making any
updates, insertions, or deletions, to a database. However, you generally
wouldn’t write an explicit transaction for a simple `SELECT` query.

Transactions help you deal with crashes, failures, data consistency, and error
handling. The ability to create savepoints and roll back to earlier points is
tremendously helpful when doing multiple updates and helps maintain data
integrity.

Another benefit of transactions is the _**atomic**_, or “all-or-nothing”, nature
of their operations. Because all of the operations in a transaction must succeed
or else be aborted, partial or incomplete updates to the database will not be
made. End-users will see only the final result of the transaction.

## Transaction properties: ACID

A SQL transaction has four properties known collectively as “ACID” -- which is an acronym for _Atomic, Consistent, Isolated, and Durable_. The following descriptions come from the IBM doc “[ACID properties of transactions][2]”:

**Atomicity**
-- All changes to data are performed as if they are a single operation. That is, all the changes are performed, or none of them are.

For example, in an application that transfers funds from one account to another,
the atomicity property ensures that, if a debit is made successfully from one
account, the corresponding credit is made to the other account.

**Consistency**
-- Data is in a consistent state when a transaction starts and when it ends.

For example, in an application that transfers funds from one account to another,
the consistency property ensures that the total value of funds in both the
accounts is the same at the start and end of each transaction.

**Isolation**
-- The intermediate state of a transaction is invisible to other transactions.
As a result, transactions that run concurrently appear to be serialized.

For example, in an application that transfers funds from one account to another,
the isolation property ensures that another transaction sees the transferred
funds in one account or the other, but not in both, nor in neither.

**Durability**
-- After a transaction successfully completes, changes to data persist and are
not undone, even in the event of a system failure.

For example, in an application that transfers funds from one account to another,
the durability property ensures that the changes made to each account will not
be reversed.

### Banking transaction example

Let’s look at an example from the [PostgreSQL Transactions doc][1] that
demonstrates the ACID properties of a transaction. We have a bank database that
contains customer account balances, as well as total deposit balances for
branches. We want to record a payment of $100.00 from Alice's account to Bob's
account, as well as update the total branch balances. The transaction would
look like the code below.

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

There are several updates happening above. The bank wants to make sure that all
of the updates happen or none happen, in order to ensure that funds are
transferred from the proper account (i.e. Alice’s account) to the proper
recipient’s account (i.e. Bob’s account). If any of the updates fails, none of
them will take effect. That is, if something goes wrong either with withdrawing
funds from Alice’s account or transferring the funds into Bob’s account, then
the entire transaction will be aborted and no changes will occur. This prevents
Alice or Bob from seeing a transaction in their account summaries that isn’t
supposed to be there.

There are many other scenarios where we would want to use an atomic operation to
ensure a successful end result. Transactions are ideal for such scenarios, and
we should use them whenever they’re applicable.

## Helpful links:

* [PostgreSQL: Transactions][1]
* [PostgreSQL Tutorial: PostgreSQL Transaction][8]
* [PostgreSQL: BEGIN][3]
* [PostgreSQL: COMMIT][4]
* [PostgreSQL: ROLLBACK][5]
* [PostgreSQL: SAVEPOINT][6]
* [PostgreSQL: SET TRANSACTION][6]

[1]: https://www.postgresql.org/docs/8.3/tutorial-transactions.html
[2]: https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.4.0/product-overview/acid.html
[3]: https://www.postgresql.org/docs/9.1/sql-begin.html
[4]: https://www.postgresql.org/docs/9.1/sql-commit.html
[5]: https://www.postgresql.org/docs/9.1/sql-rollback.html
[6]: https://www.postgresql.org/docs/9.1/sql-savepoint.html
[7]: https://www.postgresql.org/docs/9.1/sql-set-transaction.html
[8]: http://www.postgresqltutorial.com/postgresql-transaction/
