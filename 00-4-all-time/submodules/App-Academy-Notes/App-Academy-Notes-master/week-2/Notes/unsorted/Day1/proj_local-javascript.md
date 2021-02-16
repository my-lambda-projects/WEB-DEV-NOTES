# Running JavaScript Locally
________________________________________________________________________________
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Phase 1: Creating files and folders](#phase-1-creating-files-and-folders)
- [Phase 2: Using Node to run JavaScript files](#phase-2-using-node-to-run-javascript-files)
  - [Phase 2A: Using the Node REPL](#phase-2a-using-the-node-repl)
  - [Phase 2B: Using Node to run JavaScript files](#phase-2b-using-node-to-run-javascript-files)
- [Phase 3: Running tests using Mocha](#phase-3-running-tests-using-mocha)
  - [Step One: Download problems & tests](#step-one-download-problems-tests)
  - [Step Two: Start working on an individual problem](#step-two-start-working-on-an-individual-problem)
  - [Step Three: Run tests to see if you have solved the problem successfully](#step-three-run-tests-to-see-if-you-have-solved-the-problem-successfully)
  - [A note about testing manually](#a-note-about-testing-manually)

<!-- /code_chunk_output -->
________________________________________________________________________________

Now it's time to become a leet Hacker and put your new found Terminal skills to
the test! In the past you have been writing JavaScript within the confines of
the App Academy Online platform but it's time to break free and start writing
code on your local computer.

In this project we'll be working VS Code to create new folders and files, Node
to run JavaScript, and `mocha` to help us run tests.

## Phase 1: Creating files and folders

We'll kick off this project by creating a folder for to contain the code you
write. This would be a good time to create a folder for your work here at App
Academy. Feel free to name the folder whatever you like - just make sure you
remember where you put it (the Desktop is the ideal place)! Once you've created
a folder for your work create a new folder within that folder. This folder will
be representative of some of the work you do for this project, so name it
`firstProject`.

The first thing you'll want to do with this `firstProject` folder is open it up
in VS Code. Once you've entered VS Code you can go to "File" then "New File" to
create a new file. Name this file `phaseOne.js`.

Now we'll teach you a fun trick - in the Sidebar of VS Code you should see the
folder named `firstProject` and if you click the arrow beside it you should see
the file named `phaseOne.js`. Let's create a second file in the `firstProject`
directory but this time we'll use a nifty VS code shortcut. If you click within
the `firstProject` folder and type `a` then a new file will be automatically
created and you will be able to quickly name this file. Here is a gif of us
doing the same thing:

![gif](images/file-name-gif.gif)

So you can use both the "New File" option or the above shortcut to create new
files. Additionally, you create subdirectories within a directory by typing
`Shift + a`. For now create new files and folders using whatever method is most
comfortable.

Name the second file you created above `phaseTwo.js` and let's go run some
JavaScript.

## Phase 2: Using Node to run JavaScript files

### Phase 2A: Using the Node REPL

The first way we'll run JavaScript today is by using the Node REPL. Open a
window of the Terminal application and type in the command:

```sh
~ $ node
>
```

You should see your icon change to look like this: `>`. Now do the following to
get comfortable with using the Node REPL:

1. Write a `console.log` statement that will print "Hello Node!"
2. Write four mathematical expressions:
   - each using one of the following symbols: `+`, `-`, `*` and `%`
3. Write a function named `addTwo` that will accept a number as an argument and
   then will `return` the number with `2` added to it. Next, invoke `addTwo`
   passing in a number as an argument.

The Node REPL is an interactive code environment which allows you to test how
JavaScript will react to simple expressions.  Learning to use a REPL to test
ideas and to ask your coding environment questions (as shown in the above
simple and quick problems) is a great way to teach yourself, and become more
self-sufficient as a programmer.

### Phase 2B: Using Node to run JavaScript files

In the `phaseOne.js` file we previously created write a simple `console.log`
statement that will print "Look at me go!" to the console. Next, open a window
of the Terminal application on your computer and navigate to the `firstProject`
directory. Once inside the directory run the code within the `phaseOne.js` file
by using the following command:

```sh
~ firstProject $ node phaseOne.js
```

You should see "Look at me go!" printed to the console.

Congratulations, you've just run JavaScript on your computer using both the Node
REPL and by running a `.js` file!

Celebrate your victory by writing a new function in the `phaseTwo.js` file.
Write a function named `helloNode` that when invoked will `return` the string
"Hello Node". Try invoking your function below where you defined it and use
`node` to run the file:

```sh
~ firstProject $ node phaseTwo.js
~ firstProject $
```

Notice how you don't see anything printed to the console! That is because we
`return`ed the value but didn't print it to the console. Now try wrapping your
function call for `helloNode` in a `console.log` statement. Then run the
`phaseTwo.js` file again using `node`. You should see "Hello Node" printed to
the console.

Nice! You've now written and run a function using a `.js` file. For the rest of
this course you will be utilizing VS Code and Node to write and run code.

## Phase 3: Running tests using Mocha

At work, you will often be writing tests for your own code to ensure it works.
Here at App Academy you will primarily be running tests we have written for you
to guide your development. Now that you know how to write and run code in this
environment let's practice using `mocha` to _test_ the output of functions.
We'll do a deep dive into testing practices soon - but for now know that
**testing** is how we can ensure that functions work the way we expect them to.
While you had previously used `console.log` to see if your functions gave the
expected output when given a certain input, Mocha automates this process for
you.

We will now go over an important testing workflow you'll be using a lot in the
future of this course. The workflow we are talking about breaks down into
several steps:

1. Download problems & tests
2. Start working on an individual problem
3. Run tests (also known as `specs`) to see if you have solved the problem
   successfully
4. Move onto to the next problem and repeat steps 2 & 3

We'll now walk through what each of these steps entails.

### Step One: Download problems & tests

- Click [here][skeleton] to download a `.zip` file containing the problems
  you'll be working on.
> *Note:* If you use Windows you might find it easier to use `curl` to download the zip file into your WSL. Here's how to do that:
> 1) right click on the link to the zip file and copy the link to your clipboard
> 2) In the Ubuntu Terminal type the following:
> `curl -o skeleton.zip ` and then paste in the link you copied and press Enter. This will download the zip file into your current directory. It should look something like this: `curl -o skeleton.zip https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/js-local/skeleton.zip`
> 3) Use `unzip` to unzip the file like this: `unzip skeleton.zip`
>
> You can use this method anytime you need to download zip files for your projects.

- Unzip/Uncompress the file somewhere you can access easily, like your `Desktop`
  folder. Unzipping the file will leave you with a folder named `skeleton`.
- Within the `skeleton` folder there will be folder named `problems`. You'll now
  be working on completing each of these problem in order.

### Step Two: Start working on an individual problem

- Open up the `problems` folder in VS Code, you'll see the problems are numbered
  in sequential order.

**Only write your code to the `.js` files in the `problems` folder. Do not move
or edit any of the files in the `test` folder. Also, do not change the names of
the files in the `problems` folder.** The reason for this is because the tests
are expecting to find the files in a certain place and with the names we
provided for each function. Moving or editing files could cause the tests to
break.

### Step Three: Run tests to see if you have solved the problem successfully

- In your Terminal, use the `cd` command to navigate into the `skeleton` folder.
  - _Note_: If you unzipped the `skeleton` onto your `Desktop`, you need to `cd`
    into your `Desktop` first, then `cd` into `skeleton`.
- From here you can now use the `mocha` command to run the problem set against
  the mocha test cases we provided:

```sh
~ skeleton $ mocha
```

- If you scroll up toward the top of the `mocha` output, you will see a quick
  breakdown of what specs were passed. You can test with `mocha` as many times
  as you want to!

Here is an example of setting up a problem set in the command line:

```sh
~ $ cd Desktop/
~ Desktop $ ls
 skeleton

~ Desktop $ cd skeleton/

~ skeleton $ ls
 problems test

~ skeleton $ mocha
  diffArrayLen()
    1) should return a boolean indicating the lengths of the arrays are the same

  avgValue()
    2) should return the average of an array of numbers

  ... etc.

  0 passing
  9 failing
```

If you have any trouble with this don't hesitate to ask a TA for help!

You can feel free at any point to move your `skeleton` folder into the
`firstProject` folder you created in the previous phase. Just make you you
navigate to it correctly!

### A note about testing manually

- If you'd like to test a problem manually (without Mocha), you can still do
  that. You can wrap function invocations in `console.log` statements below
  where each function is defined in the file.
  - Then you can `cd` into the `skeleton` folder and run the individual `.js`
    files using `node`. (for example: `node 01-diff-array-lens.js`)
- Before moving on from a problem, be sure to verify your function works as
  expected using `mocha`.

Now go forth and solve the problems you've been given! Once you've passed all
the tests give yourself a pat on the back for passing your first series of
specs. May you have many more passed specs in your future! 🙌

[skeleton]:
  https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/js-local/skeleton.zip
