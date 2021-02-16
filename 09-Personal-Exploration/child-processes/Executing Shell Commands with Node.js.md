# Executing Shell Commands with Node.js

> Introduction
System administrators and developers frequently turn to automation to reduce
their workload and improve their processes. When working with servers, automated
tasks are frequently scripted with shell scripts. However, a developer might
prefer to use a more general higher-level language for complex tasks. Many
applications also need to interact with the file system and other OS-level
components, which is often more easily done with command line level utilities.

With Node.js, we can r

### Introduction

System administrators and developers frequently turn to automation to reduce their workload and improve their processes. When working with servers, automated tasks are frequently scripted with shell scripts. However, a developer might prefer to use a more general higher-level language for complex tasks. Many applications also need to interact with the file system and other OS-level components, which is often more easily done with command line level utilities.

With Node.js, we can run shell commands and process their inputs and outputs using JavaScript. Therefore, we can write most of these complex operations in JavaScript instead of the shell scripting language, potentially making the program easier to maintain.

In this article, we will learn the various ways to execute shell commands in Node.js using the `child_process` module.

### The child\_proccess Module

Node.js executes its main event loop in a single thread. However, that does not mean that all of its processing is done in that one thread. Asynchronous tasks in Node.js are executed in other internal threads. When they are complete, the code in the callback, or error, is returned to the main, single thread.

These various threads are run in the same Node.js process. However, it is sometimes desirable to create another process to execute code. When a new process is created, the Operating System determines which processor it uses and how to schedule its tasks.

The `child_process` module creates new child processes of our main Node.js process. We can execute shell commands with these child processes.

Using external processes can improve performance of your application if used correctly. For example, if a feature of a Node.js application is CPU intensive, as Node.js is single threaded it would block the other tasks from executing while it is running.

However, we can delegate that resource intensive code to a child process, let's say a very efficient C++ program. Our Node.js code will then execute that C++ program in a new process, not blocking its other activities, and when complete process its output.

Two functions that we will use to execute shell commands are `exec` and `spawn`.

### The exec Function

The `exec()` function creates a new shell and executes a given command. The output from the execution is buffered, which means kept in memory, and is available for use in a callback.

Let's use `exec()` function to list all folders and files in our current directory. In a new Node.js file called `lsExec.js`, write the following code:

    const { exec } = require("child_process");
    
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    

First, we require the `child_process` module in our program, specifically using the `exec()` function (via ES6 destructuring). Next, we call the `exec()` function with two parameters:

*   A string with the shell command we want executed.
*   A callback function with three parameters: `error`, `stdout`, `stderr`.

The shell command we are running is `ls -la`, which should list all the files and folders in our current directory line by line, including hidden files/folders. The callback function logs whether we got an `error` while trying to execute the command or output on the shell's `stdout` or `stderr` streams.

> Note: The `error` object is different from `stderr`. The `error` object is not null when the `child_process` module fails to execute a command. This could happen if you try to execute another Node.js script in `exec()` but the file could not be found, for example. On the other hand, if the command successfully runs and writes a message to the standard error stream, then the `stderr` object would not be null.

If you run that Node.js file, you should see output similar to:

    $ node lsExec.js
    stdout: total 0
    drwxr-xr-x@ 9 arpan arpan  0 Dec  7 00:14 .
    drwxr-xr-x@ 4 arpan arpan  0 Dec  7 22:09 ..
    -rw-r--r--@ 1 arpan arpan  0 Dec  7 15:10 lsExec.js
    
    child process exited with code 0
    

#### Learn the Git Essentials

![Git Essentials: Developer's Guide to Git](https://s3.stackabuse.com/media/ebooks/git-essentials/git-essentials-cover-transparent-cropped.png)

*   **Stop turning to Google** every time you need to commit some code - _actually understand_ what you're doing
*   We'll cover everything from the fundamentals of Git to some more advanced operations and best practices
*   Pre-order now and get a **20% discount**!

[Learn More](https://gum.co/git-essentials)

Now that we've understood how to run commands with `exec()`, let's learn another way to execute commands with `spawn()`.

### The spawn Function

The `spawn()` function executes a command in a _new process_. This function uses a [Stream API](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/introduction-to-node-js-streams), so its output of the command is made available via listeners.

Similar to before, we will use the `spawn()` function to list all folders and files in our current directory. Let's create a new Node.js file, `lsSpawn.js`, and enter the following:

    const { spawn } = require("child_process");
    
    const ls = spawn("ls", ["-la"]);
    
    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });
    
    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });
    
    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });
    
    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });
    

We begin by requiring the `spawn()` function from the `child_process` module. Then, we create a new process that executes the `ls` command, passing `-la` as an argument. Note how the arguments are held in an array and not included in the command string.

We then set up our listeners. The `stdout` object of `ls`, fires a `data` event when the command writes to that stream. Similarly, the `stderr` also fires a `data` event when the command writes to that stream.

Errors are caught by listening for them directly on the object that stores the reference for the command. You will only get an error if `child_process` fails to run the command.

The `close` event occurs when the command has finished.

If we run this Node.js file, we should get output like before with `exec()`:

    $ node lsSpawn.js
    stdout: total 0
    drwxr-xr-x@ 9 arpan arpan  0 Dec  7 00:14 .
    drwxr-xr-x@ 4 arpan arpan  0 Dec  7 22:09 ..
    -rw-r--r--@ 1 arpan arpan  0 Dec  7 15:10 lsExec.js
    -rw-r--r--@ 1 arpan arpan  0 Dec  7 15:40 lsSpawn.js
    
    child process exited with code 0
    

### When to use exec and spawn?

The key difference between `exec()` and `spawn()` is how they return the data. As `exec()` stores all the output in a buffer, it is more memory intensive than `spawn()`, which streams the output as it comes.

Generally, if you are not expecting large amounts of data to be returned, you can use `exec()` for simplicity. Good examples of use-cases are creating a folder or getting the status of a file. However, if you are expecting a large amount of output from your command, then you should use `spawn()`. A good example would be using command to manipulate binary data and then loading it in to your Node.js program.

### Conclusion

Node.js can run shell commands by using the standard `child_process` module. If we use the `exec()` function, our command will run and its output will be available to us in a callback. If we use the `spawn()` module, its output will be available via event listeners.

If our application expects a lot of output from our commands, we should prefer `spawn()` over `exec()`. If not, we might opt to use `exec()` for its simplicity.

Now that you can run tasks external to Node.js, what applications would you build?


[Source](https://stackabuse.com/executing-shell-commands-with-node-js/)