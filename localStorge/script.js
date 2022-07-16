const form = document.querySelector("form");
const input = document.querySelector("[data-message-input]");
const lastMessageEl = document.querySelector("[data-last-message]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem ("msg",input.value);
  updateMessageFromLocal();
});

function updateMessageFromLocal() {
  let message = localStorage.getItem("msg");
  lastMessageEl.textContent = message;
}

updateMessageFromLocal();
