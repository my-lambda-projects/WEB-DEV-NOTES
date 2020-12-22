 /* 
 !`Promise` : a commitment that sometime in the future, 
        *your code will get a value from some operation
 ---->( like reading a file or getting JSON from a Website ) 
        *or your code will get an error from that operation
 ------>( like the file doesn 't exist or the Web site is down).
 ^----------------------------------------------------------------------------------------------------------------------
 #Promises exist in three states:
 
 -1.  `Pending` : Promise object has not resolved.
 *Once it does;
 ! the state of the Promise object may transition
 ! to either the (fulfilled) or (rejected) state
 
 -2. `Fulfilled` : Whatever operation the Promise represented succeeded and your success handler will get called.
 *After fulfillment, the Promise:
 !must not transition to any other state
 !must have a value, which must not change
 
 -3.Rejected`: Whatever operation the Promise represented failed and your error handler will get called.
 *When it is _rejected_:
 !must not transition to any other state
 !must have a reason, which must not change
 
 #Promise objects use the following methods to go through these stages. 
  -`then`( successHandler, errorHandler ) //!   `Success Handler` : function that has one parameter, the value that a fulfilled promise has.
  -`catch`( errorHandler ) //!                  `Error Handler` **: function that has one parameter, the reason that the _promise_ failed.
  */


 // We define our promises
 function promise1( message, delay ) {
     return new Promise( ( resolve, reject ) => {
         setTimeout( () => {
             resolve( message );
         }, delay * 1000 );
     } );
 }

 function promise2( message, delay ) {
     return new Promise( ( resolve, reject ) => {
         setTimeout( () => {
             resolve( message.toUpperCase() + "!" );
         }, delay * 1000 );
     } );
 }

 function promise3( message, delay ) {
     return new Promise( ( resolve, reject ) => {
         setTimeout( () => {
             resolve( message + "?" );
         }, delay * 1000 );
     } );
 }

 function promise4( message, delay ) {
     return new Promise( ( resolve, reject ) => {
         setTimeout( () => {
             resolve( message.toLowerCase() + "..." );
         }, delay * 1000 );
     } );
 }
 // We use a .catch method to catch errors
 function wrapper() {
     promise1( "hello", 1 )
         .then( ( res1 ) => {
             console.log( res1 );
             return promise2( "hi", 2 );
         } )
         .then( ( res2 ) => {
             console.log( res2 );
             return promise3( "hey", 3 );
         } )
         .then( ( res3 ) => {
             console.log( res3 );
             return promise4( "what's up", 1 );
         } )
         .then( ( res4 ) => {
             console.log( res4 );
         } )
         .catch( ( err ) => {
             console.error( "Error encountered:", err );
         } );
 }
 wrapper();



 // const fs = require( 'fs' );

 // const manifest = './manifest.text';

 // function readFilePromise( path, encoding ) {
 //     const contents = fs.readFileSync( path, encoding );
 //     //console.log( contents );
 //     //const fileList = contents.split( "\n" );
 //     //console.log( "Reading", fileList.length, "files" ); //Reading 64 files
 //     //return contents;
 //     // return fileList;
 // };


 // //readFilePromise( manifest, 'utf8' );


 // // #Handling Success with Then:
 // readFilePromise( manifest, "utf8" ).then( ( contents ) => {
 //     let fileList = contents.split( "\n" );
 //     console.log( fileList );
 // } )


 // /*
 // //-----------------------------------------------------------------------------------------------------------------------------------------------
 // !  Each promise has a then() method that handles what will happen when the Promise comes out of the ** pending ** state. 
 // ---->  Each then, returns another Promise that transitions out of it 's pending state when the **then** .....that created it ....completes.
 // -------->  You can pass a second argument into the then method as the ** error handler ** ;
 // *              ( essentially saying, if this then does not resolve, then this error handler will do something. )
 // //----------------------------------------------------------------------------------------------------------------------------------------------------
 //*/
 // // readFilePromise( "manifest.txt" )
 // //     .then( ( manifest ) => manifest.split( "\n" ) )
 // //     .then( ( fileList ) => fileList.length )
 // //     .then( ( numberOfFiles ) => {
 // //         console.log( "Reading", numberOfFiles, "files" );

 // //         ( reason ) => {
 // //             console.err( "Badness happened", reason );
 // //         }
 // //     } );
 // /*
 // ! You can also use a **catch ** error handler at the end of your then chain to catch any error that may happen along the way.
 //*/
 // // readFilePromise( "manifest.txt" )
 // //     .then( ( manifest ) => manifest.split( "\n" ) )
 // //     .then( ( fileList ) => fileList.length )
 // //     .then( ( numberOfFiles ) => console.log( "Reading", numberOfFiles, "files" ) )
 // //     .catch( ( reason ) => console.err( "Badness happened", reason ) );
