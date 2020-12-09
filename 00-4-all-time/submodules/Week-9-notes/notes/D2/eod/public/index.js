const handleClick = async () => {
  const res = await fetch(`/name`);
  const json = await res.json();

  if (!res.ok) {
    document.querySelector(`h5`).innerHTML = json.error;
  } else {
    document.querySelector(`h2`).innerHTML = json.name;
  }
}

document.querySelector(`button`).addEventListener(`click`, handleClick);