// DOM Elements
const form = document.querySelector("form");
const foxCheckbox = document.querySelector("#foxCheckbox");
const dogCheckbox = document.querySelector("#dogCheckbox");
const img = document.querySelector("img");
const FOX_API = "https://randomfox.ca/floof";
const DOG_API = "https://random.dog/woof.json";

async function handelSubmit(e) {
  e.preventDefault();
  if (!foxCheckbox.checked && !dogCheckbox.checked) return;
  const url = foxCheckbox.checked ? FOX_API : DOG_API;
  const key = foxCheckbox.checked ? "image" : "url";
  const data = await fetchAPI(url);
  img.hidden = false;
  img.src = data[key];
}

function validateCheckbox(e) {
  if (e.target.name === "fox") {
    dogCheckbox.checked = false;
  } else {
    foxCheckbox.checked = false;
  }
}

async function fetchAPI(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Events
form.onsubmit = handelSubmit;
foxCheckbox.onchange = validateCheckbox;
dogCheckbox.onchange = validateCheckbox;