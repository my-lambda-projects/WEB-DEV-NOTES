const {
  exec
} = require( "child_process" ); //require the child_process module in our program, specifically using the exec() function


//! Exec func (2 parameters): 
//-->A string with the shell command we want executed.
//-->A callback function with three parameters: error, stdout, stderr.
exec( "ls -la", ( error, stdout, stderr ) => { //ls -la: list all the files and folders in our current directory line by line
  if ( error ) {
    console.log( `error: ${error.message}` );
    return;
  }
  if ( stderr ) {
    console.log( `stderr: ${stderr}` );
    return;
  }
  console.log( `stdout: ${stdout}` );
} );
/*
node child - process.js
stdout: total 16
drwxrwxrwx 1 bryan bryan 4096 Jan 2 19: 12.
drwxrwxrwx 1 bryan bryan 4096 Jan 2 19: 01.. -
  rwxrwxrwx 1 bryan bryan 8673 Jan 2 19: 12 Executing Shell Commands with Node.js.md -
  rwxrwxrwx 1 bryan bryan 183 Jan 2 19: 12 child - process - notes.md -
  rwxrwxrwx 1 bryan bryan 637 Jan 2 19: 14 child - process.js


\ ___________________________________________________
bryan_dir: child - processes_exitstatus: 0 === =>


*/
