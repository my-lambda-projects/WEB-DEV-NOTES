const newCat = document.getElementById("new-pic");
const upvote = document.getElementById("upvote");
const downvote = document.getElementById("downvote");
const score = document.querySelector(".score");
const form = document.querySelector(".comment-form");
const errorDisplay = document.querySelector(".error");
const catImage = document.querySelector(".cat-pic");
const loadingDisplay = document.querySelector(".loader");
const commentsDisplay = document.querySelector(".comments");

const vote = async (path) => {
    //path is a url or location server is listening to
    const response = await fetch(path, {
        method: "PATCH",
    });
    const parsedResJson = await response.json();
    score.innerHTML = parsedResJson.score;
};
const comments = async (formInfo) => {
    const commentData = new FormData(formInfo);
    const comment = commentData.get("user-comment");
    const response = await fetch("/kitten/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comment,
        }),
    });
    const parsedResponseJson = await response.json();
    commentsDisplay.innerHTML = parsedResponseJson.comments;
};
const responseHandler = (response, json) => {
    if (!response.ok) {
        errorDisplay.innerHTML = json.message;
    } else {
        catImage.setAttribute("src", json.src);
        loadingDisplay.innerHTML = "";
    }
};
const fetchCat = async () => {
    loadingDisplay.innerHTML = "Loading...";
    const response = await fetch("/kitten/image");
    const parsedRes = await response.json();
    responseHandler(response, parsedRes);
};
document.addEventListener("DOMContentLoaded", () => {
    fetchCat();
});
newCat.addEventListener("click", () => {
    fetchCat();
});

upvote.addEventListener("click", () => {
    vote("/kitten/upvote");
});
downvote.addEventListener("click", () => {
    vote("/kitten/downvote");
});
form.addEventListener("submit", (event) => {
    event.preventDefault(); // so page does not refresh when we press submit
    comments(form);
});
