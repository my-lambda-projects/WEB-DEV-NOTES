const setCookie = (name, value) => {
  document.cookie = name + "=" + value;
};

//  get all the cookie pairs
const getCookies = () => {
  const allCookies = document.cookie;
  const cookiePairs = allCookies.split("; ");
  return cookiePairs;
};

// confirm a particular cookie exists
const getCookieValue = (name) => {
  const cookiePairs = getCookies();
  for (let i = 0; i < cookiePairs.length; i++) {
    const cookie = cookiePairs[i];
    let [key, value] = cookie.split("=");
    if (name === key) {
      return value;
    }
  }
  return null;
};

const deleteCookie = (name) => {
  if (getCookieValue(name)) {
    document.cookie = name + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  } else {
    console.log("cookie not found!");
  }
};

// BONUSES!
window.addEventListener("DOMContentLoaded", (event) => {
  // Bonus A
  // generate a random number
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  setCookie("random_number", getRandomInt(500));
  const randomNumberCookie = getCookieValue("random_number");

  // open a new window
  // const newWindow = window.open(
  //   "https://www.delish.com/cooking/g1956/best-cookies/",
  //   "Cookies Recipes",
  //   "width=100, height=100"
  // );

  // // set the width and height to the cookie value
  // newWindow.resizeTo(randomNumberCookie, randomNumberCookie);

  // Bonus B
  let cookieButton = document.getElementById("create-cookie");

  createBtnCookie = () => {
    let cookieNameInput = document.getElementById("cookie-name");
    let cookieValueInput = document.getElementById("cookie-value");
    let cookieName = cookieNameInput.value;
    let cookieValue = cookieValueInput.value;
    setCookie(cookieName, cookieValue);
    cookieNameInput.value = "";
    cookieValueInput.value = "";
    console.log(getCookies());
  };

  cookieButton.addEventListener("click", createBtnCookie);
});
