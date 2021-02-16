const handleClick = async () => {
  const res = await fetch(`/name`);
  // localhost:3000/name
  const json = await res.json();
  debugger
  if (!res.ok) {
    document.querySelector(`h5`).innerHTML = json.error;
  } else {
    document.querySelector(`h2`).innerHTML = json.name;
  }
}

document.querySelector(`button`).addEventListener(`click`, handleClick);