const handleClick = async () => {
  const res = await fetch(`/name`);
  // `localhost:5000/name` => request url
  const json = await res.json();
  // json = { ok: false/true }
  if (res.ok) {
    document.querySelector(`h2`).innerHTML = json.name;
  } else {
    document.querySelector(`h5`).innerHTML = json.error;
  }
}

document.querySelector(`button`).addEventListener(`click`, handleClick);

// Example POST method implementation:
async function postData() {
  const response = await fetch("www.someurl.com", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ someKey: data }) // body data type must match "Content-Type" header
  });
  const json = await response.json(); // parses JSON response into native JavaScript objects
  // return json or call a function to "do something" with data
}