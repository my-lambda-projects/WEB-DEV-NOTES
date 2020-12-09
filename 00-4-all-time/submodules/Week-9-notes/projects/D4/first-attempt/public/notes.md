```js
//global variables:
const newCat = document.getElementById("new-pic");
const upvote = document.getElementById("upvote");
const downvote = document.getElementById("downvote");
const score = document.querySelector(".score");
const form = document.querySelector(".comment-form");
const errorDisplay = document.querySelector(".error");
const catImage = document.getElementById("cat-pic");
const loadingDisplay = document.querySelector(".loader");
const commentsDisplay = document.querySelector(".comments");

//fetchCat helper
const responseHandler = (response, json) => {
    //passing in fufilled response object and parsed json (kitten object)
    //so we can handle resolution or rejection
    if (!response.ok) {
        //res.status(503).send({ message: e.message});//server error... server not ready
        errorDisplay.innerHTML = json.message;
    } else {
        catImage.src = json.src;
    }
};
const fetchCat = async () => {
    /*
    
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});
*/
    const response = await fetch("/kitten/image");
    const parsedRes = await response.json();
    responseHandler(response, parsedRes);
};

document.addEventListener("DOMContentLoaded", () => {
    fetchCat();
});
```
