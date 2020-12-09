window.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector(".hello-there");
    setInterval(() => {
        if (isPink) {
            div.style.background = "blue";
        } else {
            div.style.background = "pink";
        }
        isPink = !isPink;
    }, 500);
});
