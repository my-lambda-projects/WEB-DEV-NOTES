const handleResponse = async ( res ) => {//! Helper function
	stopLoader();
	clearError();
	if ( !res.ok ) {
		throw res;
	}
	const data = await res.json()
	return data
};
const fetchImage = async () => {
	startLoader();
	try {
		const res = await fetch( 'http://localhost:3000/kitten/image' )
		const data = await handleResponse( res )
		document.querySelector( '.cat-pic' ).src = data.src;
		document.querySelector( '.score' ).innerHTML = data.score;
		document.querySelector( '.comments' ).innerHTML = '';
	} catch ( e ) {
		handleError( e )
	};
};
const startLoader = () => {
	document.querySelector( '.loader' ).innerHTML = 'Loading...';
};
const stopLoader = () => {
	document.querySelector( '.loader' ).innerHTML = '';
};
const handleError = async ( error ) => {
	const errJSON = await error.json()
	if ( errJSON ) {
		document.querySelector( '.error' ).innerHTML = `Error occured: ${errJSON.message}`;
	} else {
		console.error( error );
		alert( 'Something went wrong. Please try again!' );
	}
};
const clearError = () => {
	document.querySelector( '.error' ).innerHTML = '';
};
const vote = async ( e ) => {
	try {
		const res = await fetch( `http://localhost:3000/kitten/${e.target.id}`, {
			method: 'PATCH'
		} );
		//debugger;
		const data = await handleResponse( res )
		const {
			score
		} = data;
		document.querySelector( '.score' ).innerHTML = score;
	} catch ( e ) {
		handleError( e )
	}
}
const receiveComments = ( data ) => {//this function deals with DOM...
	const comments = document.querySelector( '.comments' );
	comments.innerHTML = '';
	data.comments.forEach( ( comment, i ) => {
		const newCommentContainer = document.createElement( 'div' );
		newCommentContainer.className = 'comment-container';
		const newComment = document.createElement( 'p' );
		newComment.appendChild( document.createTextNode( comment ) );
		const deleteButton = document.createElement( 'button' );
		deleteButton.appendChild( document.createTextNode( 'Delete' ) );
		deleteButton.className = 'delete-button';
		deleteButton.setAttribute( 'id', i );
		newCommentContainer.appendChild( newComment );
		newCommentContainer.appendChild( deleteButton );
		comments.appendChild( newCommentContainer );
	} );
};
const commentForm = document.querySelector( '.comment-form' );
const submitComment = async ( event ) => {
	event.preventDefault();
	const formData = new FormData( commentForm );
	const comment = formData.get( 'user-comment' );
	try {
		const res = await fetch( 'http://localhost:3000/kitten/comments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( {comment} )// body comes in json 
		} );
		const data = await handleResponse( res )
		commentForm.reset();
		receiveComments( data );
	} catch ( e ) {
		handleError( e )
	}
}
const deleteComment = async ( event ) => {
	if ( event.target.tagName != 'BUTTON' ) return;
	try {
		const res = await fetch( `kitten/comments/${event.target.id}`, {
			method: 'DELETE'
		} )
		const data = await handleResponse( res )
		receiveComments( data )
	} catch ( e ) {
		handleError( e )
	}
}
window.addEventListener( 'DOMContentLoaded', fetchImage );
document.querySelector( '#new-pic' ).addEventListener( 'click', fetchImage );
document.querySelector( '#upvote' ).addEventListener( 'click', vote );
document.querySelector( '#downvote' ).addEventListener( 'click', vote );
commentForm.addEventListener( 'submit', submitComment );
document.querySelector( '.comments' ).addEventListener( 'click', deleteComment );
