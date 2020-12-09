# Intermediate JavaScript and the Command Line (Week 3) - Learning Objectives

## Assessment Structure
- 2 hours 19 minutes (very specific!)
- Mixture multiple choice (25-30), free response (4-6), coding in an online REPL (1-2), and coding problems completed in VSCode and uploaded (8-10).
  - Coding problems will have specs to run (`mocha`) and check your work against
- Standard assesment procedures
  - You will be in an individual breakout room
  - Use a single monitor and share your screen
  - Only have open those resources needed to complete the assessment:
    - Zoom
    - VSCode
    - Browser with AAO and Progress Tracker (to ask questions)
    - Approved Resources for this assessment:
      - Node.js Documentation: https://nodejs.org/en/docs/
      - Git Documentation: https://git-scm.com/docs
      - MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Asynchronous JavaScript (W3D1) - Learning Objectives

### Asynchronous JS
1. Identify JavaScript as a language that utilizes an event loop model
2. Identify JavaScript as a single threaded language
3. Describe the difference between asynchronous and synchronous code
4. Execute the asynchronous function setTimeout with a callback.
5. Given the function "function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }" and the function "function callback() { console.log("callback"); }", predict the output of "asyncy(callback);"
6. Use setInterval to have a function execute 10 times with a 1 second period. After the 10th cycle, clear the interval.
7. Write a program that accepts user input using Node’s readline module

## Node.js and Git (W3D2) - Learning Objectives

### Node.js 
1. Define NodeJS as distinct from browser based JavaScript runtimes.
2. Write a program that reads in a dictionary file using node's FS API and reads a line of text from the terminal input. The program should 'spell check' by putting asterisks around every word that is NOT found in the dictionary.

### Git
1. Use Git to initialize a repo
2. Explain the difference between Git and GitHub
3. Given 'adding to staging', 'committing', and 'pushing to remote', match attributes that apply to each.
4. Use Git to clone an existing repo from GitHub
5. Use Git to push a local commit to a remote branch
6. Use git to make a branch, push it to github, and make a pull request on GitHub to merge it to master
7. Given a git merge conflict, resolve it
8. Match the three types of git reset with appropriate descriptions of the operation.
9. Use Git reset to rollback local-only commits.
10. Identify what the git rebase command does
11. Use git diff to compare a local 'staging' branch and 'master' branch.
12. Use git checkout to check out a specific commit by commit id

## Command Line Interface (W3D3) - Learning Objectives

### Command Line Interface (CLI) Basics
1. Given a folder structure diagram, a list of `cd (path)` commands and target files, match the paths to the target files.
2. Create, rename, and move folders using unix command line tools.
3. Use `grep` and `|` to count matches of a pattern in a sample text file and save result to another file.
4. Find what `-c`, `-r`, and `-b` flags do in `grep` by reading the manual.
5. Identify the difference in two different files using `diff`.
6. Open and close nano with and without saving a file.
7. Use `curl` to download a file.
8. Read the variables of `$PATH`.
9. Explain the difference between `.bash_profile` and `.bashrc`.
10. Create a new alias by editing the `.bash_profile`.
11. Given a list of common scenarios, identify when it is appropriate and safe to use `sudo`, and when it is a dangerous mistake.
12. Write a shell script that greets a user by their `$USER` name using `echo`.
13. Use `chmod` to make a shell script executable.

## Recursion (W3D4) - Learning Objectives

### Recursion
1. Given a recursive function, identify what is the base case and the recursive case.
2. Explain when a recursive solution is appropriate to solving a problem over an iterative solution.
3. Write a recursive function that takes in a number, n, argument and calculates the n-th number of the Fibonacci sequence.
4. Write a function that calculates a factorial recursively.
5. Write a function that calculates an exponent (positive and negative) recursively.
6. Write a function that sums all elements of an array recursively.
7. Write a function that flattens an arbitrarily nested array into one dimension.
8. Given a buggy recursive function that causes a RangeError: Maximum call stack and examples of correct behavior, debug the function.

## JavaScript Trivia (W3D5) - Learning Objectives

### JavaScript Trivia, aka Important JavaScript Things Not in One Nice Category
1. Given a code snippet of an unassigned variable, predict its value.
2. Explain why functions are “First Class Objects” in JavaScript
3. Define what IIFEs are and explain their use case
4. (Whiteboarding) Implement a closure
5. Identify JavaScript’s falsey values
6. Interpolate a string using back-ticks
7. Identify that object keys are strings or symbols
8. A primitive type is data that is not an object and therefore cannot have methods(functions that belong to them).
9. Given a code snippet where variable and function hoisting occurs, identify the return value of a function.
