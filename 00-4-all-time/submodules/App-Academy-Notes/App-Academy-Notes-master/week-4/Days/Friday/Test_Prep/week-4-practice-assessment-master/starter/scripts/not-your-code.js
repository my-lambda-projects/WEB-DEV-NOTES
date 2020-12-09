/* DO NOT CHANGE THE JS IN THIS FILE OR YOU MAY FAIL */

let total = 1;

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("bubble-foe")
    .addEventListener("keydown", function (e) {
      if (e.target.id === "bubble-friend") {
        this.style.backgroundColor = "red";
      }
    });
});
