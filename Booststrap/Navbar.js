const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.onclick = (e) => {
    clearActive();
    e.target.classList.add("active");
  };
});

function clearActive() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
}
