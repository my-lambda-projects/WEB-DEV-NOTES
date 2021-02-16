// // open a new window
// const newWindow = window.open("https://www.google.com", "Google", "width=100, height=100")
// // resize the new window
// newWindow.resizeTo(500, 500);



// // context of func is object that contains that func
// // when script runs in browser, that obj is the window
// (function() {
// 	console.log(this);
// })();



// // the problem with script in header
// // script loads before rest of page is loaded
// // the body element doesnt exist yet
// console.log(document.getElementById('myId').id)
// // cannot read property id of null


// // SOLUTION #1
// // this runs after page is loaded (second)
// window.onload = () => {
// 	console.log('this script loads when all resources and the DOM are ready')
// 	console.log(document.getElementById('myId').id)
// }


// // SOLUTION #2
// // this runs after dom is loaded (first)
// window.addEventListener('DOMContentLoaded', () => {
// 	console.log(document.getElementById('body').id)
// 	console.log('this scrript loads when the DOM is ready ')
// })



