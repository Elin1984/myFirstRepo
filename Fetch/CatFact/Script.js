const btn = document.querySelector("[data-button]");
const catFactEl = document.querySelector("[data-cat-fact]");

const handleBtnClick = () => {
  const url = "https://catfact.ninja/fact";
  fetch(url)
    .then((res) => res.json())
    .then((data) => (catFactEl.innerHTML = data.fact))
    .catch((err) => console.log(err));
};

const handleBtnClickAsync = async () => {
  try {
    const url = "https://catfact.ninja/fact";
    const res = await fetch(url);
    const data = await res.json();
    catFactEl.innerHTML = data.fact;
  } catch (err) {
    console.log(err);
  }
};

btn.onclick = handleBtnClickAsync;