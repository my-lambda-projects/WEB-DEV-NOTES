if ( !fetch ) {
  let fetch = require( './test/node-fetch' )( 1 );
}
if ( !document ) {
  const createDom = require( './test/node-dom' );
  let document = createDom( __filename );
}

/**
 * Do not change code above this line.
 *
 * INSTRUCTIONS:
 *
 * Implement a getSpaceStation method that performs the following:
 *
 * 1. Makes a GET call to fetch() for the URL
 *    'http://api.open-notify.org/iss-now.json'
 * 2. Uses the json() method on the response to get the data from the API
 *    call. The object returned from the json() call will be the following
 *    object.
 *
 *    {
 *      message: "success", 
 *      iss_position: {
 *        latitude: "33.0036",
 *        longitude: "72.2221"
 *      },
 *      timestamp: 1597291944
 *    }
 *
 * 3. Gets the element #space-station using the document object.
 * 4. Update the inner HTML of the space-station div to :
 *  'The ISS is currently over 33.0036 Lat. and 72.2221 Lon.'
 * Hints:
 *   * If you're using npm test and want to see what's happening with your DOM,
 *     use console.log(document.body.innerHTML) to see what's happening, if you
 *     need to.
 ******************************************************************************/

/**
 * VERSION 1 -- Uses async / await
 * 
 */

async function getSpaceStation() {
  const resp = await fetch( "http://api.open-notify.org/iss-now.json" )
  const data = await resp.json()
  const spaceDiv = document.getElementById( "space-station" )
  spaceDiv.innerHTML = `The ISS is currently over ${data.iss_position.latitude} Lat. and ${data.iss_position.longitude} Lon.`
}

/** 
 * VERSION 2 -- Uses .then
 */

function getSpaceStation() {
  fetch( "http://api.open-notify.org/iss-now.json" )
    .then( resp => resp.json() )
    .then( data => {
      const spaceDiv = document.getElementById( "space-station" )
      spaceDiv.innerHTML = `The ISS is currently over ${data.iss_position.latitude} Lat. and ${data.iss_position.longitude} Lon.`
    } )
}

/*******************************************************************************
 * Do not change code below this line.
 */
if ( !exports ) {
  let exports = {};
}
( function ( exports ) {
  try {
    exports.getSpaceStation = getSpaceStation;
  } catch ( e ) {
    exports.getElementById = () => {
      throw new Error( 'Cannot export getSpaceStation' )
    };
  }
} )( exports );
