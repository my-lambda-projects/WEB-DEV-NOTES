# OOPS! I Forgot A Thing

That's right, it's the return of the command-line to-do list manager. But, this
time, you're going to use a database!

This is your first database design project. There are three kinds of things in
this application:

* Categories
* Notes
* To-Do Items

Figure out the necessary attributes from the application. Then, modify each
screen file to include the models and use them.

This is a runnable application, it just doesn't do anything. In each of the
**-screen.js** files, you will find comments marked `// TODO:` with hints about
what you should do there.

To run the application, type `node program.js`.

You'll need to start out with using the Sequelize CLI to initialize your
application. Then, generate models and migrations and seeders, if you'd like.
Use them to make the application work.

Download the starter project from
https://github.com/appacademy-starters/sql-orm-design-to-do-list.

## Importing your models to use

To import your models, say you had two named `Task` and `Category`, write a
statement like this:

```js
const { Task, Category } = require('./models');
```

![example solution]

## Screen reminder

Here is a walk-through of how the application works.

### Main menu

This is the screen that appears when you first run the program. When someone
types a "1" and hits enter, it will take them to the **to-do items list**. When
someone types "2" and hits enter, it takes them to the **search screen**. When
someone types "3" and hits enter, it takes them to the **category management**
screen. When someone types "X" and hits enter, it cleanly exits your program.
If the user types something that doesn't match the options, have it reprint this
same screen.

```
********************************************
* TO-DO FOR YOU!!!!!            (c) 1987   *
********************************************

Please choose one of the following options:
1. Review my to-do items
2. Search for a to-do item
3. Manage categories

X. Exit

Type a number to go to another screen. Type
an X to return to the main menu.

> _
```

### Category management

Support the ability to categorize your to-do items. When someone chooses "3"
from the main screen, they should get this page. Support up to five categories
and no more.If the user types something that doesn't match the options, have it
reprint this same screen.

```
********************************************
* CATEGORIES                    (c) 1987   *
********************************************

1. Category 1
2. Category 2
3. Category 3
4. Category 4
5. Category 5

X. Go to main screen

Type a number to edit a category. Type an X
to return to the main menu.

> _
```

### Editing a category

When someone selects a category on the last screen, it will bring them to this
screen that will allow someone to rename a category. Limit the category name to
30 characters. If someone types more than 30 characters, it's up to you to
determine how to handle that. After someone successfully submits a new category
name, have it return the **Category management** screen.

```
********************************************
* EDIT CATEGORY                 (c) 1987   *
********************************************

You are editing "Category 2".

What would you like to rename it? Hit
"Enter" when you are done.

> _

```

### To-do item search screen

When someone is here, they can type a search term to search the to-do items'
text values. If a to-do item has more than one text field, then search by any
of them. Category names should not be text fields. When someone types a value
and hits enter, it goes to the **search results screen**.

```
********************************************
* SEARCH ITEMS                  (c) 1987   *
********************************************

Please type your search term and hit Enter.

> _

```

### To-do item search results

Here you can see the to-do items that matched your search result. Determine
how many rows are in the console (you can use `process.stdout.rows` to get the
number), subtract eight for the non-item text, and print up to that many tasks.
When the person hits the "Enter" key, it will return to the **main screen**.

```
********************************************
* SEARCH RESULTS                (c) 1987   *
********************************************

Your search matches:

1. Item 1
2. Item 2
3. Item 3

Press Enter to return to the main screen. _
```

### To-do items list

Here you can see a number of to-do items that will fit in the console (you can
use `process.stdout.rows` to get the number). If a person types "X" and hits
"Enter", it will take them to the **main screen**. If a person types a number of
a task and hits "Enter", it will take them to the **to-do item detail screen**.
If as person types an "A", it will take them to the **to-do item create
screen**.

**This screen should only show tasks that are not completed!**

If it's a _Note_, show only the first 70 characters of the value. If it's a
_Task_, show the first 70 characters of the title.

```
********************************************
* TO-DO ITEMS                   (c) 1987   *
********************************************

1. Item 1
2. Item 2
3. Item 3

A. Add a new item
X. Return to main menu

> _
```

### To-do item detail screen

Depending on the type of to-do item (see below for the two different types), you
will see one of the following screens.

```
********************************************
* TO-DO ITEM (NOTE)             (c) 1987   *
********************************************

This is a note to myself to do a thing.

Type "C" and hit "Enter" to complete this
task and return to the list screen. Just
hit "Enter" to return to the list screen.

> _
```

```
********************************************
* TO-DO ITEM (TASK)             (c) 1987   *
********************************************

TITLE: Do that thing
CATEGORY: Category 1
DESCRIPTION
You know that thing you want to do? You
really should do it, you know? Before time
runs out on you.

Type "C" and hit "Enter" to complete this
task and return to the list screen. Just
hit "Enter" to return to the list screen.

> _
```

### To-do item create screen

When someone comes to this screen, they have a choice to create a _Note_ or a
_Task_. After they choose that, the appropriate prompts are given to them.

```
********************************************
* CREATE AN ITEM                (c) 1987   *
********************************************

What kind of to-do item do you want to
create?

1. Note
2. Task

Type the number and hit "Enter".

> _
```

#### Create a note

```
********************************************
* CREATE A NOTE                 (c) 1987   *
********************************************

(Type your text and hit "Enter" to return to
the to-do list screen, 300 characters max.)

What is the note?

> _
```

#### Create a task - step 1

```
********************************************
* CREATE A TASK                 (c) 1987   *
********************************************

What is the title?

> _
```

#### Create a task - step 2

```
********************************************
* CREATE A TASK                 (c) 1987   *
********************************************

TITLE: This is the title

What is the category?

1. Category 1
2. Category 2
3. Category 3
4. Category 4
5. Category 5

> _
```

#### Create a task - step 3

```
********************************************
* CREATE A TASK                 (c) 1987   *
********************************************

TITLE: This is the title
CATEGORY: Category 3

(Type your text and hit "Enter" to return to
the to-do list screen, 300 characters max.)

What is the description?

> _
```

And, this will complete creating the task.


[To-Do Item Command Line Utility]: https://github.com/appacademy-starters/oop-task-manager-cli
[npm]: https://www.npmjs.com
[chalk]: https://github.com/chalk/chalk
[example solution]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/oop/oops-i-forgot-solution.gif
