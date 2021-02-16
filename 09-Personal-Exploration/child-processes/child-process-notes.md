>The exec() function creates a new shell and executes a given command. The output from the execution is buffered, which means kept in memory, and is available for use in a callback.



//-->The key difference between exec() and spawn() is how they return the data. As exec() stores all the output in a buffer, it is more memory intensive than spawn(), which streams the output as it comes.
