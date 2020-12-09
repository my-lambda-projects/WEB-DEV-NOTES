//console.log( "hello new world" ); //hello new world
/*
-boolean: primitive
-Null: boolean


! Literally everything that's not an object is a primitive
!----> functions are a type of objet
!-----> everything that's not primitive is an object/rerfrence type
*/

//! Objects
//const pojo = {
//"key1": "value1",
//"key2": "value2"
//}
////want to console.log(value1):
//let keyVariable = "key1";

//console.log( pojo[ keyVariable ] ); // value1
//- equiv to:
//console.log( pojo[ "key1" ] ); // value1
//console.log( pojo.key2 ); // value2 //*// Choose the dot property accessor when the property name is known ahead of time
// when to use dot notation:
// when to use bracket notation:

//# 4:

//function exists( obj, key ) {
//    //if ( ( obj[ key ] !== undefined ) === true ) {
//    //return "the key exists in the object"; // return true;
//    //}
//    //-------------------------------------------------------
//    return key in obj; //true

//}

//const pojo = {
//    "key1": "value1",
//    "key2": "value2"
//}
//console.log( exists( pojo, "key1" ) ); //the key exists in the object

//const pojo = {
//    "key1": "value1",
//    "key2": "value2"
//}

//function getKeys( obj ) { // desired output: ["key1", "key2"]
//    return Object.keys( obj );
//}
//console.log( getKeys( pojo ) ); //[ 'key1', 'key2' ]


//#6: Iterate through an object using a for in loop
//const pojo = {
//    "key1": "value1",
//    "key2": "value2"
//}
//for ( let key in pojo ) {
//    console.log( "these are key value pairs:", key, pojo[ key ] );
//    //these are key value pairs: key1 value1
//    //these are key value pairs: key2 value2
//}


// how we see the rest operator and what it does?:
//- passed in as a paramter (grabs the REST of the parameters and puts them into an array)


//function restSum( ...nums ) {
//    let sum = 0;
//    //console.log( nums );
//    nums.forEach( function ( num ) {
//        sum += num;
//    } )
//    return sum;
//}
////restSum( 1, 2, 3, 4, 5, 6 ); ////  [ 1, 2, 3, 4, 5, 6 ]
//console.log( restSum( 1, 2, 3, 4, 5, 6 ) ); //  21

//# 8
//let numArray = [ 1, 2, 3 ];
//let moreNums = [ ...numArray, 4, 5, 6 ];
//console.log( moreNums ); //[ 1, 2, 3, 4, 5, 6 ]


//let shoe = {
//    color: "red",
//    size: 10
//};
//let newShoe = {
//    ...shoe,
//    brand: "Nike",
//    size: 12
//};
////console.log( newShoe );
//newShoe.color = "black";
//console.log( newShoe );
//console.log( shoe );

//let me = {
//    name: "Ian",
//    instruments: [ 'bass', 'synth', 'guitar' ],
//    siblings: {
//        brothers: [ 'Alistair' ],
//        sisters: [ 'Meghan' ]
//    }
//}
//let {
//    siblings,
//    name
//} = me;

//let {
//    brothers
//} = siblings;
//console.log( brothers[ 0 ] ); //Alistair
//console.log( name ); //Ian


function foo( callback ) {
    console.log( 'grape' );
    callback();
}

function bar() {
    console.log( 'banana' );
}
const fruitBasket = function () {
    console.log( 'apple' );
    bar();
    foo( bar );
    foo( function () {
        console.log( 'orange' );
    } );
    console.log( 'pear' );
};
fruitBasket();
