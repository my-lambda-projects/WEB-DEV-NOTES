//The spawn() function executes a command in a new process. This function uses a Stream API, so its output of the command is made available via listeners.
//-->spawn() function to list all folders and files in our current directory. Let's create a new Node.js file, lsSpawn.js, and enter the following:



const {
  spawn
} = require( "child_process" );

const ls = spawn( "ls", [ "-la" ] );

ls.stdout.on( "data", data => {
  console.log( `stdout: ${data}` );
} );

ls.stderr.on( "data", data => {
  console.log( `stderr: ${data}` );
} );

ls.on( 'error', ( error ) => {
  console.log( `error: ${error.message}` );
} );

ls.on( "close", code => {
  console.log( `child process exited with code ${code}` );
} );
/*
bryan_dir: child - processes_exitstatus: 0 === =>

  node spawn - function.js
stdout: total 20
drwxrwxrwx 1 bryan bryan 4096 Jan 2 19: 16.
drwxrwxrwx 1 bryan bryan 4096 Jan 2 19: 01.. -
  rwxrwxrwx 1 bryan bryan 8673 Jan 2 19: 12 Executing Shell Commands with Node.js.md -
  rwxrwxrwx 1 bryan bryan 1119 Jan 2 19: 16 child - process - exec.js -
  rwxrwxrwx 1 bryan bryan 183 Jan 2 19: 12 child - process - notes.md -
  rwxrwxrwx 1 bryan bryan 738 Jan 2 19: 17 spawn - function.js

child process exited with code 0

\ ___________________________________________________
bryan_dir: child - processes_exitstatus: 0 === =>
*/


//We then set up our listeners. The stdout object of ls, fires a data event when the command writes to that stream. Similarly, the stderr also fires a data event when the command writes to that stream.


//--> You will only get an error if child_process fails to run the command.

//-->The close event occurs when the command has finished.
